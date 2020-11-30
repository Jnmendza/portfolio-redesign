import Image from './me.jpg'
import Postiva from './images/postiva.jpg'
import Resume from './images/resumeQ.jpg'
import Kit from './images/kit10.jpg'
import Music from './images/music.jpg'

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Jonathan Mendoza',
        resumeURL: 'https://www.jonathanmendoza.dev/assets/resources/JonathanMendozaResume.pdf',
        gitHubURL: 'https://github.com/jnmendza',
        linkedInURL: 'https://www.linkedin.com/in/jnmendza/',
        headerTagline: [//Line 1 For Header
                        'Hi! My name is Jonathan Mendoza.',
                        //Line 2 For Header
                        'Digital designer',
                        //Line 3 For Header
                        'from San Diego.'
    ],
        //Contact Email
        contactEmail:'Jonatmendoza@gmail.com',
        // Add Your About Text Here
        abouttext: "I’m a full-stack web developer and with an 8-year background in graphic design. My most recent experience has been in startup environments, loaded with tight deadlines and multiple responsibilities. My creativity has led me to this career because I’ve always wanted to have an understanding of every step of the creative process from beginning to end. As a developer I’m always looking to learn and implement new methods or new approaches to any problem. I'm skilled in JavaScript, React JS, Node JS and Redux.",
        aboutImage:`${Image}`,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Postiva', //Project Title - Add Your Project Title Here
             service:'Social Media App', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:`${Postiva}`,
             //Project URL - Add Your Project Url Here
             url:'http://chetanverma.com/',
             description: 'Description of the project1',
             details: ['Detail 1','Detail 2','Detail 3','Detail 4'],
             links:{
             code: 'https://github.com/Jnmendza/social-media-app/tree/master',
             demo: 'https://happy-visvesvaraya-6bb649.netlify.app',
             website: 'Website',
           }
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Quality Hub: ResumeQ',
                service: 'Website Development',
                imageSrc: `${Resume}`,
                url: 'http://chetanverma.com/',
                description: 'A micro-service of Quality Hub that allows users to search through a marketplace of qualified resume coaches and request a review of their resume.',
                details: ['Migrated database to PostgresSQL for data persistence','Connected ResumeQ backend with Core and InterviewQ in Apollo Federation','Implemented CRUD functionality with tables','Maintained consistent styling from previous designs of Quality Hub'],
                links: {
                code: 'https://github.com/Quality-Hub/quality-hub-core-fe',
                demo: 'https://qualityhub19.netlify.app/',
                website: 'Website',
                }
            },
            // { 
            //     id: 3,//DO NOT CHANGE THIS (Please)😅
            //     title: 'Tune App',
            //     service: 'Music App',
            //     imageSrc: `${Music}`,
            //     url: 'http://chetanverma.com/',
            //     description: 'Description of the project3',
            //     details: ['Detail 1','Detail 2','Detail 3','Detail 4'],
            //     links: {
            //     code: 'Code',
            //     demo: 'Demo',
            //     website: 'Website',}
            // },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Kit10 - Store',
                service: 'Branding',
                imageSrc: `${Kit}`,
                url: 'http://chetanverma.com/',
                description: 'Kit10 is a e-commerce site with retro sports gear. Users can select to add items to their cart, erase, and add more items to purchase.',
                details: ['Built a Carousel with Bootstrap','Applied Context API for storing data','Styled application with Styled-Components and Bootstrap','React JS using hooks'],
                links: {
                code: 'Code',
                demo: 'Demo',
                website: 'Website',
            }
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
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