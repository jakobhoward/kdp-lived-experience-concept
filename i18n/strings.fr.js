/* Lived Experience prototype — UI strings, French (fr).
   Mirrors every key in strings.en.js. See that file's header for the full rules; the
   notes below cover only what's specific to French.

   - ADDRESS: "vous" throughout, matching Amazon.fr's own register — unlike the Spanish
     file's "tú", which matches Amazon.es's. Both are locale-correct, not a contradiction.
   - GENDER (rule a). Rosa Delgado and Emily Carter are she/her. French inflects past
     participles and profession nouns for gender, so this surfaces in more places than in
     English: "autrice" (not the masculine-generic "auteur"), "infirmière", "écrivaine",
     and — wherever Rosa speaks in the first person with an être-auxiliary verb or an
     agreeing past participle — the feminine form ("je suis partie", not "parti"). Emily's
     one first-person line uses avoir with a preceding direct object, so its agreement
     ("tapées") tracks the object's gender (lettres, fem.), not Emily's — that one was
     already going to be feminine regardless of who wrote it, so it proves nothing about
     rule (a) either way.
   - GENDER (rule b). Every unspecified author or reader stays gender-free. French has no
     good epicene pronoun, so the recast tools are: "la personne qui a écrit le livre" /
     "quiconque a écrit un livre" (grammatically feminine or invariable, refers to anyone),
     the reflexive/passive ("ont reçu une réponse" instead of naming who answered), or
     dropping the actor as a modifier entirely ("cette page", not "une page d'auteur").
     "La personne … elle" is a standard, widely taught French inclusive-writing pattern:
     "personne" is grammatically feminine, so "elle" is required agreement, not a claim
     about anyone's gender. Never "auteur·ice", "auteur/autrice", or "auteur-e".
   - GENDER (rule c). Marion Hale's voice line ("I wrote this…I stopped speaking") uses
     avoir with no preceding direct object, so it takes no visible agreement in French
     either — the claim that this line is genderless in all shipped languages holds here
     too. Nothing was added to settle it.
   - PUNCTUATION. French puts a non-breaking space before ; : ! ? — rendered here as a
     literal U+00A0 wherever the English source string itself contains a colon (so
     "Sort by:" → "Trier par :", not touching labels that carry no colon in English,
     like the book.meta.*Label captions). Quotations use « » with U+00A0 inside, matching
     standard French typographic convention.
   - NUMBERS. Decimal comma. Thousands grouped with a narrow no-break space (U+202F) from
     four digits up — this is exactly what Intl.NumberFormat('fr-FR') renders (verified),
     so a screen reader hears the same number a sighted reader sees, same principle as the
     Spanish file's comment on this. "800", "300", "48", "9 of 14" etc. stay ungrouped —
     three digits or fewer never group in French either.
   - AMAZON'S OWN WORDING. crumb.*, common.kuEligible, common.avgReview,
     common.languageLabel, common.sortLabel, common.sortFeatured, common.kindleEdition,
     search.rail.*, browse.rail.* use the terms Amazon's own French storefront uses
     ("Boutique Kindle", "Format Kindle", "Note moyenne des clients", "Trier par"), not
     invented ones. */
