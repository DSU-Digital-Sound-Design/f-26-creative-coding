/* Turns the `strudel` shortcode's static code blocks into live Strudel
   editors, one at a time and only when asked.

   A week page carries six or more patterns. Booting a REPL for each on page
   load means six CodeMirror instances and six audio graphs before the reader
   has pressed anything, so each block starts as a <pre> and upgrades itself
   on click.

   Two things about <strudel-editor> that are worth knowing before editing
   this file, because neither is in its README:

   1. It does NOT render into itself. Its connectedCallback creates a div and
      inserts it as its own *next sibling*, then mounts CodeMirror there. The
      element stays empty forever. Style the sibling, not the element.
   2. connectedCallback reads the `code` attribute synchronously, so the
      attribute has to be set BEFORE the element is put in the document.
      Appending first and setting code after gets you an empty editor.

   It also ships no visible transport, only ctrl+enter / ctrl+. — so we add a
   play/stop pair driving the StrudelMirror instance on `.editor`.

   House rule, enforced here: activating or playing an etude stops every other
   one on the page. Two patterns at different tempos over each other is not a
   useful sound in a classroom. */

(function () {
  'use strict';

  var ELEMENT = 'strudel-editor';
  var live = []; // { wrapper, element } for each upgraded block

  function stop(entry) {
    var mirror = entry.element && entry.element.editor;
    if (!mirror || typeof mirror.stop !== 'function') return;
    try {
      mirror.stop();
    } catch (e) {
      /* stopping one that never started throws; nothing to do about it */
    }
    entry.wrapper.classList.remove('is-playing');
  }

  function stopOthers(keep) {
    live.forEach(function (entry) {
      if (entry.wrapper !== keep) stop(entry);
    });
  }

  function controls(wrapper, element) {
    var bar = document.createElement('div');
    bar.className = 'etude-repl__controls';

    var play = document.createElement('button');
    play.type = 'button';
    play.className = 'etude-repl__btn';
    play.textContent = 'play';

    var halt = document.createElement('button');
    halt.type = 'button';
    halt.className = 'etude-repl__btn';
    halt.textContent = 'stop';

    play.addEventListener('click', function () {
      stopOthers(wrapper);
      try {
        // evaluate() is what ctrl+enter does: compile the current text, then
        // play it. start() would replay the last evaluation and miss edits.
        element.editor.evaluate();
        wrapper.classList.add('is-playing');
      } catch (e) {
        wrapper.classList.remove('is-playing');
      }
    });

    halt.addEventListener('click', function () {
      stop({ wrapper: wrapper, element: element });
    });

    bar.appendChild(play);
    bar.appendChild(halt);

    var hint = document.createElement('span');
    hint.className = 'etude-repl__hint';
    hint.textContent = 'or ctrl+enter to play, ctrl+. to stop';
    bar.appendChild(hint);

    return bar;
  }

  function activate(wrapper, button) {
    var code = wrapper.dataset.etudeCode;
    if (!code) return;

    button.disabled = true;
    button.textContent = 'loading…';

    customElements.whenDefined(ELEMENT).then(
      function () {
        stopOthers(wrapper);

        var element = document.createElement(ELEMENT);
        element.setAttribute('code', code); // must precede insertion

        wrapper
          .querySelectorAll('.etude-repl__static, .etude-repl__go, .etude-repl__fallback')
          .forEach(function (n) {
            n.remove();
          });

        wrapper.classList.add('is-live');
        wrapper.appendChild(element);

        // The mount div is created synchronously during appendChild above.
        var mount = element.nextElementSibling;
        if (mount) mount.classList.add('etude-repl__mount');

        wrapper.appendChild(controls(wrapper, element));
        live.push({ wrapper: wrapper, element: element });
      },
      function () {
        button.disabled = false;
        button.textContent = 'editor failed to load';
      }
    );
  }

  function init() {
    document.querySelectorAll('.etude-repl').forEach(function (wrapper) {
      var button = wrapper.querySelector('.etude-repl__go');
      if (!button) return;
      // The fallback line only matters without JS, which we plainly have.
      var fallback = wrapper.querySelector('.etude-repl__fallback');
      if (fallback) fallback.remove();
      button.addEventListener('click', function () {
        activate(wrapper, button);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
