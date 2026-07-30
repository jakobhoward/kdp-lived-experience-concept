/* Lived Experience prototype — UI strings, Modern Standard Arabic (ar).
   Mirrors every key in strings.en.js. */
window.I18N = window.I18N || {};
window.I18N.ar = {

  /* ---------- document titles ---------- */
  "index.docTitle": "مجموعة من واقع الحياة — الصفحة الرئيسية (تصور مبدئي)",
  "book.docTitle": "The Road from Manila — تفاصيل الكتاب (تصور مبدئي)",
  "author.docTitle": "Rosa Delgado — صفحة المؤلفة (تصور مبدئي)",
  "browse.docTitle": "من واقع الحياة — صفحة الفئة (تصور مبدئي)",
  "search.docTitle": "مذكرات عن مغادرة الوطن — نتائج البحث (تصور مبدئي)",

  /* ---------- shared chrome ---------- */
  "chrome.conceptLabel": "مشروع طالب — <span lang=\"en\" dir=\"ltr\">Inclusive Design &amp; Product Equity (COMMLD 560), UW.</span>",
  "chrome.searchPlaceholder": "البحث في Kindle Store",
  "chrome.searchAria": "البحث في Kindle Store",
  "chrome.searchButtonAria": "بحث",
  "chrome.greeting": "مرحبًا",
  "chrome.account": "الحساب والقوائم",
  "chrome.nav.shop": "تسوق الكتب",
  "chrome.nav.categories": "الفئات",
  "chrome.nav.trending": "الجديد والرائج",
  "chrome.nav.bestsellers": "الأكثر مبيعًا والمزيد",
  "chrome.nav.deals": "العروض",
  "chrome.nav.yourbooks": "كتبك",
  "chrome.skipToContent": "تخطَّ إلى المحتوى الرئيسي",
  "chrome.subnavAria": "أقسام المتجر",
  "chrome.breadcrumbAria": "مسار التنقل",
  "search.railAria": "تنقيح النتائج",

  /* ---------- language switcher ---------- */
  "lang.label": "اللغة",
  "lang.buttonAria": "اللغة: {name}. اختيار لغة أخرى",
  "lang.menuAria": "اختيار لغة",
  "lang.notice": "هذه الصفحة معروضة باللغة {name}.",
  "lang.noticeAction": "القراءة بالإنجليزية",
  "lang.noticeDismissAria": "إخفاء هذه الرسالة",

  /* ---------- breadcrumbs and shared labels ---------- */
  "crumb.store": "Kindle Store",
  "crumb.ebooks": "كتب Kindle الإلكترونية",
  "crumb.memoirs": "السير الذاتية والمذكرات",
  "collection.name": "من واقع الحياة",
  "common.learnMore": "معرفة المزيد",
  "common.answersQuestions": "✓ إجابات عن أسئلتك",
  "common.follow": "+ متابعة",
  "common.partOf": "جزء من:",

  /* Store chrome shared by search.html and browse.html — Amazon's own Arabic storefront
     wording, not ours. common.kindleEdition matches the Arabic Kindle Store's format line
     ("نسخة Kindle") and is NOT book.format ("الصيغة: نسخة Kindle") — different string.
     "Sort by:" / "Featured" follow the Arabic storefront's sort control. */
  "common.kindleEdition": "نسخة Kindle",
  "common.kuEligible": "مؤهل لـ Kindle Unlimited",
  "common.avgReview": "متوسط تقييم العملاء",
  "common.languageLabel": "اللغة",
  "common.sortLabel": "ترتيب حسب:",
  "common.sortFeatured": "المميزة",

  /* ---------- index: collection landing ---------- */
  "index.disclaimer": "هذه الصفحة ليست منتجًا من منتجات Amazon. الكتب والأسماء والتقييمات من نسج الخيال، وعناصر التحكم لا تعمل.",
  "index.kicker": "من واقع الحياة",
  "index.headline": "قصص شخصية، بكلمات مَن كتبها",
  "index.bannerH2": "يبدأ كل كتاب هنا بكلمات مَن كتبه.",
  "index.bannerP": "كتب أولى، وقصص بصوت مَن عاشها — وكثير منها مفتوح لأسئلتك، اختيارًا لا إلزامًا.",
  "index.gateNoteLabel": "كيف يدخل كتابٌ هذه المجموعة:",
  "index.gateNoteBody": "بكلماتٍ خاصة، يقرّ مَن كتب الكتاب بأنه عاش هذه القصة وكتبها. تعرض Amazon هذا الإقرار ولا تصادق عليه. والترجمة مرحّب بها، بما فيها الترجمة بالذكاء الاصطناعي.",

  "index.book1.title": "The Road from Manila",
  "index.book1.author": "Rosa Delgado",
  "index.book1.voice": "«تركتُ مانيلا في عام 1979. كتبتُ هذا الكتاب أولًا بالتاغالوغية، لأنها اللغة التي أتذكّره بها.»",
  "index.book1.starsAria": "4.4 من 5 نجوم، 214 تقييمًا",
  "index.book1.coverAlt": "غلاف كتاب The Road from Manila",

  "index.book2.title": "The Unseen Memoir",
  "index.book2.author": "Marion Hale",
  "index.book2.voice": "«كتبتُ هذا الكتاب على طاولة مطبخي طوال أربع سنوات، عن السنة التي توقفتُ فيها عن الكلام.»",
  "index.book2.starsAria": "4.3 من 5 نجوم، 127 تقييمًا",
  "index.book2.coverAlt": "غلاف كتاب The Unseen Memoir",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "«هذه رسائل جدتي، ورسائلي أنا. طبعتُها كلها بنفسي.»",
  "index.book3.starsAria": "4.5 من 5 نجوم، 2,341 تقييمًا",
  "index.book3.coverAlt": "غلاف كتاب Letters Home",

  "index.book4.title": "The Last Ninety Acres",
  "index.book4.author": "Dale Whitcomb",
  "index.book4.voice": "«زرع أهلي هذه الأرض على مدى أربعة أجيال. كتبتُ عن السنة التي فقدناها فيها، فلم يكن أحدٌ غيري سيكتبها.»",
  "index.book4.starsAria": "4.2 من 5 نجوم، 86 تقييمًا",
  "index.book4.coverAlt": "غلاف كتاب The Last Ninety Acres",

  "index.book5.title": "Eleven Addresses",
  "index.book5.author": "Terrance Boyd",
  "index.book5.voice": "«أحد عشر عنوانًا في ست سنوات بعد خروجي من السجن. كتبتُ معظم هذا الكتاب على حاسوب في المكتبة العامة، ساعةً واحدة في كل مرة.»",
  "index.book5.starsAria": "4.6 من 5 نجوم، 438 تقييمًا",
  "index.book5.coverAlt": "غلاف كتاب Eleven Addresses",

  "index.book6.title": "Loud in Here",
  "index.book6.author": "Nadia Haddad",
  "index.book6.voice": "«فقدتُ سمعي في الرابعة من عمري. وهذا الكتاب عن البيت الصامت كما هو حقًّا من الداخل.»",
  "index.book6.starsAria": "4.4 من 5 نجوم، 309 تقييمات",
  "index.book6.coverAlt": "غلاف كتاب Loud in Here",

  "index.book7.title": "Sixteen Hundred Miles a Week",
  "index.book7.author": "Ray Okonkwo",
  "index.book7.voice": "«إملائي سيئ إلى حدٍّ لا يُصدَّق. أمليتُ هذا الكتاب على هاتفي في الطريق بين لاريدو وتوليدو.»",
  "index.book7.starsAria": "4.1 من 5 نجوم، 52 تقييمًا",
  "index.book7.coverAlt": "غلاف كتاب Sixteen Hundred Miles a Week",

  "index.book8.title": "Coming Back Slow",
  "index.book8.author": "Deborah Aoki",
  "index.book8.voice": "«أصابتني جلطة دماغية في الحادية والخمسين. استغرق تعلُّم الكتابة من جديد سنتين، واستغرق هذا الكتاب أربع سنوات.»",
  "index.book8.starsAria": "4.7 من 5 نجوم، 1,608 تقييمات",
  "index.book8.coverAlt": "غلاف كتاب Coming Back Slow",

  /* طريق العودة من صفحة المجموعة إلى فئة المتجر التي هي عرضٌ لها. رابط نصي «عرض الكل»،
     وهو ما تضعه أمازون أسفل شبكة كتب — لا زر، ولا «المزيد مما يشبه هذا»، فذلك توصية. */
  "index.seeAll": "عرض كل الكتب الـ 48 في هذه الفئة",

  "index.credits1": "فريق Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · بوابة الإقرار الذاتي: آلية Wanting (27/7) · مستويات الوصول إلى مَن كتب الكتاب: فكرة Pablo (27/7) · تأطير المجموعة: إعادة صياغة مستوحاة من StoryCorps، من Chang (24/7) · بحث في الاكتشاف عبر المجتمعات يوجّه الإطلاق: Jalen (قيد الإعداد)",
  "index.credits2": "الأسماء في الأمثلة توضيحية وخيالية إلى أن تتوفر بيانات الأسئلة المفتوحة في استبياننا — وليست شخصيات مستخدمين. أما ملف Rosa Delgado فيستند إلى الهجرة الموثّقة للممرضات الفلبينيات (المصادر في PRD)، لا إلى بيانات سكانية مُختلقة.",
  "index.credits3": "في KDP كتبٌ حقيقية تنتمي إلى هذه المجموعة بالفعل؛ فالرفّ قائم، والناقص هو سبيلٌ للتنقّل فيه. ومع ذلك فالعناوين هنا مُختلقة، لأن الوصول المعروض هنا يمنحه المؤلّف نفسه ولم يمنحه أي مؤلّف حقيقي — ووضع اسم مؤلّفة حيّة إلى جانب مستوى وصول لم توافق عليه هو نقيض الفكرة. كما أن النص المُختلق يحمل حالات لا توجد في صفحة كتاب حقيقية، وبستّ لغات، دون إعادة كتابة كلمات أحد.",

  /* ---------- book detail ---------- */
  "book.disclaimer": "هذه الصفحة ليست منتجًا من منتجات Amazon. هذا الكتاب ومؤلفته وكل التقييمات من نسج الخيال، وعناصر التحكم لا تعمل.",
  "book.title": "The Road from Manila",
  "book.bylinePrefix": "من تأليف",
  "book.bylineAuthor": "Rosa Delgado",
  "book.bylineRole": "(المؤلفة)",
  "book.format": "الصيغة: نسخة Kindle",
  "book.starsAria": "4.4 من 5 نجوم، 214 تقييمًا",
  "book.partOfValue": "من واقع الحياة (48 كتابًا)",
  "book.coverAlt": "غلاف كتاب The Road from Manila",
  "book.readSample": "قراءة عيّنة",
  "book.audibleSample": "عيّنة Audible",
  "book.visitAuthorPage": "زيارة صفحة المؤلفة",

  "book.attest.h3": "بكلمات المؤلفة نفسها",
  "book.attest.quote": "«تركتُ مانيلا في عام 1979 بحقيبة واحدة وسبحة الورديّة التي كانت لأمي. أنا لست كاتبة — عملتُ ممرضة طوال إحدى وثلاثين سنة. كتبتُ هذا الكتاب أولًا بالتاغالوغية، لأنها اللغة التي أتذكّره بها، ثم ترجمناه أنا وابنة أختي بمساعدة أداة ترجمة. كل كلمة في القصة لي. أنا عشتُها.»",
  "book.attest.sigName": "Rosa Delgado، إقرار المؤلفة",
  "book.attest.sigLink": "ماذا يحدث إذا كان الإقرار غير صحيح؟",
  "book.attest.sigBody": "يؤدي الإقرار غير الصحيح إلى إزالة الكتاب من المجموعة، ويُعالَج الحساب وفق سياسات المحتوى القائمة في KDP — دون آليات إنفاذ جديدة.",
  "book.attest.translationNote": "هذه ترجمة لإقرار Rosa. أما الكلمات التي أقرّت بها فهي كلماتها.",

  /* The inline "See more" expansion under the signature; book.attest.sigLink is reused as the
     disclosure label, so there is no "Show less" variant here either. Nothing below may name a
     review queue, a trust team, an appeals board, a verification step, or any Amazon check on
     whether a story is true. p1/p2/p4 speak about an unspecified author and stay gender-free by
     recasting through "مَن كتب الكتاب" (the one who WROTE it — never the one who uploads or
     publishes it); p3 is about Rosa's own statement on her own book page, so it is feminine. */
  "book.attest.false.h": "إذا تبيّن أن الإقرار غير صحيح",
  "book.attest.false.p1": "الإقرار نصٌّ يكتبه مَن كتب الكتاب، ويُعامَل معاملة أي نص آخر يظهر في صفحة تفاصيل الكتاب. فإذا ورد عنه بلاغ ورأت KDP أنه يخالف إرشادات المحتوى التي وافق عليها الحساب أصلًا، خرج الكتاب من المجموعة، وعُومل الحساب كما تُعامَل أي مخالفة أخرى للإرشادات — وقد يصل ذلك إلى فقدان إمكانية النشر. ولم يُبنَ لهذا شيء جديد.",
  "book.attest.false.p2": "يكون الإبلاغ بأداة الإبلاغ الموجودة أصلًا لدى Amazon، وتطبّق KDP السياسات التي تطبّقها بالفعل. لا لجنة مراجعة منفصلة هنا، ولا قائمة انتظار اخترعناها، ولا مسار تظلّم ابتكرناه، ولا درجة تُسجَّل على مَن كتب الكتاب.",
  "book.attest.false.p3": "ومن الأمانة قول الحد بوضوح: Amazon لا تعرف إن كانت القصة صحيحة، ولا تستطيع أن تعرف. لا شيء هنا يتحقق من ذكرى أو تاريخ أو حياة. ولهذا بالضبط يبقى الإقرار بكلمات المؤلفة نفسها وباسمها عليه، ولهذا لا يوجد بجانبه ختم من Amazon — فالختم وعدٌ لا تستطيع Amazon الوفاء به. أما ما يمكن التصرف حياله فهو إقرار يتبيّن أنه ملفَّق، تمامًا كأي ادعاء كاذب في أي صفحة منتج أخرى.",
  "book.attest.false.p4": "فالإبلاغ هو الآلية كلها. وهو ليس وعدًا بنتيجة، ولن يصلك تقرير عن سير الأمر.",
  "book.attest.false.reportLink": "الإبلاغ عن هذا المحتوى",

  "book.desc.lede": "لأن لكل حياة عادية قصة استثنائية تستحق أن تُذكر.",
  "book.desc.p1Html": "في عام 1979، صعدت Rosa Delgado إلى طائرة في مانيلا بعقد تمريض وحقيبة واحدة، ولم تكن تدري أنها لن ترى أمها مرة أخرى إلا بعد أحد عشر عامًا. وكتاب <em>The Road from Manila</em> هو قصة تلك السنوات الفاصلة — نوبات ليلية في بلدٍ كانت أحلامها فيه تأتيها مترجمة، وأوراق نقدية تُطوى داخل بطاقات أعياد الميلاد، وبناء بيت على مهل مع الحنين إلى بيت آخر.",
  "book.desc.p2": "كُتبت هذه المذكرات أولًا بالتاغالوغية وتُرجمت بمساعدة ابنة أختها، وهي لكل من رحل يومًا — أو من بقي.",

  "book.meta.pagesValue": "287 صفحة",
  "book.meta.pagesLabel": "عدد الصفحات",
  "book.meta.langValue": "إنجليزية + تاغالوغية",
  "book.meta.langLabel": "اللغة",
  "book.meta.a11yValue": "مدعوم",
  "book.meta.a11yLabel": "قارئ الشاشة",
  "book.meta.dateValue": "مارس 2026",
  "book.meta.dateLabel": "تاريخ النشر",

  "book.ask.h3": "طرح سؤال على Rosa",
  /* حُذف book.ask.sub («تجيب أسبوعيًا») في 30/7 من ملفات اللغات الخمسة دفعةً واحدة: كان
     يَعِد بوتيرة لا يقيسها أحد، وهو الخلل نفسه في شارة «مكتوب بيد إنسان» المستبعدة.
     حلّ محلّه book.ask.subState، وهو عدّ يمكن لأمازون ملاحظته فعلًا. */
  "book.ask.subState": "اختارت تلقّي الأسئلة · أجابت عن 9 أسئلة من 14",
  "book.ask.tier1Label": "أسئلة عن الكتاب",
  "book.ask.tier1Body": "لك سؤال واحد عن كل كتاب، متاح لمَن اشترى الكتاب شراءً مؤكدًا أو استعاره من KU. ولا شيء يصبح علنيًا قبل أن تنشر Rosa جوابها.",
  "book.ask.tier2Label": "لقاء مباشر للأسئلة",
  "book.ask.tier2Body": "جلسة مباشرة من حين لآخر، تحدّد المؤلفة موعدها.",
  "book.ask.note": "مستوى الوصول متروك لاختيار مَن كتب الكتاب — بما في ذلك إغلاق الوصول تمامًا — ويمكن تغييره في أي وقت. والإشراف افتراضيًا لمَن كتبه: قراءة الأسئلة، والإجابة عنها أو حذفها، مع تطبيق أدوات الإبلاغ والحظر في إرشادات مجتمع Amazon القائمة. ولا تُشارك معلومات الاتصال أبدًا.",

  /* The ask-a-question flow, state by state. Half of these strings exist to say that nothing
     happens: no reply is promised, no time is quoted, no escalation exists — do not soften
     "لا نعرف" into "قريبًا". Rosa is she/her throughout (rule a). The READER is unspecified
     (rule b): Arabic marks gender on second-person VERBS, so every instruction here is recast
     as a verbal noun ("يلزم كتابة السؤال") or a passive — the ـك suffix in سؤالك / مسودتك is
     spelled identically for both genders and is safe. */
  "book.ask.startBtn": "طرح سؤال",

  "book.ask.composeLabel": "سؤالك إلى Rosa",
  "book.ask.composeHint": "حتى 300 حرف، وللسؤال أن يكون عن الكتاب أو عن الحياة التي وراءه.",
  "book.ask.composeTerms": "هذا سؤالك الوحيد عن هذا الكتاب. تراه Rosa، ولها أن تجيب عنه أو تحذفه. ولا يظهر شيء من كلامك على Amazon إلا إذا نشرت جوابها معه. ولا توجد رسائل خاصة هنا في أي مستوى — لا لك ولا لها — ولا يرى أيٌّ منكما بيانات الاتصال بالآخر.",
  "book.ask.composeSend": "إرسال السؤال",
  "book.ask.composeCancel": "إلغاء",
  "book.ask.composeEmpty": "يلزم كتابة السؤال أولًا.",

  "book.ask.sentH": "أُرسل سؤالك إلى Rosa",
  "book.ask.sentBody": "السؤال الآن لديها. وهي مَن يشرف على أسئلتها: لها أن تجيب عنه أو تحذفه، وليست ملزمة بأيٍّ من الأمرين.",
  "book.ask.sentNoEta": "لن نقول لك متى يأتي الجواب، لأننا لا نعرف. لا وعد هنا بمدة للرد، ولا مدة جرى قياسها.",
  "book.ask.sentWhere": "إن أجابت، ظهر سؤالك مع جوابها في صفحة المؤلفة.",
  "book.ask.sentWhereLink": "عرض الأسئلة المُجاب عنها",
  "book.ask.sentDone": "تم",

  "book.ask.waitH": "سؤالك لدى Rosa",
  "book.ask.waitSent": "أُرسل هذا السؤال في 12 مارس 2026، ولم يُجَب عنه بعد.",
  "book.ask.waitQLabel": "سؤالك:",
  "book.ask.waitTruth": "وقد يبقى الأمر هكذا. فبعض الأسئلة لا تُجاب أبدًا، وتستطيع Rosa أن تحذف سؤالًا دون أن ترد ودون أن تذكر سببًا. ولا تلاحقها Amazon، ولا تصعّد الأمر، ولا تجيب نيابةً عنها.",
  "book.ask.waitPublic": "ولا شيء من كلامك علني.",
  "book.ask.waitWithdraw": "سحب سؤالي",
  "book.ask.waitWithdrawNote": "السحب يحذف السؤال. ويمكن بعده كتابة سؤال آخر.",

  "book.ask.answeredH": "أجابت Rosa عن سؤالك",
  "book.ask.answeredBody": "نشرت سؤالك مع جوابها في صفحة المؤلفة، حيث يمكن لبقية القراء قراءتهما الآن.",
  "book.ask.answeredLink": "قراءة جوابها",
  "book.ask.answeredQuota": "كان ذلك سؤالك الوحيد عن هذا الكتاب.",

  "book.ask.reportLink": "الإبلاغ عن مشكلة في هذا السؤال أو الجواب",

  "book.ask.ineligibleH": "الأسئلة متاحة لقرّاء هذا الكتاب",
  "book.ask.ineligibleBody": "بشراء الكتاب أو استعارته عبر Kindle Unlimited يُفتح صندوق السؤال هنا. وهو التحقق نفسه الذي تستخدمه Amazon أصلًا لوسم المراجعة بأنها من شراء مؤكَّد.",
  "book.ask.ineligibleWhy": "هذا التحقق موجود من أجل Rosa، لا من أجلنا. فبدونه يصير صندوق الأسئلة نموذج تواصل مفتوحًا للإنترنت كله، وأكثر مَن يتعرض للاستهداف هم مَن كتبوا الكتب التي بُنيت هذه المجموعة حولها.",
  "book.ask.ineligibleWhere": "خيارات الشراء والاستعارة في المربع أعلى هذه الصفحة.",

  "book.ask.offH": "لا تتلقّى Rosa أسئلة في الوقت الحالي",
  "book.ask.offBody": "أوقفت أسئلة القراء. وقد تعيد تشغيلها وقد لا تفعل. وفي الحالتين يبقى الكتاب في المجموعة ويبقى إقرارها في هذه الصفحة — فالوصول كان اختيارها دائمًا، وإيقافه لا يكلّفها شيئًا هنا.",
  "book.ask.offNoAlt": "ولا توجد طريقة أخرى للوصول إليها عبر Amazon، وهذا مقصود.",

  "book.ask.offAfterH": "الأسئلة مغلقة لهذا الكتاب",
  "book.ask.offAfterBody": "أوقفت Rosa أسئلة القراء بعد إرسال سؤالك. لم يُنشر سؤالك ولن يُجاب عنه؛ فقد حُذف مع بقية الأسئلة المفتوحة.",

  "book.ask.errorH": "لم يُرسَل سؤالك",
  "book.ask.errorBody": "حدث خلل عندنا، لا عندك. ومسودتك ما زالت هنا.",
  "book.ask.errorRetry": "إعادة المحاولة",
  "book.ask.errorDiscard": "حذف المسودة",

  /* Live-region announcements. Screen-reader-only in effect, though not named "Aria". */
  "book.ask.liveSent": "أُرسل السؤال. ولا شيء يصبح علنيًا إلا إذا نشرت Rosa جوابها.",
  "book.ask.liveWithdrawn": "سُحب سؤالك وحُذف.",
  "book.ask.liveLimit": "تم بلوغ الحد الأقصى وهو 300 حرف.",
  "book.ask.liveEmpty": "يلزم كتابة السؤال أولًا.",
  "book.ask.liveError": "لم يُرسَل سؤالك، وقد احتُفظ بالمسودة.",

  "book.ask.mockNote": "ملاحظة عن النموذج الأولي: لا يُرسل شيء إلى أي جهة. الغرض من هذا المسار أن تُقرأ حالاته — بما فيها الحالات التي لا يحدث فيها شيء.",

  "book.buy.formatKindle": "Kindle",
  "book.buy.orBuy": "أو $4.99 للشراء",
  "book.buy.formatPaperback": "غلاف ورقي",
  "book.buy.kuPitch": "قراءة غير محدودة. ملايين الكتب.",
  "book.buy.readFree": "القراءة مجانًا",
  "book.buy.or": "أو",
  "book.buy.oneClick": "الشراء بنقرة واحدة (1-Click)",
  "book.buy.sendSample": "إرسال عيّنة مجانية",

  "book.credits1": "فريق Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · بوابة الإقرار الذاتي: آلية Wanting (27/7) · مستويات الوصول: فكرة Pablo (27/7) · أهلية «الترجمة مرحّب بها»: بحث الفريق في سياسة KDP للمحتوى المولّد بالذكاء الاصطناعي (27/7)",

  /* ---------- author page ---------- */
  "author.disclaimer": "هذه الصفحة ليست منتجًا من منتجات Amazon. هذه المؤلفة وكل ما فيها من نسج الخيال، وعناصر التحكم لا تعمل.",
  "author.name": "Rosa Delgado",
  "author.tabHome": "الرئيسية",
  "author.tabAbout": "نبذة",
  "author.tabBooks": "جميع الكتب",
  "author.aboutH2": "نبذة عن المؤلفة",
  "author.bioHtml": "عملت Rosa Delgado ممرضة إحدى وثلاثين سنة، في مانيلا ثم في شيكاغو. وكتابها الأول هو <em>The Road from Manila</em>، كتبته بالتاغالوغية وترجمته بمساعدة ابنة أختها. لم تكن تخطط لأن تصبح كاتبة؛ كانت تخطط لأن تتذكّر. تسكن قريبًا من أحفادها، وهم سبب وجود هذا الكتاب.",

  "author.qaH2": "أسئلة طُرحت على Rosa",
  "author.qLabel": "السؤال:",
  "author.aLabel": "الجواب:",
  "author.answeredBy": "أجابت عنه Rosa Delgado، المؤلفة",
  "author.qa1.q": "هل فكّرتِ يومًا في العودة نهائيًا؟",
  "author.qa1.a": "في كل ديسمبر خلال السنوات العشر الأولى. ثم في سنة من السنوات لاحظتُ أن الحنين صار في الاتجاهين، وفهمتُ أن لي بيتين الآن. وهذا موضوع الفصل الرابع عشر.",
  "author.qa2.q": "ما الذي غيّرته الكتابة بالتاغالوغية أولًا في الكتاب؟",
  "author.qa2.a": "كل شيء. بعض الذكريات لا توجد إلا في اللغة التي حدثت بها. تجادلنا أنا وابنة أختي في كل جملة من الترجمة، ومن هذا الجدال جاء صدق الكتاب.",

  "author.popularH2": "الأكثر شعبية",
  "author.bookTitle": "The Road from Manila",
  "author.starsAria": "4.4 من 5 نجوم، 214 تقييمًا",
  "author.orBuy": "أو $4.99 للشراء",
  "author.partOfValue": "من واقع الحياة",
  "author.coverAlt": "غلاف كتاب The Road from Manila",

  "author.access.h3": "إعدادات الوصول لدى Rosa",
  "author.access.sub": "اختارتها المؤلفة · قابلة للتغيير في أي وقت",
  "author.access.tier1Label": "أسئلة عن الكتاب",
  "author.access.tier1State": "مفعّل",
  /* كان «تجيب أسبوعيًا». سُحب هذا الوعد بالوتيرة من book.html أصلًا لأن أحدًا لا يقيسه.
     هنا العدّ نفسه الذي يعرضه book.ask.subState، حتى تقول الصفحتان الشيء ذاته. */
  "author.access.tier1Body": "أجابت عن 9 أسئلة من 14؛ ولا شيء علني قبل أن تنشره Rosa.",
  "author.access.tier2Label": "لقاء مباشر للأسئلة",
  "author.access.tier2State": "مفعّل",
  "author.access.tier2Body": "من حين لآخر، بموعد تحدّده المؤلفة.",
  "author.access.tier3Label": "بدون وصول",
  "author.access.tier3State": "متاح لكل مَن كتب كتابًا",
  "author.access.tier3Body": "يمكن لمَن كتب الكتاب إيقاف كل شيء والبقاء في المجموعة.",
  "author.access.note": "الوصول قرارُ مَن كتب الكتاب، لكل مستوى على حدة. ولا توجد رسائل خاصة في أي مستوى — استثناء مقصود حفاظًا على سلامة مَن يكتب. وصفحاتٌ كهذه على Amazon اليوم لا تتيح لك سوى إجراء واحد — المتابعة، في اتجاه واحد. وهذه اللوحة هي النصف الناقص.",

  "author.credits1": "فريق Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · مستويات الوصول: فكرة Pablo (27/7) · بوابة الإقرار الذاتي: آلية Wanting (27/7) · تأطير StoryCorps: Chang (24/7)",

  /* ---------- browse: the category node (entry point) ---------- */
  /* No book strings of its own: all eight rows reuse index.bookN.*, so the cast reads
     identically here and on the landing page. The sibling-category and refinement labels are
     the Arabic Kindle Store's own taxonomy, not ours. Note that "left rail" is never rendered
     as "الأيسر" — the rail sits on the RIGHT in RTL, so the copy says "العمود الجانبي". */
  "browse.disclaimer": "هذه الصفحة ليست منتجًا من منتجات Amazon. هذه الفئة وكتبها وأسماء مَن كتبوها وتقييماتها من نسج الخيال، وعناصر التحكم لا تعمل.",

  "browse.railAria": "الفئة",
  "browse.rail.sib1": "الفنون والأدب",
  "browse.rail.sib2": "تاريخية",
  "browse.rail.sib3": "القادة والشخصيات البارزة",
  "browse.rail.sib4": "المذكرات",
  "browse.rail.sib5": "إقليمية",
  "browse.rail.sib6": "فئات محددة",
  "browse.rail.refineH": "تصفية حسب",

  "browse.resultCount": "1-8 من 48 نتيجة",
  "browse.nodeIntro": "كتبٌ يقرّ مَن كتبها، بكلماته الخاصة، بأنه عاش القصة وكتبها. واختيار هذه الفئة يعود لمَن كتب الكتاب عند نشره. تعرض Amazon كل إقرار ولا تصادق عليه. والترجمة مرحّب بها، بما فيها الترجمة بالذكاء الاصطناعي.",

  "browse.card.h3": "مجموعة من واقع الحياة",
  /* كان «عرض أصغر ومنتقى». كلمة «منتقى» ادّعاء بأن أحدًا انتقى، أي تزكية، وتناقض السطر
     التالي مباشرةً («مكانٌ على الرف لا تقييم»). وما تعرضه index.html هو الكتب الثمانية
     الأولى من الثمانية والأربعين نفسها وبالترتيب نفسه: لم ينتقِها أحد. */
  "browse.card.sub": "صفحة تعريفية لهذه الفئة، بكلمات مَن كتبوا هذه الكتب",
  "browse.card.body": "كل كتاب مستوفٍ للشرط موجود في هذه الفئة، فوجوده هنا مكانٌ على الرف لا تقييم. وصفحة المجموعة تعرّف بعددٍ ممن كتبوا هذه الكتب بكلماتهم، وتبيّن مَن منهم اختار الإجابة عن أسئلة القراء.",
  "browse.card.cta": "تصفح المجموعة",

  "browse.pagerAria": "صفحات النتائج",
  "browse.pagerNext": "التالي",

  "browse.credits1": "فريق Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · نقطة الدخول: عقدة فئة دائمة بدل صف ترويجي. فللمساحة الترويجية تاريخ انتهاء (Chang، 24/7)، أما الفئة فلا، وشرط الدخول إليها شرطٌ موجود لدى KDP أصلًا — إذ يختار مَن كتب الكتاب الفئة ويقرّ. أما تقليل المخاطرة بغير السعر (Pablo، A5) فيظهر هنا في كل صف كعيّنة مجانية وإتاحة عبر Kindle Unlimited، عند لحظة الاختيار — لا كخصم أبدًا.",
  "browse.credits2": "هذه الفئة موقعٌ لا تزكية. ولا شيء هنا يصفّي المتجر أو يرتّب كتابًا أو يوصي بكتاب انطلاقًا من آخر؛ فأدوات التصفية في العمود الجانبي وأداة الترتيب هي أدوات Kindle Store القائمة، منقولة كما هي. وقد يحمل صفٌّ في Kindle Unlimited المجموعة خلال فترة إطلاق، لكن وسيلة الإطلاق ليست نقطة دخول، فلم تُبنَ هنا.",

  /* ---------- search results ---------- */
  "search.disclaimer": "هذه الصفحة ليست منتجًا من منتجات Amazon. هذه النتائج مثال خيالي؛ كل كتاب واسم وتقييم فيها مُختلق، ولا يعمل أي عنصر تحكم. وترتيب النتائج ليس جزءًا من هذا المقترح.",
  "search.query": "مذكرات عن مغادرة الوطن",
  "search.resultCountHtml": "1-16 من أكثر من 800 نتيجة لـ <span class=\"q\">«مذكرات عن مغادرة الوطن»</span>",
  "search.sponsored": "برعاية",
  "search.byPrefix": "من تأليف",

  "search.orderNoteLabel": "ما لا تغيّره هذه الصفحة:",
  "search.orderNoteBody": "ترتيبَ هذه النتائج. لا شيء هنا يُعاد ترتيبه أو يُروَّج له أو يُصفّى — لم نضف أي أداة تصفية إلى العمود الجانبي ولا أي خيار ترتيب — وكتابا المجموعة أدناه لا يحملان سوى سطر «جزء من:» نفسه الذي تطبعه Amazon أصلًا لكتاب ضمن سلسلة، إضافة إلى سطر واحد كتبه مَن ألّف الكتاب.",

  /* Left rail. Amazon's existing refinements, reproduced unchanged — we added none. The
     department rows above the current node reuse crumb.*, and the shared refinement headings
     reuse the common.* store chrome above. The four review-filter aria labels follow the
     Arabic storefront's own number agreement: digits for 4 and 3, words for the dual and the
     singular, because "2 نجمة" is not something a native reader hears. */
  "search.rail.dept": "القسم",
  "search.rail.deptChild1": "المذكرات",
  "search.rail.deptChild2": "التراث الثقافي",
  "search.rail.deptChild3": "الإثنية والقومية",
  "search.rail.deptChild4": "الرحّالة والمستكشفون",
  "search.rail.ku": "Kindle Unlimited",
  "search.rail.format": "الصيغة",
  "search.rail.formatAudio": "كتاب مسموع",
  "search.rail.formatPaper": "غلاف ورقي",
  "search.rail.formatHard": "غلاف مقوّى",
  "search.rail.reviewAndUp": "فأعلى",
  "search.rail.review4Aria": "4 نجوم فأعلى",
  "search.rail.review3Aria": "3 نجوم فأعلى",
  "search.rail.review2Aria": "نجمتان فأعلى",
  "search.rail.review1Aria": "نجمة واحدة فأعلى",
  "search.rail.price": "السعر",
  "search.rail.priceUnder5": "أقل من $5",
  "search.rail.price5to10": "$5 إلى $10",
  "search.rail.price10to20": "$10 إلى $20",
  "search.rail.price20up": "$20 فأعلى",
  "search.rail.langEnglish": "الإنجليزية",
  "search.rail.langSpanish": "الإسبانية",
  "search.rail.langFrench": "الفرنسية",
  "search.rail.langChinese": "الصينية",
  "search.rail.langArabic": "العربية",
  "search.rail.seeMore": "عرض المزيد",

  /* Fourteen invented filler results. Titles and names are NOT translated (header rule): a
     store shows an Arabic reader the English title of an English book. The people are
     unspecified and take no gender inflection, and they are not personas. Positions 06 and 11
     are the two collection titles and reuse index.book1.* and index.book5.*. The ratings
     counts follow Arabic number agreement — 11-99 takes the singular تقييمًا, a count ending
     in 3-10 takes تقييمات. */
  "search.r01.title": "The House on Winter Street",
  "search.r01.author": "Anne Prescott",
  "search.r01.starsAria": "4.5 من 5 نجوم، 12,480 تقييمًا",
  "search.r02.title": "Salt and Distance",
  "search.r02.author": "Michael Brandt",
  "search.r02.starsAria": "4.2 من 5 نجوم، 3,109 تقييمات",
  "search.r03.title": "Everything I Left Behind",
  "search.r03.author": "Carol Whitfield",
  "search.r03.starsAria": "4.4 من 5 نجوم، 87 تقييمًا",
  "search.r04.title": "Departures: A Memoir",
  "search.r04.author": "Paul Ashby",
  "search.r04.starsAria": "4.0 من 5 نجوم، 1,204 تقييمات",
  "search.r05.title": "Sixty Miles from Anywhere",
  "search.r05.author": "Janet Kroll",
  "search.r05.starsAria": "4.3 من 5 نجوم، 640 تقييمًا",
  "search.r07.title": "The Long Way Round",
  "search.r07.author": "Stephen Marek",
  "search.r07.starsAria": "4.1 من 5 نجوم، 58 تقييمًا",
  "search.r08.title": "A Door That Did Not Lock",
  "search.r08.author": "Helen Voss",
  "search.r08.starsAria": "4.6 من 5 نجوم، 4,730 تقييمًا",
  "search.r09.title": "After the Move",
  "search.r09.author": "Gregory Lyle",
  "search.r09.starsAria": "3.9 من 5 نجوم، 909 تقييمات",
  "search.r10.title": "What the Suitcase Held",
  "search.r10.author": "Barbara Nell",
  "search.r10.starsAria": "4.2 من 5 نجوم، 176 تقييمًا",
  "search.r12.title": "Homesick for a Place That Changed",
  "search.r12.author": "Diane Cutler",
  "search.r12.starsAria": "4.4 من 5 نجوم، 2,015 تقييمًا",
  "search.r13.title": "The Year of Boxes",
  "search.r13.author": "Thomas Reyburn",
  "search.r13.starsAria": "4.0 من 5 نجوم، 31 تقييمًا",
  "search.r14.title": "Leaving: A Memoir in Essays",
  "search.r14.author": "Ruth Almond",
  "search.r14.starsAria": "4.3 من 5 نجوم، 762 تقييمًا",
  "search.r15.title": "Nobody Warned Me About the Quiet",
  "search.r15.author": "Frank Delahunt",
  "search.r15.starsAria": "4.5 من 5 نجوم، 5,388 تقييمًا",
  "search.r16.title": "The Country I Remember",
  "search.r16.author": "Marjorie Stane",
  "search.r16.starsAria": "4.2 من 5 نجوم، 143 تقييمًا",

  "search.credits1": "فريق Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · الانتماء إلى المجموعة يظهر بسطر السلسلة «جزء من:» الموجود أصلًا لدى Amazon ولا شيء غيره — لا واجهة بحث جديدة، ولا أداة تصفية، ولا تغيير في الترتيب · بوابة الإقرار الذاتي: آلية Wanting (27/7) · حدّ النطاق القاضي بعدم تغيير الخوارزميات: Chang 20/7، Rachel 23/7",
  "search.credits2": "أربع عشرة من هذه النتائج الست عشرة حشوٌ مُختلق كي يظهر كتابا المجموعة داخل قائمة نتائج عادية لا قائمة مُعدّة للعرض. وهذه الأربع عشرة ليست شخصيات ولا شخصيات مستخدمين ولا ناتج بحث؛ لا سيرة لها ولا تظهر في أي صفحة أخرى.",

  /* ---------- the reviewer bar and its notes ----------
     Chrome addressed to whoever is reviewing this, not to a shopper: the
     walkthrough labels across the top, the one-line caption naming what each
     screen is for, and the notes behind the Show-notes toggle. Translated like
     everything else — a reviewer reading in Arabic should not hit an English
     signpost. */
  "demo.navAria": "جولة في النموذج الأولي",
  "demo.step.search": "البحث",
  "demo.step.category": "الفئة",
  "demo.step.collection": "المجموعة",
  "demo.step.book": "الكتاب",
  "demo.step.author": "المؤلفة",
  "demo.notesShow": "إظهار الملاحظات",
  "demo.notesHide": "إخفاء الملاحظات",
  "index.demoCaption": "المجموعة نفسها، والجملة التي تبيّن كيف يدخل كتاب إليها.",
  "browse.demoCaption": "المجموعة داخل صفحة فئة، إلى جانب كتب ليست منها.",
  "search.demoCaption": "كيف تُصادَف المجموعة دون البحث عنها.",
  "book.demoCaption": "كتاب واحد: إقرار المؤلفة، ومسار طرح سؤال عليها.",
  "author.demoCaption": "ما تختار المؤلفة إتاحته — مستويات الوصول، باختيارها وقابلة للتراجع.",
  "revnote.index.1Label": "الواجهة.",
  "revnote.index.1Body": "مجموعة، لا شارة على مستوى المتجر ولا تغيير في ترتيب نتائج البحث. دُرس الاقتراحان واستُبعدا.",
  "revnote.index.2Label": "الشرط.",
  "revnote.index.2Body": "الإقرار يصدر عمّن كتب الكتاب. أمازون تستضيفه ولا تصادق عليه.",
  "revnote.book.1Label": "بكلماتها هي.",
  "revnote.book.1Body": "أمازون تمنح شارة لما تستطيع قياسه، وتقتبس ما لا تستطيع. وهذا هو الشطر المقتبس.",
  "revnote.book.2Label": "نقطة الجذب.",
  "revnote.book.2Body": "الوصول اختياري وقابل للتراجع. كل الحالات متاحة هنا، بما فيها الحالة التي لا يحدث فيها شيء.",
  "revnote.author.1Label": "القرار للمؤلفة.",
  "revnote.author.1Body": "هي التي تختار كل مستوى، ويمكنها إيقافه في أي وقت.",
  "revnote.search.1Label": "ليست مقترحًا لترتيب النتائج.",
  "revnote.search.1Body": "ترتيب هذه النتائج متخيَّل. كل ما نطلبه هو حضور المجموعة.",
  "revnote.browse.1Label": "أين تقع.",
  "revnote.browse.1Body": "مكان في المتجر يمكن تصفحه، إلى جانب فئات تعمل كما تعمل الآن."
};
