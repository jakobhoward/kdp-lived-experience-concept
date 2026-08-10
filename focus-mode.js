/* focus-mode.js — reads ?focus= and sets the attribute focus-mode.css keys off.

   Twelve lines on purpose. The whole treatment lives in CSS; this only decides
   whether it is on, so that turning it off is deleting a query string rather than
   editing a stylesheet before every screenshot.

   ?focus=shelf   — collection page: first row sharp, the rest defocused
   ?focus=book    — book page: attestation sharp, store furniture defocused
   ?focus=author  — author page: the answered questions sharp
   ?focus=ask     — book page: the ask panel alone, everything else defocused
   ?focus=queue   — author dashboard: the question queue sharp, tiers defocused
   ?focus=tiers   — author dashboard: the access tiers sharp, queue defocused
   (no parameter)  — nothing happens, which is the default everywhere

   Deliberately not persisted to localStorage. A capture mode that survives a reload
   is a capture mode someone forgets is on, and the live URL Amazon may click is the
   one on the closing slide. */
(function () {
  var ALLOWED = { shelf: 1, book: 1, author: 1, ask: 1, queue: 1, tiers: 1 };
  var m = /[?&]focus=([a-z]+)/.exec(window.location.search);
  if (m && ALLOWED[m[1]]) {
    document.documentElement.setAttribute('data-focus', m[1]);
  }
})();
