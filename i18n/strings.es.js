/* Lived Experience prototype — UI strings, Spanish (es).
   Mirrors every key in strings.en.js. */
window.I18N = window.I18N || {};
window.I18N.es = {

  /* ---------- document titles ---------- */
  "index.docTitle": "Colección Experiencia vivida — página de inicio (concepto)",
  "book.docTitle": "The Road from Manila — detalle del libro (concepto)",
  "author.docTitle": "Rosa Delgado — página de la autora (concepto)",
  "browse.docTitle": "Experiencia vivida — página de categoría (concepto)",
  "search.docTitle": "memorias sobre irse de casa — resultados de búsqueda (concepto)",

  /* ---------- shared chrome ---------- */
  "chrome.conceptLabel": "PROYECTO DE CLASE — COMMLD 560, UW.",
  "chrome.searchPlaceholder": "Buscar en la Tienda Kindle",
  "chrome.searchAria": "Buscar en la Tienda Kindle",
  "chrome.searchButtonAria": "Buscar",
  "chrome.greeting": "Hola, identifícate",
  "chrome.account": "Cuenta y listas",
  "chrome.nav.shop": "Libros",
  "chrome.nav.categories": "Categorías",
  "chrome.nav.trending": "Novedades",
  "chrome.nav.bestsellers": "Los más vendidos",
  "chrome.nav.deals": "Ofertas",
  "chrome.nav.yourbooks": "Tus libros",
  "chrome.skipToContent": "Saltar al contenido principal",
  "chrome.subnavAria": "Secciones de la tienda",
  "chrome.breadcrumbAria": "Ruta de navegación",
  "search.railAria": "Refinar resultados",

  /* ---------- language switcher ---------- */
  "lang.label": "Idioma",
  "lang.buttonAria": "Idioma: {name}. Elegir otro idioma",
  "lang.menuAria": "Elegir un idioma",
  "lang.notice": "Esta página se muestra en {name}.",
  "lang.noticeAction": "Leerla en inglés",
  "lang.noticeDismissAria": "Cerrar este mensaje",

  /* ---------- breadcrumbs and shared labels ---------- */
  "crumb.store": "Tienda Kindle",
  "crumb.ebooks": "eBooks Kindle",
  "crumb.memoirs": "Biografías y memorias",
  "collection.name": "Experiencia vivida",
  "common.learnMore": "Más información",
  "common.answersQuestions": "✓ Responde a tus preguntas",
  "common.follow": "+ Seguir",
  "common.partOf": "Parte de:",

  /* Store chrome shared by search.html and browse.html. These are Amazon's own storefront
     labels in Spanish, not ours to invent: the sort control, the refinement headings and the
     format value are worded the way the Kindle Store already words them.
     common.kindleEdition ("Versión Kindle") is the format line on a result row AND the Format
     refinement value. It is NOT book.format ("Formato: Versión Kindle") — different string.
     common.kuEligible: "Disponible en Kindle Unlimited", not a calque of "eligible"; Spanish
     stores state availability, and "elegible" reads as a false friend here. */
  "common.kindleEdition": "Versión Kindle",
  "common.kuEligible": "Disponible en Kindle Unlimited",
  "common.avgReview": "Valoración media",
  "common.languageLabel": "Idioma",
  "common.sortLabel": "Ordenar por:",
  "common.sortFeatured": "Destacados",

  /* ---------- index: collection landing ---------- */
  "index.disclaimer": "No es un producto de Amazon. Los libros, la autoría y las valoraciones son ficticios; los controles no funcionan.",
  "index.kicker": "EXPERIENCIA VIVIDA",
  "index.headline": "Historias en primera persona, en las propias palabras de quien las vivió",
  "index.bannerH2": "Cada libro de esta colección empieza con las propias palabras de quien lo escribió.",
  "index.bannerP": "Primeros libros, historias en primera persona. Y en muchos casos, quien escribe ha decidido responder a tus preguntas.",
  "index.gateNoteLabel": "Cómo entra un libro en la colección:",
  "index.gateNoteBody": "hay que declarar, con palabras propias, haber vivido esta historia y haberla escrito. Amazon aloja esa declaración; no la certifica. Se admiten traducciones, incluidas las hechas con IA.",

  "index.book1.title": "The Road from Manila",
  "index.book1.author": "Rosa Delgado",
  "index.book1.voice": "«Salí de Manila en 1979. Lo escribí primero en tagalo, porque es el idioma en el que lo recuerdo».",
  "index.book1.starsAria": "4,4 de 5 estrellas, 214 valoraciones",
  "index.book1.coverAlt": "Portada de The Road from Manila",

  "index.book2.title": "The Unseen Memoir",
  "index.book2.author": "Marion Hale",
  "index.book2.voice": "«Lo escribí en la mesa de mi cocina durante cuatro años, sobre el año en que dejé de hablar».",
  "index.book2.starsAria": "4,3 de 5 estrellas, 127 valoraciones",
  "index.book2.coverAlt": "Portada de The Unseen Memoir",

  "index.book3.title": "Letters Home",
  "index.book3.author": "Emily Carter",
  "index.book3.voice": "«Estas son las cartas de mi abuela, y las mías. Las pasé todas a máquina yo misma».",
  /* 2341, not 2.341: Spanish does not group four-digit numbers (RAE, and CLDR's
     minimumGroupingDigits=2 for es), which is what Intl renders in the visible count.
     A screen reader must hear the same number a sighted reader sees. */
  "index.book3.starsAria": "4,5 de 5 estrellas, 2341 valoraciones",
  "index.book3.coverAlt": "Portada de Letters Home",

  "index.book4.title": "The Last Ninety Acres",
  "index.book4.author": "Dale Whitcomb",
  "index.book4.voice": "«Cuatro generaciones cultivaron esta tierra. Escribí lo que pasó el año en que la perdimos, porque no lo iba a escribir nadie más».",
  "index.book4.starsAria": "4,2 de 5 estrellas, 86 valoraciones",
  "index.book4.coverAlt": "Portada de The Last Ninety Acres",

  "index.book5.title": "Eleven Addresses",
  "index.book5.author": "Terrance Boyd",
  "index.book5.voice": "«Once casas en seis años desde que salí de la cárcel. Casi todo lo escribí en un ordenador de la biblioteca, una hora cada vez».",
  "index.book5.starsAria": "4,6 de 5 estrellas, 438 valoraciones",
  "index.book5.coverAlt": "Portada de Eleven Addresses",

  "index.book6.title": "Loud in Here",
  "index.book6.author": "Nadia Haddad",
  "index.book6.voice": "«Soy sorda desde los cuatro años. Así es de verdad una casa en silencio, vista desde dentro».",
  "index.book6.starsAria": "4,4 de 5 estrellas, 309 valoraciones",
  "index.book6.coverAlt": "Portada de Loud in Here",

  "index.book7.title": "Sixteen Hundred Miles a Week",
  "index.book7.author": "Ray Okonkwo",
  "index.book7.voice": "«No sé escribir sin faltas. Este libro lo dicté al móvil, entre Laredo y Toledo».",
  "index.book7.starsAria": "4,1 de 5 estrellas, 52 valoraciones",
  "index.book7.coverAlt": "Portada de Sixteen Hundred Miles a Week",

  "index.book8.title": "Coming Back Slow",
  "index.book8.author": "Deborah Aoki",
  "index.book8.voice": "«Tuve un ictus a los cincuenta y uno. Volver a aprender a escribir me llevó dos años. Este libro, cuatro».",
  "index.book8.starsAria": "4,7 de 5 estrellas, 1608 valoraciones",
  "index.book8.coverAlt": "Portada de Coming Back Slow",

  /* Enlace de vuelta al nodo de categoría del que esta página es una vista. Enlace de texto
     «ver todo», no un botón ni un «más como este»: eso último sería una recomendación. */
  "index.seeAll": "Ver los 48 libros de esta categoría",

  "index.credits1": "Equipo Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Requisito de declaración de autoría: mecanismo de Wanting (27/7) · Niveles de acceso desde quien lee hacia quien escribe: concepto de Pablo (27/7) · Enfoque de la colección: el giro StoryCorps propuesto por Chang (24/7) · Investigación sobre el descubrimiento comunitario para el lanzamiento: Jalen (en curso)",
  "index.credits2": "Las personas que escriben los libros de ejemplo son ficción ilustrativa a la espera de las respuestas abiertas de nuestra encuesta; no son arquetipos de usuario. El perfil de Rosa Delgado se basa en la diáspora documentada de las enfermeras filipinas migrantes (fuentes en el PRD), no en datos demográficos inventados.",
  "index.credits3": "En KDP ya hay libros reales que pertenecen a esta colección; el estante existe, lo que falta es una forma de recorrerlo. Aun así, estos títulos son inventados, porque el acceso que se ve aquí lo concede quien escribe y ninguna autora real lo ha concedido: poner el nombre de una autora viva junto a un nivel de acceso que nunca aceptó sería lo contrario de la idea. El texto inventado permite además mostrar estados que una ficha real no tiene, y en seis idiomas, sin reescribir las palabras de nadie.",

  /* ---------- book detail ---------- */
  "book.disclaimer": "No es un producto de Amazon. Este libro, su autora y todas las valoraciones son ficticios; los controles no funcionan.",
  "book.title": "The Road from Manila",
  "book.bylinePrefix": "de",
  "book.bylineAuthor": "Rosa Delgado",
  "book.bylineRole": "(Autora)",
  "book.format": "Formato: Versión Kindle",
  "book.starsAria": "4,4 de 5 estrellas, 214 valoraciones",
  "book.partOfValue": "Experiencia vivida (48 libros)",
  "book.coverAlt": "Portada de The Road from Manila",
  "book.readSample": "Leer muestra",
  "book.audibleSample": "Muestra de Audible",
  "book.visitAuthorPage": "Página de la autora",

  "book.attest.h3": "En sus propias palabras",
  "book.attest.quote": "«Salí de Manila en 1979 con una maleta y el rosario de mi madre. No soy escritora: fui enfermera durante treinta y un años. Lo escribí primero en tagalo, porque es el idioma en el que lo recuerdo, y mi sobrina y yo lo tradujimos juntas con la ayuda de una herramienta de traducción. Cada palabra de la historia es mía. Yo la viví».",
  "book.attest.sigName": "Rosa Delgado, declaración de la autora",
  "book.attest.sigLink": "Qué ocurre si una declaración es falsa",
  "book.attest.sigBody": "Una declaración falsa retira el libro de la colección; la cuenta se gestiona con las políticas de contenido que KDP ya tiene, sin ningún mecanismo nuevo de sanción.",
  "book.attest.translationNote": "Estás leyendo una traducción de la declaración de Rosa. Las palabras que ella declaró son suyas.",

  /* The inline "See more" expansion under the signature. book.attest.sigLink is reused as the
     disclosure button's label, so it is not repeated here. Nothing below may name a review
     queue, a trust team, an appeals board, a verification step, or any Amazon check on whether
     a story is true — "comité de revisión", "equipo de confianza" and "verificación" are all
     out. Everything described already exists under KDP policy.
     Gender: the English p3 says "with her name on it", but the sentence around it is about
     authors in general, so the Spanish uses "quien escribió el libro … con su nombre al lado".
     "su" carries the possessive without assigning a gender, which keeps rule (b) intact on a
     string that also renders on Rosa's page under rule (a). */
  "book.attest.false.h": "Si una declaración resulta ser falsa",
  "book.attest.false.p1": "La declaración se trata igual que cualquier otra cosa que se escribe en la página de detalle del propio libro. Si alguien la denuncia y KDP considera que incumple las normas de contenido que la cuenta ya aceptó, el libro sale de la colección y la cuenta se gestiona como se gestiona cualquier otro incumplimiento de esas normas, hasta llegar a la pérdida del acceso de publicación. Para esto no se construye nada nuevo.",
  "book.attest.false.p2": "Quien lee puede denunciarla con el control de denuncia que Amazon ya tiene. KDP aplica las políticas que ya aplica. Aquí no hay ningún comité aparte, ninguna cola que nos hayamos inventado, ningún proceso de apelación que hayamos creado ni ninguna puntuación asociada a quien escribió el libro.",
  "book.attest.false.p3": "Conviene decir el límite con claridad: Amazon no sabe si una historia es verdad y no puede averiguarlo. Aquí nada comprueba un recuerdo, una fecha ni una vida. Por eso mismo la afirmación se queda en las palabras de quien escribió el libro y con su nombre al lado, y por eso no hay ningún sello de Amazon junto a ella: un sello sería una promesa que Amazon no puede cumplir. Sobre lo que sí se puede actuar es sobre una declaración que resulta ser inventada, igual que se actúa sobre cualquier afirmación falsa en cualquier otra ficha de producto.",
  "book.attest.false.p4": "Así que denunciar es todo el mecanismo. No es la promesa de un resultado, y no vas a recibir ningún informe de cómo va.",
  "book.attest.false.reportLink": "Denunciar este contenido",

  "book.desc.lede": "Porque toda vida corriente guarda una historia extraordinaria que merece recordarse.",
  "book.desc.p1Html": "En 1979, Rosa Delgado subió a un avión en Manila con un contrato de enfermería, una sola maleta y sin saber que no volvería a ver a su madre en once años. <em>The Road from Manila</em> es la historia de los años intermedios: turnos de noche en un país cuyo idioma soñaba traducido, el dinero que enviaba a casa doblado dentro de las tarjetas de cumpleaños y el lento trabajo de hacerse un hogar mientras echaba de menos el otro.",
  "book.desc.p2": "Escritas primero en tagalo y traducidas con su sobrina, estas memorias son para quien alguna vez se ha marchado y también para quien se ha quedado.",

  "book.meta.pagesValue": "287 páginas",
  "book.meta.pagesLabel": "Longitud de impresión",
  "book.meta.langValue": "Inglés + Tagalo",
  "book.meta.langLabel": "Idioma",
  "book.meta.a11yValue": "Compatible",
  "book.meta.a11yLabel": "Lector de pantalla",
  "book.meta.dateValue": "marzo de 2026",
  "book.meta.dateLabel": "Fecha de publicación",

  "book.ask.h3": "Hazle una pregunta a Rosa",
  /* book.ask.sub deleted 7/30 in all five locale files at once, as its note asked. It promised
     a cadence nobody measures; book.ask.subState replaced it with an observed count. */
  /* "reader questions" is dropped rather than rendered "preguntas de lectores": the plural is
     unspecified (rule b) and the masculine generic would assign one. In the panel the noun is
     already unambiguous. Digits stay digits. */
  "book.ask.subState": "Activado por la autora · 9 de 14 preguntas respondidas",
  "book.ask.tier1Label": "Preguntas sobre el libro",
  "book.ask.tier1Body": "Una pregunta por persona y por libro, disponible para compras verificadas y préstamos de KU. Nada es público hasta que Rosa publica su respuesta.",
  "book.ask.tier2Label": "Preguntas en directo",
  "book.ask.tier2Body": "Sesión ocasional en directo, programada por la autora.",
  "book.ask.note": "Quien escribe elige su nivel de acceso, incluido ninguno, y puede cambiarlo en cualquier momento. La moderación es suya por defecto: ve, responde o borra; se aplican las herramientas de denuncia y bloqueo de las Normas de la comunidad de Amazon. Los datos de contacto nunca se comparten.",

  /* The ask-a-question flow, state by state. Half of these strings exist to say that nothing
     happens: no reply is promised, no time is quoted, no escalation exists. The refusal is the
     content — "no lo sabemos" must not soften into "pronto" or "en breve", and nothing here
     may hint that Amazon follows up. Rosa Delgado is she/her throughout (rule a); the reader
     is addressed as "tú", matching the rest of this file. */
  "book.ask.startBtn": "Hacer una pregunta",

  "book.ask.composeLabel": "Tu pregunta para Rosa",
  "book.ask.composeHint": "Hasta 300 caracteres. Pregunta por el libro o por la vida que hay detrás.",
  "book.ask.composeTerms": "Esta es tu única pregunta para este libro. Rosa la ve y puede responderla o borrarla. Nada de lo que escribas aparece en Amazon a menos que ella publique tu pregunta junto a su respuesta. Aquí no hay mensajes privados en ningún nivel, ni para ti ni para ella, y ninguna de las dos partes ve los datos de contacto de la otra.",
  "book.ask.composeSend": "Enviar pregunta",
  "book.ask.composeCancel": "Cancelar",
  "book.ask.composeEmpty": "Escribe primero tu pregunta.",

  "book.ask.sentH": "Pregunta enviada a Rosa",
  "book.ask.sentBody": "Ya está con Rosa. Ella modera sus propias preguntas: puede responderla o puede borrarla, y no está obligada a hacer ninguna de las dos cosas.",
  "book.ask.sentNoEta": "No te decimos cuándo esperar una respuesta, porque no lo sabemos. Aquí no se promete ningún plazo de respuesta, y no se ha medido ninguno.",
  "book.ask.sentWhere": "Si responde, su respuesta y tu pregunta aparecen juntas en su página de autora.",
  "book.ask.sentWhereLink": "Ver preguntas respondidas",
  "book.ask.sentDone": "Listo",

  "book.ask.waitH": "Tu pregunta está con Rosa",
  "book.ask.waitSent": "La enviaste el 12 de marzo de 2026. Todavía no tiene respuesta.",
  "book.ask.waitQLabel": "Tu pregunta:",
  "book.ask.waitTruth": "Puede quedarse así. Hay preguntas que no se responden nunca, y Rosa puede borrar una sin contestar y sin decir por qué. Amazon no la persigue, no escala el caso ni responde en su nombre.",
  "book.ask.waitPublic": "Nada de lo que escribiste es público.",
  "book.ask.waitWithdraw": "Retirar mi pregunta",
  "book.ask.waitWithdrawNote": "Retirarla la borra. Después puedes escribir otra.",

  "book.ask.answeredH": "Rosa ha respondido a tu pregunta",
  "book.ask.answeredBody": "Ha publicado tu pregunta junto a su respuesta en su página de autora, donde ahora las puede leer cualquiera.",
  "book.ask.answeredLink": "Leer su respuesta",
  "book.ask.answeredQuota": "Esa era tu única pregunta para este libro.",

  "book.ask.reportLink": "Denunciar un problema con esta pregunta o esta respuesta",

  "book.ask.ineligibleH": "Las preguntas están abiertas a quien tenga este libro",
  "book.ask.ineligibleBody": "Cómpralo o léelo con Kindle Unlimited y aquí se abre el cuadro de preguntas. Es la misma comprobación que Amazon ya usa para marcar una opinión como compra verificada.",
  "book.ask.ineligibleWhy": "La comprobación existe por Rosa, no por nosotros. Sin ella, el cuadro de preguntas es un formulario de contacto abierto a todo internet, y las personas con más probabilidades de acabar siendo el blanco son justo aquellas sobre las que se construye esta colección.",
  "book.ask.ineligibleWhere": "Las opciones para comprarlo o para leerlo prestado están en el cuadro de la parte de arriba de esta página.",

  "book.ask.offH": "Rosa no está aceptando preguntas ahora mismo",
  "book.ask.offBody": "Ha desactivado las preguntas. Puede que vuelva a activarlas y puede que no. En cualquier caso el libro sigue en la colección y su declaración sigue en esta página: el acceso siempre fue decisión suya, y desactivarlo no le cuesta nada aquí.",
  "book.ask.offNoAlt": "No hay ninguna otra forma de llegar hasta ella a través de Amazon, y eso es a propósito.",

  "book.ask.offAfterH": "Las preguntas están cerradas para este libro",
  "book.ask.offAfterBody": "Rosa desactivó las preguntas después de que enviaras la tuya. Tu pregunta nunca se publicó y no va a tener respuesta; se borró junto con las demás preguntas pendientes.",

  "book.ask.errorH": "Tu pregunta no se ha enviado",
  "book.ask.errorBody": "Ha fallado algo por nuestra parte, no por la tuya. Tu borrador sigue aquí.",
  "book.ask.errorRetry": "Reintentar",
  "book.ask.errorDiscard": "Descartar borrador",

  /* Live-region announcements. Screen-reader-only in effect, though not named "Aria". */
  "book.ask.liveSent": "Pregunta enviada. Nada es público a menos que Rosa publique su respuesta.",
  "book.ask.liveWithdrawn": "Tu pregunta se ha retirado y se ha borrado.",
  "book.ask.liveLimit": "Has llegado al límite de 300 caracteres.",
  "book.ask.liveEmpty": "Escribe primero tu pregunta.",
  "book.ask.liveError": "Tu pregunta no se ha enviado. Se ha conservado tu borrador.",

  "book.ask.mockNote": "Nota del prototipo: no se envía nada a ninguna parte. Este flujo existe para poder leer los distintos estados, incluidos aquellos en los que no pasa nada.",

  "book.buy.formatKindle": "Kindle",
  "book.buy.orBuy": "o $4.99 para comprar",
  "book.buy.formatPaperback": "Tapa blanda",
  "book.buy.kuPitch": "Lectura ilimitada. Millones de títulos.",
  "book.buy.readFree": "Leer gratis",
  "book.buy.or": "O",
  "book.buy.oneClick": "Comprar ahora con 1-Clic",
  "book.buy.sendSample": "Enviar una muestra gratis",

  "book.credits1": "Equipo Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Requisito de declaración de autoría: mecanismo de Wanting (27/7) · Niveles de acceso: concepto de Pablo (27/7) · Elegibilidad de «Se admiten traducciones»: investigación del equipo sobre la política de contenido con IA de KDP (27/7)",

  /* ---------- author page ---------- */
  "author.disclaimer": "No es un producto de Amazon. Esta autora y todo el contenido son ficticios; los controles no funcionan.",
  "author.name": "Rosa Delgado",
  "author.tabHome": "INICIO",
  "author.tabAbout": "BIOGRAFÍA",
  "author.tabBooks": "LIBROS",
  "author.aboutH2": "Biografía de la autora",
  "author.bioHtml": "Rosa Delgado fue enfermera durante treinta y un años, en Manila y después en Chicago. <em>The Road from Manila</em> es su primer libro, escrito en tagalo y traducido con su sobrina. No quería ser escritora; quería recordar. Vive cerca de sus nietos, que son la razón de que el libro exista.",

  "author.qaH2": "Preguntas que le han hecho a Rosa",
  "author.qLabel": "Pregunta:",
  "author.aLabel": "Respuesta:",
  "author.answeredBy": "Respondido por Rosa Delgado, autora",
  "author.qa1.q": "¿Alguna vez pensaste en volver para quedarte?",
  "author.qa1.a": "Cada diciembre, los diez primeros años. Luego un año me di cuenta de que echaba de menos los dos sitios, y entendí que los dos eran mi casa. De eso trata el capítulo 14.",
  "author.qa2.q": "¿Qué cambió en el libro al escribirlo primero en tagalo?",
  "author.qa2.a": "Todo. Algunos recuerdos solo existen en el idioma en el que ocurrieron. Mi sobrina y yo discutimos cada frase de la traducción, y en esas discusiones es donde el libro se volvió sincero.",

  "author.popularH2": "Lo más popular",
  "author.bookTitle": "The Road from Manila",
  "author.starsAria": "4,4 de 5 estrellas, 214 valoraciones",
  "author.orBuy": "o $4.99 para comprar",
  "author.partOfValue": "Experiencia vivida",
  "author.coverAlt": "Portada de The Road from Manila",

  "author.access.h3": "Ajustes de acceso de Rosa",
  "author.access.sub": "Elegidos por la autora · Modificables en cualquier momento",
  "author.access.tier1Label": "Preguntas sobre el libro",
  "author.access.tier1State": "Activado",
  /* Antes «Responde cada semana». La cadencia ya se había retirado de book.html: nadie la mide.
     Ahora el mismo recuento observado que muestra book.ask.subState, para que ambas páginas
     digan lo mismo. */
  "author.access.tier1Body": "9 de 14 preguntas respondidas; nada es público hasta que Rosa lo publica.",
  "author.access.tier2Label": "Preguntas en directo",
  "author.access.tier2State": "Activado",
  "author.access.tier2Body": "Ocasionales, programadas por la autora.",
  "author.access.tier3Label": "Sin acceso",
  "author.access.tier3State": "Disponible para cualquiera que escriba",
  "author.access.tier3Body": "Se puede desactivar todo y seguir en la colección.",
  "author.access.note": "El acceso lo decide quien escribe, nivel a nivel. No hay mensajes privados en ningún nivel: lo dejamos fuera a propósito, por la seguridad de la persona que escribió el libro. Hoy la página de autor de Amazon solo permite una acción a quien lee: Seguir, y en un único sentido. Este panel es la mitad que falta.",

  "author.credits1": "Equipo Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Niveles de acceso: concepto de Pablo (27/7) · Requisito de declaración de autoría: mecanismo de Wanting (27/7) · Enfoque StoryCorps: Chang (24/7)",

  /* ---------- browse: the category node (entry point) ---------- */
  /* Carries no book strings of its own: all eight rows reuse index.bookN.*, so the cast reads
     identically on the landing page and in the category. It also reuses crumb.*,
     collection.name, common.answersQuestions, book.readSample and the common.* store chrome.
     The sibling categories are Amazon's own taxonomy under "Biografías y memorias" — feminine
     plural where the head noun is implied ("Étnicas y nacionales"), not invented names. */
  "browse.disclaimer": "No es un producto de Amazon. Esta categoría, sus libros, su autoría y sus valoraciones son ficticios; los controles no funcionan.",

  "browse.railAria": "Categoría",
  "browse.rail.sib1": "Arte y literatura",
  "browse.rail.sib2": "Históricas",
  "browse.rail.sib3": "Líderes y personajes destacados",
  "browse.rail.sib4": "Memorias",
  "browse.rail.sib5": "Regionales",
  "browse.rail.sib6": "Grupos específicos",
  "browse.rail.refineH": "Refinar por",

  "browse.resultCount": "1-8 de 48 resultados",
  /* "Authors choose this category … when they publish it" is recast as "la elige quien escribe
     el libro al publicarlo": the actor stays the person who WROTE it (the gate is authorship,
     not publishing), and "quien escribe" takes no gender. */
  "browse.nodeIntro": "Libros cuya autoría declara, con palabras propias, haber vivido la historia y haberla escrito. Esta categoría la elige quien escribe el libro, al publicarlo. Amazon aloja cada declaración y no la certifica. Se admiten traducciones, incluidas las hechas con IA.",

  "browse.card.h3": "La colección Experiencia vivida",
  /* Antes «Una selección más pequeña de esta categoría». «Selección» afirma que alguien eligió,
     es decir, un respaldo — y contradecía la línea siguiente («estar aquí es un sitio en el
     estante, no una valoración»). index.html muestra los ocho primeros de los mismos cuarenta y
     ocho libros, en el mismo orden: nadie los eligió. */
  "browse.card.sub": "La página de presentación de esta categoría, con las palabras de quien escribe",
  "browse.card.body": "En esta categoría está todo libro que cumple el requisito, así que estar aquí es un sitio en el estante, no una valoración. La página de la colección presenta a algunas de estas personas con sus propias palabras y muestra cuáles han decidido responder preguntas.",
  "browse.card.cta": "Ver la colección",

  "browse.pagerAria": "Páginas de resultados",
  "browse.pagerNext": "Siguiente",

  "browse.credits1": "Equipo Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · Punto de entrada: un nodo de categoría permanente en lugar de una fila promocional. Un espacio promocional tiene fecha de caducidad (Chang, 24/7); una categoría no, y su condición de entrada es una que KDP ya tiene: quien escribe el libro elige la categoría y firma la declaración. La reducción de riesgo sin tocar el precio (Pablo, A5) aparece aquí como muestra gratuita y Kindle Unlimited en cada fila, en el momento de elegir, nunca como descuento.",
  "browse.credits2": "Esta categoría es un lugar, no un respaldo. Aquí nada filtra la tienda, ni clasifica un libro, ni recomienda un libro a partir de otro; los refinamientos de la columna izquierda y el control de orden son los que la Tienda Kindle ya tiene, reproducidos sin cambios. Una fila de Kindle Unlimited podría llevar la colección durante una ventana de lanzamiento, pero un vehículo de lanzamiento no es un punto de entrada, así que aquí no se construye.",

  /* ---------- search results ---------- */
  "search.disclaimer": "No es un producto de Amazon. Estos resultados son un ejemplo ficticio; todos los libros, su autoría y sus valoraciones son inventados y ningún control funciona. El orden de los resultados no forma parte de esta propuesta.",
  /* search.query and the phrase quoted inside search.resultCountHtml are the same query and
     must stay identical. The <span class="q"> wrapper survives; the quotation marks become the
     locale's angle quotes, as everywhere else in this file. */
  "search.query": "memorias sobre irse de casa",
  "search.resultCountHtml": "1-16 de más de 800 resultados para <span class=\"q\">«memorias sobre irse de casa»</span>",
  "search.sponsored": "Patrocinado",
  "search.byPrefix": "de",

  "search.orderNoteLabel": "Lo que esta página no cambia:",
  /* «Parte de:» here is quoting the UI label common.partOf and matches it word for word. The
     closing clause avoids naming an author: "una línea con las palabras de quien escribió el
     libro" keeps the writer as the source without inflecting anyone. */
  "search.orderNoteBody": "el orden de estos resultados. Aquí nada se reordena, se promociona ni se filtra —no hemos añadido ningún refinamiento a la columna izquierda ni ninguna opción de orden— y los dos títulos de la colección que aparecen abajo solo llevan la misma línea «Parte de:» que Amazon ya imprime para un libro de una serie, más una línea con las palabras de quien escribió el libro.",

  /* Left rail. Amazon's existing refinements, reproduced unchanged — we added none. Prices
     stay in USD with the same digits. */
  "search.rail.dept": "Categoría",
  "search.rail.deptChild1": "Memorias",
  "search.rail.deptChild2": "Herencia cultural",
  "search.rail.deptChild3": "Étnicas y nacionales",
  "search.rail.deptChild4": "Viajeros y exploradores",
  "search.rail.ku": "Kindle Unlimited",
  "search.rail.format": "Formato",
  "search.rail.formatAudio": "Audiolibro",
  "search.rail.formatPaper": "Tapa blanda",
  "search.rail.formatHard": "Tapa dura",
  "search.rail.reviewAndUp": "y más",
  "search.rail.review4Aria": "4 estrellas y más",
  "search.rail.review3Aria": "3 estrellas y más",
  "search.rail.review2Aria": "2 estrellas y más",
  "search.rail.review1Aria": "1 estrella y más",
  "search.rail.price": "Precio",
  "search.rail.priceUnder5": "Menos de $5",
  "search.rail.price5to10": "De $5 a $10",
  "search.rail.price10to20": "De $10 a $20",
  "search.rail.price20up": "$20 o más",
  "search.rail.langEnglish": "Inglés",
  "search.rail.langSpanish": "Español",
  "search.rail.langFrench": "Francés",
  "search.rail.langChinese": "Chino",
  "search.rail.langArabic": "Árabe",
  "search.rail.seeMore": "Ver más",

  /* Fourteen invented filler results. Titles and names are NOT translated — a store shows a
     Spanish reader the English title of an English book. The people are unspecified and take
     no gender inflection (rule b). Only the starsAria strings change: decimal comma, and
     grouping only from five digits up, which is what Intl renders for es (12.480, but 3109) —
     a screen reader must hear the number a sighted reader sees. */
  "search.r01.title": "The House on Winter Street",
  "search.r01.author": "Anne Prescott",
  "search.r01.starsAria": "4,5 de 5 estrellas, 12.480 valoraciones",
  "search.r02.title": "Salt and Distance",
  "search.r02.author": "Michael Brandt",
  "search.r02.starsAria": "4,2 de 5 estrellas, 3109 valoraciones",
  "search.r03.title": "Everything I Left Behind",
  "search.r03.author": "Carol Whitfield",
  "search.r03.starsAria": "4,4 de 5 estrellas, 87 valoraciones",
  "search.r04.title": "Departures: A Memoir",
  "search.r04.author": "Paul Ashby",
  "search.r04.starsAria": "4,0 de 5 estrellas, 1204 valoraciones",
  "search.r05.title": "Sixty Miles from Anywhere",
  "search.r05.author": "Janet Kroll",
  "search.r05.starsAria": "4,3 de 5 estrellas, 640 valoraciones",
  "search.r07.title": "The Long Way Round",
  "search.r07.author": "Stephen Marek",
  "search.r07.starsAria": "4,1 de 5 estrellas, 58 valoraciones",
  "search.r08.title": "A Door That Did Not Lock",
  "search.r08.author": "Helen Voss",
  "search.r08.starsAria": "4,6 de 5 estrellas, 4730 valoraciones",
  "search.r09.title": "After the Move",
  "search.r09.author": "Gregory Lyle",
  "search.r09.starsAria": "3,9 de 5 estrellas, 909 valoraciones",
  "search.r10.title": "What the Suitcase Held",
  "search.r10.author": "Barbara Nell",
  "search.r10.starsAria": "4,2 de 5 estrellas, 176 valoraciones",
  "search.r12.title": "Homesick for a Place That Changed",
  "search.r12.author": "Diane Cutler",
  "search.r12.starsAria": "4,4 de 5 estrellas, 2015 valoraciones",
  "search.r13.title": "The Year of Boxes",
  "search.r13.author": "Thomas Reyburn",
  "search.r13.starsAria": "4,0 de 5 estrellas, 31 valoraciones",
  "search.r14.title": "Leaving: A Memoir in Essays",
  "search.r14.author": "Ruth Almond",
  "search.r14.starsAria": "4,3 de 5 estrellas, 762 valoraciones",
  "search.r15.title": "Nobody Warned Me About the Quiet",
  "search.r15.author": "Frank Delahunt",
  "search.r15.starsAria": "4,5 de 5 estrellas, 5388 valoraciones",
  "search.r16.title": "The Country I Remember",
  "search.r16.author": "Marjorie Stane",
  "search.r16.starsAria": "4,2 de 5 estrellas, 143 valoraciones",

  "search.credits1": "Equipo Reader Discovery — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao · La pertenencia a la colección se muestra con la línea de serie «Parte de:» que Amazon ya tiene, y con nada más: ninguna interfaz de búsqueda nueva, ningún refinamiento, ningún cambio en la clasificación · Requisito de declaración de autoría: mecanismo de Wanting (27/7) · El límite de no tocar los algoritmos: Chang 20/7, Rachel 23/7",
  "search.credits2": "Catorce de estos dieciséis resultados son relleno inventado, para que los dos títulos de la colección aparezcan en una lista de resultados corriente y no en una montada para la ocasión. Esos catorce no son personajes, ni arquetipos de usuario, ni resultado de ninguna investigación: no tienen biografía y no aparecen en ninguna otra página.",

  /* ---------- the reviewer bar and its notes ----------
     Chrome addressed to whoever is reviewing this, not to a shopper: the
     walkthrough labels across the top, the one-line caption naming what each
     screen is for, and the notes behind the Show-notes toggle. Translated like
     everything else — a reviewer reading in Arabic should not hit an English
     signpost. */
  "demo.navAria": "Recorrido por el prototipo",
  "demo.step.search": "Búsqueda",
  "demo.step.category": "Categoría",
  "demo.step.collection": "Colección",
  "demo.step.book": "Libro",
  "demo.step.author": "Autora",
  "demo.notesShow": "Mostrar notas",
  "demo.notesHide": "Ocultar notas",
  "index.demoCaption": "La colección en sí, y la frase que explica cómo entra un libro en ella.",
  "browse.demoCaption": "La colección dentro de una página de categoría, junto a libros que no forman parte de ella.",
  "search.demoCaption": "Cómo se encuentra con la colección quien no la estaba buscando.",
  "book.demoCaption": "Un libro: la declaración de la autora y el flujo para hacerle una pregunta.",
  "author.demoCaption": "Lo que la autora decide abrir: los niveles de acceso, voluntarios y reversibles.",
  "revnote.index.1Label": "La superficie.",
  "revnote.index.1Body": "Una colección, no un distintivo en toda la tienda ni un cambio en la clasificación de búsqueda. Ambas ideas se estudiaron y se descartaron.",
  "revnote.index.2Label": "El requisito.",
  "revnote.index.2Body": "La declaración procede de quien escribió el libro. Amazon la aloja; no la certifica.",
  "revnote.book.1Label": "En sus propias palabras.",
  "revnote.book.1Body": "Amazon acredita lo que puede medir y cita lo que no. Esta es la mitad citada.",
  "revnote.book.2Label": "El gancho.",
  "revnote.book.2Body": "El acceso es voluntario y reversible. Aquí se puede llegar a todos los estados, incluido aquel en el que no ocurre nada.",
  "revnote.author.1Label": "Decide la autora.",
  "revnote.author.1Body": "Ella elige cada nivel y puede desactivarlo cuando quiera.",
  "revnote.search.1Label": "No es una propuesta de clasificación.",
  "revnote.search.1Body": "Este orden de resultados es inventado. Lo único que proponemos es que la colección esté presente.",
  "revnote.browse.1Label": "Dónde vive.",
  "revnote.browse.1Body": "Un lugar de la tienda por el que se puede navegar, junto a categorías que funcionan como ya funcionan."
};
