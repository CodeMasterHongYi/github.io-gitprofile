// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CodeMasterHongYi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/github.io-gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['CodeMasterHongYi/gitprofile', 'CodeMasterHongYi/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Co-Curricular Activities & Achievements',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Academic & Leadership',
          description: `
              - Edusave Good Progress Award 2025
              - Edusave Certificate of Academic Achivement 2025
              - CCC - CDC Education Merit Award 2024
              - Edusave Certificate of Academic Achivement 2024
              - CCC - CDC Education Merit Award 2023
              - Edusave Certificate of Academic Achivement 2023
              - CCE Advocate Student Leader 2024 (Pri 4), 2025 (Pri 5) & 2026 (Pri 6)
              - Taekwondo CCA Student Leader 2025 & 2026

            `,
          imageUrl: 'https://i.ibb.co/7N61KyNR/edusave.png',
          link: 'https://drive.google.com/drive/folders/1GH3ZSMt8mxPNTmoxD8_heCwYVbEOhzPP',
        },
        {
          title: 'Science Achievements',
          description: `
          Project: DNA Extraction (Strawberry) – Singapore Science Buskers
              - Conducted hands-on DNA extraction using strawberries
              - Learned basic concepts of genetics and cell components
              - Demonstrated the process to engage and educate the public
          
          Project: Cell Structure & Forces (Bubble Activity) – Singapore Science Buskers
              - Explored cell structure concepts through bubble experiments
              - Learned about surface tension and forces in a fun, visual way
              -  Explained scientific concepts interactively to visitors
          
          Project: Hydraulic Excavator Toy – Sony Creative Toy Award
              - Designed and built a functional hydraulic excavator model
              - Used recycled materials (cardboard, syringes) for construction
              - Applied basic engineering and hydraulic principles
              - Showcased creativity, problem-solving, and sustainability awareness
            `,
          imageUrl: 'https://i.ibb.co/Kc2MG3wf/science.png',
          link: 'https://drive.google.com/drive/folders/1GH3ZSMt8mxPNTmoxD8_heCwYVbEOhzPP',
        },
        {
          title: 'Mathematics Achievements',
          description: `National Math Olympiad (NMONZ) (2025)
                        - Honourable Mention award in national-level mathematics competition
                        - Strengthened problem-solving and analytical thinking skills

                        Raffles Math Olympiad (2025)
                        - Represented school to compete in prestigious math competition
                        - Gained exposure to advanced mathematical concepts and challenges`,
          imageUrl:
            'https://i.ibb.co/qhzfHHx/bc792334-f18b-48e1-a3f3-6e15795b8b5e.png',
          link: 'https://drive.google.com/drive/folders/1GH3ZSMt8mxPNTmoxD8_heCwYVbEOhzPP',
        },
        {
          title: ' Coding and Robotics',
          description: `First Lego League (2026) 
                         - Represented The Young Maker in First Lego League Competition

                        National Robotics Challenge (NRC) (2025)
                        - Represented The Young Maker in National Robotics Challenge Regular Category
                        
                       Code Monkey Challenge (Sinapore Science Centre) (2025)
                        - Represented The Young Maker in Code Monkey Challenge 2025`,
          imageUrl:
            'https://i.ibb.co/RTZG7tg9/1bc6dcb8-a577-46db-a6cd-2fae42bb4b78.png',
          link: 'https://docs.google.com/presentation/d/1TkIJ2suF4bvm4ERGD5nUTril3F723xXA/edit?usp=sharing&ouid=103482022099572741273&rtpof=true&sd=true',
        },
        {
          title: ' Sports - Taekwondo Achievements',
          description: `National School Games (NSG) Taekwondo Poomsae (2024, 2025 and 2026) 
                        - Active participant in inter-school national competitions
                        - 2026: Representing Maris Stella High School in upcoming NSG
                        - 2025: Won Silver and Bronze medals (Green Tip Junior Category)
                        
                        Han Foundation Youth Taekwondo Championship (March 2026)
                        - Won Gold Medal at Green Tip Senior Category`,
          imageUrl: 'https://i.ibb.co/tPpL09S4/taekwondo.png',
          link: 'https://drive.google.com/drive/folders/1GH3ZSMt8mxPNTmoxD8_heCwYVbEOhzPP',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Chng Hong Yi', description: '', imageURL: '' },
  social: {
    email: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/1GH3ZSMt8mxPNTmoxD8_heCwYVbEOhzPP?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Micro:bit',
    'Scratch',
    'Turtle Graphics',
    'LEGO Robotics',
    'Problem Solving',
    'Mathematical Problem-Solving Skills',
    'Analytical Thinking',
    'Logic Thinking',
    'Presentation',
    'Teamwork',
  ],
  experiences: [
    {
      company: 'First Lego League (FLL)',
      position: 'Participant',
      from: '2026',
      to: '2026',
      description:
        'Collaborated in a team to design, build, and program a robot, applying engineering, coding, and creative problem-solving skills.',
    },
    {
      company: 'National Robotics Competition',
      position: 'Participant',
      from: '2025',
      to: '2025',
      description:
        'Designed and programmed a robot to complete competition challenges, demonstrating coding and teamwork skills.',
    },
    {
      company: 'Sony Toy Creation Competition',
      position: 'Participant',
      from: '2025',
      to: '2025',
      description:
        'Designed and built an innovative toy, applying creativity, design thinking, and problem-solving skills.',
    },
    {
      company: 'Science Buskers, Singapore Science Centre',
      position: 'Presenter',
      from: '2025',
      to: '2025',
      description:
        'Presented interactive science experiments to the public, enhancing communication, confidence, and scientific understanding.',
    },
    {
      company: 'Code Monkey, Singapore Science Centre',
      position: 'Participant',
      from: '2025',
      to: '2025',
      description:
        'Developed foundational coding skills through interactive activities, strengthening logical thinking and problem-solving abilities.',
    },
    {
      company: 'National Mathematical Olympiad of Singapore, NUS high School',
      position: 'Honourable Mention',
      from: '2025',
      to: '2025',
      description:
        'Awarded Honourable Mention at the National Mathematical Olympiad of Singapore (NMOS), recognizing strong problem-solving ability among thousands of participants nationwide.',
    },
    {
      company: 'Raffles Mathematical Olympiad 2025, Raffles Institution',
      position: 'Participant',
      from: '2025',
      to: '2025',
      description:
        'Selected to represent school; gained exposure to Olympiad‑style mathematics and sharpened creative problem‑solving abilities.',
    },
    {
      company: 'IMDA Digital for Life',
      position: 'Booth/Project Presenter',
      from: '2025',
      to: '2025',
      description:
        'Presented and demonstrated my project at a showcase booth, explaining concepts and engaging visitors.'
    },
  ],
  // certifications: [
  // {
  //  name: 'NA',
  //  body: 'NA',
  //  year: 'NA',
  //   link: 'https://example.com',
  // },
  // ],
  educations: [
    {
      institution: 'Maris Stella High School (Primary)',
      degree: 'Primary 6 (Term 1 Total AL Score AL5)',
      from: '2021',
      to: '2026',
    },
    {
      institution: 'Maris Stella High School (Primary)',
      degree: 'Primary 5 (Total AL Score AL10)',
      from: '2021',
      to: '2025',
    },
  ],
  // publications: [
  //  {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //    journalName: 'Journal Name',
  //    authors: 'John Doe, Jane Smith',
  //   link: 'https://example.com',
  //   description:
  //      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //    title: 'Publication Title',
  //    conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //    description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //    },
  //  ],
  // Display articles from your medium or dev account. (Optional)
  //blog: {
  //  source: 'dev', // medium | dev
  // username: 'CodeMasterHongYi', // to hide blog section, keep it empty
  //  limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/CodeMasterHongYi/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
