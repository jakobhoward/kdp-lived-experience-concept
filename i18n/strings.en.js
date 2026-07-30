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
         "any author", "the reader", "per reader". Recast the sentence rather than picking a
         gender: relative clauses, the act instead of the actor, impersonal or second-person
         forms. Never doubled forms, slashes, "@" or "-x" endings.
     (c) Marion Hale's gender is deliberately unstated, and the name is deliberately one that
         does not settle it. Nothing about that author needs to be inflected — the name sits
         in the byline slot with no article or role noun, and the voice line is first person,
         which is genderless in all six languages. Do not add a gendered role noun to it.
   - AUTHORSHIP, NOT PUBLISHING. The collection's gate is that the person who LIVED and WROTE
     the book says so. A recast that shifts the actor to whoever *publishes* or *uploads* it
     breaks the concept. Keep the writing, not the publishing, as the thing being attested.
   - Brand names are never translated: Kindle, Kindle Store, Kindle Unlimited,
     Amazon, KDP, Audible, 1-Click.
   - Proper nouns stay in Latin script: Rosa Delgado, Emily Carter, Marion Hale, Manila,
     Chicago, and the four team members' names.
   - Prices stay in USD with the same digits ($4.99, $14.95, $0.00).
   - Keys ending in "Aria" are screen-reader-only labels.
   - Keys ending in "Html" contain inline markup that must survive intact.
   - BOOK TITLES AND AUTHOR NAMES ARE NOT TRANSLATED. A store shows a Spanish reader the
     English title of an English book. Every "search.rNN.title" and "search.rNN.author"
     stays in Latin script, word for word, in all six locales; they are keyed only because
     hardcoded English in the markup is a defect. The sixteen search-result people are
     unspecified — rule (b) applies: no gender inflection, no added role noun.
   - STORE TAXONOMY AND REFINEMENT LABELS are Amazon's, not ours: crumb.*, common.kuEligible,
     common.avgReview, common.languageLabel, common.sortLabel, common.sortFeatured,
     common.kindleEdition, "search.rail.*", "browse.rail.*". Use the wording Amazon's own
     storefront already uses in that language. Do not coin a new category name.
   - "search.query" and the quoted phrase inside "search.resultCountHtml" are the same search
     query and must be translated identically; the <span class="q"> wrapper survives intact,
     and the quotation marks inside it become the locale's own.
   - The “Part of:” inside "search.orderNoteBody" is quoting the UI label common.partOf.
     Translate it to match that key exactly, in the locale's own quotation marks.
   - DIGITS STAY DIGITS in "book.ask.subState" (9 of 14), "book.ask.liveLimit" (300),
     "browse.resultCount" and "search.resultCountHtml". Those last two may reorder their
     numbers for the locale, but the numbers themselves do not change.
   - SHORT UI STATES STAY SHORT. Button and state labels — "book.ask.sentDone" (Done),
     "book.ask.startBtn", "book.ask.errorRetry", "browse.pagerNext" (Next),
     "common.sortFeatured" (Featured), "search.rail.reviewAndUp" (& Up) — sit in narrow
     controls. Use the shortest natural equivalent; do not expand them into a sentence.
   - TWO REFUSALS ARE LOAD-BEARING AND MUST SURVIVE TRANSLATION.
     "book.ask.*" may never promise a reply, a response time, or an escalation path. The
     panel's whole point is that Amazon does not chase the author and does not answer for
     her. Do not soften "we do not know" into "soon" or "shortly".
     "book.attest.false.*" may never name a review queue, a trust team, an appeals board, a
     verification step, or any Amazon check on whether a story is true. Everything described
     there already exists under KDP's content policies and Amazon's Community Guidelines.
     The governing principle: Amazon badges what it can measure; it quotes what it cannot. */

