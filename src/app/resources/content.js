const person = {
  firstName: "Jéssica",
  lastName: "Ferreira",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Software Engineer",
  avatar: "/images/avatar.jpeg",
  location: "Pernambuco - Brazil",
  languages: ["English", "Portuguese", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iamjessicaferreira",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/j%C3%A9ssica-ferreira-soueu/",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@devjessica.f",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:devjessica.f@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}&apos;s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Jéssica Ferreira</>,
  second_headline: (
    <> AI Software Engineer | Fullstack (React, Next.js, Node.js, Python) | AI-Powered Products</>
  ),
  subline: (
    <>
      Software Engineer focused on AI-powered products and end-to-end fullstack development. I
      combine technical execution, user-focused design, and autonomous ownership across the full
      application lifecycle: from concept and architecture to infrastructure, deployment, and
      iteration. I use AI as a core part of my workflow to build, ship, and scale production-ready
      web platforms.
    </>
  ),
  skillset_title: <>What I bring to the table?</>,
  intro_title: <>Why work with me?</>,
  skills: [
    { name: "JavaScript", icon: "/images/skills/js.png" },
    { name: "TypeScript", icon: "/images/skills/ts.png" },
    { name: "React", icon: "/images/skills/react.png" },
    { name: "Construct", icon: "/images/skills/construct.png" },
    { name: "Next.js", icon: "/images/skills/nextlogo.png" },
    { name: "AWS", icon: "/images/skills/aws.png" },
    { name: "Git/Github/Gitlab", icon: "/images/skills/git.png" },
    { name: "HTML5", icon: "/images/skills/html.png" },
    { name: "CSS3", icon: "/images/skills/css.svg" },
    { name: "Redux", icon: "/images/skills/redux.png" },
    { name: "PHP", icon: "/images/skills/phplogo.png" },
    { name: "Python", icon: "/images/skills/python.png" },
    { name: "Django", icon: "/images/skills/django.png" },
    { name: "Tailwind CSS", icon: "/images/skills/tailwind.png" },
    { name: "Agile", icon: "/images/skills/agile.png" },
    { name: "Wordpress", icon: "/images/skills/wp.png" },
    { name: "Jest", icon: "/images/skills/jest.png" },
    { name: "Docker", icon: "/images/skills/docker.png" },
    { name: "MySQL", icon: "/images/skills/mysql.png" },
    { name: "Linux", icon: "/images/skills/linux.png" },
    { name: "Metronic", icon: "/images/skills/metronic.png" },
    { name: "Zustand", icon: "/images/skills/zustand.png" },
  ],
  intro_text: (
    <>
      {" "}
      I&apos;m a highly autonomous fullstack developer with a{" "}
      <strong>strong product mindset.</strong> I own technical decisions end-to-end: architecture,
      stack choices, infrastructure, deployments, CI/CD, and code quality. I use{" "}
      <strong>AI and LLMs daily</strong> to accelerate architecture design, implementation,
      refactoring, reviews, and audits. Along with that, my game development background shaped how I
      think about <strong>systems, interaction, and user experience</strong>, and I bring that
      mindset into everything I build.
    </>
  ),
  projects_title: "My projects",
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m a curious, proactive, and self-directed developer that cares deeply about how
        people experience the things we build. My path into software started with game jams and
        experimental projects, where I learned to think in systems, feedback loops, and user
        behavior before anything else. That foundation shaped how I approach every product I work on
        today: interaction, clarity, and respect for the user&apos;s pace always come first.
        <br />
        <br />I work across the full stack with JavaScript, Node.js, Python, and modern web
        architectures, using AI tools throughout my workflow, from architecture design and
        implementation to code reviews and audits. I thrive in early-stage environments where I can
        take an idea from Lean Discovery and MVP definition all the way to a production-ready
        system, owning every technical decision along the way.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vestov",
        timeframe: "Since 2025",
        role: "AI Software Engineer - Full-time",
        achievements: [
          <>
            Fullstack software developer with end-to-end technical ownership, responsible for
            architecture decisions, stack selection, infrastructure, deployments, CI/CD, and overall
            code quality.
          </>,
          <>
            Built, reviewed, and audited production-ready fullstack applications using React,
            Next.js, and modern web architectures, with a strong focus on scalability and
            maintainability.
          </>,
          <>
            Operated with high technical autonomy, making all engineering decisions independently
            while collaborating with a Product Manager on product direction.
          </>,
          <>
            Led end-to-end product development, from Lean Discovery and MVP definition to fullstack
            implementation and deployment.
          </>,
          <>
            Authored key product artifacts such as Product Vision Documents and MVP Roadmaps to
            guide scope and stakeholder alignment.
          </>,
          <>
            Integrated AI-powered features and established AI-assisted development workflows using
            LLM APIs and structured prompting.
          </>,
        ],
        images: [],
      },
      {
        company: "CESAR",
        timeframe: "2024 - 2025",
        role: "Software Engineer - Full-time",
        achievements: [
          <>
            At CESAR, I worked on the development of a virtual assistant with Generative Artificial
            Intelligence (AI Gen) to support companies in implementing ESG practices. Additionally,
            we built a web platform for the greenhouse gas inventory module, focusing on automating
            data collection and calculations to increase efficiency for client companies. My
            responsibilities included leading agile ceremonies, organizing the backlog, writing user
            stories, and handling end-to-end implementation of features and automated calculations.
          </>,
          <>Developing software with Python, React, and PostgreSQL.</>,
          <>Reviewing processes and integrating technical and product teams.</>,
          <>Understanding and executing scalable software architectures.</>,
          <>Identifying and resolving issues using debugging and unit testing.</>,
          <>
            Collaborating in agile teams, ensuring quality and efficiency in the development cycle.
          </>,
        ],
        images: [],
      },
      {
        company: "JOTA",
        timeframe: "2024",
        role: "Fullstack Developer - Full-time",
        achievements: [
          <>
            I contributed to the ideation and launch of JOTA Único, a personalized news portal for
            over 2 million monthly users. My role involved defining KPIs, implementing agile
            processes, developing key features, and creating a design system. I also participated in
            discussions on removing the paywall, organized training workshops, introduced front-end
            testing practices, and implemented SEO best practices, leading to significant
            performance improvements.
          </>,
          <>Implementation and configuration of JIRA to organize the backlog and track demands.</>,
          <>
            Translation of technical requirements for non-technical areas, ensuring alignment among
            stakeholders.
          </>,
          <>Fullstack system development using React, Next.js, Python, and AWS.</>,
          <>Improved API response time by 25% by optimizing database queries</>,
        ],
        images: [],
      },
      {
        company: "JOTA",
        timeframe: "2023",
        role: "Trainee Fullstack Developer - Full-time",
        achievements: [
          <>Develop endpoints (CRUD);</>,
          <>
            Developed and deployed end-to-end features in React, TypeScript, and Node.js, improving
            UI responsiveness
          </>,
          <>Automated processes with AWS Lambda, reducing manual workload.</>,
          <>
            Be able to understand and work with Cloud Computing, Lambdas and other AWS
            servicesDevelop endpoints (CRUD) ;
          </>,
        ],
        images: [],
      },
      {
        company: "JOTA",
        timeframe: "2022",
        role: "Front end Developer Intern",
        achievements: [
          <>Developing software with Python, React, and PostgreSQL.</>,
          <>Reviewing processes and integrating technical and product teams.</>,
          <>Understanding and executing scalable software architectures.</>,
          <>Identifying and resolving issues using debugging and unit testing.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Joaquim Nabuco",
        description: <>Studied Systems and Analysis development.</>,
      },
      {
        name: "Quality and Product management Certificate",
      },
      {
        name: "Front-End React Developer Certificate",
      },
      {
        name: "Learn Python with Programming Certificate",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript",
        description: <></>,
        images: ["/images/skills/js.png"],
      },
      {
        title: "TypeScript",
        description: <></>,
        images: ["/images/skills/ts.png"],
      },
      {
        title: "React",
        description: <></>,
        images: ["/images/skills/react.png"],
      },
      {
        title: "Next.js",
        description: <></>,
        images: ["/images/skills/nextlogo.png"],
      },

      {
        title: "AWS",
        description: <></>,
        images: ["/images/skills/aws.png"],
      },
      {
        title: "Construct 3",
        description: <></>,
        images: ["/images/skills/construct.png"],
      },

      {
        title: "Git/Github/Gitlab",
        description: <></>,
        images: ["/images/skills/git.png"],
      },
      {
        title: "HTML5",
        description: <></>,
        images: ["/images/skills/html.png"],
      },
      {
        title: "CSS3",
        description: <></>,
        images: ["/images/skills/css.svg"],
      },
      {
        title: "Redux",
        description: <></>,
        images: ["/images/skills/redux.png"],
      },
      {
        title: "PHP",
        description: <></>,
        images: ["/images/skills/phplogo.png"],
      },
      {
        title: "Python",
        description: <></>,
        images: ["/images/skills/python.png"],
      },
      {
        title: "Django",
        description: <></>,
        images: ["/images/skills/django.png"],
      },
      {
        title: "Tailwind CSS",
        description: <></>,
        images: ["/images/skills/tailwind.png"],
      },
      {
        title: "Agile",
        description: <></>,
        images: ["/images/skills/agile.png"],
      },
      {
        title: "Wordpress",
        description: <></>,
        images: ["/images/skills/wp.png"],
      },
      {
        title: "Jest",
        description: <></>,
        images: ["/images/skills/jest.png"],
      },
      {
        title: "Docker",
        description: <></>,
        images: ["/images/skills/docker.png"],
      },
      {
        title: "MySQL",
        description: <></>,
        images: ["/images/skills/mysql.png"],
      },
      {
        title: "Linux",
        description: <></>,
        images: ["/images/skills/linux.png"],
      },
      {
        title: "Metronic",
        description: <></>,
        images: ["/images/skills/metronic.png"],
      },
      {
        title: "Zustand",
        description: <></>,
        images: ["/images/skills/zustand.png"],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const games = {
  label: "Games",
  title: "My games",
  description: `Games developed by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, gallery, games };
