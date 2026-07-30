/* Lived Experience prototype — UI strings, Filipino (fil).
   Mirrors every key in strings.en.js.

   Notes for this locale:
   - Sa kuwento ng prototype, sa Tagalog unang isinulat ni Rosa Delgado ang
     libro. Kaya ang mga key na sarili niyang tinig (index.book1.voice,
     book.attest.quote, book.desc.*, author.bioHtml, author.qa1.a,
     author.qa2.a) ay orihinal, hindi salin.
   - Nananatiling Ingles ang store chrome na Ingles din ang binabasa ng
     mga Filipino: Search Kindle Store, Account & Lists, nav labels,
     Follow, Paperback, Kindle Edition, Screen Reader, On.
   - Brand names ay hindi isinasalin: Kindle, Kindle Store, Kindle Unlimited,
     KU, Amazon, KDP, Audible, 1-Click, StoryCorps.
   - Mga pamagat ng libro: HINDI isinasalin. Nananatiling Ingles ang "The Road
     from Manila", "The Unseen Memoir" at "Letters Home" — Ingles + Tagalog ang
     nakalista bilang wika ng libro, kaya ang saling pamagat ay nagpapahiwatig
     ng saling edisyong wala naman. Isinasalin ang store surface; ang libro ay
     nasa wika pa rin ng may-akda. Isinasalin pa rin ang pangalan ng koleksyon.
     Kapag nasa loob ng pangungusap ang pamagat, tiyaking tugma pa rin ang
     pang-angkop (ang/ng/na) sa paligid nito.
   - Ortograpiya: syncopated na anyo (koleksyon, bersyon, direksyon, kanyang),
     hindi ang mga anyong pre-1987 (koleksiyon, bersiyon, kaniyang). */

