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
     nasa wika pa rin ng may-akda. Kapag nasa loob ng pangungusap ang pamagat,
     tiyaking tugma pa rin ang pang-angkop (ang/ng/na) sa paligid nito.
   - ANG PANGALAN NG KOLEKSYON ay nananatiling "Lived Experience" sa locale na ito,
     hindi tulad ng es/zh/ar na isinasalin ito. Dahilan: ito rin ang pangalan ng isang
     kategorya sa store tree (tingnan ang rail ng browse.html), at ang mga pangalan ng
     kategorya ay nananatiling Ingles dito — tingnan ang tala sa TAKSONOMYA sa ibaba.
     Isang pangalan lang ang dapat nitong taglayin: kung isasalin ito, isalin din ang
     collection.name, index.kicker, book.partOfValue, author.partOfValue at
     browse.card.h3 nang sabay-sabay. (Naitama ang talang ito noong 7/30: dating
     sinasabi nitong isinasalin ang pangalan, samantalang hindi naman.)
   - Ortograpiya: syncopated na anyo (koleksyon, bersyon, direksyon, kanyang),
     hindi ang mga anyong pre-1987 (koleksiyon, bersiyon, kaniyang).
   - TAKSONOMYA NG STORE. Walang Amazon storefront sa Filipino — Ingles ang binabasa
     ng mga Filipino sa Kindle Store. Kaya ang mga pangalan ng kategorya at ang mga
     heading at value ng refinement ay nananatiling Ingles, tulad ng ginawa na sa
     crumb.memoirs ("Biographies & Memoirs"): Department, Format, Price, Language,
     Refine by, Sort by:, Featured, Avg. Customer Review, Paperback, Hardcover,
     Audiobook, "& Up", "Under $5", at ang mga pangalan ng wika. HINDI ito pagtatamad:
     ang pagsasalin ng mga ito ay paglikha ng bagong pangalan ng kategoryang wala
     naman sa Amazon. Isinasalin naman ang lahat ng aksyon, bilang, pangungusap at
     teksto para sa screen reader — iyon ang nagsasalita sa mambabasa, hindi sa store.
     Ganito rin naman talaga ang hitsura ng Filipino na UI: Ingles ang pangngalang
     teknikal, Filipino ang nagdurugtong.
   - Ang query sa "search.query" at ang nakapanipi sa "search.resultCountHtml" ay
     iisang query at magkatugmang isinalin. */

