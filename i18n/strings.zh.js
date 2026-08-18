/* Lived Experience prototype — UI strings, Simplified Chinese (zh).
   Mirrors every key in strings.en.js. */
window.I18N = window.I18N || {};
window.I18N.zh = {

  /* ---------- document titles ---------- */
  "index.docTitle": "亲历故事合集｜落地页（概念稿）",
  "book.docTitle": "The Road from Manila｜图书详情页（概念稿）",
  "author.docTitle": "Rosa Delgado｜作者页面（概念稿）",
  "browse.docTitle": "亲历故事｜分类页面（概念稿）",
  "search.docTitle": "离开家乡的回忆录｜搜索结果（概念稿）",

  /* ---------- shared chrome ---------- */
  "chrome.conceptLabel": "学生概念稿：<span lang=\"en\" dir=\"ltr\">Inclusive Design &amp; Product Equity (COMMLD 560)</span>，华盛顿大学。",
  "chrome.searchPlaceholder": "搜索 Kindle 商店",
  "chrome.searchAria": "搜索 Kindle 商店",
  "chrome.searchButtonAria": "搜索",
  "chrome.greeting": "你好，读者",
  "chrome.account": "账户和列表",
  "chrome.nav.shop": "选购图书",
  "chrome.nav.categories": "分类浏览",
  "chrome.nav.trending": "新书与热门",
  "chrome.nav.bestsellers": "畅销榜单",
  "chrome.nav.deals": "优惠",
  "chrome.nav.yourbooks": "我的图书",
  "chrome.skipToContent": "跳到主要内容",
  "chrome.subnavAria": "商店版块",
  "chrome.breadcrumbAria": "导航路径",
  "search.railAria": "优化结果",

  /* ---------- language switcher ---------- */
  "lang.label": "语言",
  "lang.buttonAria": "语言：{name}。选择其他语言",
  "lang.menuAria": "选择语言",
  "lang.notice": "本页面当前以{name}显示。",
  "lang.noticeAction": "改用英文阅读",
  "lang.noticeDismissAria": "关闭此提示",

  /* ---------- breadcrumbs and shared labels ---------- */
  "crumb.store": "Kindle 商店",
  "crumb.ebooks": "Kindle 电子书",
  "crumb.memoirs": "传记与回忆录",
  "collection.name": "亲历故事",
  "common.learnMore": "了解更多",
  "common.answersQuestions": "✓ 回答读者提问",
  "common.follow": "+ 关注",
  "common.partOf": "所属合集：",

  /* Store chrome shared by search.html and browse.html — Kindle 商店本来就在用的说法，
     不另造新词。common.kindleEdition 既是结果行上的格式行，也是“格式”筛选项的取值，
     和 book.format（“格式：Kindle 电子书”）是两条不同的字符串，不要合并。 */
  "common.kindleEdition": "Kindle 电子书",
  "common.kuEligible": "支持 Kindle Unlimited",
  "common.avgReview": "平均客户评分",
  "common.languageLabel": "语言",
  "common.sortLabel": "排序方式：",
  "common.sortFeatured": "精选",

  /* ---------- index: collection landing ---------- */
  "index.disclaimer": "非 Amazon 官方产品。书籍、作者与评分均为虚构，页面控件不可操作。",
  "index.kicker": "亲历故事",
  "index.headline": "第一人称的故事，由作者自己讲述",
  "index.bannerH2": "这里的每一本书，都从作者自己的话开始。",
  "index.bannerP": "这些都是作者的第一本书，也都是第一人称讲述的故事——其中不少作者还选择了接受读者提问。",
  "index.gateNoteLabel": "一本书如何进入这里：",
  /* 原为“亲笔写成的”。7 月 30 日改掉：汉语的“亲笔”专指手写（亲笔信、亲笔签名），
     而这道门槛要求的是“本人所写”，不是“本人手写”。照原样译，同一个页面上就自相矛盾
     ——往下数第七张卡片的作者是开车时一句一句说给手机听的，第八位是中风后才重新学写字
     的。英文 “wrote it” 不含手写义，西班牙语（haberla escrito）和菲律宾语
     （siya ang sumulat nito）也都没有；只有中文这一版跑偏了。browse.nodeIntro 同改。 */
  "index.gateNoteBody": "作者用自己的话声明，这个故事是亲身经历的，这本书也是本人亲自写的。Amazon 只展示作者的声明，并不为其真实性做认证。译本也欢迎，包括用 AI 翻译的译本。",

  "index.book1.title": "The Road from Manila",
  "index.book1.author": "Rosa Delgado",
  "index.book1.voice": "“1979 年我离开马尼拉。我先用塔加洛语写下这本书，因为我是用这种语言记住这些事的。”",
  "index.book1.starsAria": "4.4 星（满分 5 星），214 条评分",
  "index.book1.coverAlt": "The Road from Manila 封面",

  "index.book2.title": "The Unseen Memoir",
  "index.book2.author": "Marion Hale",
  "index.book2.voice": "“这本书我在自家餐桌上写了四年，写的是我不再说话的那一年。”",
  "index.book2.starsAria": "4.3 星（满分 5 星），127 条评分",
  "index.book2.coverAlt": "The Unseen Memoir 封面",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "“这些是我祖母的信，也有我自己的信。每一封都是我亲手打出来的。”",
  "index.book3.starsAria": "4.5 星（满分 5 星），2,341 条评分",
  "index.book3.coverAlt": "Letters Home 封面",

  "index.book4.title": "The Last Ninety Acres",
  "index.book4.author": "Dale Whitcomb",
  "index.book4.voice": "“这片地我们家种了四代。我把失去它的那一年写了下来，因为再没有别人会写。”",
  "index.book4.starsAria": "4.2 星（满分 5 星），86 条评分",
  "index.book4.coverAlt": "The Last Ninety Acres 封面",

  "index.book5.title": "Eleven Addresses",
  "index.book5.author": "Terrance Boyd",
  "index.book5.voice": "“出狱以后的六年，我住过十一个地方。这本书大半是在图书馆的电脑上写的，一次写一个小时。”",
  "index.book5.starsAria": "4.6 星（满分 5 星），438 条评分",
  "index.book5.coverAlt": "Eleven Addresses 封面",

  "index.book6.title": "Loud in Here",
  "index.book6.author": "Nadia Haddad",
  /* 原为“我四岁那年失去了听力”。英文是 “I have been deaf since I was four” —— 讲的是
     状态，不是损失；“失去了听力”把缺陷框架读进了一句本来没有它的话里，而这本书恰恰是
     从内部讲述的。西班牙语（Soy sorda）和菲律宾语（Bingi ako）都是状态句。 */
  "index.book6.voice": "“我四岁起就听不见了。安静的家从里面看究竟是什么样，这本书写的就是这个。”",
  "index.book6.starsAria": "4.4 星（满分 5 星），309 条评分",
  "index.book6.coverAlt": "Loud in Here 封面",

  "index.book7.title": "Sixteen Hundred Miles a Week",
  "index.book7.author": "Ray Okonkwo",
  "index.book7.voice": "“我拼写一直很差。这本书是我从拉雷多开到托莱多的路上，一句一句说给手机听的。”",
  "index.book7.starsAria": "4.1 星（满分 5 星），52 条评分",
  "index.book7.coverAlt": "Sixteen Hundred Miles a Week 封面",

  "index.book8.title": "Coming Back Slow",
  "index.book8.author": "Deborah Aoki",
  "index.book8.voice": "“五十一岁那年我中风了。重新学写字用了两年，写完这本书用了四年。”",
  "index.book8.starsAria": "4.7 星（满分 5 星），1,608 条评分",
  "index.book8.coverAlt": "Coming Back Slow 封面",

  /* 从合集页回到它所属分类节点的链接。用 Amazon 在商品网格下方惯用的“查看全部”
     文字链接，不是按钮，也不是“更多类似内容”——后者就成了推荐。 */
  "index.seeAll": "查看本分类的全部 48 本书",

  "index.credits1": "Reader Discovery 团队：Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · 作者声明机制：Wanting 的方案（7 月 27 日）· 读者→作者互动层级：Pablo 的构想（7 月 27 日）· 合集定位：Chang 借 StoryCorps 重新定位（7 月 24 日）· 为上线提供依据的社区发现研究：Jalen（进行中）",
  "index.credits2": "示例作者是用于说明的虚构人物，之后会用问卷开放式回答的数据替换，并不是用户画像。Rosa Delgado 的背景取自有文献记载的菲律宾护士移民群体（来源见 PRD），不是凭空编造的人口特征。",
  "index.credits3": "KDP 里本来就有属于这个合集的真实图书；书架是有的，缺的是逛这个书架的方式。这里的书名仍然是编的，因为页面上的这种联系要由作者本人授予，而没有哪位真实作者授予过——把一位在世作者的名字放在她从未答应的访问层级旁边，恰好与这个想法相反。编出来的文案还能呈现真实商品页没有的状态，并且用六种语言呈现，而不必改写任何人自己的话。",

  /* ---------- book detail ---------- */
  "book.disclaimer": "非 Amazon 官方产品。本书、作者及所有评分均为虚构，页面控件不可操作。",
  "book.title": "The Road from Manila",
  "book.bylinePrefix": "",
  "book.bylineAuthor": "Rosa Delgado",
  "book.bylineRole": "（作者）",
  "book.format": "格式：Kindle 电子书",
  "book.starsAria": "4.4 星（满分 5 星），214 条评分",
  "book.partOfValue": "亲历故事（共 48 本）",
  "book.coverAlt": "The Road from Manila 封面",
  "book.readSample": "阅读样章",
  "book.audibleSample": "Audible 试听",
  "book.visitAuthorPage": "访问作者页面",

  "book.attest.h3": "作者自己的话",
  "book.attest.quote": "“1979 年我离开马尼拉，只带了一个箱子和母亲的玫瑰念珠。我不是作家——我做了三十一年护士。我先用塔加洛语写下这本书，因为我是用这种语言记住这些事的，后来我和侄女一起翻译，也用了翻译工具帮忙。故事里的每一个字都是我的。这些我都亲身经历过。”",
  "book.attest.sigName": "Rosa Delgado，作者声明",
  "book.attest.sigLink": "如果声明不实会怎样",
  "book.attest.sigBody": "声明不实的图书会从合集中移除；账户按 KDP 现有的内容政策处理——不额外增设审核或处罚机制。",
  "book.attest.translationNote": "你读到的是 Rosa 声明的译文。她签署声明时用的原话，是她自己写下的。",

  /* 签名下方的“查看更多”展开区。book.attest.sigLink 直接复用为展开按钮的文字，没有
     “收起”的变体——状态由箭头和 aria-expanded 表达。下面这几条里不得出现审核队列、
     信任团队、申诉委员会、核实环节，或任何“Amazon 会去查一个故事是否属实”的说法；
     这里描述的一切都已存在于 KDP 现有政策之中。 */
  "book.attest.false.h": "如果声明后来被发现不实",
  "book.attest.false.p1": "这份声明会和作者在自己图书详情页上写的其他内容一样处理。如果有人举报，而 KDP 认定它违反了该账户早已同意的内容准则，这本书就会从合集中撤下，账户也按处理其他违规的同样方式处理——严重的可以到失去出版权限。为此不新建任何东西。",
  "book.attest.false.p2": "读者用 Amazon 现成的举报入口举报，KDP 按它本来就在执行的政策处理。这里没有另设的审核委员会，没有我们发明的处理队列，没有我们编出来的申诉流程，也不会给作者记任何分。",
  "book.attest.false.p3": "有一条限度值得直说：Amazon 不知道一个故事是不是真的，也无从查证。这里没有任何环节去核对一段记忆、一个日期或一段人生。正因如此，这个说法才留在作者自己的话里，署着她本人的名字，旁边也没有 Amazon 的认证标志——认证等于给出 Amazon 兑现不了的承诺。真正能够处理的，是事后被证明属于编造的声明，就像任何其他商品信息里的不实说法一样。",
  "book.attest.false.p4": "所以，举报就是这套机制的全部。它不承诺任何结果，也不会向你反馈进展。",
  "book.attest.false.reportLink": "举报此内容",

  /* The advance-reader signal — the reader-facing half, translated 8/18. Same
     counts as author-dashboard.html: 24 invited, 21 finished, both pages or
     neither. The dashboard's own dash.arc.* keys are deliberately NOT here:
     the whole dash.* namespace stays English in every locale (the author
     console is untranslated). The one exception is dash.arc.credit, further
     down, because it also renders in book.html's translated credits footer. */
  "book.arc.stripInvited": "位受邀预读读者",
  "book.arc.stripFinished": "位在出版前读完",
  "book.arc.howToggle": "预读是怎么运作的",
  "book.arc.how.h": "预读是怎么运作的",
  "book.arc.how.p1": "这本书出版之前，KDP 邀请了 24 位读者免费领取预读本——受邀、免费、公开说明，与 Amazon Vine 在其他商品上已有的做法相同。Rosa 自己选择加入这一轮；她从未被告知这些读者是谁。",
  "book.arc.how.p2": "阅读本身就是信号。Kindle 能知道一本书有没有被读完，24 位中有 21 位读完了这一本。这两个数字从出版当天起就在这个页面上——那时第一条评论都还不存在。",
  "book.arc.how.p3": "预读读者不会在这里留下的，是评论。多数人本来也留不了——发表评论需要过去一年在 Amazon 消费满 50 美元——而且拿免费书换评论违反社区准则。所以这一轮从头到尾不碰评论：没有星级，没有引语，没有评分。多少人读完，是关于这本书的事实，不是说它写得好的断言。",

  "book.desc.lede": "因为每一段平凡的人生，都有一个不平凡的故事，值得记住。",
  "book.desc.p1Html": "1979 年，Rosa Delgado 带着一份护士合同和一个箱子，在马尼拉登上飞机，那时她还不知道，此后十一年都见不到母亲。<em>The Road from Manila</em> 写的就是这中间的岁月——在一个她连做梦都要翻译的国家里上夜班，把汇款夹进生日卡片，一边想着故乡，一边一点一点在这里安家。",
  "book.desc.p2": "这本回忆录先用塔加洛语写成，后来和侄女一起译成英文。写给每一个曾经离开的人——也写给留下来的人。",

  "book.meta.pagesValue": "287 页",
  "book.meta.pagesLabel": "纸质书页数",
  "book.meta.langValue": "英语、塔加洛语",
  "book.meta.langLabel": "语言",
  "book.meta.a11yValue": "支持",
  "book.meta.a11yLabel": "屏幕阅读器",
  "book.meta.dateValue": "2026 年 3 月",
  "book.meta.dateLabel": "出版日期",

  "book.ask.h3": "读完这本书了？向 Rosa 提问",
  /* book.ask.sub（“每周回答”）已于 7 月 30 日在五个语言文件中一并删除，正如它自己的
     说明所要求。它承诺了一个没人统计的频率，这跟已被否掉的“真人写作认证”标是同一类
     毛病；book.ask.subState 换成了 Amazon 真能观察到的计数。 */
  "book.ask.subState": "已开启 · 14 个读者提问已回答 9 个",
  "book.ask.tier1Label": "关于本书的提问",
  "book.ask.tier1Body": "每位读者每本书可提一个问题，需已验证购买或通过 KU 借阅。在 Rosa 发布答复之前，任何内容都不会公开。",
  "book.ask.tier2Label": "读者实时问答",
  "book.ask.tier2Body": "不定期举行，由作者安排时间。",
  "book.ask.note": "作者自己选择开放到哪一层——也可以完全不开放——并且随时可以更改。默认由作者管理：可以查看、回答，也可以删除；Amazon 现有社区准则里的举报和屏蔽工具同样适用。联系方式绝不对外公开。",

  /* 提问流程，一个状态一条。这里有一半的文案存在的意义，就是说明“什么都不会发生”：
     不承诺答复，不给时间，也没有升级处理的途径。翻译时不要把这些拒绝抹平。
     Rosa Delgado 全程是“她”。 */
  "book.ask.startBtn": "我要提问",

  "book.ask.composeLabel": "你想问 Rosa 的问题",
  "book.ask.composeHint": "最多 300 个字符。可以问这本书，也可以问书背后的那段人生。",
  "book.ask.composeTerms": "这是你在这本书里唯一的一次提问。Rosa 会看到，她可以回答，也可以删除。除非她把答复连同你的问题一起发布，否则你写的内容不会出现在 Amazon 上。这里任何层级都没有私信功能——你没有，她也没有——双方都看不到对方的联系方式。",
  "book.ask.composeSend": "发送问题",
  "book.ask.composeCancel": "取消",
  "book.ask.composeEmpty": "请先写下你的问题。",

  "book.ask.sentH": "问题已发送给 Rosa",
  "book.ask.sentBody": "问题现在在 Rosa 那里。她自己管理收到的提问：可以回答，也可以删除，两样都不是她必须做的。",
  "book.ask.sentNoEta": "我们不会告诉你多久会有答复，因为我们也不知道。这里不承诺回复时间，也从未统计过。",
  "book.ask.sentWhere": "如果她回答，她的答复会和你的问题一起出现在她的作者页面上。",
  "book.ask.sentWhereLink": "查看已回答的问题",
  "book.ask.sentDone": "完成",

  "book.ask.waitH": "你的问题在 Rosa 那里",
  "book.ask.waitSent": "你在 2026 年 3 月 12 日提出了这个问题，目前还没有回答。",
  "book.ask.waitQLabel": "你的问题：",
  "book.ask.waitTruth": "它可能就一直是这样。有些问题永远不会有答案，Rosa 也可以不回复、不说明理由就把它删掉。Amazon 不会催她，不会把这件事往上报，也不会代她回答。",
  "book.ask.waitPublic": "你写的内容没有任何一处是公开的。",
  "book.ask.waitWithdraw": "撤回我的问题",
  "book.ask.waitWithdrawNote": "撤回即删除。之后你可以另写一个。",

  "book.ask.answeredH": "Rosa 回答了你的问题",
  "book.ask.answeredBody": "她把你的问题连同自己的答复一起发布在她的作者页面上，其他读者现在也能看到。",
  "book.ask.answeredLink": "查看她的答复",
  "book.ask.answeredQuota": "这是你在这本书里唯一的一次提问，已经用掉了。",

  /* 原为“举报这条提问或答复的问题”：“提问”和“问题”撞在一句里，读起来像在举报
     “某个提问的问题”。与 book.attest.false.reportLink（“举报此内容”）保持同一句式。 */
  "book.ask.reportLink": "举报此提问或答复",

  "book.ask.ineligibleH": "提问面向读过这本书的读者开放",
  "book.ask.ineligibleBody": "购买本书，或用 Kindle Unlimited 借阅，提问框就会在这里打开。这跟 Amazon 给评论标注“已验证购买”时用的是同一道判断。",
  "book.ask.ineligibleWhy": "这道判断是为 Rosa 设的，不是为我们。没有它，作者的提问框就是一张向整个互联网敞开的联系表单，而最容易被针对的作者，恰恰就是这个合集想要收录的那些人。",
  "book.ask.ineligibleWhere": "购买和借阅的选项在本页面靠上的那个框里。",

  "book.ask.offH": "Rosa 目前不接受提问",
  "book.ask.offBody": "她关闭了读者提问。她可能会再打开，也可能不会。无论如何，这本书仍然留在合集里，她的声明也仍然留在这个页面上——开放到哪一层始终由她自己决定，关掉它在这里不会让她付出任何代价。",
  "book.ask.offNoAlt": "通过 Amazon 没有别的途径能联系到她，这是有意为之。",

  "book.ask.offAfterH": "这本书的提问已关闭",
  "book.ask.offAfterBody": "在你提问之后，Rosa 关闭了读者提问。你的问题从未公开，也不会得到回答；它和其他未处理的问题一起被删除了。",

  "book.ask.errorH": "你的问题没有发送成功",
  "book.ask.errorBody": "是我们这边出了问题，不是你。你的草稿还在。",
  "book.ask.errorRetry": "重试",
  "book.ask.errorDiscard": "放弃草稿",

  /* 实时播报区。实际效果等同于只给屏幕阅读器的文字，尽管键名里没有 “Aria”。 */
  "book.ask.liveSent": "问题已发送。除非 Rosa 发布她的答复，否则不会有任何内容公开。",
  "book.ask.liveWithdrawn": "你的问题已撤回并删除。",
  "book.ask.liveLimit": "已达到 300 个字符的上限。",
  "book.ask.liveEmpty": "请先写下你的问题。",
  "book.ask.liveError": "你的问题没有发送成功，草稿已保留。",

  "book.ask.mockNote": "原型说明：这里不会把任何东西发送到任何地方。这套流程存在，是为了让每一种状态都能被读到——包括那些什么都不会发生的状态。",

  "book.buy.formatKindle": "Kindle",
  "book.buy.orBuy": "或 $4.99 购买",
  "book.buy.formatPaperback": "平装",
  "book.buy.kuPitch": "无限畅读，百万好书。",
  "book.buy.readFree": "免费阅读",
  "book.buy.or": "或",
  "book.buy.oneClick": "1-Click 立即购买",
  "book.buy.sendSample": "发送免费样章",

  "book.credits1": "Reader Discovery 团队：Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · 作者声明机制：Wanting 的方案（7 月 27 日）· 互动层级：Pablo 的构想（7 月 27 日）· “译本也欢迎”的适用范围：团队对 KDP AI 内容政策的研究（7 月 27 日）",
  /* Rendered in the credits footer of BOTH author-dashboard.html and book.html —
     translated because the book.html footer is otherwise fully translated. */
  "dash.arc.credit": "预读信号添加于 8 月 17 日——幻灯片里“ARC 作为元数据”的提问（Jalen 的那一页），在导师反馈后落地。",

  /* ---------- author page ---------- */
  "author.disclaimer": "非 Amazon 官方产品。本作者及全部内容均为虚构，页面控件不可操作。",
  "author.name": "Rosa Delgado",
  "author.tabHome": "首页",
  "author.tabAbout": "简介",
  "author.tabBooks": "全部图书",
  "author.aboutH2": "关于作者",
  /* 下面这句里的“他们”指 Rosa 的孙子孙女——已点明含孙女的具体一群人，
     是汉语固有的混合群体复数，不是泛指的阳性形式。请勿在去性别化清理中改动。 */
  "author.bioHtml": "Rosa Delgado 做了三十一年护士，先在马尼拉，后来在芝加哥。<em>The Road from Manila</em> 是她的第一本书，先用塔加洛语写成，再和侄女一起译成英文。她没想过当作家，只想记住这些事。她住得离孙子孙女不远；有他们，才有这本书。",

  "author.qaH2": "读者向 Rosa 提出的问题",
  "author.qLabel": "问题：",
  "author.aLabel": "回答：",
  "author.answeredBy": "由作者 Rosa Delgado 回答",
  "author.qa1.q": "您有没有想过干脆搬回去，再也不走了？",
  "author.qa1.a": "前十年，每年十二月都想。后来有一年我发现，两边我都想家，才明白自己现在有两个家。第 14 章写的就是这件事。",
  "author.qa2.q": "先用塔加洛语写，让这本书有了什么不同？",
  "author.qa2.a": "全都不同了。有些记忆只留在当时的那种语言里。翻译的时候，我和侄女为每一句话都争过。就是在这些争执里，这本书才变得诚实。",

  "author.popularH2": "最受欢迎",
  "author.bookTitle": "The Road from Manila",
  "author.starsAria": "4.4 星（满分 5 星），214 条评分",
  "author.orBuy": "或 $4.99 购买",
  "author.partOfValue": "亲历故事",
  "author.coverAlt": "The Road from Manila 封面",

  "author.access.h3": "Rosa 的互动设置",
  "author.access.sub": "由作者选择 · 随时可改",
  "author.access.tier1Label": "关于本书的提问",
  "author.access.tier1State": "开启",
  /* 原为“每周回答”。这个频率承诺早已从 book.html 撤下——没人统计它。这里改用
     book.ask.subState 里同一个可观察到的计数，让两页说法一致。 */
  "author.access.tier1Body": "14 个读者提问已回答 9 个；在 Rosa 发布之前不会公开。",
  "author.access.tier2Label": "读者实时问答",
  "author.access.tier2State": "开启",
  "author.access.tier2Body": "不定期举行，由作者安排。",
  "author.access.tier3Label": "不开放",
  "author.access.tier3State": "所有作者都可以选择",
  "author.access.tier3Body": "作者可以全部关闭，仍然留在合集里。",
  "author.access.note": "开放到哪一层由作者自己决定，每一层都可以单独设置。任何层级都没有私信功能——出于作者安全考虑，这是有意不做的。今天的作者页面上，读者只能做一件事——关注，而且是单向的。这个面板补上了缺失的另一半。",

  "author.credits1": "Reader Discovery 团队：Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · 互动层级：Pablo 的构想（7 月 27 日）· 作者声明机制：Wanting 的方案（7 月 27 日）· StoryCorps 定位：Chang（7 月 24 日）",

  /* ---------- browse: the category node (entry point) ---------- */
  /* 与其他页面一样，按页面 browse.html 命名。这个页面自己不带任何图书文案：
     八行全部复用 index.bookN.title / .author / .voice / .coverAlt / .starsAria，
     让这批人物在落地页和分类页读起来完全一致。它同样复用 crumb.*、collection.name、
     common.answersQuestions、book.readSample，以及上面的 common.* 商店文案。 */
  "browse.disclaimer": "非 Amazon 官方产品。本分类及其中的书籍、作者与评分均为虚构，页面控件不可操作。",

  "browse.railAria": "分类",
  "browse.rail.sib1": "艺术与文学",
  "browse.rail.sib2": "历史人物",
  "browse.rail.sib3": "领袖与名人",
  "browse.rail.sib4": "回忆录",
  "browse.rail.sib5": "地域",
  "browse.rail.sib6": "特定群体",
  "browse.rail.refineH": "筛选条件",

  "browse.resultCount": "1-8 条，共 48 条结果",
  "browse.nodeIntro": "这些书的作者都用自己的话说明：故事是亲身经历的，书也是本人亲自写的。分类由作者在出版自己这本书时自行选择。Amazon 只展示每一份声明，并不为其做认证。译本也欢迎，包括用 AI 翻译的译本。",

  "browse.card.h3": "亲历故事合集",
  /* 原为“更小的精选视图”。“精选”是在说有人挑过，也就是一种背书，而且跟紧接着的
     下一句（“只是上架的位置，不是评级”）自相矛盾。index.html 展示的就是同样这
     四十八本书里按同样顺序排的前八本，没人挑过。 */
  /* 中文版另有一处要注意：不要把 index.html 叫“入口页面”。“入口”在本方案里专指
     browse.html 这个长期存在的分类节点（见 browse.credits1），而 index.docTitle 管
     index.html 叫“落地页”。两处混用会把整套论证里最关键的一个区分抹平。 */
  "browse.card.sub": "本分类的落地页面，用作者自己的话呈现",
  "browse.card.body": "凡是符合条件的书都在这个分类里，所以出现在这里只是上架的位置，不是评级。合集页面用几位作者自己的话做介绍，也标出其中哪些人选择了回答读者提问。",
  "browse.card.cta": "浏览合集",

  "browse.pagerAria": "结果分页",
  "browse.pagerNext": "下一页",

  "browse.credits1": "Reader Discovery 团队：Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · 入口做成一个长期存在的分类节点，而不是一个促销位。促销位有到期的一天（Chang，7 月 24 日），分类没有，而且它的准入条件是 KDP 本来就有的——作者自己选择分类，并作出声明。不靠价格降低尝试门槛（Pablo，A5）在这里的做法是：每一行都给免费样章和 Kindle Unlimited，就出现在挑书的那一刻——绝不做成折扣。",
  "browse.credits2": "这个分类是一个位置，不是一种背书。这里没有任何东西过滤商店、给书排名，或者由一本书推荐另一本书；左栏的筛选项和排序控件都是 Kindle 商店本来就有的，原样照搬。上线期间可以用一个 Kindle Unlimited 展位来带这个合集，但上线的载体不等于入口，所以这里没有做。",

  /* ---------- search results ---------- */
  "search.disclaimer": "非 Amazon 官方产品。这些结果是虚构的示例；每一本书、每一位作者、每一条评分都是编出来的，页面控件也都不可操作。结果的排序不属于本方案的内容。",
  "search.query": "离开家乡的回忆录",
  "search.resultCountHtml": "1-16 条，共 800 多条结果：<span class=\"q\">“离开家乡的回忆录”</span>",
  "search.sponsored": "赞助商品",
  /* 这一条和 book.bylinePrefix 不是同一种情况，不要改成一致。图书详情页上，作者名后面
     紧跟着 book.bylineRole（“（作者）”），前缀留空正好，不然就成了“由 X 著（作者）”；
     搜索结果行后面什么都没有，前缀一留空，整行就只剩一个孤零零的人名——英文的 “by”
     所标明的“这是作者”这层关系就没了，屏幕阅读器读出来也只是一个名字。 */
  "search.byPrefix": "作者：",

  "search.orderNoteLabel": "本页面没有改动的是：",
  "search.orderNoteBody": "这些结果的排序。这里没有任何东西被重新排名、推广或过滤——我们没有在左栏加筛选项，也没有加排序选项——下面那两本合集图书带的，只是 Amazon 本来就会给系列图书印上的那行“所属合集：”，外加作者自己写的一句话。",

  /* 左栏。Amazon 现有的筛选项，原样照搬——我们一个也没有加。当前节点上方的分类行
     用 crumb.store / crumb.ebooks / crumb.memoirs，共用的筛选标题用上面的 common.* 商店文案。 */
  "search.rail.dept": "图书分类",
  "search.rail.deptChild1": "回忆录",
  "search.rail.deptChild2": "文化传承",
  "search.rail.deptChild3": "族裔与国别",
  "search.rail.deptChild4": "旅行家与探险家",
  "search.rail.ku": "Kindle Unlimited",
  "search.rail.format": "格式",
  "search.rail.formatAudio": "有声书",
  "search.rail.formatPaper": "平装",
  "search.rail.formatHard": "精装",
  "search.rail.reviewAndUp": "及以上",
  "search.rail.review4Aria": "4 星及以上",
  "search.rail.review3Aria": "3 星及以上",
  "search.rail.review2Aria": "2 星及以上",
  "search.rail.review1Aria": "1 星及以上",
  "search.rail.price": "价格",
  "search.rail.priceUnder5": "$5 以下",
  "search.rail.price5to10": "$5 至 $10",
  "search.rail.price10to20": "$10 至 $20",
  "search.rail.price20up": "$20 及以上",
  "search.rail.langEnglish": "英语",
  "search.rail.langSpanish": "西班牙语",
  "search.rail.langFrench": "法语",
  "search.rail.langChinese": "中文",
  "search.rail.langArabic": "阿拉伯语",
  "search.rail.seeMore": "查看更多",

  /* 十四条编出来的填充结果。书名和人名不翻译（见英文文件的约定），这些人未作性别设定，
     不做任何性别标记，也不是用户画像：他们没有任何背景资料，也不出现在别的页面上。
     第 06 和第 11 位是那两本合集图书，复用 index.book1.* 和 index.book5.*。 */
  "search.r01.title": "The House on Winter Street",
  "search.r01.author": "Anne Prescott",
  "search.r01.starsAria": "4.5 星（满分 5 星），12,480 条评分",
  "search.r02.title": "Salt and Distance",
  "search.r02.author": "Michael Brandt",
  "search.r02.starsAria": "4.2 星（满分 5 星），3,109 条评分",
  "search.r03.title": "Everything I Left Behind",
  "search.r03.author": "Carol Whitfield",
  "search.r03.starsAria": "4.4 星（满分 5 星），87 条评分",
  "search.r04.title": "Departures: A Memoir",
  "search.r04.author": "Paul Ashby",
  "search.r04.starsAria": "4.0 星（满分 5 星），1,204 条评分",
  "search.r05.title": "Sixty Miles from Anywhere",
  "search.r05.author": "Janet Kroll",
  "search.r05.starsAria": "4.3 星（满分 5 星），640 条评分",
  "search.r07.title": "The Long Way Round",
  "search.r07.author": "Stephen Marek",
  "search.r07.starsAria": "4.1 星（满分 5 星），58 条评分",
  "search.r08.title": "A Door That Did Not Lock",
  "search.r08.author": "Helen Voss",
  "search.r08.starsAria": "4.6 星（满分 5 星），4,730 条评分",
  "search.r09.title": "After the Move",
  "search.r09.author": "Gregory Lyle",
  "search.r09.starsAria": "3.9 星（满分 5 星），909 条评分",
  "search.r10.title": "What the Suitcase Held",
  "search.r10.author": "Barbara Nell",
  "search.r10.starsAria": "4.2 星（满分 5 星），176 条评分",
  "search.r12.title": "Homesick for a Place That Changed",
  "search.r12.author": "Diane Cutler",
  "search.r12.starsAria": "4.4 星（满分 5 星），2,015 条评分",
  "search.r13.title": "The Year of Boxes",
  "search.r13.author": "Thomas Reyburn",
  "search.r13.starsAria": "4.0 星（满分 5 星），31 条评分",
  "search.r14.title": "Leaving: A Memoir in Essays",
  "search.r14.author": "Ruth Almond",
  "search.r14.starsAria": "4.3 星（满分 5 星），762 条评分",
  "search.r15.title": "Nobody Warned Me About the Quiet",
  "search.r15.author": "Frank Delahunt",
  "search.r15.starsAria": "4.5 星（满分 5 星），5,388 条评分",
  "search.r16.title": "The Country I Remember",
  "search.r16.author": "Marjorie Stane",
  "search.r16.starsAria": "4.2 星（满分 5 星），143 条评分",

  "search.credits1": "Reader Discovery 团队：Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · 合集归属只用 Amazon 本来就有的“所属合集：”系列行来显示，除此之外什么都没有——没有新的搜索界面，没有新的筛选项，也没有排序上的改动 · 作者声明机制：Wanting 的方案（7 月 27 日）· 不改动算法这条边界：Chang 7 月 20 日、Rachel 7 月 23 日",
  "search.credits2": "这十六条结果里有十四条是编出来的填充内容，好让那两本合集图书出现在一份普通的结果列表里，而不是一份摆拍的列表里。那十四条不是人物、用户画像，也不是研究产出；它们没有任何背景资料，也不出现在别的页面上。",

  /* ---------- the reviewer bar and its notes ----------
     Chrome addressed to whoever is reviewing this, not to a shopper: the
     walkthrough labels across the top, the one-line caption naming what each
     screen is for, and the notes behind the Show-notes toggle. Translated like
     everything else — a reviewer reading in Arabic should not hit an English
     signpost. */
  "demo.bannerAria": "关于本原型",
  "demo.navAria": "原型导览",
  "demo.step.search": "搜索",
  "demo.step.category": "分类",
  "demo.step.collection": "合集",
  "demo.step.book": "书籍",
  "demo.step.author": "作者",
  "demo.notesShow": "显示批注",
  "demo.notesHide": "隐藏批注",
  "index.demoCaption": "合集本身，以及说明一本书如何进入合集的那句话。",
  "browse.demoCaption": "分类页面中的合集，旁边是并不属于它的书。",
  "search.demoCaption": "读者并非刻意寻找，却遇见这个合集的方式。",
  "book.demoCaption": "一本书：作者的自述声明，以及向她提问的流程。",
  "author.demoCaption": "作者选择开放的部分——访问层级，自愿加入，随时可撤回。",
  "revnote.index.1Label": "表层。",
  "revnote.index.1Body": "这是一个合集，不是全站徽章，也不改动搜索排序。两者都考虑过，也都已放弃。",
  "revnote.index.2Label": "门槛。",
  "revnote.index.2Body": "声明来自写这本书的人。亚马逊只负责呈现这份声明，并不为其背书。",
  "revnote.book.1Label": "她自己的话。",
  "revnote.book.1Body": "能测量的，亚马逊给标识；不能测量的，就原样引用。这里是被引用的那一半。",
  "revnote.book.2Label": "落点。",
  "revnote.book.2Body": "读者访问由作者自愿开启，且可随时关闭。这里可以看到每一种状态，包括什么也没有发生的那一种。",
  /* Added 8/17 with the advance-reader signal. */
  "revnote.book.3Label": "信任信号。",
  "revnote.book.3Body": "把第 4 问（Ask 4）落到实处：一轮 Vine 式预读，公开痕迹只有这两个数字——出版第一天就在页面上，先于第一条评论。只做信号，绝不碰评论。",
  "revnote.author.1Label": "由作者决定。",
  "revnote.author.1Body": "每一个层级都由她选择，也可以随时关闭。",
  "revnote.search.1Label": "这不是排序方案。",
  "revnote.search.1Body": "这里的结果顺序是虚构的。我们提出的只是让这个合集出现。",
  "revnote.browse.1Label": "它所在的位置。",
  "revnote.browse.1Body": "商店中一处可以浏览的地方，旁边的分类仍按原有方式运作。"
};
