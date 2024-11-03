import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Anuj',
    lastName: 'Kumar Sharma',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Web Developer and Open Source Contributor',
    avatar: '/images/avatarm.jpg',
    location: 'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/THEBOSS0369',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/anuj-kumar-sharma-59330a287/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/AnujS21202',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:anujkumsharma9876@gmail.com',
    },
    {
        name: 'Medium',
        icon: 'medium',
        link: 'https://medium.com/@anujsharma46090',
    },
    {
        name: 'DEV Community',
        icon: 'devcommunity',
        link: 'https://dev.to/anuj_kumarsharma_c7e83ee',
    }
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Web Developer and Open Source Contributor</>,
    subline: <>I'm Anuj, Sophomore at VIPS doing my undergrad in <InlineCode>AI & DS</InlineCode>, where I am learning about<br /> Artificial Intelligence & Dat Science. After hours, I build my own projects and love to contribute to Open Source.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Anuj is a 2nd Year undergrad at VIPS, pursuing B-Tech in Aritificial Intelligence and Data Science. His Tech Stacks are Based on Typescript and JavaScript. He loves to Contribute to Open Source.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Layer5',
                timeframe: 'Sep, 2024 - Present',
                role: 'Open Source Contributor',
                achievements: [
                    <>Improved UI/UX by developing new components using Next.js and Tailwind CSS. Implemented automation scripts in Node.js to optimize the build process.</>,
                    <>Refactored many Key components from class-based to functional components, ensuring compatibility with MUI v5 and modern React practices.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/layer.png',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Kiwix',
                timeframe: 'Sep, 2024 - Present',
                role: 'Open Source Contributor',
                achievements: [
                    <>Modified content extraction logic to filter brief descriptions from popovers in Wikivoyage ZIM files, improving the accuracy and user experience.</>,
                ],
                images: [
                    // {
                    //     src: '/images/projects/project-01/kiwix.png',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Taipy',
                timeframe: 'Oct, 2024 - Present',
                role: 'Open Source Contributor',
                achievements: [
                    <>Enhanced UI consistency by resolving styling issues and added unique CSS classes for customizable column headers.</>,
                    <>Improved JSON data visualization by adding collapsibility and syntax highlighting in DataNodeViewer, and implemented unit tests to ensure reliable styling and functionality for table utilities</>
                ],
                images: [

                ]
            },
            {
                company: 'Learn JS',
                timeframe: 'Aug 2024 - Sep 2024',
                role: 'Open Source Contributor',
                achievements: [
                    <>Developed a JavaScript interpreter for users to input and execute JS code. </>,
                    <>Created a custom GitBook plugin using Ace Editor for enhanced code editing features for the enterpreter.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Vivekananda Institute of Professional Studies',
                description: <>Bachelor's in Artificial Intelligence & Data Science.</>,
            },
            {
                name: 'Harvard University Online',
                description: <>Studied Web Development with Python & JavaScript.</>,
            },
            {
                name: 'Harvard University Online',
                description: <>Introduction to Computer Science.</>,
            },

        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + ShadCN UI / Next UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/image-analyze/main.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/Details 4.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'React',
                description: <>Able to create Website based on React Libraries.</>,
                images: [
                    {
                        src: '/images/projects/pokemon-cs/Front Page 1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/pokemon-cs/Login Page.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about My Progress and Tech..',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };