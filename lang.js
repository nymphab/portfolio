(function () {
  // ========= DICTIONNAIRES =========
  const FR = {
    // --- NAV (index + projects) ---
    'nav a[href="#home"], nav a[href="index.html#home"]': 'ACCUEIL',
    'nav a[href="#about"], nav a[href="index.html#about"]': 'À PROPOS',
    'nav a[href="#skills"], nav a[href="index.html#skills"]': 'COMPÉTENCES',
    'nav a[href="projects.html"], nav a[href^="projects.html"]': 'PROJETS',
    'nav a[href="#contact"], nav a[href="index.html#contact"]': 'CONTACT',

    // --- HERO (index) ---
    '.hero .content p':
      'Résident en France, je conçois avec passion des expériences web immersives et interactives.',
    '.hero .content .cta': 'Restons en contact',

    // --- ABOUT ---
    '#about .about-text h2': 'À propos de moi',
    '#about .about-text p:nth-of-type(1)':
      'Développeuse web & mobile junior en reconversion, je découvre chaque jour avec passion l’univers du code et de la création numérique.',
    '#about .about-text p:nth-of-type(2)':
      'Débutante, certes, mais déterminée à progresser, je m’investis pleinement pour apprendre, créer et donner vie à des projets utiles et modernes.',
    '#about .skills h3': 'Mes compétences',

    // --- SKILLS SECTION TITLE ---
    '#skills .section-title': 'Technologies maîtrisées',

    // --- CONTACT (textes) ---
    '#contact .section-title': 'Travaillons ensemble',
    '#contact .intro-text':
      'Vous avez un projet en tête ? N’hésitez pas à me contacter pour en discuter et donner vie à vos idées.',
    '#contact .contact-info h3': 'Restons en contact',
    '#contact .contact-info p':
      'Que ce soit pour un projet web, une application mobile ou simplement échanger sur vos idées, je serai ravie de collaborer.',
    '#contact .contact-form h3': 'Envoyez-moi un message',
    '#contact button[type="submit"]': 'Envoyer',

    // --- FOOTER (description + bas de page) ---
    '.footer-desc-right p:nth-child(1), .footer-desc p:nth-child(1)':
      'Portfolio designé et développé avec passion.',
    '.footer-desc-right p:nth-child(2), .footer-desc p:nth-child(2)':
      'React • HTML/CSS • JavaScript • Node.js',
    '.footer-info p.copyright':
      '© 2026 Amel. Tous droits réservés.',
    '.footer-info p:not(.copyright)':
      '🇫🇷 Basée en France',

    // --- PROJECTS PAGE ---
    '.projects-page-header .section-title': 'Projets',
    '.projects-page-header .section-subtitle':
      "Voici un aperçu de quelques projets sur lesquels j'ai travaillé.",

    '.card-moove .project-title': 'Moove It — App mobile',
    '.card-moove .project-description':
      "Application mobile de coaching sportif qui connecte les sportifs amateurs entre eux. Interface moderne, gestion d’utilisateurs et affichage dynamique des données.",
    '.card-moove .learning-title': 'Apprentissage',
    '.card-moove .learning-text':
      "Gestion d’état, communication avec une API, design responsive et expérience utilisateur sur mobile.",

    '.card-bloom .project-title': 'Bloom — Python Art',
    '.card-bloom .project-description':
      "Animation générative en Python (Turtle) : une fleur moderne qui se dessine progressivement, avec un effet “bloom” et des transitions fluides.",
    '.card-bloom .learning-title': 'Apprentissage',
    '.card-bloom .learning-text':
      "Gestion du timing, tracés progressifs, composition visuelle et optimisation des mouvements pour un rendu plus “cinématique”.",

    '.card-pacman .project-title': 'Pacman',
    '.card-pacman .project-description':
      "Jeu Pac-Man réalisé en JavaScript, avec une grille interactive, déplacements fluides et logique de collision. Une approche ludique pour approfondir la structuration du code.",
    '.card-pacman .learning-title': 'Apprentissage',
    '.card-pacman .learning-text':
      "Gestion des déplacements, collisions, score, logique de grille et animations simples. Une approche ludique pour approfondir la logique JavaScript et la structuration du code.",
  };

  const EN = {
    // --- NAV (index + projects) ---
    'nav a[href="#home"], nav a[href="index.html#home"]': 'HOME',
    'nav a[href="#about"], nav a[href="index.html#about"]': 'ABOUT',
    'nav a[href="#skills"], nav a[href="index.html#skills"]': 'SKILLS',
    'nav a[href="projects.html"], nav a[href^="projects.html"]': 'PROJECTS',
    'nav a[href="#contact"], nav a[href="index.html#contact"]': 'CONTACT',

    // --- HERO (index) ---
    '.hero .content p':
      'Based in France, I craft immersive and interactive web experiences.',
    '.hero .content .cta': "Let’s get in touch",

    // --- ABOUT ---
    '#about .about-text h2': 'About me',
    '#about .about-text p:nth-of-type(1)':
      'Junior web & mobile developer in career transition, discovering every day with passion the world of code and digital creation.',
    '#about .about-text p:nth-of-type(2)':
      'A beginner, yes—but determined to grow. I’m fully committed to learning, creating, and bringing useful, modern projects to life.',
    '#about .skills h3': 'My skills',

    // --- SKILLS SECTION TITLE ---
    '#skills .section-title': 'Technologies mastered',

    // --- CONTACT (textes) ---
    '#contact .section-title': 'Let’s work together',
    '#contact .intro-text':
      'Got a project in mind? Reach out and let’s bring your ideas to life.',
    '#contact .contact-info h3': 'Stay in touch',
    '#contact .contact-info p':
      'Whether it’s for a web project, a mobile app, or simply to discuss your ideas, I’d be happy to collaborate.',
    '#contact .contact-form h3': 'Send me a message',
    '#contact button[type="submit"]': 'Send',

    // --- FOOTER ---
    '.footer-desc-right p:nth-child(1), .footer-desc p:nth-child(1)':
      'Portfolio designed and developed with passion.',
    '.footer-desc-right p:nth-child(2), .footer-desc p:nth-child(2)':
      'React • HTML/CSS • JavaScript • Node.js',
    '.footer-info p.copyright':
      '© 2026 Amel. All rights reserved.',
    '.footer-info p:not(.copyright)':
      '🇫🇷 Based in France',

    // --- PROJECTS PAGE ---
    '.projects-page-header .section-title': 'Projects',
    '.projects-page-header .section-subtitle':
      "Here’s a quick look at some projects I’ve worked on.",

    '.card-moove .project-title': 'Moove It — Mobile App',
    '.card-moove .project-description':
      'Mobile fitness coaching app connecting amateur athletes. Modern interface, user management, and dynamic data display.',
    '.card-moove .learning-title': 'What I learned',
    '.card-moove .learning-text':
      'State management, API communication, responsive design, and mobile user experience.',

    '.card-bloom .project-title': 'Bloom — Python Art',
    '.card-bloom .project-description':
      'Generative Python (Turtle) animation: a modern flower progressively drawing itself with a bloom effect and smooth transitions.',
    '.card-bloom .learning-title': 'What I learned',
    '.card-bloom .learning-text':
      'Timing control, progressive drawing, visual composition, and motion optimization for a more cinematic result.',

    '.card-pacman .project-title': 'Pacman',
    '.card-pacman .project-description':
      'Pac-Man game built in JavaScript, featuring an interactive grid, smooth movement, and collision logic. A playful way to improve code structure.',
    '.card-pacman .learning-title': 'What I learned',
    '.card-pacman .learning-text':
      'Movement handling, collisions, scoring, grid logic, and simple animations. A playful way to improve JavaScript logic and code structure.',
  };

  // --- Titre HERO avec HTML (index) ---
  const FR_HTML = {
    '.hero .content h1':
      "Bonjour, <br>  <span class='name'>Développeur Full-Stack</span><span class='cursor'>|</span>",
  };

  const EN_HTML = {
    '.hero .content h1':
      "Hello,<br>  <span class='name'>Full-Stack Developer</span><span class='cursor'>|</span>",
  };

  // --- Placeholders du formulaire de contact ---
  const FR_PH = {
    'input[name="name"]': 'Nom',
    'input[name="email"]': 'Email',
    'input[name="subject"]': 'Sujet',
    'textarea[name="message"]': 'Votre message...',
  };

  const EN_PH = {
    'input[name="name"]': 'Name',
    'input[name="email"]': 'Email',
    'input[name="subject"]': 'Subject',
    'textarea[name="message"]': 'Your message...',
  };

  // --- Labels des niveaux de compétences ---
  const LEVEL_FR = { advanced: 'Avancé', beginner: 'Débutant' };
  const LEVEL_EN = { advanced: 'Advanced', beginner: 'Beginner' };

  const SELECTOR = '#languageSelect';
  const getSaved = () => localStorage.getItem('lang') || 'fr';
  const setSaved = (v) => localStorage.setItem('lang', v);

  // ====== APPLY HELPERS ======
  function applyDict(dict) {
    Object.keys(dict).forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.textContent = dict[sel];
      });
    });
  }

  function applyDictHTML(dict) {
    Object.keys(dict).forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.innerHTML = dict[sel];
      });
    });
  }

  function applyPlaceholders(map) {
    Object.keys(map).forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.setAttribute('placeholder', map[sel]);
      });
    });
  }

  function applyLevels(levelMap) {
    document
      .querySelectorAll('.level.advanced')
      .forEach((el) => (el.textContent = levelMap.advanced));
    document
      .querySelectorAll('.level.beginner')
      .forEach((el) => (el.textContent = levelMap.beginner));
  }

  function apply(lang) {
    if (lang === 'en') {
      applyDict(EN);
      applyDictHTML(EN_HTML);
      applyPlaceholders(EN_PH);
      applyLevels(LEVEL_EN);
    } else {
      applyDict(FR);
      applyDictHTML(FR_HTML);
      applyPlaceholders(FR_PH);
      applyLevels(LEVEL_FR);
    }

    const sel = document.querySelector(SELECTOR);
    if (sel) sel.value = lang;
  }

  // ===== INIT =====
  const initial = getSaved();
  apply(initial);

  // ===== LISTENER =====
  const sel = document.querySelector(SELECTOR);
  if (sel) {
    sel.addEventListener('change', (e) => {
      const lang = e.target.value;
      setSaved(lang);
      apply(lang);
    });
  }
})();