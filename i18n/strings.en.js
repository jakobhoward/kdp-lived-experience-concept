/* Lived Experience prototype — UI strings, English (source of truth).
   Every other locale file mirrors these keys exactly. Do not add or remove a
   key here without updating all of strings.*.js.

   Conventions for translators:
   - GENDER. Two rules, and they pull in opposite directions, so check which case you are in
     before you inflect anything.
     (a) Rosa Delgado and Emily Carter are women (she/her). Inflect role nouns and agreement
         accordingly — "(Author)", "About the author", "Answered by Rosa Delgado, author" and
         Rosa's whole first-person voice are all about a specific woman. Several of these
         strings are standalone fragments with no antecedent in them, so this file is the only
         place that tells you. Do not neutralize them; that erases her.
     (b) Every UNSPECIFIED author or reader stays gender-free — "the author", "authors",
         "any author", "the reader", "per reader", and the deliberately anonymous
         "A first-time author". Recast the sentence rather than picking a gender: relative
         clauses, the act instead of the actor, impersonal or second-person forms. Never
         doubled forms, slashes, "@" or "-x" endings.
   - AUTHORSHIP, NOT PUBLISHING. The collection's gate is that the person who LIVED and WROTE
     the book says so. A recast that shifts the actor to whoever *publishes* or *uploads* it
     breaks the concept. Keep the writing, not the publishing, as the thing being attested.
   - Brand names are never translated: Kindle, Kindle Store, Kindle Unlimited,
     Amazon, KDP, Audible, 1-Click.
   - Proper nouns stay in Latin script: Rosa Delgado, Emily Carter, Manila,
     Chicago, and the four team members' names.
   - Prices stay in USD with the same digits ($4.99, $14.95, $0.00).
   - Keys ending in "Aria" are screen-reader-only labels.
   - Keys ending in "Html" contain inline markup that must survive intact. */

