/* Lived Experience prototype — the two interactions on book.html.

   1. The question flow: idle → compose → sent → waiting, plus the states a reader can
      land in without doing anything (not a reader of this book yet, author has questions
      switched off, switched off after asking, send failed).
   2. The disclosures: "What happens if an attestation is false", and (since 8/17)
      the advance-reader "How advance readers work" panel.

   Nothing is sent anywhere. This is a coursework mockup; the flow exists so the states
   can be *read* — above all the waiting state, where the honest answer is that nothing
   may ever happen. A demo that only shows the happy path would be arguing for a product
   nobody has to staff.

   Three rules this file follows, and each one cost something to decide:

   - IT NEVER MAKES A STRING. Every state lives in book.html's markup with a data-i18n
     key and ships [hidden]; this file only toggles [hidden] and moves focus. i18n.js
     exposes just window.LEi18n (set/get/locales/reset) — no t() — so a sentence built
     here could never be translated, and would be English in all six languages forever.
     The announcements are the same trick: the sentences sit in the .ask-strings block,
     already translated, and this file copies textContent into the live region.
   - CONTROLS THAT NEED JS SHIP [hidden]. With scripting off, book.html degrades to the
     panel it was before — a description of the mechanism, which is the meaningful idle
     state — with no button that does nothing. The one inversion is the attestation
     panel: it is expanded in the markup and this file collapses it, so the answer is
     always reachable and only the *collapsing* depends on JS.
   - ES5, no build step, IIFE — matching i18n/i18n.js. This has to run from a file://
     link somebody opens off Canvas.

   Rejected alternatives worth recording:
   - A modal dialog for the composer. It is the pattern Amazon actually uses for "Write a
     review", but a modal needs a focus trap, an inert background and an Escape contract,
     all hand-rolled, and the panel it would cover is the panel explaining the rules the
     composer is agreeing to. In-place beats correct-but-fragile here.
   - A fake timer that "delivers" an answer after a few seconds. It would demo well and
     it would be a lie: the whole point of the waiting state is that Amazon does not know
     when, or whether, a human replies. The answered state is reachable, but only by
     asking for it (?ask=answered) — never on a clock.
*/

