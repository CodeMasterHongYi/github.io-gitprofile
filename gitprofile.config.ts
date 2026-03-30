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
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
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
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Chng Hong Yi', description: '', imageURL: '' },
  social: {
    
    x: 'HongYi',
    researchGate: '',
    youtube: '', // example: 'pewdiepie'
    medium: 'CodeMasterHongYi',
    dev: 'CodeMasterHongYi',
    stackoverflow: '', // example: '1/jeff-atwood'
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Micro:BIT',
    'Python',
    'Scratch',
    'LEGO Spike',
  ],
  experiences: [
   {
    company: "Hwa Chong Infocomm Challenge (HCIC)",
    position: "Participant",
    from: "2026",
    to: "2026",
    description:
      "Participated in robotics competition, developed problem-solving and teamwork skills.",
  },
    {
    company: "First Lego League (FLL)",
    position: "Participant",
    from: "2026",
    to: "2026",
    description:
      "Collaborated in a team to design, build, and program a robot, applying engineering, coding, and creative problem-solving in a competitive setting.",
  },
  {
    company: "National Robotics Competition",
    position: "Participant",
    from: "2025",
    to: "2025",
    description:
      "Designed and programmed a robot as part of a team, applying engineering, coding, and problem-solving skills to overcome competition challenges.",
  },
     {
    company: "Sony Toy Creation Competition 2025",
    position: "Participant",
    from: "2025",
    to: "2025",
    description:
      "Conceptualized and built an innovative toy, demonstrating creativity, design thinking, and problem-solving through hands-on creation.",
  },
     {
    company: "Science Buskers",
    position: "Participant",
    from: "2025",
    to: "2025",
    description:
      "Engaged the public by presenting hands-on science experiments, showcasing scientific concepts while developing confidence and communication skills.",
  },
    {
    company: "Code Monkey",
    position: "Participant",
    from: "2025",
    to: "2025",
    description:
      "Developed foundational programming skills through interactive coding activities, strengthening logical thinking and problem-solving abilities.",
  },
],
  certifications: [
    {
      name: 'NA',
      body: 'NA',
      year: 'NA',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Maris Stella High School (Primary)',
      degree: 'Primary 6',
      from: '2021',
      to: '2026',
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/CodeMasterHongYi/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