window.I18N = window.I18N || {};
window.I18N.en = {

  /* ---------- document titles ---------- */
  "index.docTitle": "Lived Experience Collection — landing page (concept)",
  "book.docTitle": "The Road from Manila — book detail (concept)",
  "author.docTitle": "Rosa Delgado — author page (concept)",
  "browse.docTitle": "Lived Experience — category page (concept)",
  "search.docTitle": "memoir about leaving home — search results (concept)",

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
  "chrome.skipToContent": "Skip to main content",
  "chrome.subnavAria": "Store sections",
  "chrome.breadcrumbAria": "Breadcrumb",
  "search.railAria": "Refine results",

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

  /* Store chrome shared by search.html and browse.html. These live in common.* rather than
     twice under search.* and browse.* because they are one storefront label appearing on two
     pages — duplicating them is how two locales end up disagreeing about what Amazon calls
     its own sort control. crumb.store / crumb.ebooks / crumb.memoirs are reused for the
     department rows in both left rails for the same reason.
     common.kindleEdition is the format line on a result row AND the Format refinement value.
     It is NOT book.format ("Format: Kindle Edition") — different string, do not collapse. */
  "common.kindleEdition": "Kindle Edition",
  "common.kuEligible": "Kindle Unlimited Eligible",
  "common.avgReview": "Avg. Customer Review",
  "common.languageLabel": "Language",
  "common.sortLabel": "Sort by:",
  "common.sortFeatured": "Featured",

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
  "index.book2.author": "Marion Hale",
  "index.book2.voice": "“I wrote this at my kitchen table over four years, about the year I stopped speaking.”",
  "index.book2.starsAria": "4.3 out of 5 stars, 127 ratings",
  "index.book2.coverAlt": "Cover of The Unseen Memoir",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "“These are my grandmother's letters, and mine. I typed every one of them myself.”",
  "index.book3.starsAria": "4.5 out of 5 stars, 2,341 ratings",
  "index.book3.coverAlt": "Cover of Letters Home",

  "index.book4.title": "The Last Ninety Acres",
  "index.book4.author": "Dale Whitcomb",
  "index.book4.voice": "“Four generations farmed this ground. I wrote down the year we lost it, because nobody else was going to.”",
  "index.book4.starsAria": "4.2 out of 5 stars, 86 ratings",
  "index.book4.coverAlt": "Cover of The Last Ninety Acres",

  "index.book5.title": "Eleven Addresses",
  "index.book5.author": "Terrance Boyd",
  "index.book5.voice": "“Eleven places in six years after I got out. I wrote most of this on a library computer, an hour at a time.”",
  "index.book5.starsAria": "4.6 out of 5 stars, 438 ratings",
  "index.book5.coverAlt": "Cover of Eleven Addresses",

  "index.book6.title": "Loud in Here",
  "index.book6.author": "Nadia Haddad",
  "index.book6.voice": "“I have been deaf since I was four. This is what a quiet house is actually like from the inside.”",
  "index.book6.starsAria": "4.4 out of 5 stars, 309 ratings",
  "index.book6.coverAlt": "Cover of Loud in Here",

  "index.book7.title": "Sixteen Hundred Miles a Week",
  "index.book7.author": "Ray Okonkwo",
  "index.book7.voice": "“I can't spell to save my life. I talked this book into my phone between Laredo and Toledo.”",
  "index.book7.starsAria": "4.1 out of 5 stars, 52 ratings",
  "index.book7.coverAlt": "Cover of Sixteen Hundred Miles a Week",

  "index.book8.title": "Coming Back Slow",
  "index.book8.author": "Deborah Aoki",
  "index.book8.voice": "“I had a stroke at fifty-one. Relearning to write took two years. This book took four.”",
  "index.book8.starsAria": "4.7 out of 5 stars, 1,608 ratings",
  "index.book8.coverAlt": "Cover of Coming Back Slow",

  /* The route from the landing page back to the category node it is a view of. Without it
     index.html was a dead end: browse.html linked forward and nothing linked back, and the
     "(48 books)" the book page states had no page on which a reader could see the 48.
     Deliberately a plain "see all" text link, which is what Amazon puts under a merchandised
     grid — not a button, and not a "see more like this", which would be a recommendation. */
  "index.seeAll": "See all 48 books in this category",

  "index.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Author-statement gate: Wanting's mechanism (7/27) · Reader→author access tiers: Pablo's concept (7/27) · Collection framing: Chang's StoryCorps reframe (7/24) · Community-discovery research informing launch: Jalen (in progress)",
  "index.credits2": "Example authors are illustrative fiction pending our survey's open-text data — not personas. Rosa Delgado's profile draws on the documented Filipino nurse-migration diaspora (sources in the PRD), not on invented demographics.",
  "index.credits3": "KDP already has real books that belong in this collection; the shelf exists, what is missing is a way to walk it. These titles are invented anyway, because the access shown here is the author's to grant and no real author granted it — putting a living author's name beside a tier she never agreed to would invert the idea. Invented copy also carries the states a real listing does not have, in six languages, without rewriting anyone's own words.",

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

  /* The inline "See more" expansion under the signature. book.attest.sigLink above is reused
     verbatim as the disclosure button's label — there is no "Show less" variant, because the
     caret and aria-expanded carry the state. Nothing below may name a review queue, a trust
     team, an appeals board, a verification step, or any Amazon check on whether a story is
     true; everything described already exists under KDP policy. */
  "book.attest.false.h": "If an attestation turns out to be false",
  "book.attest.false.p1": "The statement is treated like anything else an author writes on their own detail page. If it is reported and KDP finds it breaks the content guidelines the account already agreed to, the book comes out of the collection and the account is handled the way any other guidelines violation is handled — up to losing publishing access. Nothing new is built for this.",
  "book.attest.false.p2": "A reader reports it with the report control Amazon already has. KDP applies the policies it already applies. There is no separate review board here, no queue we invented, no appeal process we made up, and no score attached to the author.",
  "book.attest.false.p3": "The limit is worth saying plainly: Amazon does not know whether a story is true and cannot find out. Nothing here checks a memory, a date, or a life. That is exactly why the claim stays in the author's own words with her name on it, and why there is no Amazon seal beside it — a seal would be a promise Amazon cannot keep. What can be acted on is a statement that turns out to be fabricated, in the same way a false claim in any other listing can be.",
  "book.attest.false.p4": "So reporting is the whole of the mechanism. It is not a promise of an outcome, and you will not get a progress report.",
  "book.attest.false.reportLink": "Report this content",

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
  /* book.ask.sub ("Author has opted in · Answers weekly") was DELETED here and in all four
     other locale files on 7/30, in the single pass its own note asked for. It promised a
     cadence nobody measures, which is the same failure as the retired "verified human-written"
     badge; book.ask.subState replaced it and counts something Amazon can actually observe.
     Leaving a retired sentence sitting translated in five files is how retired copy comes
     back — the next person needing a subtitle finds it and uses it. */
  "book.ask.subState": "Opted in · 9 of 14 reader questions answered",
  "book.ask.tier1Label": "Questions about the book",
  "book.ask.tier1Body": "One question per reader per book, open to verified purchases and KU borrows. Nothing is public until Rosa publishes her answer.",
  "book.ask.tier2Label": "Live reader Q&A",
  "book.ask.tier2Body": "Occasional live session, scheduled by the author.",
  "book.ask.note": "Authors choose their level of access — including none — and can change it anytime. Author-moderated by default: the author sees, answers, or deletes; Amazon's existing Community Guidelines report-and-block tools apply. Contact details are never shared.",

  /* The ask-a-question flow, state by state. Half of these strings exist to say that nothing
     happens: no reply is promised, no time is quoted, no escalation exists. Do not translate
     the refusal away — see the header note. Rosa Delgado is she/her throughout (rule a). */
  "book.ask.startBtn": "Ask a question",

  "book.ask.composeLabel": "Your question for Rosa",
  "book.ask.composeHint": "Up to 300 characters. Ask about the book, or about the life behind it.",
  "book.ask.composeTerms": "This is your one question for this book. Rosa sees it, and can answer it or delete it. Nothing you write appears on Amazon unless she publishes her answer with it. There is no private messaging here at any level — not for you and not for her — and neither of you is shown the other's contact details.",
  "book.ask.composeSend": "Send question",
  "book.ask.composeCancel": "Cancel",
  "book.ask.composeEmpty": "Write your question first.",

  "book.ask.sentH": "Question sent to Rosa",
  "book.ask.sentBody": "It is with Rosa now. She moderates her own questions: she can answer it, or delete it, and she is not required to do either.",
  "book.ask.sentNoEta": "We are not telling you when to expect a reply, because we do not know. No response time is promised here, and none has been measured.",
  "book.ask.sentWhere": "If she answers, her answer and your question appear together on her author page.",
  "book.ask.sentWhereLink": "See answered questions",
  "book.ask.sentDone": "Done",

  "book.ask.waitH": "Your question is with Rosa",
  "book.ask.waitSent": "You asked this on 12 March 2026. It has not been answered.",
  "book.ask.waitQLabel": "Your question:",
  "book.ask.waitTruth": "It may stay like this. Some questions are never answered, and Rosa can delete one without replying and without saying why. Amazon does not chase her, does not escalate this, and does not answer on her behalf.",
  "book.ask.waitPublic": "Nothing you wrote is public.",
  "book.ask.waitWithdraw": "Withdraw my question",
  "book.ask.waitWithdrawNote": "Withdrawing deletes it. You can write a different one afterwards.",

  "book.ask.answeredH": "Rosa answered your question",
  "book.ask.answeredBody": "She published your question with her answer on her author page, where other readers can now read both.",
  "book.ask.answeredLink": "Read her answer",
  "book.ask.answeredQuota": "That was your one question for this book.",

  "book.ask.reportLink": "Report a problem with this question or answer",

  "book.ask.ineligibleH": "Questions are open to readers of this book",
  "book.ask.ineligibleBody": "Buy it or borrow it with Kindle Unlimited and the question box opens here. It is the same check Amazon already uses to mark a review a verified purchase.",
  "book.ask.ineligibleWhy": "The check exists for Rosa, not for us. Without it, an author's question box is a contact form open to the whole internet, and the authors most likely to be targeted are the ones this collection is built around.",
  "book.ask.ineligibleWhere": "The buying and borrowing options are in the box near the top of this page.",

  "book.ask.offH": "Rosa is not taking questions right now",
  "book.ask.offBody": "She has turned reader questions off. She may turn them back on; she may not. Either way the book stays in the collection and her statement stays on this page — the access was always hers to choose, and switching it off costs her nothing here.",
  "book.ask.offNoAlt": "There is no other way to reach her through Amazon, and that is deliberate.",

  "book.ask.offAfterH": "Questions are closed for this book",
  "book.ask.offAfterBody": "Rosa turned reader questions off after you asked. Your question was never published and will not be answered; it was deleted along with the other open questions.",

  "book.ask.errorH": "Your question didn't send",
  "book.ask.errorBody": "Something went wrong on our side, not yours. Your draft is still here.",
  "book.ask.errorRetry": "Try again",
  "book.ask.errorDiscard": "Discard draft",

  /* Live-region announcements. Screen-reader-only in effect, though not named "Aria". */
  "book.ask.liveSent": "Question sent. Nothing is public unless Rosa publishes her answer.",
  "book.ask.liveWithdrawn": "Your question has been withdrawn and deleted.",
  "book.ask.liveLimit": "You have reached the 300-character limit.",
  "book.ask.liveEmpty": "Write your question first.",
  "book.ask.liveError": "Your question didn't send. Your draft was kept.",

  "book.ask.mockNote": "Prototype note: nothing is sent anywhere. This flow exists so the states can be read — including the ones where nothing happens.",

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
  /* WAS "Answers weekly; nothing public until Rosa publishes it." — the cadence promise was
     already retired from book.html (see book.ask.subState) because nobody measures it, which
     is the same failure as the retired "verified human-written" badge. It survived here, on
     the one page that claims to describe the author's real settings. Replaced with the same
     observed count book.html shows, so the two pages state the same fact. */
  "author.access.tier1Body": "9 of 14 reader questions answered; nothing public until Rosa publishes it.",
  "author.access.tier2Label": "Live reader Q&A",
  "author.access.tier2State": "On",
  "author.access.tier2Body": "Occasional, author-scheduled.",
  "author.access.tier3Label": "No access",
  "author.access.tier3State": "Available to any author",
  "author.access.tier3Body": "An author can turn everything off and remain in the collection.",
  "author.access.note": "Access is the author's choice, tier by tier. No private messaging exists at any tier — out of scope by design, for the author's safety. Today's author page has exactly one reader action — Follow, one-way. This panel is the missing half.",

  "author.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Access tiers: Pablo's concept (7/27) · Author-statement gate: Wanting's mechanism (7/27) · StoryCorps framing: Chang (7/24)",

  /* ---------- browse: the category node (entry point) ---------- */
  /* Namespaced browse.* after the page, browse.html, like every other page here.
     This page carries NO book strings of its own: all eight rows reuse index.bookN.title /
     .author / .voice / .coverAlt / .starsAria, so the cast reads identically on the landing
     page and in the category. It also reuses crumb.*, collection.name,
     common.answersQuestions, book.readSample and the common.* store chrome above. */
  "browse.disclaimer": "Not an Amazon product. This category, its books, authors and ratings are fictional; controls are non-functional.",

  "browse.railAria": "Category",
  "browse.rail.sib1": "Arts & Literature",
  "browse.rail.sib2": "Historical",
  "browse.rail.sib3": "Leaders & Notable People",
  "browse.rail.sib4": "Memoirs",
  "browse.rail.sib5": "Regional",
  "browse.rail.sib6": "Specific Groups",
  "browse.rail.refineH": "Refine by",

  "browse.resultCount": "1-8 of 48 results",
  "browse.nodeIntro": "Books whose authors state, in their own words, that they lived the story and wrote it. Authors choose this category for their own book when they publish it. Amazon hosts each statement and doesn't certify it. Translation, including AI translation, is welcome.",

  "browse.card.h3": "The Lived Experience collection",
  /* WAS "A smaller, hand-picked view of this category" — retired 7/30 in the verification
     pass. "Hand-picked" is an editorial-selection claim, i.e. an endorsement, and it
     contradicted the very next line of copy ("being here is a place on the shelf, not a
     rating") as well as this page's whole argument that a category is a location and not a
     choice. It is also the same failure as the retired "verified human-written" badge (R3):
     Amazon vouching for something it never assessed. index.html shows the first eight of the
     same forty-eight books in the same order — nobody picked them — so the honest subtitle
     names the FORM the landing page takes, not a selection. */
  "browse.card.sub": "A landing page for this category, in the authors' own words",
  "browse.card.body": "Every book that qualifies is in this category, so being here is a place on the shelf, not a rating. The collection page introduces a few of these authors in their own words, and shows which of them have chosen to answer reader questions.",
  "browse.card.cta": "Browse the collection",

  "browse.pagerAria": "Results pages",
  "browse.pagerNext": "Next",

  "browse.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Entry point: a permanent category node rather than a merchandised row. A promotional slot has an expiration date (Chang, 7/24); a category doesn't, and its entry condition is one KDP already has — the author chooses the category, and attests. Non-price de-risking (Pablo, A5) appears here as a free sample and Kindle Unlimited on every row, at the moment of choosing — never as a discount.",
  "browse.credits2": "This category is a location, not an endorsement. Nothing here filters the store, ranks a book, or recommends one book from another; the left-rail refinements and the sort control are the Kindle Store's existing ones, reproduced unchanged. A Kindle Unlimited row could carry the collection during a launch window, but a launch vehicle is not an entry point, so it isn't built here.",

  /* ---------- search results ---------- */
  "search.disclaimer": "Not an Amazon product. These results are a fictional example; every book, author, and rating is invented and no control works. The order of the results is not part of this proposal.",
  "search.query": "memoir about leaving home",
  "search.resultCountHtml": "1-16 of over 800 results for <span class=\"q\">“memoir about leaving home”</span>",
  "search.sponsored": "Sponsored",
  "search.byPrefix": "by",

  "search.orderNoteLabel": "What this page does not change:",
  "search.orderNoteBody": "the order of these results. Nothing here is re-ranked, promoted, or filtered — we added no refinement to the left rail and no sort option — and the two collection titles below carry only the same “Part of:” line Amazon already prints for a book in a series, plus one line the author wrote.",

  /* Left rail. Amazon's existing refinements, reproduced unchanged — we added none. The
     department rows above the current node use crumb.store / crumb.ebooks / crumb.memoirs,
     and the shared refinement headings use the common.* store chrome above. */
  "search.rail.dept": "Department",
  "search.rail.deptChild1": "Memoirs",
  "search.rail.deptChild2": "Cultural Heritage",
  "search.rail.deptChild3": "Ethnic & National",
  "search.rail.deptChild4": "Travelers & Explorers",
  "search.rail.ku": "Kindle Unlimited",
  "search.rail.format": "Format",
  "search.rail.formatAudio": "Audiobook",
  "search.rail.formatPaper": "Paperback",
  "search.rail.formatHard": "Hardcover",
  "search.rail.reviewAndUp": "& Up",
  "search.rail.review4Aria": "4 stars and up",
  "search.rail.review3Aria": "3 stars and up",
  "search.rail.review2Aria": "2 stars and up",
  "search.rail.review1Aria": "1 star and up",
  "search.rail.price": "Price",
  "search.rail.priceUnder5": "Under $5",
  "search.rail.price5to10": "$5 to $10",
  "search.rail.price10to20": "$10 to $20",
  "search.rail.price20up": "$20 & Above",
  "search.rail.langEnglish": "English",
  "search.rail.langSpanish": "Spanish",
  "search.rail.langFrench": "French",
  "search.rail.langChinese": "Chinese",
  "search.rail.langArabic": "Arabic",
  "search.rail.seeMore": "See more",

  /* Fourteen invented filler results. Titles and names are NOT translated (header rule), the
     people are unspecified and take no gender inflection (rule b), and they are not personas:
     they carry no biography and appear on no other page. Positions 06 and 11 are the two
     collection titles and reuse index.book1.* and index.book5.*. */
  "search.r01.title": "The House on Winter Street",
  "search.r01.author": "Anne Prescott",
  "search.r01.starsAria": "4.5 out of 5 stars, 12,480 ratings",
  "search.r02.title": "Salt and Distance",
  "search.r02.author": "Michael Brandt",
  "search.r02.starsAria": "4.2 out of 5 stars, 3,109 ratings",
  "search.r03.title": "Everything I Left Behind",
  "search.r03.author": "Carol Whitfield",
  "search.r03.starsAria": "4.4 out of 5 stars, 87 ratings",
  "search.r04.title": "Departures: A Memoir",
  "search.r04.author": "Paul Ashby",
  "search.r04.starsAria": "4.0 out of 5 stars, 1,204 ratings",
  "search.r05.title": "Sixty Miles from Anywhere",
  "search.r05.author": "Janet Kroll",
  "search.r05.starsAria": "4.3 out of 5 stars, 640 ratings",
  "search.r07.title": "The Long Way Round",
  "search.r07.author": "Stephen Marek",
  "search.r07.starsAria": "4.1 out of 5 stars, 58 ratings",
  "search.r08.title": "A Door That Did Not Lock",
  "search.r08.author": "Helen Voss",
  "search.r08.starsAria": "4.6 out of 5 stars, 4,730 ratings",
  "search.r09.title": "After the Move",
  "search.r09.author": "Gregory Lyle",
  "search.r09.starsAria": "3.9 out of 5 stars, 909 ratings",
  "search.r10.title": "What the Suitcase Held",
  "search.r10.author": "Barbara Nell",
  "search.r10.starsAria": "4.2 out of 5 stars, 176 ratings",
  "search.r12.title": "Homesick for a Place That Changed",
  "search.r12.author": "Diane Cutler",
  "search.r12.starsAria": "4.4 out of 5 stars, 2,015 ratings",
  "search.r13.title": "The Year of Boxes",
  "search.r13.author": "Thomas Reyburn",
  "search.r13.starsAria": "4.0 out of 5 stars, 31 ratings",
  "search.r14.title": "Leaving: A Memoir in Essays",
  "search.r14.author": "Ruth Almond",
  "search.r14.starsAria": "4.3 out of 5 stars, 762 ratings",
  "search.r15.title": "Nobody Warned Me About the Quiet",
  "search.r15.author": "Frank Delahunt",
  "search.r15.starsAria": "4.5 out of 5 stars, 5,388 ratings",
  "search.r16.title": "The Country I Remember",
  "search.r16.author": "Marjorie Stane",
  "search.r16.starsAria": "4.2 out of 5 stars, 143 ratings",

  "search.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Collection membership is shown with Amazon's existing “Part of:” series line and nothing else — no new search UI, no refinement, no ranking change · Author-statement gate: Wanting's mechanism (7/27) · The no-algorithm-changes scope line: Chang 7/20, Rachel 7/23",
  "search.credits2": "Fourteen of these sixteen results are invented filler so that the two collection titles sit in an ordinary result list rather than a staged one. Those fourteen are not characters, personas, or research output; they carry no biography and appear on no other page."
};