window.I18N = window.I18N || {};
window.I18N.fil = {

  /* ---------- document titles ---------- */
  "index.docTitle": "Lived Experience Collection — landing page (konsepto)",
  "book.docTitle": "The Road from Manila — detalye ng libro (konsepto)",
  "author.docTitle": "Rosa Delgado — pahina ng may-akda (konsepto)",
  "browse.docTitle": "Lived Experience — pahina ng kategorya (konsepto)",
  "search.docTitle": "memoir tungkol sa pag-alis sa tahanan — mga resulta ng paghahanap (konsepto)",

  /* ---------- shared chrome ---------- */
  "chrome.conceptLabel": "KONSEPTO NG ESTUDYANTE — <span lang=\"en\" dir=\"ltr\">Inclusive Design &amp; Product Equity (COMMLD 560), UW.</span>",
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
  "chrome.skipToContent": "Lumaktaw sa pangunahing nilalaman",
  "chrome.subnavAria": "Mga seksyon ng tindahan",
  "chrome.breadcrumbAria": "Breadcrumb",
  "search.railAria": "Pinuhin ang mga resulta",

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

  /* Store chrome na ginagamit ng search.html at browse.html. Nananatiling Ingles —
     ito ang mga label ng Amazon mismo, hindi atin, at Ingles ang nakikita ng
     Filipinong mamimili sa Kindle Store. Hiwalay ang common.kindleEdition sa
     book.format ("Format: Kindle Edition") — magkaibang string, huwag pagsamahin. */
  "common.kindleEdition": "Kindle Edition",
  "common.kuEligible": "Kindle Unlimited Eligible",
  "common.avgReview": "Avg. Customer Review",
  "common.languageLabel": "Language",
  "common.sortLabel": "Sort by:",
  "common.sortFeatured": "Featured",

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
  "index.book2.author": "Marion Hale",
  "index.book2.voice": "“Apat na taon kong isinulat ito sa mesa ng kusina, tungkol sa taon na tumigil ako sa pagsasalita.”",
  "index.book2.starsAria": "4.3 sa 5 na bituin, 127 na rating",
  "index.book2.coverAlt": "Pabalat ng librong The Unseen Memoir",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "“Mga liham ito ng lola ko, at mga liham ko. Ako mismo ang nag-type ng bawat isa.”",
  "index.book3.starsAria": "4.5 sa 5 na bituin, 2,341 na rating",
  "index.book3.coverAlt": "Pabalat ng librong Letters Home",

  "index.book4.title": "The Last Ninety Acres",
  "index.book4.author": "Dale Whitcomb",
  "index.book4.voice": "“Apat na henerasyon ang nagsaka sa lupaing ito. Isinulat ko ang taon na nawala ito sa amin, dahil walang ibang magsusulat nito.”",
  "index.book4.starsAria": "4.2 sa 5 na bituin, 86 na rating",
  "index.book4.coverAlt": "Pabalat ng librong The Last Ninety Acres",

  "index.book5.title": "Eleven Addresses",
  "index.book5.author": "Terrance Boyd",
  "index.book5.voice": "“Labing-isang bahay sa loob ng anim na taon nang makalabas ako ng bilangguan. Halos lahat nito ay sinulat ko sa computer ng library, isang oras lang bawat pagkakataon.”",
  "index.book5.starsAria": "4.6 sa 5 na bituin, 438 na rating",
  "index.book5.coverAlt": "Pabalat ng librong Eleven Addresses",

  "index.book6.title": "Loud in Here",
  "index.book6.author": "Nadia Haddad",
  "index.book6.voice": "“Bingi ako mula noong apat na taong gulang ako. Ito ang totoong pakiramdam ng isang tahimik na bahay, mula sa loob.”",
  "index.book6.starsAria": "4.4 sa 5 na bituin, 309 na rating",
  "index.book6.coverAlt": "Pabalat ng librong Loud in Here",

  "index.book7.title": "Sixteen Hundred Miles a Week",
  "index.book7.author": "Ray Okonkwo",
  "index.book7.voice": "“Hindi ako marunong mag-spelling, talaga. Dinikta ko ang librong ito sa telepono ko habang nagmamaneho mula Laredo hanggang Toledo.”",
  "index.book7.starsAria": "4.1 sa 5 na bituin, 52 na rating",
  "index.book7.coverAlt": "Pabalat ng librong Sixteen Hundred Miles a Week",

  "index.book8.title": "Coming Back Slow",
  "index.book8.author": "Deborah Aoki",
  "index.book8.voice": "“Nagka-stroke ako sa edad na limampu’t isa. Dalawang taon bago ako muling nakasulat. Apat na taon bago natapos ang librong ito.”",
  "index.book8.starsAria": "4.7 sa 5 na bituin, 1,608 na rating",
  "index.book8.coverAlt": "Pabalat ng librong Coming Back Slow",

  /* Ang balik-daan mula sa landing page patungo sa category node na tinatanaw nito. Simpleng
     "tingnan lahat" na text link, gaya ng inilalagay ng Amazon sa ilalim ng isang grid —
     hindi button, at hindi "higit pang katulad nito", dahil rekomendasyon na iyon. */
  "index.seeAll": "Tingnan ang lahat ng 48 na libro sa kategoryang ito",

  "index.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Gate ng pahayag ng may-akda: mekanismo ni Wanting (7/27) · Mga tier ng access mula mambabasa hanggang may-akda: konsepto ni Pablo (7/27) · Pagbabalangkas ng koleksyon: StoryCorps reframe ni Chang (7/24) · Pananaliksik sa community discovery para sa paglulunsad: Jalen (ginagawa pa)",
  "index.credits2": "Kathang-isip lang na halimbawa ang mga may-akda habang hinihintay ang open-text na datos ng aming survey — hindi sila mga persona. Ang profile ni Rosa Delgado ay hango sa dokumentadong diaspora ng mga Filipino nurse na nangibang-bansa (nasa PRD ang mga sanggunian), hindi sa gawa-gawang demograpikong datos.",
  "index.credits3": "May mga tunay nang libro sa KDP na nabibilang sa koleksyong ito; nariyan na ang istante, ang wala pa ay paraan para libutin ito. Kathang-isip pa rin ang mga pamagat na ito dahil ang may-akda mismo ang nagbibigay ng access na makikita rito, at wala pang tunay na may-akda ang nagbigay niyon — ang ilagay ang pangalan ng isang nabubuhay na may-akda katabi ng antas ng access na hindi niya pinayagan ay kabaligtaran ng ideya. Ang imbentong teksto rin ang nagbibigay-daan sa mga estadong wala sa tunay na listing, sa anim na wika, nang hindi binabago ang sariling salita ninuman.",

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

  /* Ang "See more" na bumubukas sa ilalim ng lagda. Ginagamit ulit ang
     book.attest.sigLink bilang label ng button — walang "Show less", ang caret at
     ang aria-expanded na ang nagsasabi ng estado. Walang binabanggit dito na review
     queue, trust team, appeals board, hakbang ng beripikasyon, o anumang pagsusuri ng
     Amazon kung totoo ang kuwento; lahat ng inilalarawan ay patakaran nang umiiral
     sa KDP. */
  "book.attest.false.h": "Kung mapatunayang hindi totoo ang isang pahayag",
  "book.attest.false.p1": "Itinuturing ang pahayag na tulad ng anumang isinusulat ng may-akda sa sarili niyang detail page. Kapag naiulat ito at nakita ng KDP na labag ito sa content guidelines na pinasukan na ng account, inaalis ang libro sa koleksyon at hinaharap ang account gaya ng paghawak sa alinmang paglabag sa guidelines — hanggang sa pagkawala ng access sa paglalathala. Walang bagong ginawa para dito.",
  "book.attest.false.p2": "Iniuulat ito ng mambabasa gamit ang report control na mayroon na ang Amazon. Ipinapatupad ng KDP ang mga patakarang ipinapatupad na nito. Walang hiwalay na review board dito, walang queue na inimbento namin, walang proseso ng apela na gawa-gawa namin, at walang score na ikinakabit sa may-akda.",
  "book.attest.false.p3": "Sabihin nating diretso ang hangganan: hindi alam ng Amazon kung totoo ang isang kuwento, at wala itong paraan para malaman. Walang sinusuri dito na alaala, petsa, o buhay. Iyan mismo ang dahilan kung bakit nananatili ang pahayag sa sariling salita ng may-akda, nakapangalan sa kanya, at kung bakit walang selyo ng Amazon sa tabi nito — pangakong hindi kayang tuparin ng Amazon ang isang selyo. Ang kayang aksyunan ay ang pahayag na mapapatunayang gawa-gawa, gaya rin ng anumang maling pahayag sa alinmang listing.",
  "book.attest.false.p4": "Kaya ang pag-uulat na mismo ang buong mekanismo. Hindi ito pangako ng resulta, at hindi ka bibigyan ng ulat kung ano na ang nangyari dito.",
  "book.attest.false.reportLink": "Iulat ang nilalamang ito",

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

  "book.ask.h3": "Tapos na ang libro? Magtanong kay Rosa",
  /* INALIS na ang book.ask.sub noong 7/30, sabay-sabay sa limang locale file gaya ng hiling
     ng sarili nitong tala. Nangangako ito ng kadalasan ng pagsagot na walang sumusukat;
     pinalitan ito ng book.ask.subState, na binibilang ang isang bagay na talagang nakikita
     ng Amazon. */
  "book.ask.subState": "Pinili ito ng may-akda · 9 sa 14 na tanong ng mambabasa ang nasagot",
  "book.ask.tier1Label": "Mga tanong tungkol sa libro",
  "book.ask.tier1Body": "Isang tanong kada mambabasa kada libro, bukas sa mga verified purchase at KU borrow. Walang lumalabas sa publiko hangga’t hindi ipinopost ni Rosa ang sagot niya.",
  "book.ask.tier2Label": "Live Q&A sa mga mambabasa",
  "book.ask.tier2Body": "Paminsan-minsang live session, itinatakda ng may-akda.",
  "book.ask.note": "Ang may-akda ang pumipili ng antas ng access — pati ang walang access — at maaari niyang baguhin ito anumang oras. Ang may-akda ang nagmomoderate bilang default: siya ang nakakakita, sumasagot, o nagdedelete; gumagamit ito ng kasalukuyang report-and-block na tool ng Community Guidelines ng Amazon. Hindi kailanman ibinabahagi ang contact details.",

  /* Ang daloy ng pagtatanong, estado bawat estado. Kalahati ng mga string na ito ay
     nariyan para sabihing walang mangyayari: walang ipinapangakong sagot, walang
     ibinibigay na tagal, walang mahihingian ng aksyon sa itaas. Huwag palambutin ang
     "hindi namin alam" tungo sa "malapit na". Si Rosa Delgado ang tinutukoy sa buong
     bahaging ito. */
  "book.ask.startBtn": "Magtanong",

  "book.ask.composeLabel": "Ang tanong mo para kay Rosa",
  "book.ask.composeHint": "Hanggang 300 karakter. Magtanong tungkol sa libro, o sa buhay na pinagmulan nito.",
  "book.ask.composeTerms": "Ito ang iisang tanong mo para sa librong ito. Nakikita ito ni Rosa, at maaari niya itong sagutin o burahin. Walang lumalabas sa Amazon mula sa isinulat mo maliban kung ilalathala niya ang sagot niya kasama nito. Walang private messaging dito sa kahit anong antas — wala para sa iyo at wala para sa kanya — at hindi ipinapakita sa inyong dalawa ang contact details ng isa’t isa.",
  "book.ask.composeSend": "Ipadala ang tanong",
  "book.ask.composeCancel": "Kanselahin",
  "book.ask.composeEmpty": "Isulat muna ang tanong mo.",

  "book.ask.sentH": "Naipadala ang tanong kay Rosa",
  "book.ask.sentBody": "Nasa kanya na ito. Siya mismo ang nagmomoderate ng mga tanong sa kanya: maaari niya itong sagutin, o burahin, at hindi siya obligadong gawin ang alinman.",
  "book.ask.sentNoEta": "Hindi namin sinasabi kung kailan mo aasahan ang sagot, dahil hindi namin alam. Walang ipinapangakong tagal ng pagsagot dito, at wala rin kaming nasukat na ganoon.",
  "book.ask.sentWhere": "Kung sasagot siya, magkasamang lalabas ang sagot niya at ang tanong mo sa author page niya.",
  "book.ask.sentWhereLink": "Tingnan ang mga nasagot na tanong",
  "book.ask.sentDone": "Tapos",

  "book.ask.waitH": "Nasa kay Rosa ang tanong mo",
  "book.ask.waitSent": "Itinanong mo ito noong 12 Marso 2026. Hindi pa ito nasasagot.",
  "book.ask.waitQLabel": "Ang tanong mo:",
  "book.ask.waitTruth": "Maaaring manatili itong ganito. May mga tanong na hindi nasasagot kailanman, at maaaring burahin ni Rosa ang isang tanong nang hindi sumasagot at hindi nagpapaliwanag kung bakit. Hindi siya hinahabol ng Amazon, hindi ito iniaakyat ng Amazon kaninuman, at hindi sumasagot ang Amazon para sa kanya.",
  "book.ask.waitPublic": "Hindi pampubliko ang anumang isinulat mo.",
  "book.ask.waitWithdraw": "Bawiin ang tanong ko",
  "book.ask.waitWithdrawNote": "Ang pagbawi ay pagbura nito. Puwede kang sumulat ng iba pagkatapos.",

  "book.ask.answeredH": "Sinagot ni Rosa ang tanong mo",
  "book.ask.answeredBody": "Inilathala niya ang tanong mo kasama ang sagot niya sa author page niya, kaya mababasa na ng ibang mambabasa ang dalawa.",
  "book.ask.answeredLink": "Basahin ang sagot niya",
  "book.ask.answeredQuota": "Iyon ang iisang tanong mo para sa librong ito.",

  "book.ask.reportLink": "Iulat ang problema sa tanong o sagot na ito",

  "book.ask.ineligibleH": "Bukas ang pagtatanong sa mga bumabasa ng librong ito",
  "book.ask.ineligibleBody": "Bilhin ito o hiramin sa Kindle Unlimited at bubukas dito ang kahon ng tanong. Ito rin ang parehong check na ginagamit na ng Amazon para markahang verified purchase ang isang review.",
  "book.ask.ineligibleWhy": "Para kay Rosa ang check na ito, hindi para sa amin. Kung wala ito, ang kahon ng tanong ng isang may-akda ay nagiging contact form na bukas sa buong internet — at ang mga may-akdang pinakamalamang tirahin doon ay sila rin ang dahilan kung bakit itinayo ang koleksyong ito.",
  "book.ask.ineligibleWhere": "Nasa kahon malapit sa itaas ng pahinang ito ang mga paraan ng pagbili at panghihiram.",

  "book.ask.offH": "Hindi muna tumatanggap ng tanong si Rosa",
  "book.ask.offBody": "In-off niya ang mga tanong ng mambabasa. Maaari niya itong ibalik; maaari ring hindi. Alinman doon, nananatili ang libro sa koleksyon at nananatili sa pahinang ito ang pahayag niya — kanya nang simula pa ang pasya sa access, at walang nawawala sa kanya dito kapag in-off niya ito.",
  "book.ask.offNoAlt": "Wala nang ibang paraan para maabot siya sa Amazon, at sinadya iyon.",

  "book.ask.offAfterH": "Sarado na ang pagtatanong para sa librong ito",
  "book.ask.offAfterBody": "In-off ni Rosa ang mga tanong ng mambabasa pagkatapos mong magtanong. Hindi kailanman nailathala ang tanong mo at hindi na ito masasagot; nabura ito kasama ng iba pang bukas na tanong.",

  "book.ask.errorH": "Hindi naipadala ang tanong mo",
  "book.ask.errorBody": "May nasira sa panig namin, hindi sa panig mo. Nandiyan pa rin ang draft mo.",
  "book.ask.errorRetry": "Subukan ulit",
  "book.ask.errorDiscard": "Itapon ang draft",

  /* Mga anunsyo sa live region. Para lang sa screen reader, kahit hindi "Aria" ang key. */
  "book.ask.liveSent": "Naipadala ang tanong. Walang lalabas sa publiko hangga’t hindi ilinalathala ni Rosa ang sagot niya.",
  "book.ask.liveWithdrawn": "Nabawi at nabura na ang tanong mo.",
  "book.ask.liveLimit": "Naabot mo na ang hangganang 300 karakter.",
  "book.ask.liveEmpty": "Isulat muna ang tanong mo.",
  "book.ask.liveError": "Hindi naipadala ang tanong mo. Nanatili ang draft mo.",

  "book.ask.mockNote": "Paalala sa prototype: walang ipinapadala kahit saan. Nandito ang daloy na ito para mabasa ang bawat estado — pati ang mga estadong walang nangyayari.",

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
  /* Dating "Sumasagot linggo-linggo". Inalis na ang pangakong iyon sa book.html — walang
     sumusukat ng kadalasan. Ginamit dito ang parehong bilang na ipinapakita ng
     book.ask.subState, para iisa ang sinasabi ng dalawang pahina. */
  "author.access.tier1Body": "9 sa 14 na tanong ng mambabasa ang nasagot; walang lumalabas sa publiko hangga’t hindi ito ipinopost ni Rosa.",
  "author.access.tier2Label": "Live Q&A sa mga mambabasa",
  "author.access.tier2State": "On",
  "author.access.tier2Body": "Paminsan-minsan, itinatakda ng may-akda.",
  "author.access.tier3Label": "Walang access",
  "author.access.tier3State": "Bukas sa kahit sinong may-akda",
  "author.access.tier3Body": "Maaaring i-off ng may-akda ang lahat at manatili pa rin sa koleksyon.",
  "author.access.note": "Nasa may-akda ang pasya sa access, bawat tier. Walang private messaging sa anumang tier — sadyang wala ito, para sa kaligtasan ng may-akda. Sa author page ngayon, isa lang ang puwedeng gawin ng mambabasa — Follow, isang direksyon lang. Ang panel na ito ang nawawalang kalahati.",

  "author.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Mga tier ng access: konsepto ni Pablo (7/27) · Gate ng pahayag ng may-akda: mekanismo ni Wanting (7/27) · Pagbabalangkas gamit ang StoryCorps: Chang (7/24)",

  /* ---------- browse: ang category node (pasukan) ---------- */
  /* Walang sariling string ng libro ang pahinang ito: ang walong row ay gumagamit ng
     index.bookN.title / .author / .voice / .coverAlt / .starsAria, para pareho ang
     pagbasa sa cast sa landing page at sa kategorya. Ginagamit din nito ang crumb.*,
     collection.name, common.answersQuestions, book.readSample at ang common.* na store
     chrome sa itaas. */
  "browse.disclaimer": "Hindi ito produkto ng Amazon. Kathang-isip ang kategoryang ito at ang mga libro, may-akda at rating dito; hindi gumagana ang mga kontrol.",

  "browse.railAria": "Kategorya",
  "browse.rail.sib1": "Arts & Literature",
  "browse.rail.sib2": "Historical",
  "browse.rail.sib3": "Leaders & Notable People",
  "browse.rail.sib4": "Memoirs",
  "browse.rail.sib5": "Regional",
  "browse.rail.sib6": "Specific Groups",
  "browse.rail.refineH": "Refine by",

  "browse.resultCount": "1-8 sa 48 na resulta",
  "browse.nodeIntro": "Mga librong ang may-akda mismo ang nagsasabi, sa sariling salita, na siya ang dumaan sa kuwento at siya rin ang sumulat nito. Ang may-akda ang pumipili ng kategoryang ito para sa sarili niyang libro kapag inilathala niya ito. Ini-host ng Amazon ang bawat pahayag at hindi ito bineberipika. Tinatanggap ang mga salin, pati ang salin gamit ang AI.",

  "browse.card.h3": "Ang koleksyong Lived Experience",
  /* Dating "Mas maliit at piling-pili na bahagi". Ang "piling-pili" ay pag-angkin na may
     pumili — pag-eendoso — at kontra pa sa mismong susunod na linya ("puwesto sa istante,
     hindi marka ng kalidad"). Ang ipinapakita ng index.html ay ang unang walo sa parehong
     apatnapu't walong libro, sa parehong pagkakasunod: walang pumili. */
  "browse.card.sub": "Pahinang panimula para sa kategoryang ito, sa sariling salita ng mga may-akda",
  "browse.card.body": "Nasa kategoryang ito ang bawat librong kuwalipikado, kaya ang pagiging nandito ay puwesto sa istante, hindi marka ng kalidad. Ipinapakilala ng pahina ng koleksyon ang ilan sa mga may-akdang ito sa sarili nilang salita, at ipinapakita kung sino sa kanila ang piniling sumagot sa mga tanong ng mambabasa.",
  "browse.card.cta": "Tingnan ang koleksyon",

  "browse.pagerAria": "Mga pahina ng resulta",
  "browse.pagerNext": "Susunod",

  "browse.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Pasukan: permanenteng category node, hindi merchandised row. May petsa ng pagkatapos ang isang promotional slot (Chang, 7/24); ang kategorya, wala — at ang kondisyon sa pagpasok dito ay mayroon na ang KDP: ang may-akda ang pumipili ng kategorya, at nagpapatunay. Ang hindi-nakabatay-sa-presyong pagpapagaan ng panganib sa pagbili (Pablo, A5) ay lumalabas dito bilang libreng sample at Kindle Unlimited sa bawat row, sa mismong sandali ng pagpili — hindi kailanman bilang diskuwento.",
  "browse.credits2": "Ang kategoryang ito ay lugar, hindi endorso. Walang anuman dito ang nagsasala sa store, nagra-rank ng libro, o nagrerekomenda ng isang libro batay sa iba; ang mga refinement sa kaliwang rail at ang sort control ay iyon mismong mayroon na ang Kindle Store, kinopya nang walang binago. Puwedeng dalhin ng isang Kindle Unlimited row ang koleksyon sa panahon ng paglulunsad, pero ang sasakyan ng paglulunsad ay hindi pasukan, kaya hindi ito ginawa dito.",

  /* ---------- mga resulta ng paghahanap ---------- */
  "search.disclaimer": "Hindi ito produkto ng Amazon. Kathang-isip na halimbawa ang mga resultang ito; imbento ang bawat libro, may-akda at rating, at walang kontrol na gumagana. Hindi bahagi ng panukalang ito ang pagkakasunod-sunod ng mga resulta.",
  "search.query": "memoir tungkol sa pag-alis sa tahanan",
  "search.resultCountHtml": "1-16 sa mahigit 800 na resulta para sa <span class=\"q\">“memoir tungkol sa pag-alis sa tahanan”</span>",
  "search.sponsored": "Sponsored",
  "search.byPrefix": "ni",

  "search.orderNoteLabel": "Ang hindi binabago ng pahinang ito:",
  "search.orderNoteBody": "ang pagkakasunod-sunod ng mga resultang ito. Walang ini-rerank, itinutulak, o sinasala dito — wala kaming idinagdag na refinement sa kaliwang rail at wala kaming idinagdag na sort option — at ang dalawang pamagat mula sa koleksyon sa ibaba ay may dala lang na iisang linyang “Bahagi ng:” na inilalagay na ng Amazon para sa librong bahagi ng serye, kasama ang isang linyang isinulat mismo ng may-akda.",

  /* Kaliwang rail. Ang mga umiiral nang refinement ng Amazon, kinopya nang walang
     binago — wala kaming idinagdag. Ingles ang mga heading at value dahil taksonomya
     ito ng store, hindi atin (tingnan ang tala sa itaas); Filipino ang mga aria at
     ang mga link ng aksyon, dahil sa mambabasa iyon nagsasalita. Ginagamit ng mga
     department row sa itaas ng kasalukuyang node ang crumb.store / crumb.ebooks /
     crumb.memoirs. */
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
  "search.rail.review4Aria": "4 na bituin pataas",
  "search.rail.review3Aria": "3 na bituin pataas",
  "search.rail.review2Aria": "2 na bituin pataas",
  "search.rail.review1Aria": "1 bituin pataas",
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
  "search.rail.seeMore": "Tingnan pa",

  /* Labing-apat na imbentong panakip na resulta. HINDI isinasalin ang mga pamagat at
     pangalan (tuntunin sa header), at hindi sila mga persona: wala silang talambuhay
     at wala silang lalabas sa ibang pahina. Ang posisyon 06 at 11 ang dalawang pamagat
     mula sa koleksyon, at gumagamit sila ng index.book1.* at index.book5.*. */
  "search.r01.title": "The House on Winter Street",
  "search.r01.author": "Anne Prescott",
  "search.r01.starsAria": "4.5 sa 5 na bituin, 12,480 na rating",
  "search.r02.title": "Salt and Distance",
  "search.r02.author": "Michael Brandt",
  "search.r02.starsAria": "4.2 sa 5 na bituin, 3,109 na rating",
  "search.r03.title": "Everything I Left Behind",
  "search.r03.author": "Carol Whitfield",
  "search.r03.starsAria": "4.4 sa 5 na bituin, 87 na rating",
  "search.r04.title": "Departures: A Memoir",
  "search.r04.author": "Paul Ashby",
  "search.r04.starsAria": "4.0 sa 5 na bituin, 1,204 na rating",
  "search.r05.title": "Sixty Miles from Anywhere",
  "search.r05.author": "Janet Kroll",
  "search.r05.starsAria": "4.3 sa 5 na bituin, 640 na rating",
  "search.r07.title": "The Long Way Round",
  "search.r07.author": "Stephen Marek",
  "search.r07.starsAria": "4.1 sa 5 na bituin, 58 na rating",
  "search.r08.title": "A Door That Did Not Lock",
  "search.r08.author": "Helen Voss",
  "search.r08.starsAria": "4.6 sa 5 na bituin, 4,730 na rating",
  "search.r09.title": "After the Move",
  "search.r09.author": "Gregory Lyle",
  "search.r09.starsAria": "3.9 sa 5 na bituin, 909 na rating",
  "search.r10.title": "What the Suitcase Held",
  "search.r10.author": "Barbara Nell",
  "search.r10.starsAria": "4.2 sa 5 na bituin, 176 na rating",
  "search.r12.title": "Homesick for a Place That Changed",
  "search.r12.author": "Diane Cutler",
  "search.r12.starsAria": "4.4 sa 5 na bituin, 2,015 na rating",
  "search.r13.title": "The Year of Boxes",
  "search.r13.author": "Thomas Reyburn",
  "search.r13.starsAria": "4.0 sa 5 na bituin, 31 na rating",
  "search.r14.title": "Leaving: A Memoir in Essays",
  "search.r14.author": "Ruth Almond",
  "search.r14.starsAria": "4.3 sa 5 na bituin, 762 na rating",
  "search.r15.title": "Nobody Warned Me About the Quiet",
  "search.r15.author": "Frank Delahunt",
  "search.r15.starsAria": "4.5 sa 5 na bituin, 5,388 na rating",
  "search.r16.title": "The Country I Remember",
  "search.r16.author": "Marjorie Stane",
  "search.r16.starsAria": "4.2 sa 5 na bituin, 143 na rating",

  "search.credits1": "Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Ipinapakita ang pagiging kabilang sa koleksyon gamit ang “Bahagi ng:” na linya ng serye na mayroon na ang Amazon, at wala nang iba — walang bagong search UI, walang refinement, walang pagbabago sa ranking · Gate ng pahayag ng may-akda: mekanismo ni Wanting (7/27) · Ang hangganang walang binabagong algorithm: Chang 7/20, Rachel 7/23",
  "search.credits2": "Labing-apat sa labing-anim na resultang ito ay imbentong panakip lang, para maupo ang dalawang pamagat mula sa koleksyon sa ordinaryong listahan ng resulta at hindi sa isang inayos na eksena. Ang labing-apat na iyon ay hindi mga tauhan, persona, o bunga ng pananaliksik; wala silang talambuhay at wala silang lalabas sa ibang pahina.",

  /* ---------- the reviewer bar and its notes ----------
     Chrome addressed to whoever is reviewing this, not to a shopper: the
     walkthrough labels across the top, the one-line caption naming what each
     screen is for, and the notes behind the Show-notes toggle. Translated like
     everything else — a reviewer reading in Arabic should not hit an English
     signpost. */
  "demo.bannerAria": "Tungkol sa prototype na ito",
  "demo.navAria": "Paglilibot sa prototype",
  "demo.step.search": "Paghahanap",
  "demo.step.category": "Kategorya",
  "demo.step.collection": "Koleksiyon",
  "demo.step.book": "Aklat",
  "demo.step.author": "May-akda",
  "demo.notesShow": "Ipakita ang mga tala",
  "demo.notesHide": "Itago ang mga tala",
  "index.demoCaption": "Ang koleksiyon mismo, at ang pangungusap na nagsasabi kung paano nakakapasok ang isang aklat.",
  "browse.demoCaption": "Ang koleksiyon sa loob ng pahina ng kategorya, katabi ng mga aklat na wala rito.",
  "search.demoCaption": "Kung paano natatagpuan ng mambabasa ang koleksiyon nang hindi ito hinahanap.",
  "book.demoCaption": "Isang aklat: ang patotoo ng may-akda, at ang daloy ng pagtatanong sa kanya.",
  "author.demoCaption": "Kung ano ang binubuksan ng may-akda — ang mga antas ng akses, kusang-loob at maaaring bawiin.",
  "revnote.index.1Label": "Ang ibabaw.",
  "revnote.index.1Body": "Isang koleksiyon, hindi badge sa buong tindahan at hindi pagbabago sa ranggo ng paghahanap. Pinag-isipan ang dalawa, at parehong itinigil.",
  "revnote.index.2Label": "Ang pintuan.",
  "revnote.index.2Body": "Nagmumula ang patotoo sa sumulat ng aklat. Inilalagay ito ng Amazon sa pahina; hindi nito pinatototohanan.",
  "revnote.book.1Label": "Sa kanyang sariling salita.",
  "revnote.book.1Body": "Nilalagyan ng badge ng Amazon ang kayang sukatin, at sinisipi ang hindi kaya. Ito ang bahaging sinipi.",
  "revnote.book.2Label": "Ang kawit.",
  "revnote.book.2Body": "Kusang-loob at maaaring bawiin ang akses ng mambabasa. Maaabot dito ang bawat kalagayan, pati ang isang walang nangyayari.",
  "revnote.author.1Label": "Ang may-akda ang magpapasya.",
  "revnote.author.1Body": "Siya ang pumipili ng bawat antas, at maaari niya itong isara anumang oras.",
  "revnote.search.1Label": "Hindi ito panukala sa ranggo.",
  "revnote.search.1Body": "Gawa-gawa ang pagkakasunod-sunod na ito. Ang hinihiling lamang namin ay ang presensya ng koleksiyon.",
  "revnote.browse.1Label": "Kung saan ito naroon.",
  "revnote.browse.1Body": "Isang lugar sa tindahan na maaaring tingnan-tingnan, katabi ng mga kategoryang gumagana gaya ng dati."
};