window.I18N = window.I18N || {};
window.I18N.fr = {

  /* ---------- document titles ---------- */
  "index.docTitle": "Collection Expérience vécue — page d'accueil (concept)",
  "book.docTitle": "The Road from Manila — fiche du livre (concept)",
  "author.docTitle": "Rosa Delgado — page de l'autrice (concept)",
  "browse.docTitle": "Expérience vécue — page de catégorie (concept)",
  "search.docTitle": "mémoires sur le départ de chez soi — résultats de recherche (concept)",

  /* ---------- shared chrome ---------- */
  "chrome.conceptLabel": "PROJET DE COURS — <span lang=\"en\" dir=\"ltr\">Inclusive Design &amp; Product Equity (COMMLD 560), UW.</span>",
  "chrome.searchPlaceholder": "Rechercher dans la Boutique Kindle",
  "chrome.searchAria": "Rechercher dans la Boutique Kindle",
  "chrome.searchButtonAria": "Rechercher",
  "chrome.greeting": "Bonjour, identifiez-vous",
  "chrome.account": "Compte et listes",
  "chrome.nav.shop": "Livres",
  "chrome.nav.categories": "Catégories",
  "chrome.nav.trending": "Nouveautés et tendances",
  "chrome.nav.bestsellers": "Meilleures ventes",
  "chrome.nav.deals": "Bons plans",
  "chrome.nav.yourbooks": "Vos livres",
  "chrome.skipToContent": "Passer au contenu principal",
  "chrome.subnavAria": "Sections de la boutique",
  "chrome.breadcrumbAria": "Fil d'Ariane",
  "search.railAria": "Affiner les résultats",

  /* ---------- language switcher ---------- */
  "lang.label": "Langue",
  "lang.buttonAria": "Langue : {name}. Choisir une autre langue",
  "lang.menuAria": "Choisir une langue",
  "lang.notice": "Cette page s'affiche en {name}.",
  "lang.noticeAction": "La lire en anglais",
  "lang.noticeDismissAria": "Fermer ce message",

  /* ---------- breadcrumbs and shared labels ---------- */
  "crumb.store": "Boutique Kindle",
  "crumb.ebooks": "eBooks Kindle",
  "crumb.memoirs": "Biographies et mémoires",
  "collection.name": "Expérience vécue",
  "common.learnMore": "En savoir plus",
  "common.answersQuestions": "✓ Répond à vos questions",
  "common.follow": "+ Suivre",
  "common.partOf": "Fait partie de :",

  /* Store chrome shared by search.html and browse.html — Amazon's own storefront wording
     in French, not ours to invent.
     common.kindleEdition ("Format Kindle") is the format line on a result row AND the
     Format refinement value. It is NOT book.format ("Format : Format Kindle" reads
     oddly doubled, so book.format below is phrased differently) — different string.
     common.kuEligible: "Disponible avec Kindle Unlimited" rather than a calque of
     "eligible" ("éligible" reads bureaucratic here) — an availability statement, matching
     how the Spanish file solved the same false-friend problem. */
  "common.kindleEdition": "Format Kindle",
  "common.kuEligible": "Disponible avec Kindle Unlimited",
  "common.avgReview": "Note moyenne des clients",
  "common.languageLabel": "Langue",
  "common.sortLabel": "Trier par :",
  "common.sortFeatured": "Pertinence",

  /* ---------- index: collection landing ---------- */
  "index.disclaimer": "Ce n'est pas un produit Amazon. Les livres, les personnes qui les ont écrits, et les évaluations sont fictifs ; les commandes ne fonctionnent pas.",
  "index.kicker": "EXPÉRIENCE VÉCUE",
  "index.headline": "Des récits à la première personne, dans les mots de qui les a vécus",
  "index.bannerH2": "Chaque livre de cette collection s'ouvre sur les mots de la personne qui l'a écrit.",
  "index.bannerP": "Des premiers livres, des récits à la première personne — et nombre de ces personnes ont choisi de répondre aux questions du lectorat.",
  "index.gateNoteLabel": "Comment un livre entre dans la collection :",
  "index.gateNoteBody": "il faut déclarer, dans ses propres mots, avoir vécu cette histoire et l'avoir écrite. Amazon héberge la déclaration — Amazon ne la certifie pas. Les traductions, y compris par IA, sont les bienvenues.",

  "index.book1.title": "The Road from Manila",
  "index.book1.author": "Rosa Delgado",
  "index.book1.voice": "« J'ai quitté Manille en 1979. Je l'ai écrit d'abord en tagalog, car c'est la langue dans laquelle je m'en souviens. »",
  "index.book1.starsAria": "4,4 sur 5 étoiles, 214 évaluations",
  "index.book1.coverAlt": "Couverture de The Road from Manila",

  "index.book2.title": "The Unseen Memoir",
  "index.book2.author": "Marion Hale",
  "index.book2.voice": "« J'ai écrit ceci sur la table de ma cuisine, pendant quatre ans, sur l'année où j'ai arrêté de parler. »",
  "index.book2.starsAria": "4,3 sur 5 étoiles, 127 évaluations",
  "index.book2.coverAlt": "Couverture de The Unseen Memoir",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "« Ce sont les lettres de ma grand-mère, et les miennes. Je les ai toutes tapées moi-même. »",
  "index.book3.starsAria": "4,5 sur 5 étoiles, 2 341 évaluations",
  "index.book3.coverAlt": "Couverture de Letters Home",

  "index.book4.title": "The Last Ninety Acres",
  "index.book4.author": "Dale Whitcomb",
  "index.book4.voice": "« Quatre générations ont cultivé cette terre. J'ai écrit l'année où nous l'avons perdue, parce que personne d'autre ne l'aurait fait. »",
  "index.book4.starsAria": "4,2 sur 5 étoiles, 86 évaluations",
  "index.book4.coverAlt": "Couverture de The Last Ninety Acres",

  "index.book5.title": "Eleven Addresses",
  "index.book5.author": "Terrance Boyd",
  "index.book5.voice": "« Onze adresses en six ans après ma sortie de prison. J'ai écrit l'essentiel de ceci sur un ordinateur de bibliothèque, une heure à la fois. »",
  "index.book5.starsAria": "4,6 sur 5 étoiles, 438 évaluations",
  "index.book5.coverAlt": "Couverture de Eleven Addresses",

  "index.book6.title": "Loud in Here",
  "index.book6.author": "Nadia Haddad",
  "index.book6.voice": "« Je suis sourde depuis l'âge de quatre ans. Voici à quoi ressemble vraiment une maison silencieuse, vue de l'intérieur. »",
  "index.book6.starsAria": "4,4 sur 5 étoiles, 309 évaluations",
  "index.book6.coverAlt": "Couverture de Loud in Here",

  "index.book7.title": "Sixteen Hundred Miles a Week",
  "index.book7.author": "Ray Okonkwo",
  "index.book7.voice": "« Je ne sais pas écrire sans fautes. J'ai dicté ce livre à mon téléphone, entre Laredo et Toledo. »",
  "index.book7.starsAria": "4,1 sur 5 étoiles, 52 évaluations",
  "index.book7.coverAlt": "Couverture de Sixteen Hundred Miles a Week",

  "index.book8.title": "Coming Back Slow",
  "index.book8.author": "Deborah Aoki",
  "index.book8.voice": "« J'ai eu un AVC à cinquante et un ans. Réapprendre à écrire m'a pris deux ans. Ce livre, quatre. »",
  "index.book8.starsAria": "4,7 sur 5 étoiles, 1 608 évaluations",
  "index.book8.coverAlt": "Couverture de Coming Back Slow",

  /* The route from the landing page back to the category node it is a view of. Plain text
     link, matching what Amazon puts under a merchandised grid — not a button, and not a
     recommendation-flavored "plus comme ceci". */
  "index.seeAll": "Voir les 48 livres de cette catégorie",

  "index.credits1": "Équipe Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Déclaration d'autorat : mécanisme de Wanting (27/7) · Niveaux d'accès du lectorat vers qui écrit : concept de Pablo (27/7) · Angle de la collection : le recadrage StoryCorps proposé par Chang (24/7) · Recherche sur la découverte communautaire pour le lancement : Jalen (en cours)",
  "index.credits2": "Les personnes qui écrivent ces exemples sont une fiction illustrative en attendant les réponses ouvertes de notre enquête — ce ne sont pas des personas. Le profil de Rosa Delgado s'appuie sur la diaspora documentée des infirmières philippines migrantes (sources dans le PRD), pas sur des données démographiques inventées.",
  "index.credits3": "KDP compte déjà de vrais livres qui appartiennent à cette collection ; le rayon existe, ce qui manque, c'est un moyen de le parcourir. Ces titres restent pourtant inventés, parce que l'accès montré ici, c'est à la personne qui écrit de l'accorder, et personne n'a réellement accordé cet accès — placer le nom d'une autrice vivante à côté d'un niveau d'accès qu'elle n'a jamais accepté serait l'inverse de l'idée. Le texte inventé permet aussi de porter des états qu'une fiche réelle n'a pas, et en six langues, sans réécrire les mots de quiconque.",

  /* ---------- book detail ---------- */
  "book.disclaimer": "Ce n'est pas un produit Amazon. Ce livre, son autrice et toutes les évaluations sont fictifs ; les commandes ne fonctionnent pas.",
  "book.title": "The Road from Manila",
  "book.bylinePrefix": "de",
  "book.bylineAuthor": "Rosa Delgado",
  "book.bylineRole": "(Autrice)",
  "book.format": "Format : Format Kindle",
  "book.starsAria": "4,4 sur 5 étoiles, 214 évaluations",
  "book.partOfValue": "Expérience vécue (48 livres)",
  "book.coverAlt": "Couverture de The Road from Manila",
  "book.readSample": "Lire un extrait",
  "book.audibleSample": "Extrait Audible",
  "book.visitAuthorPage": "Voir la page de l'autrice",

  "book.attest.h3": "Dans ses propres mots",
  "book.attest.quote": "« Je suis partie de Manille en 1979 avec une valise et le chapelet de ma mère. Je ne suis pas écrivaine — j'ai été infirmière pendant trente et un ans. J'ai d'abord écrit ceci en tagalog, car c'est la langue dans laquelle je m'en souviens, et ma nièce et moi l'avons traduit ensemble, avec l'aide d'un outil de traduction. Chaque mot de cette histoire est le mien. Je l'ai vécue. »",
  "book.attest.sigName": "Rosa Delgado, déclaration de l'autrice",
  "book.attest.sigLink": "Ce qui se passe si une déclaration est fausse",
  "book.attest.sigBody": "Une fausse déclaration retire le livre de la collection ; le compte est traité selon les règles de contenu que KDP applique déjà — aucun nouveau mécanisme n'est créé.",
  "book.attest.translationNote": "Vous lisez une traduction de la déclaration de Rosa. Les mots qu'elle a déclarés sont les siens.",

  /* The inline "See more" expansion under the signature. book.attest.sigLink is reused as
     the disclosure button's label. Nothing below may name a review queue, a trust team, an
     appeals board, a verification step, or any Amazon check on whether a story is true —
     "comité", "équipe de confiance" and "vérification" are all out. Everything described
     already exists under KDP policy. These paragraphs describe the general mechanism, not
     Rosa specifically, so the actor stays ungendered throughout: "la personne qui a écrit
     le livre" / "quiconque a écrit un livre", never a bare "l'auteur". */
  "book.attest.false.h": "Si une déclaration se révèle fausse",
  "book.attest.false.p1": "La déclaration est traitée comme tout autre texte que quelqu'un écrit sur la fiche de son propre livre. Si elle est signalée et que KDP estime qu'elle enfreint les règles de contenu déjà acceptées par le compte, le livre sort de la collection et le compte est traité comme n'importe quel autre manquement à ces règles — jusqu'à la perte de l'accès à la publication. Rien de nouveau n'est construit pour cela.",
  "book.attest.false.p2": "Qui lit peut la signaler avec l'outil de signalement qu'Amazon possède déjà. KDP applique les règles qu'il applique déjà. Il n'y a ici aucun comité à part, aucune file que nous aurions inventée, aucune procédure d'appel de notre cru, et aucun score attaché à la personne qui a écrit le livre.",
  "book.attest.false.p3": "La limite mérite d'être dite clairement : Amazon ne sait pas si une histoire est vraie et ne peut pas le savoir. Rien ici ne vérifie un souvenir, une date ou une vie. C'est exactement pour cela que l'affirmation reste dans les mots de la personne qui a écrit le livre, avec son nom à côté, et qu'aucun sceau Amazon n'y figure : un sceau serait une promesse qu'Amazon ne peut pas tenir. Ce sur quoi on peut agir, c'est une déclaration qui se révèle fabriquée, tout comme on agit sur une fausse affirmation dans n'importe quelle autre fiche produit.",
  "book.attest.false.p4": "Le signalement est donc tout le mécanisme. Ce n'est pas la promesse d'un résultat, et vous ne recevrez aucun compte rendu de suivi.",
  "book.attest.false.reportLink": "Signaler ce contenu",

  "book.desc.lede": "Parce que toute vie ordinaire porte une histoire extraordinaire qui mérite d'être retenue.",
  "book.desc.p1Html": "En 1979, Rosa Delgado est montée dans un avion à Manille avec un contrat d'infirmière, une seule valise, et sans savoir qu'elle ne reverrait pas sa mère avant onze ans. <em>The Road from Manila</em> raconte les années qui ont suivi : des gardes de nuit dans un pays dont elle rêvait la langue en traduction, des mandats glissés dans des cartes d'anniversaire, et le lent travail de se construire un foyer tout en regrettant l'autre.",
  "book.desc.p2": "Écrit d'abord en tagalog et traduit avec sa nièce, ce livre s'adresse à quiconque a un jour été la personne qui est partie — ou celle qui est restée.",

  "book.meta.pagesValue": "287 pages",
  "book.meta.pagesLabel": "Longueur d'impression",
  "book.meta.langValue": "Anglais + Tagalog",
  "book.meta.langLabel": "Langue",
  "book.meta.a11yValue": "Pris en charge",
  "book.meta.a11yLabel": "Lecteur d'écran",
  "book.meta.dateValue": "mars 2026",
  "book.meta.dateLabel": "Date de publication",

  "book.ask.h3": "Livre terminé ? Posez votre question à Rosa",
  /* book.ask.sub deleted 7/30 in all five locale files that existed then, per its own note.
     It promised a cadence nobody measures; book.ask.subState replaced it with an observed
     count. Not reintroduced here. */
  "book.ask.subState": "Activé par l'autrice · 9 questions sur 14 ont reçu une réponse",
  "book.ask.tier1Label": "Questions sur le livre",
  "book.ask.tier1Body": "Une question par personne et par livre, ouverte aux achats vérifiés et aux emprunts Kindle Unlimited. Rien n'est public tant que Rosa n'a pas publié sa réponse.",
  "book.ask.tier2Label": "Séance de questions en direct",
  "book.ask.tier2Body": "Séance occasionnelle en direct, programmée par l'autrice.",
  "book.ask.note": "Chaque personne qui écrit choisit son niveau d'accès — y compris aucun — et peut le changer à tout moment. Modéré par cette personne par défaut : elle voit, répond ou supprime ; les outils existants de signalement et de blocage des règles de la communauté Amazon s'appliquent. Les coordonnées ne sont jamais partagées.",

  /* The ask-a-question flow, state by state. Half of these strings exist to say that
     nothing happens: no reply is promised, no time is quoted, no escalation exists. The
     refusal is the content — "nous ne savons pas" must not soften into "bientôt" or "sous
     peu", and nothing here may hint that Amazon follows up. Rosa Delgado is she/her
     throughout (rule a); the reader is addressed as "vous", matching Amazon.fr's own
     register. */
  "book.ask.startBtn": "Poser une question",

  "book.ask.composeLabel": "Votre question pour Rosa",
  "book.ask.composeHint": "300 caractères maximum. Posez une question sur le livre, ou sur la vie derrière lui.",
  "book.ask.composeTerms": "C'est votre unique question pour ce livre. Rosa la voit, et peut y répondre ou la supprimer. Rien de ce que vous écrivez n'apparaît sur Amazon, sauf si elle publie votre question avec sa réponse. Il n'existe ici aucune messagerie privée, à aucun niveau — ni pour vous, ni pour elle — et ni l'une ni l'autre ne voit les coordonnées de contact de l'autre.",
  "book.ask.composeSend": "Envoyer la question",
  "book.ask.composeCancel": "Annuler",
  "book.ask.composeEmpty": "Écrivez d'abord votre question.",

  "book.ask.sentH": "Question envoyée à Rosa",
  "book.ask.sentBody": "Elle est maintenant avec Rosa. Elle modère ses propres questions : elle peut y répondre, ou la supprimer, et elle n'est tenue de faire ni l'un ni l'autre.",
  "book.ask.sentNoEta": "Nous ne vous disons pas quand attendre une réponse, parce que nous ne le savons pas. Aucun délai de réponse n'est promis ici, et aucun n'a été mesuré.",
  "book.ask.sentWhere": "Si elle répond, sa réponse et votre question apparaissent ensemble sur sa page d'autrice.",
  "book.ask.sentWhereLink": "Voir les questions répondues",
  "book.ask.sentDone": "Terminé",

  "book.ask.waitH": "Votre question est avec Rosa",
  "book.ask.waitSent": "Vous l'avez posée le 12 mars 2026. Elle n'a pas encore reçu de réponse.",
  "book.ask.waitQLabel": "Votre question :",
  "book.ask.waitTruth": "Cela peut rester ainsi. Certaines questions ne reçoivent jamais de réponse, et Rosa peut en supprimer une sans répondre et sans en dire la raison. Amazon ne la relance pas, n'escalade rien, et ne répond pas à sa place.",
  "book.ask.waitPublic": "Rien de ce que vous avez écrit n'est public.",
  "book.ask.waitWithdraw": "Retirer ma question",
  "book.ask.waitWithdrawNote": "La retirer la supprime. Vous pourrez en écrire une autre ensuite.",

  "book.ask.answeredH": "Rosa a répondu à votre question",
  "book.ask.answeredBody": "Elle a publié votre question avec sa réponse sur sa page d'autrice, où d'autres personnes peuvent maintenant lire les deux.",
  "book.ask.answeredLink": "Lire sa réponse",
  "book.ask.answeredQuota": "C'était votre unique question pour ce livre.",

  "book.ask.reportLink": "Signaler un problème avec cette question ou cette réponse",

  "book.ask.ineligibleH": "Les questions sont ouvertes à qui a ce livre",
  "book.ask.ineligibleBody": "Achetez-le ou empruntez-le avec Kindle Unlimited, et la zone de question s'ouvre ici. C'est la même vérification qu'Amazon utilise déjà pour marquer un avis comme achat vérifié.",
  "book.ask.ineligibleWhy": "Cette vérification existe pour Rosa, pas pour nous. Sans elle, la zone de questions d'un livre serait un formulaire de contact ouvert à tout Internet, et les personnes les plus susceptibles d'être ciblées sont justement celles autour de qui cette collection est construite.",
  "book.ask.ineligibleWhere": "Les options d'achat et d'emprunt se trouvent dans l'encadré en haut de cette page.",

  "book.ask.offH": "Rosa n'accepte pas de questions en ce moment",
  "book.ask.offBody": "Elle a désactivé les questions du lectorat. Elle les réactivera peut-être, ou pas. Dans les deux cas, le livre reste dans la collection et sa déclaration reste sur cette page — l'accès a toujours été son choix, et le désactiver ne lui coûte rien ici.",
  "book.ask.offNoAlt": "Il n'existe aucun autre moyen de la joindre via Amazon, et c'est voulu.",

  "book.ask.offAfterH": "Les questions sont fermées pour ce livre",
  "book.ask.offAfterBody": "Rosa a désactivé les questions du lectorat après que vous avez posé la vôtre. Votre question n'a jamais été publiée et ne recevra pas de réponse ; elle a été supprimée avec les autres questions en attente.",

  "book.ask.errorH": "Votre question n'a pas été envoyée",
  "book.ask.errorBody": "Un problème est survenu de notre côté, pas du vôtre. Votre brouillon est toujours là.",
  "book.ask.errorRetry": "Réessayer",
  "book.ask.errorDiscard": "Supprimer le brouillon",

  /* Live-region announcements. Screen-reader-only in effect, though not named "Aria". */
  "book.ask.liveSent": "Question envoyée. Rien n'est public sauf si Rosa publie sa réponse.",
  "book.ask.liveWithdrawn": "Votre question a été retirée et supprimée.",
  "book.ask.liveLimit": "Vous avez atteint la limite de 300 caractères.",
  "book.ask.liveEmpty": "Écrivez d'abord votre question.",
  "book.ask.liveError": "Votre question n'a pas été envoyée. Votre brouillon a été conservé.",

  "book.ask.mockNote": "Note de prototype : rien n'est envoyé nulle part. Ce parcours existe pour que les différents états puissent être lus — y compris ceux où il ne se passe rien.",

  "book.buy.formatKindle": "Kindle",
  "book.buy.orBuy": "ou 4,99 $ à l'achat",
  "book.buy.formatPaperback": "Broché",
  "book.buy.kuPitch": "Lecture illimitée. Des millions de titres.",
  "book.buy.readFree": "Lire gratuitement",
  "book.buy.or": "OU",
  "book.buy.oneClick": "Acheter avec 1-Click",
  "book.buy.sendSample": "Envoyer un extrait gratuit",

  "book.credits1": "Équipe Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Déclaration d'autorat : mécanisme de Wanting (27/7) · Niveaux d'accès : concept de Pablo (27/7) · Éligibilité « traductions bienvenues » : recherche de l'équipe sur la politique de KDP relative au contenu généré par IA (27/7)",

  /* ---------- author page ---------- */
  "author.disclaimer": "Ce n'est pas un produit Amazon. Cette autrice et tout le contenu sont fictifs ; les commandes ne fonctionnent pas.",
  "author.name": "Rosa Delgado",
  "author.tabHome": "ACCUEIL",
  "author.tabAbout": "À PROPOS",
  "author.tabBooks": "TOUS LES LIVRES",
  "author.aboutH2": "À propos de l'autrice",
  "author.bioHtml": "Rosa Delgado a été infirmière pendant trente et un ans, à Manille puis à Chicago. <em>The Road from Manila</em> est son premier livre, écrit en tagalog et traduit avec sa nièce. Elle ne prévoyait pas de devenir écrivaine ; elle prévoyait de se souvenir. Elle vit près de ses petits-enfants, qui sont la raison pour laquelle ce livre existe.",

  "author.qaH2": "Questions posées à Rosa par le lectorat",
  "author.qLabel": "Question :",
  "author.aLabel": "Réponse :",
  "author.answeredBy": "Réponse de Rosa Delgado, autrice",
  "author.qa1.q": "Avez-vous déjà pensé à repartir pour de bon ?",
  "author.qa1.a": "Chaque mois de décembre, pendant les dix premières années. Puis, une année, j'ai remarqué que le mal du pays me prenait dans les deux sens, et j'ai compris que j'avais désormais deux foyers. C'est le sujet du chapitre 14.",
  "author.qa2.q": "Qu'est-ce que le fait d'écrire d'abord en tagalog a changé au livre ?",
  "author.qa2.a": "Tout. Certains souvenirs n'existent que dans la langue où ils se sont passés. Ma nièce et moi nous sommes disputées sur chaque phrase de la traduction, et c'est dans ces disputes que le livre est devenu sincère.",

  "author.popularH2": "Les plus populaires",
  "author.bookTitle": "The Road from Manila",
  "author.starsAria": "4,4 sur 5 étoiles, 214 évaluations",
  "author.orBuy": "ou 4,99 $ à l'achat",
  "author.partOfValue": "Expérience vécue",
  "author.coverAlt": "Couverture de The Road from Manila",

  "author.access.h3": "Paramètres d'accès de Rosa",
  "author.access.sub": "Choisis par l'autrice · Modifiables à tout moment",
  "author.access.tier1Label": "Questions sur le livre",
  "author.access.tier1State": "Activé",
  /* WAS "Répond chaque semaine…" — the cadence promise was already retired from book.html
     because nobody measures it. Replaced with the same observed count book.html shows, so
     the two pages state the same fact. */
  "author.access.tier1Body": "9 questions sur 14 ont reçu une réponse ; rien n'est public tant que Rosa ne l'a pas publiée.",
  "author.access.tier2Label": "Séance de questions en direct",
  "author.access.tier2State": "Activé",
  "author.access.tier2Body": "Occasionnelle, programmée par l'autrice.",
  "author.access.tier3Label": "Aucun accès",
  "author.access.tier3State": "Disponible pour quiconque écrit un livre",
  "author.access.tier3Body": "Il est possible de tout désactiver et de rester dans la collection.",
  "author.access.note": "L'accès est le choix de la personne qui écrit, niveau par niveau. Aucune messagerie privée n'existe à aucun niveau — hors périmètre par conception, pour la sécurité de cette personne. Aujourd'hui, une page comme celle-ci ne propose qu'une seule action au lectorat : Suivre, à sens unique. Ce panneau en est la moitié manquante.",

  "author.credits1": "Équipe Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Niveaux d'accès : concept de Pablo (27/7) · Déclaration d'autorat : mécanisme de Wanting (27/7) · Angle StoryCorps : Chang (24/7)",

  /* ---------- browse: the category node (entry point) ---------- */
  /* Carries no book strings of its own: all eight rows reuse index.bookN.*, so the cast
     reads identically on the landing page and in the category. It also reuses crumb.*,
     collection.name, common.answersQuestions, book.readSample and the common.* store
     chrome above. Sibling categories are Amazon's own taxonomy under "Biographies et
     mémoires" — not invented names. */
  "browse.disclaimer": "Ce n'est pas un produit Amazon. Cette catégorie, ses livres, les personnes qui ont écrit ses livres, et ses évaluations sont fictifs ; les commandes ne fonctionnent pas.",

  "browse.railAria": "Catégorie",
  "browse.rail.sib1": "Arts et littérature",
  "browse.rail.sib2": "Historiques",
  "browse.rail.sib3": "Grandes figures et personnalités",
  "browse.rail.sib4": "Mémoires",
  "browse.rail.sib5": "Régionales",
  "browse.rail.sib6": "Groupes spécifiques",
  "browse.rail.refineH": "Affiner par",

  "browse.resultCount": "1-8 sur 48 résultats",
  /* "Authors choose this category … when they publish it" is recast as "la personne qui
     l'a écrit… au moment de le publier" — the actor stays the person who WROTE it (the
     gate is authorship, not publishing), and "la personne" takes no gender. */
  "browse.nodeIntro": "Des livres dont l'autorat déclare, dans ses propres mots, avoir vécu l'histoire et l'avoir écrite. Cette catégorie est choisie par la personne qui a écrit le livre, au moment de le publier. Amazon héberge chaque déclaration et ne la certifie pas. Les traductions, y compris par IA, sont les bienvenues.",

  "browse.card.h3": "La collection Expérience vécue",
  /* WAS "Une sélection plus restreinte de cette catégorie" — "sélection" affirme qu'un
     choix éditorial a été fait, c'est-à-dire un aval, ce qui contredisait la phrase
     suivante ("être ici est une place sur l'étagère, pas une note"). index.html montre les
     huit premiers des mêmes quarante-huit livres, dans le même ordre : personne ne les
     a sélectionnés. */
  "browse.card.sub": "Une page de présentation de cette catégorie, dans les mots de qui écrit",
  "browse.card.body": "Tout livre qui remplit la condition figure dans cette catégorie, donc être ici est une place sur l'étagère, pas une note. La page de la collection présente quelques-unes de ces personnes dans leurs propres mots, et montre lesquelles ont choisi de répondre aux questions du lectorat.",
  "browse.card.cta": "Parcourir la collection",

  "browse.pagerAria": "Pages de résultats",
  "browse.pagerNext": "Suivant",

  "browse.credits1": "Équipe Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Point d'entrée : un nœud de catégorie permanent plutôt qu'une rangée promotionnelle. Un emplacement promotionnel a une date d'expiration (Chang, 24/7) ; une catégorie n'en a pas, et sa condition d'entrée est une condition que KDP possède déjà — la personne qui écrit choisit la catégorie et fait la déclaration. La réduction du risque sans toucher au prix (Pablo, A5) apparaît ici sous forme d'extrait gratuit et de Kindle Unlimited sur chaque rangée, au moment du choix — jamais sous forme de remise.",
  "browse.credits2": "Cette catégorie est un emplacement, pas un aval. Rien ici ne filtre la boutique, ne classe un livre, ni ne recommande un livre par rapport à un autre ; les filtres de la colonne de gauche et le contrôle de tri sont ceux, inchangés, de la Boutique Kindle. Une rangée Kindle Unlimited pourrait porter la collection pendant une fenêtre de lancement, mais un véhicule de lancement n'est pas un point d'entrée, donc il n'est pas construit ici.",

  /* ---------- search results ---------- */
  "search.disclaimer": "Ce n'est pas un produit Amazon. Ces résultats sont un exemple fictif ; chaque livre, la personne qui l'a écrit, et chaque évaluation est inventé, et aucune commande ne fonctionne. L'ordre des résultats ne fait pas partie de cette proposition.",
  "search.query": "mémoires sur le départ de chez soi",
  "search.resultCountHtml": "1-16 sur plus de 800 résultats pour <span class=\"q\">« mémoires sur le départ de chez soi »</span>",
  "search.sponsored": "Sponsorisé",
  "search.byPrefix": "de",

  "search.orderNoteLabel": "Ce que cette page ne change pas :",
  /* "Part of:" here is quoting the UI label common.partOf and matches it word for word. */
  "search.orderNoteBody": "l'ordre de ces résultats. Rien ici n'est reclassé, mis en avant ou filtré — nous n'avons ajouté aucun filtre à la colonne de gauche ni aucune option de tri — et les deux titres de la collection ci-dessous ne portent que la même mention « Fait partie de : » qu'Amazon imprime déjà pour un livre d'une série, plus une ligne écrite par la personne qui a écrit le livre.",

  /* Left rail. Amazon's existing refinements, reproduced unchanged — we added none. */
  "search.rail.dept": "Catégorie",
  "search.rail.deptChild1": "Mémoires",
  "search.rail.deptChild2": "Patrimoine culturel",
  "search.rail.deptChild3": "Ethniques et nationales",
  "search.rail.deptChild4": "Voyageurs et explorateurs",
  "search.rail.ku": "Kindle Unlimited",
  "search.rail.format": "Format",
  "search.rail.formatAudio": "Livre audio",
  "search.rail.formatPaper": "Broché",
  "search.rail.formatHard": "Relié",
  "search.rail.reviewAndUp": "et plus",
  "search.rail.review4Aria": "4 étoiles et plus",
  "search.rail.review3Aria": "3 étoiles et plus",
  "search.rail.review2Aria": "2 étoiles et plus",
  "search.rail.review1Aria": "1 étoile et plus",
  "search.rail.price": "Prix",
  "search.rail.priceUnder5": "Moins de 5 $",
  "search.rail.price5to10": "De 5 $ à 10 $",
  "search.rail.price10to20": "De 10 $ à 20 $",
  "search.rail.price20up": "20 $ et plus",
  "search.rail.langEnglish": "Anglais",
  "search.rail.langSpanish": "Espagnol",
  "search.rail.langFrench": "Français",
  "search.rail.langChinese": "Chinois",
  "search.rail.langArabic": "Arabe",
  "search.rail.seeMore": "Voir plus",

  /* Fourteen invented filler results. Titles and names are NOT translated (header rule),
     the people are unspecified and take no gender inflection (rule b), and they are not
     personas. Only the starsAria strings change: decimal comma, and narrow-no-break-space
     grouping from four digits up, matching Intl.NumberFormat('fr-FR'). */
  "search.r01.title": "The House on Winter Street",
  "search.r01.author": "Anne Prescott",
  "search.r01.starsAria": "4,5 sur 5 étoiles, 12 480 évaluations",
  "search.r02.title": "Salt and Distance",
  "search.r02.author": "Michael Brandt",
  "search.r02.starsAria": "4,2 sur 5 étoiles, 3 109 évaluations",
  "search.r03.title": "Everything I Left Behind",
  "search.r03.author": "Carol Whitfield",
  "search.r03.starsAria": "4,4 sur 5 étoiles, 87 évaluations",
  "search.r04.title": "Departures: A Memoir",
  "search.r04.author": "Paul Ashby",
  "search.r04.starsAria": "4,0 sur 5 étoiles, 1 204 évaluations",
  "search.r05.title": "Sixty Miles from Anywhere",
  "search.r05.author": "Janet Kroll",
  "search.r05.starsAria": "4,3 sur 5 étoiles, 640 évaluations",
  "search.r07.title": "The Long Way Round",
  "search.r07.author": "Stephen Marek",
  "search.r07.starsAria": "4,1 sur 5 étoiles, 58 évaluations",
  "search.r08.title": "A Door That Did Not Lock",
  "search.r08.author": "Helen Voss",
  "search.r08.starsAria": "4,6 sur 5 étoiles, 4 730 évaluations",
  "search.r09.title": "After the Move",
  "search.r09.author": "Gregory Lyle",
  "search.r09.starsAria": "3,9 sur 5 étoiles, 909 évaluations",
  "search.r10.title": "What the Suitcase Held",
  "search.r10.author": "Barbara Nell",
  "search.r10.starsAria": "4,2 sur 5 étoiles, 176 évaluations",
  "search.r12.title": "Homesick for a Place That Changed",
  "search.r12.author": "Diane Cutler",
  "search.r12.starsAria": "4,4 sur 5 étoiles, 2 015 évaluations",
  "search.r13.title": "The Year of Boxes",
  "search.r13.author": "Thomas Reyburn",
  "search.r13.starsAria": "4,0 sur 5 étoiles, 31 évaluations",
  "search.r14.title": "Leaving: A Memoir in Essays",
  "search.r14.author": "Ruth Almond",
  "search.r14.starsAria": "4,3 sur 5 étoiles, 762 évaluations",
  "search.r15.title": "Nobody Warned Me About the Quiet",
  "search.r15.author": "Frank Delahunt",
  "search.r15.starsAria": "4,5 sur 5 étoiles, 5 388 évaluations",
  "search.r16.title": "The Country I Remember",
  "search.r16.author": "Marjorie Stane",
  "search.r16.starsAria": "4,2 sur 5 étoiles, 143 évaluations",

  "search.credits1": "Équipe Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · L'appartenance à la collection est indiquée avec la mention de série « Fait partie de : » qu'Amazon possède déjà, et rien d'autre — aucune nouvelle interface de recherche, aucun filtre, aucun changement de classement · Déclaration d'autorat : mécanisme de Wanting (27/7) · La limite « aucun changement d'algorithme » : Chang 20/7, Rachel 23/7",
  "search.credits2": "Quatorze de ces seize résultats sont du remplissage inventé, pour que les deux titres de la collection figurent dans une liste de résultats ordinaire plutôt que mise en scène. Ces quatorze-là ne sont ni des personnages, ni des personas, ni le fruit d'une recherche ; ils n'ont pas de biographie et n'apparaissent sur aucune autre page.",

  /* ---------- the reviewer bar and its notes ----------
     Chrome addressed to whoever is reviewing this, not to a shopper: the
     walkthrough labels across the top, the one-line caption naming what each
     screen is for, and the notes behind the Show-notes toggle. Translated like
     everything else — a reviewer reading in Arabic should not hit an English
     signpost. */
  "demo.navAria": "Parcours du prototype",
  "demo.step.search": "Recherche",
  "demo.step.category": "Catégorie",
  "demo.step.collection": "Collection",
  "demo.step.book": "Livre",
  "demo.step.author": "Autrice",
  "demo.notesShow": "Afficher les notes",
  "demo.notesHide": "Masquer les notes",
  "index.demoCaption": "La collection elle-même, et la phrase qui dit comment un livre y entre.",
  "browse.demoCaption": "La collection dans une page de catégorie, à côté de livres qui n'en font pas partie.",
  "search.demoCaption": "Comment on tombe sur la collection sans l'avoir cherchée.",
  "book.demoCaption": "Un livre : l'attestation de l'autrice, et le parcours pour lui poser une question.",
  "author.demoCaption": "Ce que l'autrice ouvre — les niveaux d'accès, volontaires et réversibles.",
  "revnote.index.1Label": "La surface.",
  "revnote.index.1Body": "Une collection, pas un badge à l'échelle de la boutique ni une modification du classement des recherches. Les deux ont été envisagés, puis écartés.",
  "revnote.index.2Label": "La condition.",
  "revnote.index.2Body": "L'attestation vient de qui a écrit le livre. Amazon l'héberge ; elle ne la certifie pas.",
  "revnote.book.1Label": "Avec ses propres mots.",
  "revnote.book.1Body": "Amazon appose un badge sur ce qu'elle peut mesurer et cite ce qu'elle ne peut pas. Voici la moitié citée.",
  "revnote.book.2Label": "L'accroche.",
  "revnote.book.2Body": "L'accès est volontaire et réversible. Tous les états sont accessibles ici, y compris celui où rien ne se passe.",
  "revnote.author.1Label": "C'est l'autrice qui décide.",
  "revnote.author.1Body": "Elle choisit chaque niveau et peut le désactiver à tout moment.",
  "revnote.search.1Label": "Ce n'est pas une proposition de classement.",
  "revnote.search.1Body": "Cet ordre de résultats est inventé. Nous demandons seulement que la collection soit présente.",
  "revnote.browse.1Label": "Où elle se trouve.",
  "revnote.browse.1Body": "Un endroit de la boutique que l'on peut parcourir, à côté de catégories qui fonctionnent comme elles fonctionnent déjà."
};
