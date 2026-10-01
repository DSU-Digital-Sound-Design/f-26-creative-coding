(function () {
  'use strict';
  var entries = [];
  function stop(entry, message) {
    clearTimeout(entry.timer);
    if (entry.frame) entry.frame.remove();
    entry.frame = null;
    entry.ready = false;
    entry.preview.hidden = true;
    entry.wrapper.classList.remove('is-playing');
    entry.status.textContent = message || 'Stopped. Your code is still here.';
  }
  function run(entry) {
    entries.forEach(function (other) { if (other !== entry && other.frame) stop(other); });
    if (entry.ready) {
      entry.frame.contentWindow.postMessage({ type: 'run', code: entry.editor.value }, '*');
      return;
    }
    if (entry.frame) return;
    entry.status.textContent = 'Loading Hydra…';
    entry.preview.hidden = false;
    var frame = document.createElement('iframe');
    frame.title = 'Hydra visual preview';
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.src = entry.wrapper.dataset.runner;
    entry.frame = frame;
    entry.preview.appendChild(frame);
    entry.timer = setTimeout(function () {
      stop(entry, 'Hydra did not respond. Try Run again or open your code in Hydra.');
    }, 20000);
  }
  window.addEventListener('message', function (event) {
    var entry = entries.find(function (item) { return item.frame && event.source === item.frame.contentWindow; });
    if (!entry || !event.data || event.data.hydra !== true) return;
    var data = event.data;
    if (data.type === 'ready') {
      clearTimeout(entry.timer);
      entry.ready = true;
      run(entry);
    } else if (data.type === 'playing') {
      entry.wrapper.classList.add('is-playing');
      entry.status.textContent = 'Running.';
    } else if (data.type === 'error') {
      stop(entry, String(data.message || 'Sketch failed. Edit the code and try Run again.'));
    }
  });
  document.querySelectorAll('.hydra-repl').forEach(function (wrapper) {
    var load = wrapper.querySelector('.hydra-repl__load');
    load.hidden = false;
    wrapper.querySelector('.hydra-repl__fallback').textContent =
      'Click Load editor, then Run to try this sketch here.';
    load.addEventListener('click', function () {
      var editor = document.createElement('textarea');
      editor.className = 'hydra-repl__editor';
      editor.setAttribute('aria-label', (wrapper.querySelector('.hydra-repl__label') || {}).textContent || 'Hydra code');
      editor.spellcheck = false;
      editor.autocapitalize = 'off';
      editor.value = wrapper.dataset.code;
      editor.rows = Math.max(6, editor.value.split('\n').length + 1);
      var preview = document.createElement('div');
      preview.className = 'hydra-repl__preview';
      preview.hidden = true;
      var status = document.createElement('p');
      status.className = 'hydra-repl__status';
      status.setAttribute('role', 'status');
      status.textContent = 'Ready. Edit the code, then press Run.';
      var entry = { wrapper: wrapper, editor: editor, preview: preview, status: status };
      entries.push(entry);
      var bar = document.createElement('div');
      bar.className = 'hydra-repl__controls';
      [['run', function () { run(entry); }], ['stop', function () { stop(entry); }],
        ['reset', function () { stop(entry, 'Starter restored.'); editor.value = wrapper.dataset.code; updateLink(); }]
      ].forEach(function (action) {
        var button = document.createElement('button');
        button.type = 'button';
        button.textContent = action[0];
        button.addEventListener('click', action[1]);
        bar.appendChild(button);
      });
      var link = document.createElement('a');
      link.textContent = 'open in Hydra ↗';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      function updateLink() {
        link.href = 'https://hydra.ojack.xyz/?code=' + encodeURIComponent(btoa(encodeURIComponent(editor.value)));
      }
      updateLink();
      editor.addEventListener('input', updateLink);
      editor.addEventListener('keydown', function (event) {
        if (!(event.ctrlKey || event.metaKey)) return;
        if (event.key === 'Enter') { event.preventDefault(); run(entry); }
        if (event.key === '.') { event.preventDefault(); stop(entry); }
      });
      bar.appendChild(link);
      var hint = document.createElement('p');
      hint.className = 'hydra-repl__hint';
      hint.textContent = 'Ctrl/Cmd+Enter to run · Ctrl/Cmd+. to stop. Save your code before leaving this page.';
      wrapper.querySelector('.hydra-repl__static').remove();
      wrapper.querySelector('.hydra-repl__fallback').remove();
      load.remove();
      wrapper.append(editor, bar, hint, preview, status);
      editor.focus();
    }, { once: true });
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) entries.forEach(function (entry) { if (entry.frame) stop(entry); });
  });
  window.addEventListener('pagehide', function () { entries.forEach(function (entry) { stop(entry); }); });
})();