window.I18N = window.I18N || {};
window.I18N.en = {

  /* ---------- document titles ---------- */
  "index.docTitle": "Lived Experience Collection — landing page (concept)",
  "book.docTitle": "The Road from Manila — book detail (concept)",
  "author.docTitle": "Rosa Delgado — author page (concept)",

  /* ---------- shared chrome ---------- */
  "chrome.conceptLabel": "STUDENT CONCEPT — COMMLD 560, UW.",
  "chrome.searchPlaceholder": "Search Kindle Store",
  "chrome.searchAria": "Search Kindle Store",
  "chrome.searchButtonAria": "Search",
  "chrome.greeting": "Hello, Reader",
  "chrome.account": "Account & Lists",
  "chrome.nav.shop": "Shop Books",
  "chrome.nav.categories": "Categories",
  "chrome.nav.trending": "New & Trending",
  "chrome.nav.bestsellers": "Best Sellers & More",
  "chrome.nav.deals": "Deals",
  "chrome.nav.yourbooks": "Your Books",

  /* ---------- language switcher ---------- */
  "lang.label": "Language",
  "lang.buttonAria": "Language: {name}. Choose a different language",
  "lang.menuAria": "Choose a language",
  "lang.notice": "This page is showing in {name}.",
  "lang.noticeAction": "Read it in English",
  "lang.noticeDismissAria": "Dismiss this message",

  /* ---------- breadcrumbs and shared labels ---------- */
  "crumb.store": "Kindle Store",
  "crumb.ebooks": "Kindle eBooks",
  "crumb.memoirs": "Biographies & Memoirs",
  "collection.name": "Lived Experience",
  "common.learnMore": "Learn more",
  "common.answersQuestions": "✓ Answers reader questions",
  "common.follow": "+ Follow",
  "common.partOf": "Part of:",

  /* ---------- index: collection landing ---------- */
  "index.disclaimer": "Not an Amazon product. Books, authors, and ratings are fictional; controls are non-functional.",
  "index.kicker": "LIVED EXPERIENCE",
  "index.headline": "First-person stories, in the authors' own words",
  "index.bannerH2": "Every book here opens with the author's own words.",
  "index.bannerP": "First books, first-person stories — and many of these authors have chosen to take reader questions.",
  "index.gateNoteLabel": "How a book gets here:",
  "index.gateNoteBody": "the author attests, in their own words, that they lived this story and wrote it. Amazon hosts the author's statement — it doesn't certify it. Translation, including AI translation, is welcome.",

  "index.book1.title": "The Road from Manila",
  "index.book1.author": "Rosa Delgado",
  "index.book1.voice": "“I left Manila in 1979. I wrote this in Tagalog first, because that is the language I remember it in.”",
  "index.book1.starsAria": "4.4 out of 5 stars, 214 ratings",
  "index.book1.coverAlt": "Cover of The Road from Manila",

  "index.book2.title": "The Unseen Memoir",
  "index.book2.author": "A first-time author",
  "index.book2.voice": "“I wrote this at my kitchen table over four years, about the year I stopped speaking.”",
  "index.book2.starsAria": "4.3 out of 5 stars, 127 ratings",
  "index.book2.coverAlt": "Cover of The Unseen Memoir",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "“These are my grandmother's letters, and mine. I typed every one of them myself.”",
  "index.book3.starsAria": "4.5 out of 5 stars, 2,341 ratings",
  "index.book3.coverAlt": "Cover of Letters Home",

  "index.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Author-statement gate: Wanting's mechanism (7/27) · Reader→author access tiers: Pablo's concept (7/27) · Collection framing: Chang's StoryCorps reframe (7/24) · Community-discovery research informing launch: Jalen (in progress)",
  "index.credits2": "Example authors are illustrative fiction pending our survey's open-text data — not personas. Rosa Delgado's profile draws on the documented Filipino nurse-migration diaspora (sources in the PRD), not on invented demographics.",

  /* ---------- book detail ---------- */
  "book.disclaimer": "Not an Amazon product. This book, its author, and all ratings are fictional; controls are non-functional.",
  "book.title": "The Road from Manila",
  "book.bylinePrefix": "by",
  "book.bylineAuthor": "Rosa Delgado",
  "book.bylineRole": "(Author)",
  "book.format": "Format: Kindle Edition",
  "book.starsAria": "4.4 out of 5 stars, 214 ratings",
  "book.partOfValue": "Lived Experience (48 books)",
  "book.coverAlt": "Cover of The Road from Manila",
  "book.readSample": "Read sample",
  "book.audibleSample": "Audible sample",
  "book.visitAuthorPage": "Visit author page",

  "book.attest.h3": "In the author's own words",
  "book.attest.quote": "“I left Manila in 1979 with one suitcase and my mother's rosary. I am not a writer — I was a nurse for thirty-one years. I wrote this in Tagalog first, because that is the language I remember it in, and my niece and I translated it together with help from a translation tool. Every word of the story is mine. I lived it.”",
  "book.attest.sigName": "Rosa Delgado, author attestation",
  "book.attest.sigLink": "What happens if an attestation is false",
  "book.attest.sigBody": "A false attestation removes the book from the collection; the account is handled under KDP's existing content policies — no new enforcement machinery.",
  "book.attest.translationNote": "You are reading a translation of Rosa's statement. The wording she attested to is her own.",

  "book.desc.lede": "Because every ordinary life has an extraordinary story worth remembering.",
  "book.desc.p1Html": "In 1979, Rosa Delgado boarded a plane in Manila with a nursing contract, a single suitcase, and no way of knowing she would not see her mother again for eleven years. <em>The Road from Manila</em> is the story of the years between — night shifts in a country whose language she dreamed in translation, remittances folded into birthday cards, and the slow work of building a home while homesick for another.",
  "book.desc.p2": "Written first in Tagalog and translated with her niece, this memoir is for anyone who has ever been the one who left — or the one who stayed.",

  "book.meta.pagesValue": "287 pages",
  "book.meta.pagesLabel": "Print length",
  "book.meta.langValue": "English + Tagalog",
  "book.meta.langLabel": "Language",
  "book.meta.a11yValue": "Supported",
  "book.meta.a11yLabel": "Screen Reader",
  "book.meta.dateValue": "March 2026",
  "book.meta.dateLabel": "Publication date",

  "book.ask.h3": "Ask Rosa a question",
  "book.ask.sub": "Author has opted in · Answers weekly",
  "book.ask.tier1Label": "Questions about the book",
  "book.ask.tier1Body": "One question per reader per book, open to verified purchases and KU borrows. Nothing is public until Rosa publishes her answer.",
  "book.ask.tier2Label": "Live reader Q&A",
  "book.ask.tier2Body": "Occasional live session, scheduled by the author.",
  "book.ask.note": "Authors choose their level of access — including none — and can change it anytime. Author-moderated by default: the author sees, answers, or deletes; Amazon's existing Community Guidelines report-and-block tools apply. Contact details are never shared.",

  "book.buy.formatKindle": "Kindle",
  "book.buy.orBuy": "or $4.99 to buy",
  "book.buy.formatPaperback": "Paperback",
  "book.buy.kuPitch": "Unlimited reading. Millions of titles.",
  "book.buy.readFree": "Read for Free",
  "book.buy.or": "OR",
  "book.buy.oneClick": "Buy now with 1-Click",
  "book.buy.sendSample": "Send a free sample",

  "book.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Author-statement gate: Wanting's mechanism (7/27) · Access tiers: Pablo's concept (7/27) · “Translation welcome” eligibility: team research on KDP AI-content policy (7/27)",

  /* ---------- author page ---------- */
  "author.disclaimer": "Not an Amazon product. This author and all content are fictional; controls are non-functional.",
  "author.name": "Rosa Delgado",
  "author.tabHome": "HOME",
  "author.tabAbout": "ABOUT",
  "author.tabBooks": "ALL BOOKS",
  "author.aboutH2": "About the author",
  "author.bioHtml": "Rosa Delgado was a nurse for thirty-one years, in Manila and then in Chicago. <em>The Road from Manila</em> is her first book, written in Tagalog and translated with her niece. She did not plan to be a writer; she planned to remember. She lives near her grandchildren, who are the reason the book exists.",

  "author.qaH2": "Questions readers asked Rosa",
  "author.qLabel": "Question:",
  "author.aLabel": "Answer:",
  "author.answeredBy": "Answered by Rosa Delgado, author",
  "author.qa1.q": "Did you ever think about going back for good?",
  "author.qa1.a": "Every December for the first ten years. Then one year I noticed I was homesick in both directions, and I understood I had two homes now. That is what chapter 14 is about.",
  "author.qa2.q": "What did writing in Tagalog first change about the book?",
  "author.qa2.a": "Everything. Some memories only exist in the language they happened in. My niece and I argued over every sentence of the translation, and the arguing is where the book got honest.",

  "author.popularH2": "Most popular",
  "author.bookTitle": "The Road from Manila",
  "author.starsAria": "4.4 out of 5 stars, 214 ratings",
  "author.orBuy": "or $4.99 to buy",
  "author.partOfValue": "Lived Experience",
  "author.coverAlt": "Cover of The Road from Manila",

  "author.access.h3": "Rosa's access settings",
  "author.access.sub": "Chosen by the author · Changeable anytime",
  "author.access.tier1Label": "Questions about the book",
  "author.access.tier1State": "On",
  "author.access.tier1Body": "Answers weekly; nothing public until Rosa publishes it.",
  "author.access.tier2Label": "Live reader Q&A",
  "author.access.tier2State": "On",
  "author.access.tier2Body": "Occasional, author-scheduled.",
  "author.access.tier3Label": "No access",
  "author.access.tier3State": "Available to any author",
  "author.access.tier3Body": "An author can turn everything off and remain in the collection.",
  "author.access.note": "Access is the author's choice, tier by tier. No private messaging exists at any tier — out of scope by design, for the author's safety. Today's author page has exactly one reader action — Follow, one-way. This panel is the missing half.",

  "author.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Access tiers: Pablo's concept (7/27) · Author-statement gate: Wanting's mechanism (7/27) · StoryCorps framing: Chang (7/24)"
};
