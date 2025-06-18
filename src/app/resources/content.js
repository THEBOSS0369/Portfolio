import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Anuj",
  lastName: "Kumar Sharma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer and Open Source Contributor",
  avatar: "/images/avatarm.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/THEBOSS0369",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anuj-kumar-sharma-59330a287/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/AnujS21202",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:anujkumsharma9876@gmail.com",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@anujsharma46090",
  },
  {
    name: "DEV Community",
    icon: "devcommunity",
    link: "https://dev.to/anuj_kumarsharma_c7e83ee",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Dev-Founder, I Build Scalable MVPs & Open Source Contributor</>,
  subline: (
    <>
      I'm Anuj, I'm not just a developer - I am a{" "}
      <InlineCode>DEV-FOUNDER</InlineCode> who builds MVPs and accelerates
      startup success. Currently Sophomore at VIPS doing my undergrad in{" "}
      <InlineCode>AI & DS</InlineCode>. After hours, I build my own projects and
      love to contribute to Open Source.
      {/* <br /> */}
      {/* I'm not just a DEVELOPER but i'm the BUILDER */}
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Anuj, an enthusiastic Founder Developer. I specialize in building
        MVPs that validate startup ideas and set the stage for scalable growth.
        With expertise in rapid prototyping and user-centric design, I’ve
        developed MVPs that have been crucial for startup’s market entry and
        success. My mission is to create innovative solutions that drive
        significant impact and push the boundaries of technology. If you’re
        looking to launch your next big idea, let’s connect and build something
        extraordinary together ;)
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kiwix",
        timeframe: "Sep, 2024 - May, 2025",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Modified content extraction logic to filter brief descriptions from
            popovers in Wikivoyage ZIM files, improving the accuracy and user
            experience.
          </>,
          <>
            {" "}
            Implemented microservices architecture and secure authentication,
            deploying on GCP with Kubernetes
          </>,
          <>
            Automated CI/CD workflows and monitored application performance
            automating CI/CD workflows to achieve 99.9% uptime, ensuring
            scalability and reliability
          </>,
          <>
            Collaborated with global teams to define best practices and deliver
            robust backend solutions, contributing to 3+ major releases with
            zero critical bugs
          </>,
        ],
        images: [
          // {
          //     src: '/images/projects/project-01/kiwix.png',
          //     alt: 'Once UI Project',
          //     width: 16,
          //     height: 9
          // }
        ],
      },
      {
        company: "Taipy",
        timeframe: "Oct, 2024 - Nov, 2024",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Developed scalable full-stack applications using React.js, Next.js,
            Node.js, and Python, integrating RESTful APIs and MongoDB.
          </>,
          <>
            Designed responsive UI with Tailwind CSS and Redux, optimizing for
            performance and cross-browser
          </>,
          <>
            Implemented secure authentication (JWT, OAuth) enhancing application
            security for 500+ user sessions and CI/CD pipelines using Docker and
            AWS for seamless deployment, achieved 30% faster deployment cycles.
          </>,
          <>
            Collaborated with teams to conduct code reviews, write tests with
            Jest (improving code coverage by 15%), and deliver high-quality,
            maintainable code while working as an intern
          </>,
        ],
        images: [],
      },
      {
        company: "Layer5",
        timeframe: "Nov, 2024 - April, 2025",
        role: "Front End Developer Intern",
        achievements: [
          <>
            As an Intern I Built responsive, animated UI components with
            React.js, Next.js, and Tailwind CSS, using Zustand for state
            management to increase user engagement by 20%
          </>,
          <>
            Transformed Figma designs into pixel-perfect, improved rendering
            speed by 15%.
          </>,
          <>
            Integrated APIs and optimized frontend performance through code
            reviews and testing with Cypress
          </>,
          <>
            {" "}
            Worked cross-functionally to define requirements and ship innovative
            features, adhering to coding standards
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //     src: '/images/projects/project-01/layer.png',
          //     alt: 'Once UI Project',
          //     width: 16,
          //     height: 9
          // }
        ],
      },

      {
        company: "Learn JS",
        timeframe: "Aug 2024 - Sep 2024",
        role: "Open Source Contributor",
        achievements: [
          <>
            Developed a JavaScript interpreter for users to input and execute JS
            code.{" "}
          </>,
          <>
            Created a custom GitBook plugin using Ace Editor for enhanced code
            editing features for the enterpreter.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Vivekananda Institute of Professional Studies",
        description: <>Bachelor's in Artificial Intelligence & Data Science.</>,
      },
      {
        name: "Harvard University ",
        description: <>Web Development with Python & JavaScript.</>,
      },
      {
        name: "Harvard University",
        description: <>Introduction to Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <> React.js, Next.js, Tailwind CSS, Redux, Zustand, Angular, Vue.js</>
        ),
        images: [
          {
            src: "/images/projects/image-analyze/main.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Details 4.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend",
        description: <> Node.js, Express.js, Flask, FastAPI, Django</>,
        images: [
          {
            src: "/images/projects/pokemon-cs/Front Page 1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/pokemon-cs/Login Page.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Languages",
        description: (
          <>
            JavaScript, TypeScript, Python, HTML5, CSS3, SQL, GraphQL, Java,
            C/C++
          </>
        ),
        images: [],
      },
      {
        title: "Database",
        description: (
          <> MongoDB, PostgreSQL, MySQL, Supabase, Firebase, Prisma ORM</>
        ),
        images: [],
      },
      {
        title: "Tools",
        description: (
          <>
            {" "}
            Git, Docker, Kubernetes, AWS, GCP, Figma, Jest, Shadcn UI, Cypress,
            Shopify, Webpack, Automation, Linux (wsl), Loveable, Claude, Cursor
          </>
        ),
        images: [],
      },
      {
        title: "Concepts",
        description: (
          <>
            {" "}
            RESTful APIs, GraphQL, Server-Side Rendering, Microservices, CI/CD,
            DevOps, Secure Authentication (OAuth, JWT), Object-Oriented Design,
            Data Structures, Algorithms, Software Development Lifecycle, Code
            Reviews, Testing, Deployment, AI/ML Integration , Command Line
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about My Progress and Tech..",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
