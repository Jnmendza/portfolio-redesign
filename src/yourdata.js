import Image from './me.jpg'

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
             imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             //Project URL - Add Your Project Url Here
             url:'http://chetanverma.com/',
             description: 'Description of the project1',
             code: 'Code',
             demo: 'Demo',
             website: 'Website',
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Quality Hub: ResumeQ',
                service: 'Website Development',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/',
                description: 'Description of the project2',
                code: 'Code',
                demo: 'Demo',
                website: 'Website',
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Tune App',
                service: 'Music App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/',
                description: 'Description of the project3',
                code: 'Code',
                demo: 'Demo',
                website: 'Website',
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Kit10 - Store',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/',
                description: 'Description of the project4',
                code: 'Code',
                demo: 'Demo',
                website: 'Website',
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