/* Lived Experience prototype — localization engine.
   Scope: the prototype's own interface chrome and the collection's copy. This is a
   reading affordance for the prototype, NOT a product claim that Amazon translates
   books — "launch it in every language" is not a proposal, and this switcher is not
   pretending to be one. The multilingual argument lives in the PRD and stands on its
   own; this just lets the prototype be read.

   Design decisions worth defending out loud:
   - The control sits where Amazon's own locale selector sits — right of the search
     bar, left of the account block. A native slot, not a bolt-on.
   - Languages are listed in their own script (Español, 简体中文, العربية), never as
     flags. A flag is a country, not a language, and no reader should need English to
     find their own language in the list.
   - First visit honours the browser's own language preference, so a reader who has
     already told their computer what they read in is not asked twice.
   - ?lang=es on the URL opens the prototype in that language directly.
   - Nothing blocks the page: no modal, no overlay, no interstitial. The only
     first-visit cue is a short ring on the control itself, and it never returns.

   Markup contract, consumed by index.html / book.html / author.html:
     data-i18n="key"                      -> textContent
     data-i18n-html="key"                 -> innerHTML (our own strings only)
     data-i18n-attr="placeholder:key;..." -> one or more attributes
     data-i18n-title="key"                -> document.title
     data-i18n-only="translated"          -> present only when locale !== 'en'
     data-i18n-num="2341"                 -> the integer, grouped for this locale
*/

