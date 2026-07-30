/* Lived Experience prototype — reviewer notes layer.
   Paired with notes.css. Optional: nothing else in the prototype imports from here or
   breaks if this file is not loaded.

   ==========================================================================
   THE KILL SWITCH. Set this to false and the feature is gone: no toggle in the
   reviewer bar, no notes, no stored preference read or written. The <div class="revnote">
   blocks left in the HTML stay inert, because notes.css only reveals them under a body
   class that then never gets set. Nothing else needs editing, and no page changes
   shape. To remove it permanently instead, delete the notes.css/notes.js tags from the
   five pages and the revnote blocks with them.
   ========================================================================== */
var NOTES_ENABLED = false;

(function () {
  'use strict';

  if (!NOTES_ENABLED) return;

  var STORE = 'le.revnotes';
  var body = document.body;
  var button;

  function read() {
    try { return window.localStorage.getItem(STORE); } catch (e) { return null; }
  }
  function write(v) {
    try { window.localStorage.setItem(STORE, v); } catch (e) { /* private mode: fine */ }
  }

  /* IT NEVER MAKES A STRING — the same rule ask.js follows, for the same reason.
     i18n.js exposes only LEi18n (set/get/locales/reset), no t(), so any sentence built
     in here would be English in all six languages forever. Both labels sit in the page
     as translated markup and this only copies them out. */
  function label(which) {
    var el = document.querySelector('.revnote-strings [data-revnote-label="' + which + '"]');
    return el ? el.textContent : '';
  }

  function apply(on) {
    body.classList.toggle('revnotes-on', on);
    button.setAttribute('aria-pressed', on ? 'true' : 'false');
    button.querySelector('.revnote-toggle-text').textContent = label(on ? 'hide' : 'show');
  }

  function start() {
    /* No notes on this page means no control for them. Pages get annotated one at a
       time, and a button that reveals nothing is exactly the dead control this
       prototype keeps promising not to draw. */
    if (!document.querySelector('.revnote')) return;

    var host = document.querySelector('.demobar-tools');
    if (!host) return;

    button = document.createElement('button');
    button.type = 'button';
    button.className = 'revnote-toggle';
    /* A toggle button, not a checkbox and not a link: aria-pressed is the honest
       mapping for "this control has an on state and I am it". */
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = '<span class="revnote-toggle-dot" aria-hidden="true"></span>' +
                       '<span class="revnote-toggle-text"></span>';
    button.addEventListener('click', function () {
      var on = body.classList.contains('revnotes-on');
      apply(!on);
      write(!on ? '1' : '0');
    });

    /* Ahead of the language picker: the picker is the control a reviewer is most likely
       to want, so it keeps the end of the row where it is easiest to hit. */
    host.insertBefore(button, host.firstChild);

    /* Off on first visit. The mockup should be the first thing anybody sees; the notes
       are for the second pass. A reviewer who turns them on keeps them on across pages,
       which is the whole reason this is stored at all. */
    apply(read() === '1');

    /* The label was copied out of the page, so it is a snapshot of one language. When
       the reader switches, i18n.js has already retranslated the source block — this
       just re-copies from it. Without this the button alone stays in the old language
       until reload, on a page whose entire argument is that it reads in six. */
    document.addEventListener('le:langchange', function () {
      apply(body.classList.contains('revnotes-on'));
    });
  }

  /* After i18n.js, so the labels being copied are already in the reader's language.
     Both scripts are plain <script> tags in document order, and this one is last, so
     "after" is guaranteed without either knowing about the other. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