window.I18N = window.I18N || {};
window.I18N.fil = {

  /* ---------- document titles ---------- */
  "index.docTitle": "Lived Experience Collection — landing page (konsepto)",
  "book.docTitle": "The Road from Manila — detalye ng libro (konsepto)",
  "author.docTitle": "Rosa Delgado — pahina ng may-akda (konsepto)",

  /* ---------- shared chrome ---------- */
  "chrome.conceptLabel": "KONSEPTO NG ESTUDYANTE — COMMLD 560, UW.",
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
  "lang.label": "Wika",
  "lang.buttonAria": "Wika: {name}. Pumili ng ibang wika",
  "lang.menuAria": "Pumili ng wika",
  "lang.notice": "Nasa {name} ang pahinang ito.",
  "lang.noticeAction": "Basahin sa English",
  "lang.noticeDismissAria": "Isara ang mensaheng ito",

  /* ---------- breadcrumbs and shared labels ---------- */
  "crumb.store": "Kindle Store",
  "crumb.ebooks": "Kindle eBooks",
  "crumb.memoirs": "Biographies & Memoirs",
  "collection.name": "Lived Experience",
  "common.learnMore": "Matuto pa",
  "common.answersQuestions": "✓ Sumasagot sa mga tanong",
  "common.follow": "+ Follow",
  "common.partOf": "Bahagi ng:",

  /* ---------- index: collection landing ---------- */
  "index.disclaimer": "Hindi ito produkto ng Amazon. Kathang-isip ang mga libro, may-akda, at rating; hindi gumagana ang mga kontrol.",
  "index.kicker": "LIVED EXPERIENCE",
  "index.headline": "Mga kuwentong mula mismo sa mga nakaranas, sa sariling salita nila",
  "index.bannerH2": "Bawat libro dito ay nagsisimula sa sariling salita ng may-akda.",
  "index.bannerP": "Mga unang libro, mga kuwentong personal — at marami sa mga may-akdang ito ang piniling sagutin ang mga tanong ng mambabasa.",
  "index.gateNoteLabel": "Paano nakakapasok ang libro dito:",
  "index.gateNoteBody": "nagpapatunay ang may-akda, sa sariling salita, na siya mismo ang dumaan sa kuwentong ito at siya ang sumulat nito. Ini-host lang ng Amazon ang pahayag ng may-akda — hindi ito bineberipika ng Amazon. Tinatanggap ang mga salin, pati ang salin gamit ang AI.",

  "index.book1.title": "The Road from Manila",
  "index.book1.author": "Rosa Delgado",
  "index.book1.voice": "“Iniwan ko ang Maynila noong 1979. Sa Tagalog ko itong isinulat noong una, dahil iyon ang wika ng mga alaala ko.”",
  "index.book1.starsAria": "4.4 sa 5 na bituin, 214 na rating",
  "index.book1.coverAlt": "Pabalat ng librong The Road from Manila",

  "index.book2.title": "The Unseen Memoir",
  "index.book2.author": "Baguhang may-akda",
  "index.book2.voice": "“Apat na taon kong isinulat ito sa mesa ng kusina, tungkol sa taon na tumigil ako sa pagsasalita.”",
  "index.book2.starsAria": "4.3 sa 5 na bituin, 127 na rating",
  "index.book2.coverAlt": "Pabalat ng librong The Unseen Memoir",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "“Mga liham ito ng lola ko, at mga liham ko. Ako mismo ang nag-type ng bawat isa.”",
  "index.book3.starsAria": "4.5 sa 5 na bituin, 2,341 na rating",
  "index.book3.coverAlt": "Pabalat ng librong Letters Home",

  "index.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Gate ng pahayag ng may-akda: mekanismo ni Wanting (7/27) · Mga tier ng access mula mambabasa hanggang may-akda: konsepto ni Pablo (7/27) · Pagbabalangkas ng koleksyon: StoryCorps reframe ni Chang (7/24) · Pananaliksik sa community discovery para sa paglulunsad: Jalen (ginagawa pa)",
  "index.credits2": "Kathang-isip lang na halimbawa ang mga may-akda habang hinihintay ang open-text na datos ng aming survey — hindi sila mga persona. Ang profile ni Rosa Delgado ay hango sa dokumentadong diaspora ng mga Filipino nurse na nangibang-bansa (nasa PRD ang mga sanggunian), hindi sa gawa-gawang demograpikong datos.",

  /* ---------- book detail ---------- */
  "book.disclaimer": "Hindi ito produkto ng Amazon. Kathang-isip ang librong ito, ang may-akda nito, at lahat ng rating; hindi gumagana ang mga kontrol.",
  "book.title": "The Road from Manila",
  "book.bylinePrefix": "ni",
  "book.bylineAuthor": "Rosa Delgado",
  "book.bylineRole": "(May-akda)",
  "book.format": "Format: Kindle Edition",
  "book.starsAria": "4.4 sa 5 na bituin, 214 na rating",
  "book.partOfValue": "Lived Experience (48 na libro)",
  "book.coverAlt": "Pabalat ng librong The Road from Manila",
  "book.readSample": "Basahin",
  "book.audibleSample": "Audible sample",
  "book.visitAuthorPage": "Pahina ng may-akda",

  "book.attest.h3": "Sa sariling salita ng may-akda",
  "book.attest.quote": "“Iniwan ko ang Maynila noong 1979, may isang maleta at ang rosaryo ni Nanay. Hindi ako manunulat — naging nurse ako nang tatlumpu’t isang taon. Sa Tagalog ko itong isinulat noong una, dahil iyon ang wika ng mga alaala ko, at kami ng pamangkin ko ang nagsalin nito sa tulong ng isang translation tool. Akin ang bawat salita ng kuwentong ito. Ako ang dumaan dito.”",
  "book.attest.sigName": "Rosa Delgado, pahayag ng may-akda",
  "book.attest.sigLink": "Ano ang mangyayari kung hindi totoo ang pahayag",
  "book.attest.sigBody": "Kapag hindi totoo ang pahayag, inaalis ang libro sa koleksyon; sinasailalim ang account sa kasalukuyang content policies ng KDP — walang bagong sistema ng pagpapatupad.",
  "book.attest.translationNote": "Ito ang mismong mga salita ni Rosa, sa wikang ginamit niya nang isulat ito. Salin ang bersyong Ingles.",

  "book.desc.lede": "Dahil ang bawat karaniwang buhay ay may kuwentong hindi karaniwan, at karapat-dapat itong tandaan.",
  "book.desc.p1Html": "Noong 1979, sumakay ng eroplano sa Maynila si Rosa Delgado, may hawak na nursing contract at isang maleta, walang kaalam-alam na labing-isang taon pa ang lilipas bago niya muling makita ang kanyang ina. Ang <em>The Road from Manila</em> ay kuwento ng mga taon sa pagitan — mga night shift sa bansang kailangan pa niyang isalin ang wika nito, kahit sa panaginip; mga padalang nakatupi sa loob ng birthday card; at ang mabagal na pagbuo ng tahanan habang nangungulila sa tahanang iniwan.",
  "book.desc.p2": "Ang memoir na ito, na isinulat muna sa Tagalog at isinalin kasama ang pamangkin niya, ay para sa sinumang umalis — at sa sinumang naiwan.",

  "book.meta.pagesValue": "287 na pahina",
  "book.meta.pagesLabel": "Bilang ng pahina",
  "book.meta.langValue": "English + Tagalog",
  "book.meta.langLabel": "Wika",
  "book.meta.a11yValue": "Suportado",
  "book.meta.a11yLabel": "Screen Reader",
  "book.meta.dateValue": "Marso 2026",
  "book.meta.dateLabel": "Petsa ng paglabas",

  "book.ask.h3": "Magtanong kay Rosa",
  "book.ask.sub": "Pinili ito ng may-akda · Sumasagot linggo-linggo",
  "book.ask.tier1Label": "Mga tanong tungkol sa libro",
  "book.ask.tier1Body": "Isang tanong kada mambabasa kada libro, bukas sa mga verified purchase at KU borrow. Walang lumalabas sa publiko hangga’t hindi ipinopost ni Rosa ang sagot niya.",
  "book.ask.tier2Label": "Live Q&A sa mga mambabasa",
  "book.ask.tier2Body": "Paminsan-minsang live session, itinatakda ng may-akda.",
  "book.ask.note": "Ang may-akda ang pumipili ng antas ng access — pati ang walang access — at maaari niyang baguhin ito anumang oras. Ang may-akda ang nagmomoderate bilang default: siya ang nakakakita, sumasagot, o nagdedelete; gumagamit ito ng kasalukuyang report-and-block na tool ng Community Guidelines ng Amazon. Hindi kailanman ibinabahagi ang contact details.",

  "book.buy.formatKindle": "Kindle",
  "book.buy.orBuy": "o bilhin sa $4.99",
  "book.buy.formatPaperback": "Paperback",
  "book.buy.kuPitch": "Walang hangganang pagbabasa. Milyong titulo.",
  "book.buy.readFree": "Magbasa nang Libre",
  "book.buy.or": "OR",
  "book.buy.oneClick": "Bilhin gamit ang 1-Click",
  "book.buy.sendSample": "Ipadala ang libreng sample",

  "book.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Gate ng pahayag ng may-akda: mekanismo ni Wanting (7/27) · Mga tier ng access: konsepto ni Pablo (7/27) · Pagiging kuwalipikado sa “Tinatanggap ang salin”: pananaliksik ng team sa AI-content policy ng KDP (7/27)",

  /* ---------- author page ---------- */
  "author.disclaimer": "Hindi ito produkto ng Amazon. Kathang-isip ang may-akdang ito at lahat ng nilalaman; hindi gumagana ang mga kontrol.",
  "author.name": "Rosa Delgado",
  "author.tabHome": "HOME",
  "author.tabAbout": "ABOUT",
  "author.tabBooks": "ALL BOOKS",
  "author.aboutH2": "Tungkol sa may-akda",
  "author.bioHtml": "Naging nurse si Rosa Delgado nang tatlumpu’t isang taon, sa Maynila at kalaunan sa Chicago. Ang <em>The Road from Manila</em> ang kanyang unang libro, isinulat sa Tagalog at isinalin kasama ang kanyang pamangkin. Hindi niya pinlanong maging manunulat; pinlano niyang huwag makalimot. Nakatira siya malapit sa kanyang mga apo, na siyang dahilan kung bakit nasulat ang librong ito.",

  "author.qaH2": "Mga tanong ng mambabasa kay Rosa",
  "author.qLabel": "Tanong:",
  "author.aLabel": "Sagot:",
  "author.answeredBy": "Sinagot ni Rosa Delgado, may-akda",
  "author.qa1.q": "Naisip po ba ninyong umuwi na nang tuluyan?",
  "author.qa1.a": "Tuwing Disyembre, sa unang sampung taon. Pero may isang taon na napansin ko na nangungulila ako sa dalawang panig, at naunawaan kong dalawa na ang tahanan ko. Iyon ang paksa ng chapter 14.",
  "author.qa2.q": "Ano po ang nabago sa libro dahil sa Tagalog ninyo itong isinulat noong una?",
  "author.qa2.a": "Lahat. May mga alaalang nabubuhay lang sa wikang kinaganapan nito. Nagtalo kami ng pamangkin ko sa bawat pangungusap ng salin, at sa pagtatalong iyon naging tapat ang libro.",

  "author.popularH2": "Pinakasikat",
  "author.bookTitle": "The Road from Manila",
  "author.starsAria": "4.4 sa 5 na bituin, 214 na rating",
  "author.orBuy": "o bilhin sa $4.99",
  "author.partOfValue": "Lived Experience",
  "author.coverAlt": "Pabalat ng librong The Road from Manila",

  "author.access.h3": "Mga access setting ni Rosa",
  "author.access.sub": "Pinili ng may-akda · Mababago anumang oras",
  "author.access.tier1Label": "Mga tanong tungkol sa libro",
  "author.access.tier1State": "On",
  "author.access.tier1Body": "Sumasagot linggo-linggo; walang lumalabas sa publiko hangga’t hindi ito ipinopost ni Rosa.",
  "author.access.tier2Label": "Live Q&A sa mga mambabasa",
  "author.access.tier2State": "On",
  "author.access.tier2Body": "Paminsan-minsan, itinatakda ng may-akda.",
  "author.access.tier3Label": "Walang access",
  "author.access.tier3State": "Bukas sa kahit sinong may-akda",
  "author.access.tier3Body": "Maaaring i-off ng may-akda ang lahat at manatili pa rin sa koleksyon.",
  "author.access.note": "Nasa may-akda ang pasya sa access, bawat tier. Walang private messaging sa anumang tier — sadyang wala ito, para sa kaligtasan ng may-akda. Sa author page ngayon, isa lang ang puwedeng gawin ng mambabasa — Follow, isang direksyon lang. Ang panel na ito ang nawawalang kalahati.",

  "author.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Mga tier ng access: konsepto ni Pablo (7/27) · Gate ng pahayag ng may-akda: mekanismo ni Wanting (7/27) · Pagbabalangkas gamit ang StoryCorps: Chang (7/24)"
};
