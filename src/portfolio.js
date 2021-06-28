/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Emir Eken",
  title: "Hi all, I'm Emir",
  subTitle: emoji(
    "A passionate Project Manager 🚀 having an 7 years of experience of managing Web and Mobile application projects. More than 3 years of experience in software analysis and tests. Also a Software development enthusiast with JAVA  ",
  
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gmxcEI0GtxnnKDXMs2B6q5LVbojk3Kgv/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/emireken",
  linkedin: "https://www.linkedin.com/in/emirgokberkeken/",
  gmail: "emirgokberk.eken@gmail.com",
  gitlab: "https://gitlab.com/emireken",
  //facebook: "https://www.facebook.com/emirgokberk.eken",
  //medium: "https://medium.com/@emireken",
  stackoverflow: "https://stackoverflow.com/users/14469011/emireken",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ataturk Univesity",
      logo: require("./assets/images/atu_logo.png"),
      subHeader: "Master of Business Administration",
      duration: "2017 - 2019",
      desc: "Conduct a research of Project Management in Software Development.",
      // descBullets: [
      //   "Goal of this project is to design and build a cardiovascular system mock circuit (CVMC) which is drivable with an elastance based feed-back control left and right ventricles that can replicate heart’s pressure-volume relationship accurately. For this goal pressure volume relationship was calculated using elastance.",
      //   // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Bahcesehir Univesity",
      logo: require("./assets/images/bau_logo.png"),
      subHeader: "Master of Science in Bioengineering",
      duration: "2012 - 2013",
      desc: "Participated in the research of Cardiovascular Mock Circuit.",
      descBullets: [
        "Goal of this project is to design and build a cardiovascular system mock circuit (CVMC) which is drivable with an elastance based feed-back control left and right ventricles that can replicate heart’s pressure-volume relationship accurately. For this goal pressure volume relationship was calculated using elastance.",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Bahcesehir Univesity",
      logo: require("./assets/images/bau_logo.png"),
      subHeader: "Bachelor of Science in Mechatronics Engineering",
      duration: "2007 - 2012",
      desc: "Ranked top 10% in the program. Took courses about Software Development, Embedded Software, Electronics, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "IT Project Leader", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Software Analysis",
      progressPercentage: "80%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Project Leader",
      company: "Stellantis - TOFAS Automotive",
      companylogo: require("./assets/images/stellantis_logo.png"),
      date: "June 2018 – May 2021",
      desc: "Managed projects to achieve project objectives according to the project acceptance criteria within agreed parameters.",
      descBullets: [
        "For this purpose as a project manager my job was create information flow between IT and business departments.",
        "Learned to write technical analysis for demanded software developments.",
        "Be a member of decision making team for UI, UX and overall design aesthetic of the software."
      ]
    },
    {
      role: "Assistant Manager",
      company: "Azak Collective Company",
      companylogo: require("./assets/images/azak_logo.png"),
      date: "November 2016 – June 2018",
      desc: "Managed an installation project a flexible and well-structured end-to-end IT solution, which covers stock management, accounting, selling and invoicing for a family business.",
      descBullets: [
        "Worked with local vendors for ease maintenance and technical support.",
      ]
    },
    {
      role: "IT Project Management Specialist",
      company: "Acıbadem Healthcare Group",
      companylogo: require("./assets/images/acibadem_logo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Managed A|Store project from idea stage to software integration, prototyping and mass production.",
      descBullets: [
        "Created series of company protocols and guidelines for project management, IT equipment purchasing, grand application processes, etc.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Main Projects",
 // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/fya_logo.png"),
      projectName: "FIAT Connect",
      projectDesc: "Connected cars are primarily vehicles that are equipped with telematic control units to access internet. They have an inbuilt GSM modules and are able to connect with entities outside the vehicle. It has several value added services in FIAT Yol Arkadaşım application such as vehicle control, improved safety.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yolarkadasim.fiat.com.tr/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/astore_logo.png"),
      projectName: "Medicine and Medical Consumables Management Unit",
      projectDesc: "A|Store is a logistics management system that manages medicine and medical consumables of      Acıbadem Healthcare Group. ASTORE is integrated with outsource applications like Hospital Information System      (HIS) and Enterprise Resource Planning (ERP). It has also hardware’s like electronic cabinet and console system.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.acibademtechnology.com/a-store/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cadio_logo.png"),
      projectName: "Construction and Feedback Control of an Elastance-driven Mock Circuit",
      projectDesc: "Goal of this project is to design and build a cardiovascular system mock circuit (CVMC) which is drivable with an       elastance based feed-back control left and right ventricles that can replicate heart’s pressure-volume relationship       accurately. For this goal pressure volume relationship was calculated using elastance.",      footerLink: [
        {
          name: "Download Master Thesis ",
          url: "https://tez.yok.gov.tr/UlusalTezMerkezi/TezGoster?key=gyLHMouPes-CvnhRcjQsKe-cSBEm3UmEaQoCKNtfuL60952s5jQiUr1qDRZ9MDeG"
        }
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for learning cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://emireken.github.io/egek-blog-app/#/",
      title: "GITHUB Software Blog",
      description:
        "Do you want to share your progress of your development? React Blog is a personal blog system build on React that helps you create your own personal blog using Github Issues "
    },
    {
      url: "https://1i3t.blogspot.com/?zx=30eac4b812daf512",
      title: "1I3T - Ideas, Thoughts, Today and Tomorrow",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/emireken-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6072803493",
  email_address: "emirgokberk.eken@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