(function () {
  'use strict';

  var root = document.getElementById('ask');

  /* ---------- interaction 2: the disclosures ----------
     Two of them now: the attestation footnote and, since 8/17, the advance-reader
     "how it works" panel. Independent of the question flow; kept in this file because
     they are pieces of the same argument (the gate, the hook, the trust signal) and a
     second <script> tag on a page opened over file:// is one more thing to go wrong. */
  function startDisclosure(toggleId, panelId, open) {
    var toggle = document.getElementById(toggleId);
    var panel = document.getElementById(panelId);
    if (!toggle || !panel) return;

    function set(on) {
      panel.hidden = !on;
      toggle.setAttribute('aria-expanded', on ? 'true' : 'false');
    }

    /* Collapsed on arrival, because the detail page's job is the book, and this is the
       footnote a reader goes looking for. Reveal the control first, so it is never
       possible to hide the panel without also showing the way back to it. */
    toggle.hidden = false;
    set(!!open);

    toggle.addEventListener('click', function () {
      set(panel.hidden);
      /* Focus stays on the toggle: it is a disclosure, not a navigation. The panel is
         the next thing in the reading order and aria-expanded has already said so. */
    });
  }

  /* ---------- interaction 1: the question flow ---------- */
  function startAsk() {
    if (!root) return;

    var states = root.querySelectorAll('[data-ask-state]');
    var live = document.getElementById('ask-live');
    var text = document.getElementById('ask-text');
    var err = document.getElementById('ask-err');
    var start = document.getElementById('ask-start');
    var yourqWrap = document.getElementById('ask-yourq-wrap');
    var yourq = document.getElementById('ask-yourq');
    var ansqWrap = document.getElementById('ask-ansq-wrap');
    var ansq = document.getElementById('ask-ansq');
    var mocknote = document.getElementById('ask-mocknote');

    /* The draft lives here and nowhere else. Not localStorage: a question this page
       promises is nobody's business but the author's should not outlive the tab, and a
       prototype that quietly persisted a stranger's words on a shared demo laptop would
       be making exactly the mistake the copy warns about. */
    var draft = '';
    var atLimit = false;

    function announce(id) {
      var src = document.getElementById(id);
      if (!live || !src) return;
      /* Cleared first so the same sentence twice in a row is still announced twice —
         some screen readers ignore an unchanged live region. */
      live.textContent = '';
      live.textContent = src.textContent;
    }

    function show(name) {
      var target = null;
      for (var i = 0; i < states.length; i++) {
        var on = states[i].getAttribute('data-ask-state') === name;
        states[i].hidden = !on;
        if (on) target = states[i];
      }
      if (!target) return null;
      /* Focus moves into the state that replaced the one the reader was acting in,
         otherwise focus is left on a button that is now display:none and the next Tab
         starts from the top of the document. Headings carry tabindex="-1" so they can
         receive it; the CSS suppresses the ring, since nobody clicked them. */
      var focusTarget = target.querySelector('[data-ask-focus]');
      if (focusTarget) focusTarget.focus();
      return target;
    }

    function toIdle() {
      show('idle');
      if (start) start.focus();
    }

    /* Reveal the entry point + the prototype note only now that the flow is wired. */
    if (start) start.hidden = false;
    if (mocknote) mocknote.hidden = false;

    if (start) {
      start.addEventListener('click', function () {
        show('compose');
        setError(false);
        if (text) text.value = draft;   /* a cancelled draft comes back */
      });
    }

    /* The empty-question message is both announced (live region) and wired to the field
       with aria-describedby + aria-invalid, so a reader who tabs back to the textarea a
       minute later still hears why it was rejected. The live region alone is a one-shot:
       miss it and the error is gone. */
    function setError(on) {
      if (err) err.hidden = !on;
      if (text) {
        if (on) text.setAttribute('aria-invalid', 'true');
        else text.removeAttribute('aria-invalid');
      }
    }

    if (text) {
      text.addEventListener('input', function () {
        setError(false);
        /* maxlength stops the typing silently, which is invisible to anyone not watching
           the field. Announce the cap once, and re-arm only after they delete something. */
        if (text.value.length >= 300) {
          if (!atLimit) { atLimit = true; announce('ask-s-limit'); }
        } else {
          atLimit = false;
        }
      });
      text.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.preventDefault(); cancel(); }
      });
    }

    function cancel() {
      draft = text ? text.value : '';
      toIdle();
    }

    var cancelBtn = document.getElementById('ask-cancel');
    if (cancelBtn) cancelBtn.addEventListener('click', cancel);

    var sendBtn = document.getElementById('ask-send');
    if (sendBtn) {
      sendBtn.addEventListener('click', function () {
        var value = text ? text.value.replace(/^\s+|\s+$/g, '') : '';
        if (!value) {
          /* Inline message + announcement, and focus stays in the field. Rejected:
             disabling Send until the field has content — a disabled button gives a
             keyboard reader nothing to press and no reason why. */
          setError(true);
          announce('ask-s-empty');
          if (text) text.focus();
          return;
        }
        draft = value;
        show('sent');
        announce('ask-s-sent');
      });
    }

    var doneBtn = document.getElementById('ask-done');
    if (doneBtn) {
      doneBtn.addEventListener('click', function () {
        /* "Done" does not close anything — it shows the reader what this book's panel
           will look like the next time they open it, which is the waiting state. */
        showWait();
      });
    }

    function showWait() {
      if (yourq && yourqWrap) {
        yourq.textContent = draft;               /* the reader's words, never innerHTML */
        yourqWrap.hidden = !draft;               /* nothing typed (demo hook): no empty box */
      }
      show('wait');
    }

    /* The answered state closes the loop the same way the wait state opens it: the
       reader's own draft, shown back beside Rosa's (scripted, and labelled scripted)
       answer. Same rules as showWait — textContent only, and a deep link with nothing
       typed gets the plain confirmation, not an empty quote box. */
    function showAnswered() {
      if (ansq && ansqWrap) {
        ansq.textContent = draft;
        ansqWrap.hidden = !draft;
      }
      show('answered');
    }

    var withdrawBtn = document.getElementById('ask-withdraw');
    if (withdrawBtn) {
      withdrawBtn.addEventListener('click', function () {
        /* Withdrawing really does delete it here — the draft is dropped, not stashed for
           a confirmation dialog. The copy says withdrawing deletes it, and a prototype
           that kept the text around would be quietly contradicting its own promise. */
        draft = '';
        if (text) text.value = '';
        if (yourq) yourq.textContent = '';
        toIdle();
        announce('ask-s-withdrawn');
      });
    }

    var retryBtn = document.getElementById('ask-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', function () {
        show('sent');
        announce('ask-s-sent');
      });
    }
    var discardBtn = document.getElementById('ask-discard');
    if (discardBtn) {
      discardBtn.addEventListener('click', function () {
        draft = '';
        if (text) text.value = '';
        toIdle();
      });
    }

    /* ---------- reaching the states nobody can click to ----------
       ineligible / off / offAfter / answered / error are conditions the *system* puts a
       reader in, so there is no honest control that produces them. Rejected: a visible
       state switcher in the panel — it would be a component with no counterpart on
       Amazon.com, sitting inside the one module the presentation is arguing about.
       Instead: ?ask=<state> on the URL (shareable in a message, which is how this
       prototype actually gets looked at) and LEask.state('<state>') in the console,
       matching LEi18n.reset()'s role as the live-demo surface. */
    var VALID = ['idle', 'compose', 'sent', 'wait', 'answered', 'ineligible', 'off', 'offAfter', 'error'];
    function valid(name) {
      for (var i = 0; i < VALID.length; i++) if (VALID[i] === name) return true;
      return false;
    }

    function go(name, focus) {
      if (!valid(name)) return false;
      if (name === 'wait') { showWait(); }
      else if (name === 'answered') { showAnswered(); }
      else { show(name); }
      if (name === 'error') announce('ask-s-error');
      /* On first paint nothing should steal focus from the top of the document — a page
         that loads focused on a mid-page heading breaks the reader's place before they
         have read a word. So the deep-linked state renders, and focus stays put. */
      if (!focus) {
        var el = document.activeElement;
        if (el && el.blur && root.contains(el)) el.blur();
      }
      return true;
    }

    var m = /[?&]ask=([^&#]+)/.exec(window.location.search) ||
            /[#&]ask=([^&]+)/.exec(window.location.hash);
    if (m) go(decodeURIComponent(m[1]), false);

    window.LEask = {
      state: function (name) { return go(name, true); },
      states: VALID
    };
  }

  function boot() {
    startDisclosure('attest-toggle', 'attest-false', false);
    /* ?arc=open leaves the advance-reader panel expanded — the ?ask= idiom: a state
       is reachable by asking for it, never on a timer. */
    startDisclosure('arc-toggle', 'arc-how', /[?&]arc=open/.test(window.location.search));
    startAsk();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
