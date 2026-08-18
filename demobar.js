/* Lived Experience prototype — the reviewer bar's one piece of behavior.
   Paired with demobar.css. Optional: without this file the bar still renders
   and still sticks; only the skip link's landing offset falls back to the
   static default in demobar.css ("the companion rule").

   WHAT IT DOES: keeps --demobar-h equal to the bar's rendered height, so that
   #main's scroll-margin-top matches the pinned bar exactly. The height is not
   knowable in CSS: it changes with viewport width, with language (six of them,
   which wrap the two rows differently), and after load, when notes.js injects
   its toggle into the tools row. One ResizeObserver answers all three at once,
   including a language switch mid-session. */
(function () {
  'use strict';

  var bar = document.querySelector('.concept-banner');
  if (!bar || !('ResizeObserver' in window)) return;

  new ResizeObserver(function () {
    document.documentElement.style.setProperty('--demobar-h', bar.offsetHeight + 'px');
  }).observe(bar);
})();
