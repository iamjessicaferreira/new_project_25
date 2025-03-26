import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Jéssica",
	lastName: "Ferreira",
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: "Fullstack Software Engineer",
	avatar: "/images/avatar.jpg",
	location: "Brazil", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ["English", "Portuguese", "French"], // optional: Leave the array empty if you don't want to display languages
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
		link: "https://github.com/mechamoje",
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "https://www.linkedin.com/in/j%C3%A9ssica-ferreira-soueu/",
	},
	// {
	// 	name: "X",
	// 	icon: "x",
	// 	link: "",
	// },
	{
		name: "Email",
		icon: "email",
		link: "mailto:devjessica.f@gmail.com",
	},
];

const home = {
	label: "Home",
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Jéssica Ferreira</>,
	second_headline: (
		<>
			{" "}
			Software Engineer | Agile | Project and Product Management | Technical &
			Creative Communication | Games & Technology
		</>
	),
	subline: (
		<>
			I am a multidisciplinary professional with solid experience in software
			development, team management, and agile. My journey combines technology,
			management, and creativity, allowing me to bridge the gap between both
			technical and product teams, ensuring efficiency, innovation, and high
			performance.
		</>
	),
	skillset_title: <>What I bring to the table?</>,
	intro_title: <>Why choosing me?</>,
	skills: [
		{ name: "React", icon: "/images/avatar.jpg" },
		{ name: "Next.js", icon: "/images/avatar.jpg" },
		{ name: "TypeScript", icon: "/images/avatar.jpg" },
		{ name: "AWS", icon: "/images/avatar.jpg" },
		{ name: "JavaScript", icon: "/images/avatar.jpg" },
		{ name: "Git/Github/Gitlab", icon: "/images/avatar.jpg" },
		{ name: "HTML5", icon: "/images/avatar.jpg" },
		{ name: "CSS3", icon: "/images/avatar.jpg" },
		{ name: "PHP", icon: "/images/avatar.jpg" },
		{ name: "Python", icon: "/images/avatar.jpg" },
		{ name: "Django", icon: "/images/avatar.jpg" },
		{ name: "SCRUM", icon: "/images/avatar.jpg" },
		{ name: "Tailwind CSS", icon: "/images/avatar.jpg" },
		{ name: "Agile", icon: "/images/avatar.jpg" },
		{ name: "Wordpress", icon: "/images/avatar.jpg" },
		{ name: "Jest", icon: "/images/avatar.jpg" },
		{ name: "Docker", icon: "/images/avatar.jpg" },
		{ name: "MySQL", icon: "/images/avatar.jpg" },
		{ name: "Linux", icon: "/images/avatar.jpg" },
		{ name: "Testing", icon: "/images/avatar.jpg" },
		{ name: "Metronic", icon: "/images/avatar.jpg" },
		{ name: "Zustand", icon: "/images/avatar.jpg" },
	],
	intro_text: (
		<>
			{" "}
			Beyond coding and developing end-to-end applications with technologies
			like JavaScript, Python, and AWS, I bring strong collaboration and
			leadership skills to any team. With expertise in effective communication,
			backlog management, SCRUM practices, and product development, I help
			optimize workflows, enhance team dynamics, and drive impactful results.
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
				Fullstack Developer with expertise in JavaScript, Next.js, React.js,
				TypeScript, Python, Django, AWS, and more. Passionate about building
				scalable solutions and optimizing development processes. With a solid
				background in Agile methodologies, SCRUM, project management, and team
				leadership, in addition to coding, I am also skilled at managing
				backlogs, facilitating team collaboration, and ensuring the successful
				delivery of projects.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: "Work Experience",
		experiences: [
			{
				company: "CESAR",
				timeframe: "Since 2024",
				role: "Software Engineer",
				achievements: [
					<>Developing software with Python, React, and PostgreSQL.</>,
					<>Reviewing processes and integrating technical and product teams.</>,
					<>Understanding and executing scalable software architectures.</>,
					<>
						Identifying and resolving issues using debugging and unit testing.
					</>,
					<>
						Collaborating in agile teams, ensuring quality and efficiency in the
						development cycle.
					</>,
				],
				images: [],
			},
			{
				company: "JOTA",
				timeframe: "2024",
				role: "Fullstack Developer",
				achievements: [
					<>
						Implementation and configuration of JIRA to organize the backlog and
						track demands.
					</>,
					<>
						Translation of technical requirements for non-technical areas,
						ensuring alignment among stakeholders.
					</>,
					<>
						Fullstack system development using React, Next.js, Python, and AWS.
					</>,
					<>Improved API response time by 25% by optimizing database queries</>,
				],
				images: [],
			},
			{
				company: "JOTA",
				timeframe: "2023",
				role: "Trainee Fullstack Developer",
				achievements: [
					<>Develop endpoints (CRUD);</>,
					<>
						Developed and deployed end-to-end features in React, TypeScript, and
						Node.js, improving UI responsiveness
					</>,
					<>Automated processes with AWS Lambda, reducing manual workload.</>,
					<>
						Be able to understand and work with Cloud Computing, Lambdas and
						other AWS servicesDevelop endpoints (CRUD); Participate in the
						development of features from FrontEnd to BackEnd Be able to
						understand and work with Databases Automate processes Be able to
						understand and work with Cloud Computing, Lambdas and other AWS
						services .
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
					<>
						Identifying and resolving issues using debugging and unit testing.
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
				name: "University of Joaquim Nabuco",
				description: <>Studied Systems and Analysis development.</>,
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: "Technical skills",
		skills: [
			{
				title: "Figma",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "React.js",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "JavaScript",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "PHP",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "Next.js",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "Figma",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "React.js",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "JavaScript",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "PHP",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "Next.js",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
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
