/* Runs inside an opaque-origin sandbox. Student code cannot access the course page. */
(function () {
  'use strict';
  function report(type, message) {
    parent.postMessage({ hydra: true, type: type, message: message }, '*');
  }
  window.addEventListener('error', function (event) { report('error', event.message); });
  window.addEventListener('unhandledrejection', function (event) {
    report('error', String(event.reason));
  });
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/hydra-synth@1.4.0/dist/hydra-synth.js';
  script.onerror = function () { report('error', 'Hydra could not load. Check your connection and try Run again.'); };
  script.onload = function () {
    try {
      new window.Hydra({ canvas: document.querySelector('canvas'), width: 960,
        height: 540, detectAudio: false, enableStreamCapture: false });
      window.addEventListener('message', function (event) {
        if (event.source !== parent || !event.data || event.data.type !== 'run' ||
            typeof event.data.code !== 'string') return;
        try {
          // Global eval preserves standard Hydra syntax, including time and buffers.
          (0, eval)(event.data.code);
          report('playing', 'Running.');
        } catch (error) { report('error', error.message); }
      });
      report('ready');
    } catch (error) { report('error', 'Cannot start Hydra: ' + error.message); }
  };
  document.head.appendChild(script);
})();