(function () {
  'use strict';

  /* ---------- locale registry ----------
     endonym:  how speakers write the language's name in that language, as a label.
     sentence: the same name as it appears *inside* a sentence. Spanish capitalises
               language names only as labels — "Español" in a menu, "en español" in
               prose — and getting that wrong is the kind of small wrongness that tells
               a first-language reader a machine wrote the page.
     Ordering: English first (the source), then by the prototype's own reason for
     including each one — see the note in i18n.css. French is added last, after Arabic,
     so Arabic keeps its place as the deliberate RTL stress-test at the end of the
     rationale in i18n.css; French's own reason is appended there rather than reshuffling
     the existing four. */
  var LOCALES = [
    { id: 'en',  endonym: 'English',   english: 'English',            dir: 'ltr', htmlLang: 'en',      bcp47: 'en-US',      match: ['en'] },
    { id: 'es',  endonym: 'Español',   english: 'Spanish',            dir: 'ltr', htmlLang: 'es',      bcp47: 'es-ES',      match: ['es'], sentence: 'español' },
    { id: 'zh',  endonym: '简体中文',    english: 'Simplified Chinese', dir: 'ltr', htmlLang: 'zh-Hans', bcp47: 'zh-Hans-CN', match: ['zh', 'zh-cn', 'zh-hans', 'zh-sg'] },
    { id: 'fil', endonym: 'Filipino',  english: 'Filipino',           dir: 'ltr', htmlLang: 'fil',     bcp47: 'fil-PH',     match: ['fil', 'tl'] },
    { id: 'ar',  endonym: 'العربية',    english: 'Arabic',             dir: 'rtl', htmlLang: 'ar',      bcp47: 'ar-u-nu-latn',         match: ['ar'] },
    { id: 'fr',  endonym: 'Français',  english: 'French',             dir: 'ltr', htmlLang: 'fr',      bcp47: 'fr-FR',      match: ['fr'], sentence: 'français' }
  ];

  var DEFAULT = 'en';
  var STORE_LANG = 'le.lang';
  var STORE_SEEN = 'le.lang.seen';      /* control has been noticed once */
  var STORE_NOTICE = 'le.lang.notice';  /* auto-detect strip dismissed */

  /* ---------- storage that survives a locked-down file:// context ---------- */
  function read(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* private mode: fine */ }
  }

  function find(id) {
    for (var i = 0; i < LOCALES.length; i++) {
      if (LOCALES[i].id === id) return LOCALES[i];
    }
    return null;
  }

  /* Accepts 'es', 'es-ES', 'zh-Hans-CN', 'tl-PH' ... -> a locale id we ship, or null. */
  function normalize(tag) {
    if (!tag) return null;
    var t = String(tag).toLowerCase().replace(/_/g, '-');
    var i, j, m;
    /* exact, then progressively shorter prefixes: zh-hans-cn -> zh-hans -> zh */
    while (t) {
      for (i = 0; i < LOCALES.length; i++) {
        m = LOCALES[i].match;
        for (j = 0; j < m.length; j++) {
          if (m[j] === t) return LOCALES[i].id;
        }
      }
      if (t.indexOf('-') === -1) break;
      t = t.slice(0, t.lastIndexOf('-'));
    }
    return null;
  }

  /* ?lang=es is the form to hand out. #lang=es works too: some viewers and chat clients
     drop a query string off a file:// link but keep the fragment. */
  function fromUrl() {
    var m = /[?&]lang=([^&#]+)/.exec(window.location.search) ||
            /[#&]lang=([^&]+)/.exec(window.location.hash);
    return m ? normalize(decodeURIComponent(m[1])) : null;
  }

  function fromBrowser() {
    var tags = navigator.languages || (navigator.language ? [navigator.language] : []);
    for (var i = 0; i < tags.length; i++) {
      var id = normalize(tags[i]);
      if (id) return id;
    }
    return null;
  }

  /* Resolution order, and we remember *how* we resolved — the auto-detect strip only
     appears when the reader did not choose for themselves. */
  var origin = 'default';
  function resolve() {
    var id = fromUrl();
    if (id) { origin = 'url'; return id; }
    id = normalize(read(STORE_LANG));
    if (id) { origin = 'stored'; return id; }
    id = fromBrowser();
    if (id) { origin = 'browser'; return id; }
    return DEFAULT;
  }

  var current = resolve();

  /* ---------- string lookup, with English as the backstop ---------- */
  function dict(id) {
    return (window.I18N && window.I18N[id]) || null;
  }
  function t(key, vars) {
    var table = dict(current) || dict(DEFAULT) || {};
    var fallback = dict(DEFAULT) || {};
    var s = table[key];
    if (s === undefined) {
      s = fallback[key];
      if (s === undefined) return '';
      if (window.console && current !== DEFAULT) {
        console.warn('[i18n] missing "' + key + '" in ' + current + ' — showing English');
      }
    }
    if (vars) {
      s = s.replace(/\{(\w+)\}/g, function (whole, name) {
        return Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : whole;
      });
    }
    return s;
  }

  /* ---------- apply to the DOM ---------- */
  function applyStrings(root) {
    var scope = root || document;
    var i, nodes, node;

    nodes = scope.querySelectorAll('[data-i18n]');
    for (i = 0; i < nodes.length; i++) {
      node = nodes[i];
      node.textContent = t(node.getAttribute('data-i18n'));
    }

    nodes = scope.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < nodes.length; i++) {
      node = nodes[i];
      node.innerHTML = t(node.getAttribute('data-i18n-html'));
    }

    nodes = scope.querySelectorAll('[data-i18n-attr]');
    for (i = 0; i < nodes.length; i++) {
      node = nodes[i];
      node.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) return;
        var attr = bits[0].trim();
        var key = bits[1].trim();
        if (!attr || !key) return;
        if (attr === 'value') { node.value = t(key); }
        else { node.setAttribute(attr, t(key)); }
      });
    }

    /* Rating counts are grouped by the locale rather than by the translator — Spain
       writes 2.341, the Mainland writes 2,341 — so the number is never a string anyone
       has to remember to change. Arabic is pinned to Western digits, which is what
       Amazon's own Arabic storefronts use. */
    nodes = scope.querySelectorAll('[data-i18n-num]');
    if (nodes.length) {
      var loc = find(current) || find(DEFAULT);
      var fmt = null;
      try { fmt = new Intl.NumberFormat(loc.bcp47); } catch (e) { fmt = null; }
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        var n = parseFloat(node.getAttribute('data-i18n-num'));
        node.textContent = isNaN(n) ? '' : (fmt ? fmt.format(n) : String(n));
      }
    }

    node = scope.querySelector('[data-i18n-title]');
    if (node) document.title = t(node.getAttribute('data-i18n-title'));

    /* Elements that exist only in translation — e.g. the note on the book page saying
       the reader is reading a translation of the author's statement, not her wording.
       Hidden in English because in English there is nothing to disclose. */
    nodes = scope.querySelectorAll('[data-i18n-only="translated"]');
    for (i = 0; i < nodes.length; i++) {
      nodes[i].hidden = (current === DEFAULT);
    }
  }

  function applyDocument() {
    var loc = find(current) || find(DEFAULT);
    var html = document.documentElement;
    html.setAttribute('lang', loc.htmlLang);
    html.setAttribute('dir', loc.dir);
    applyStrings(document);
  }

  /* ---------- the control ---------- */
  var button, menu, live, notice;

  function buildControl() {
    /* The control now lives in the reviewer bar, not in the dark Amazon nav. The reason
       is in demobar.css, and it is not a cosmetic one: this is the only working control
       on the page, and it was sitting in a row of deliberately dead ones directly under
       a banner reading "controls are non-functional".
       .topnav is kept as a fallback so the control still appears — in its old slot, with
       its old styling, both of which still work — on any page that has not been given a
       reviewer bar. */
    var host = document.querySelector('.demobar-tools') || document.querySelector('.topnav');
    if (!host) return;

    var wrap = document.createElement('div');
    wrap.className = 'langpick';

    button = document.createElement('button');
    button.type = 'button';
    button.className = 'langpick-btn';
    button.setAttribute('aria-haspopup', 'listbox');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML =
      '<span class="langpick-globe" aria-hidden="true">' +
      '<svg viewBox="0 0 20 20" width="15" height="15" focusable="false">' +
      '<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
      '<path d="M2 10h16M10 2c2.4 2.2 2.4 13.6 0 16M10 2C7.6 4.2 7.6 15.8 10 18" ' +
      'fill="none" stroke="currentColor" stroke-width="1.5"/>' +
      '</svg></span>' +
      '<span class="langpick-now"></span>' +
      '<span class="langpick-caret" aria-hidden="true">▾</span>';

    menu = document.createElement('ul');
    menu.className = 'langpick-menu';
    menu.setAttribute('role', 'listbox');
    menu.hidden = true;

    LOCALES.forEach(function (loc) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('tabindex', '-1');
      li.setAttribute('data-lang', loc.id);
      /* lang + dir per option so a screen reader pronounces each endonym in its own
         language instead of reading it as mangled English. */
      li.setAttribute('lang', loc.htmlLang);
      li.setAttribute('dir', loc.dir);
      li.innerHTML = '<span class="langpick-check" aria-hidden="true">✓</span>' +
                     '<span class="langpick-name">' + loc.endonym + '</span>';
      li.addEventListener('click', function () { choose(loc.id); });
      menu.appendChild(li);
    });

    wrap.appendChild(button);
    wrap.appendChild(menu);

    /* Amazon's own locale selector sits between the search bar and the account block.
       Same slot here. */
    var acct = host.querySelector('.acct');
    if (acct) host.insertBefore(wrap, acct);
    else host.appendChild(wrap);

    live = document.createElement('p');
    live.className = 'i18n-live';
    live.setAttribute('role', 'status');
    live.setAttribute('aria-live', 'polite');
    document.body.appendChild(live);

    button.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle(menu.hidden);
    });
    button.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(true);
        focusOption(indexOf(current));
      }
    });
    menu.addEventListener('keydown', onMenuKey);
    document.addEventListener('click', function (e) {
      if (!menu.hidden && !wrap.contains(e.target)) toggle(false);
    });
  }

  function indexOf(id) {
    for (var i = 0; i < LOCALES.length; i++) if (LOCALES[i].id === id) return i;
    return 0;
  }
  function options() {
    return menu.querySelectorAll('[role="option"]');
  }
  function focusOption(i) {
    var opts = options();
    if (!opts.length) return;
    var n = (i + opts.length) % opts.length;
    opts[n].focus();
  }

  function onMenuKey(e) {
    var opts = options();
    var here = Array.prototype.indexOf.call(opts, document.activeElement);
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); focusOption(here + 1); break;
      case 'ArrowUp':   e.preventDefault(); focusOption(here - 1); break;
      case 'Home':      e.preventDefault(); focusOption(0); break;
      case 'End':       e.preventDefault(); focusOption(opts.length - 1); break;
      case 'Escape':    e.preventDefault(); toggle(false); button.focus(); break;
      case 'Tab':       toggle(false); break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (here > -1) choose(opts[here].getAttribute('data-lang'));
        break;
    }
  }

  function toggle(open) {
    menu.hidden = !open;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      /* first-visit ring has done its job the moment the menu opens */
      settle();
    }
  }

  function settle() {
    if (button) button.classList.remove('is-new');
    write(STORE_SEEN, '1');
  }

  function choose(id) {
    if (!find(id)) return;
    current = id;
    origin = 'chosen';
    write(STORE_LANG, id);
    write(STORE_NOTICE, '1');   /* an explicit choice needs no explanation strip */
    settle();
    applyDocument();
    refreshControl();
    renderNotice();
    toggle(false);
    button.focus();
    var loc = find(id);
    live.setAttribute('lang', loc.htmlLang);
    live.textContent = t('lang.notice', { name: loc.sentence || loc.endonym });
    announce(id);
  }

  /* Anything outside this file that has copied a translated string into a control it
     owns needs to know the language moved under it — otherwise its label stays in the
     old language until the page is reloaded. notes.js is the one listener today.
     An event rather than exporting t(): the rule that no other file may build a
     sentence is what keeps every string in the six translated tables, and handing out
     t() is exactly how that rule would get broken. */
  function announce(id) {
    var ev;
    try {
      ev = new CustomEvent('le:langchange', { detail: { lang: id } });
    } catch (e) {
      /* older engines: the constructor is the only part that differs */
      ev = document.createEvent('CustomEvent');
      ev.initCustomEvent('le:langchange', false, false, { lang: id });
    }
    document.dispatchEvent(ev);
  }

  function refreshControl() {
    if (!button) return;
    var loc = find(current);
    button.querySelector('.langpick-now').textContent = loc.endonym;
    button.setAttribute('lang', loc.htmlLang);
    button.setAttribute('dir', loc.dir);
    button.setAttribute('aria-label', t('lang.buttonAria', { name: loc.endonym }));
    button.setAttribute('title', t('lang.label'));
    menu.setAttribute('aria-label', t('lang.menuAria'));
    var opts = options();
    for (var i = 0; i < opts.length; i++) {
      var on = opts[i].getAttribute('data-lang') === current;
      opts[i].setAttribute('aria-selected', on ? 'true' : 'false');
      opts[i].classList.toggle('is-on', on);
    }
  }

  /* ---------- the auto-detect strip ----------
     One line, under the subnav, in the language the reader is now seeing, offering the
     way back to English. Shown only when the prototype picked the language for them
     (browser preference or a ?lang= link) — never after they choose for themselves. */
  function renderNotice() {
    var show = current !== DEFAULT &&
               (origin === 'browser' || origin === 'url') &&
               !read(STORE_NOTICE);

    if (!show) {
      if (notice && notice.parentNode) notice.parentNode.removeChild(notice);
      notice = null;
      return;
    }
    if (!notice) {
      notice = document.createElement('div');
      notice.className = 'langnotice';
      var anchor = document.querySelector('.subnav');
      if (!anchor) return;
      anchor.parentNode.insertBefore(notice, anchor.nextSibling);
    }
    var loc = find(current);
    notice.setAttribute('lang', loc.htmlLang);
    notice.setAttribute('dir', loc.dir);
    notice.innerHTML = '';

    var text = document.createElement('span');
    text.textContent = t('lang.notice', { name: loc.sentence || loc.endonym });
    notice.appendChild(text);

    var back = document.createElement('button');
    back.type = 'button';
    back.className = 'langnotice-back';
    back.textContent = t('lang.noticeAction');
    back.addEventListener('click', function () { choose(DEFAULT); });
    notice.appendChild(back);

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'langnotice-x';
    close.setAttribute('aria-label', t('lang.noticeDismissAria'));
    close.textContent = '✕';
    close.addEventListener('click', function () {
      write(STORE_NOTICE, '1');
      renderNotice();
    });
    notice.appendChild(close);
  }

  /* ---------- boot ---------- */
  function start() {
    /* A ?lang= link is a choice too, so remember it — otherwise the language falls back
       to English the moment the reader clicks through to the book or author page, which
       is exactly where a pre-set link is meant to take them. */
    if (origin === 'url') write(STORE_LANG, current);

    buildControl();
    applyDocument();
    refreshControl();
    renderNotice();

    /* The one-time cue. A short ring on the control, twice, then gone for good —
       enough to catch an eye that isn't looking for it, and never seen again. CSS
       disables the motion entirely under prefers-reduced-motion, where the resting
       state of the control is already outlined. */
    if (!read(STORE_SEEN) && button) {
      button.classList.add('is-new');
      window.setTimeout(settle, 6000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  /* Small surface for the console, for demoing during the presentation.
     LEi18n.reset() puts the browser back to never-visited, so the first-visit
     behaviour — browser-language detection, the one-time ring, the notice strip —
     can be shown again live instead of described. */
  window.LEi18n = {
    set: function (id) { choose(id); },
    get: function () { return current; },
    locales: LOCALES.map(function (l) { return l.id; }),
    reset: function () {
      try {
        window.localStorage.removeItem(STORE_LANG);
        window.localStorage.removeItem(STORE_SEEN);
        window.localStorage.removeItem(STORE_NOTICE);
      } catch (e) { /* nothing to clear */ }
      window.location.search = '';
    }
  };
})();
