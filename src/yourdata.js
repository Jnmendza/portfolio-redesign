import Image from './me.jpg'
// import Postiva from './images/postiva.jpg'
import Resume from './images/resumeQ.jpg'
import Kit from './images/kit10.jpg'
// import Music from './images/music.jpg'
import Quiz from './images/quiz.png'
import Tracker from './images/tracker.jpg'

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Jonathan Mendoza',
        resumeURL: 'https://github.com/Jnmendza/portfolio-redesign/blob/main/src/assets/Resume.pdf',
        gitHubURL: 'https://github.com/jnmendza',
        linkedInURL: 'https://www.linkedin.com/in/jnmendza/',
        headerTagline: [//Line 1 For Header
                        'Hi! My name is Jonathan Mendoza.',
                        //Line 2 For Header
                        'Digital designer',
                        //Line 3 For Header
                        'from San Diego.'
    ],
        techStack: ['HTML', 'CSS', 'Javascript', 'React.js', 'Redux', 'ContextAPI', 'Node.js', 'Express.js', 'GraphQL', 'Apollo', 'Prisma', 'Python', 'Bootstrap', 'Material-UI', 'SCSS'],
        //Contact Email
        contactEmail:'Jonatmendoza@gmail.com',
        // Add Your About Text Here
        aboutText: ["I’m a full-stack web developer and with an 8-year background in graphic design. My most recent experience has been in startup environments, loaded with tight deadlines and multiple responsibilities.", "My creativity has led me to this career because I’ve always wanted to have an understanding of every step of the creative process from beginning to end. As a developer I’m always looking to learn and implement new methods or new approaches to any problem."],
        aboutImage:`${Image}`,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
        //    {
        //     id: 1,//DO NOT CHANGE THIS (Please)😅
        //     title:'Postiva', //Project Title - Add Your Project Title Here
        //      service:'Social Media App', // Add Your Service Type Here
        //     //Project Image - Add Your Project Image Here
        //      imageSrc:`${Postiva}`,
        //      //Project URL - Add Your Project Url Here
        //      url:'http://chetanverma.com/',
        //      description: 'Description of the project1',
        //      details: ['Detail 1','Detail 2','Detail 3','Detail 4'],
        //      links:{
        //      code: 'https://www.github.com/Jnmendza/social-media-app/tree/master',
        //      demo: 'https://www.happy-visvesvaraya-6bb649.netlify.app',
        //      website: 'https://www.google.com',
        //    }
        //     },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Quality Hub: ResumeQ',
                service: 'Website Development',
                imageSrc: `${Resume}`,
                url: 'https://qualityhub19.netlify.app/',
                description: 'A micro-service of Quality Hub that allows users to search through a marketplace of qualified resume coaches and request a review of their resume.',
                //  ['Migrated database to PostgresSQL for data persistence','Connected ResumeQ backend with Core and InterviewQ in Apollo Federation','Implemented CRUD functionality with tables','Maintained consistent styling from previous designs of Quality Hub'],
                details: ['PostgresSQL','GraphQL','Apollo Federation','axios','CRUD','ReactJs','Styled-Components', 'Express', 'Prisma'],
                links: {
                code: 'https://github.com/Quality-Hub/quality-hub-core-fe',
                demo: 'https://qualityhub19.netlify.app/',
                // website: 'https://google.com',
                }
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Quizz App',
                service: 'Trivia game',
                imageSrc: `${Quiz}`,
                url: 'https://nostalgic-franklin-399330.netlify.app/',
                description: 'A trivia game where users test their knowledge. Users can use 50/50 to remove two answers or receive hints by removing one answer from the board.',
                details: ['ReactJS','Framer-motion','Material-UI','React hooks'],
                links: {
                code: 'https://github.com/Jnmendza/quizz-app',
                demo: 'https://nostalgic-franklin-399330.netlify.app/',
                // website: 'https://google.com',
            }
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Kit10 - Store',
                service: 'E-commerce',
                imageSrc: `${Kit}`,
                url: 'http://chetanverma.com/',
                description: 'Kit10 is a e-commerce site with retro sports gear. Users can select to add items to their cart, erase, and add more items to purchase.',
                details: ['Bootstrap','Context API','Styled-Components','React hooks'],
                links: {
                code: 'https://github.com/Jnmendza/kit10',
                demo: 'https://kit10.netlify.app/',
                // website: 'https://google.com',
            }
           },
           {
            id: 5,//DO NOT CHANGE THIS (Please)😅
            title: 'E-Tracker',
            service: 'Single Page App',
            imageSrc: `${Tracker}`,
            url: 'https://5ff3da7c49109800080e7924--eager-poitras-fdf1a2.netlify.app/',
            description: 'Budget your money and keep track of your income and expenses. E-tracker is single page web app built on the MERN stack and React Hooks. ',
            details: ['Bootstrap','MERN', 'React hooks'],
            links: {
            code: 'https://github.com/Jnmendza/eTracker-client',
            demo: 'https://5ff3da7c49109800080e7924--eager-poitras-fdf1a2.netlify.app/',
            // website: 'https://google.com',
        }
       }
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/chetanverma16'},
            {
                name: 'Behance',
                url: 'https://www.behance.net/chetanverma'
            },
            {
                name: 'Dribbble',
                url: 'https://dribbble.com/chetanverma'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/cv.uidesign/'
            }

        ]
    }