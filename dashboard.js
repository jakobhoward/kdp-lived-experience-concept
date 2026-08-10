/* Lived Experience prototype — the one interaction on author-dashboard.html.

   The two access-tier toggles. Everything else on the dashboard is inert on purpose
   (the queue's Answer / Publish / Decline are drawn controls under a banner that says
   so); the toggles are real because the page's whole argument is that the author can
   switch a tier off, and a demo of a choice should let the reviewer make it. Nothing
   persists and nothing is sent anywhere — flipping a switch changes this page and
   only this page.

   The same three rules ask.js follows, for the same reasons:

   - IT NEVER MAKES A STRING. The two state words live in the .dash-strings block,
     already translated, and this file copies textContent out of them. On top of that,
     flipping a switch RE-KEYS the visible state word — it rewrites the span's
     data-i18n attribute to point at the right key ("On" / dash.stateOff) — so when
     i18n.js re-walks the document on a language change, a tier a reviewer switched
     off STAYS off in the new language instead of being clobbered back to the
     markup's default. No langchange listener needed; the attribute is the state.
   - CONTROLS THAT NEED JS SHIP [hidden]. The switches are revealed here. With
     scripting off the tier rows degrade to exactly the static label — state — body
     rows author.html shows, with no dead control drawn.
   - ES5, no build step, IIFE — this has to run from a file:// link. */

(function () {
  'use strict';

  function label(which) {
    var el = document.querySelector('.dash-strings [data-dash-label="' + which + '"]');
    return el ? el.textContent : '';
  }

  /* The key the state word should carry in each state. "On" reuses the store side's
     author.access.tier1State (the word is "On" for both tiers there too); "Off" is
     the dashboard's own key. Kept in one place so the re-keying above cannot drift
     from the .dash-strings block, which uses the same two keys. */
  var STATE_KEY = { on: 'author.access.tier1State', off: 'dash.stateOff' };

  function set(sw, on) {
    sw.setAttribute('aria-checked', on ? 'true' : 'false');
    var state = document.getElementById(sw.getAttribute('data-dash-tier') + '-state');
    if (!state) return;
    state.setAttribute('data-i18n', on ? STATE_KEY.on : STATE_KEY.off);
    state.textContent = label(on ? 'on' : 'off');
    /* .off is amazon.css's non-colour-reliant off treatment: the word changes, the
       weight changes, and the colour is redundant on top of both. */
    state.className = on ? 'state' : 'state off';
  }

  function start() {
    var switches = document.querySelectorAll('[data-dash-tier]');
    for (var i = 0; i < switches.length; i++) {
      (function (sw) {
        sw.hidden = false;
        sw.addEventListener('click', function () {
          set(sw, sw.getAttribute('aria-checked') !== 'true');
        });
      })(switches[i]);
    }
  }

  /* After i18n.js in document order, so the labels being copied are already in the
     reader's language. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
