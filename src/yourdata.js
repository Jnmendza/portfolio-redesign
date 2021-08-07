import Image from './images/jon1.jpg';
import Resume from './images/resumeQ.jpg';
import Gym from './images/gym.jpg';
import Quiz from './images/quiz.png';
import Tracker from './images/tracker.jpg';
import Barca from './images/barca.jpg';
import Recipe from './images/recipe.jpg';
import Baseball from './images/baseball.jpg'

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)

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
        techStack: ['HTML5', 'CSS', 'Bootstrap', 'Material-UI', 'SCSS', 'Javascript', 'React.js', 'Redux', 'ContextAPI', 'Node.js', 'Express.js', 'GraphQL', 'Apollo', 'Prisma', 'SQLite','MongoDB', 'Python'],
        //Contact Email
        contactEmail:'Jonatmendoza@gmail.com',
        // Add Your About Text Here
        aboutText: ["I’m a full-stack web developer with an 8-year background in graphic design. My most recent experience has been in startup environments, loaded with tight deadlines and multiple responsibilities.", "My creativity has led me to this career because I’ve always wanted to have an understanding of every step of the creative process from beginning to end. As a developer I’m always looking to learn and implement new methods or new approaches to any problem."],
        aboutImage:`${Image}`,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Recipe site', //Project Title - Add Your Project Title Here
             service:'Recipe API - Single page app', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:`${Recipe}`,
             //Project URL - Add Your Project Url Here
             url:'https://vigorous-bell-158ebc.netlify.app/',
             description: 'A single page app where users can browse the Tasty API for recipes by ingredients . Users can view videos and list of ingredients.',
             details: ['React JS','useHooks','API','Styled-Components'],
             links:{
             code: 'https://github.com/Jnmendza/recipe-app-api',
             demo: 'https://vigorous-bell-158ebc.netlify.app/',
           }
            },
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
            }
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Players Bio-Cards',
                service: 'Baseball API Cards',
                imageSrc: `${Baseball}`,
                url: 'https://upbeat-northcutt-1aaafd.netlify.app/',
                description: `A display of digital baseball cards. Career stats and player bio's are pulled from MLB Data API.` ,
                details: ['Vanilla JS','HTML','CSS'],
                links: {
                code: 'https://github.com/Jnmendza/baseball-card-api',
                demo: 'https://upbeat-northcutt-1aaafd.netlify.app/',
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
        }
       },
       {
        id: 6,//DO NOT CHANGE THIS (Please)😅
        title: 'BarcaGame',
        service: 'JS Memory game',
        imageSrc: `${Barca}`,
        url: 'https://barca-game.netlify.app/',
        description: 'The memory game is a basic matching game. In a deck of paired cards, the player needs to match each pair to win the game.',
        details: ['Vanilla JS','Vanilla-tilt', 'HTML', 'CSS'],
        links: {
        code: 'https://github.com/Jnmendza/Barca-game',
        demo: 'https://barca-game.netlify.app/',
            }
        },
        {
            id: 7,//DO NOT CHANGE THIS (Please)😅
            title: 'Gym website',
            service: 'Responsive web design',
            imageSrc: `${Gym}`,
            url: 'https://compassionate-visvesvaraya-b64214.netlify.app/',
            description: 'A responsive website for a local Jiu Jitsu gym built with html and css. The animation on each section was built with GSAP. ',
            details: ['Vanilla JS','HTML', 'CSS', 'GSAP'],
            links: {
            code: 'https://github.com/Jnmendza/responisve-bjj-site',
            demo: 'https://compassionate-visvesvaraya-b64214.netlify.app/',
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