export const tech = {
    title: {
        eng: "Learned technologies",
        lv: "Apgūtās tehnoloģijas",
    },
    stack: [
        {
            name: "HTML, HTTP",
            frameworks: [],
            eng: {
                text: `HTML was the first one I encountered when started learning programming/WEB development. I understand its importance in the development and display of a WEB page. A skeleton that dictates what the structure of a WEB page will be. I know and had a good practice on how to use the most popular elements and attributes. I am also familiar with HTTP protocol methods and statuses. I have gained a good practice during this project, making frontend requests and backend responses.`,
            },
            lv: {
                text: `HTML bija pirmais ar ko saskāros, uzākot mācīties programēšanu/WEB izstrādi. Saprotu tā nozīmi WEB lapas izstrādē un attēlošanā. Skelets, kas diktē to, kāda struktūra būs WEB lapai. Pārzinu un protu izmantot populārākos elementus un atribūtus. Pārzinu arī HTTP protokola metodes un statusus. Ir iegūta arī laba pieredze šo metožu un statusu izmantošanā šī projekta ietvaros.`,
            },
        },
        {
            name: "CSS",
            frameworks: [
                {
                    name: "Bootstrap",
                    eng: `I know that there are many CSS frameworks. I have a little expierence with most popular, Bootstrap.  I had used it in some small learning projects but i stoped because wanted to learn more about the basics of CSS itself, without any framework. Also, pure CSS provides more freedom.`,
                    lv: `Zinu, ka CSS frameworki ir daudz un dažādi. Ar vis populārāko, Bootstrap, ir bijusi saskare, esmu nedaudz izmantojis to dažos mazos mācīšanās projektos, bet pārstāju to izmantot, jo vairāk vēlējos gūt praksi ar pašiem CSS pamatiem, bez nekādiem frameworkiem. Tāpat arī, tīrs CSS sniedz vairāk brīvības izpausmes.`,
                },
            ],
            eng: {
                text: `CSS i know at the avarage user level, mainly focusing on the basic CSS operations, such as positioning and visualizing elements. Im aware of what kind of impressive things can be done visually with CSS,  but I have little experience with it and I'm not really motivated to go in that direction.`,
            },
            lv: {
                text: `CSS pārvaldu vidējā lietotāja līmenī koncentrējoties uz pamata elementārām CSS darbībām, kā elementu savstarpēja pozicionēšana un vizuālā noformēšana. Zinu cik vizuāli iespaidīgas lietas var paveikt, tai skaitā izmantojot arī animācijas, ar CSS, bet ar to pieredze man ir maza un nav īsti arī aicinājums doties šajā virzienā.`,
            },
        },
        {
            name: "JS",
            frameworks: [
                {
                    name: "React",
                    eng: ` After learning the basics of Javascript and gaining practice, React is the framework I've focused on the most. I have knowledge on practically for all the main principles - JSX, element rendering, component structure and how data is transferred between different components via props (child -> parent, parent -> child), including globally in the application - using '' Context ''. I also have expierence on handling events, on controlled and uncontrolled forms, on the state of components and their lifecycle (including when used in conjunction with WEB requests). While learning React, I use mostly functional components and the hooks offered by React and also make some custom hooks myself. I also use the React Router in my projects.`,
                    lv: `Pēc Javascript pamatu apgūšanas un prakses iegūšanas, React ir frameworks uz ko esmu koncentrējies visvairāk. Pārvaldu praktiski visus galvenos principus – JSX, elementu renderēšanu, komponenšu uzbūvi un to, kā tiek nodoti dati starp dažādām komponentēm (child -> parent, parent -> child), tai skaitā globāli aplikācijā - izmantojot "Context". Pārvaldu arī "eventus", kontrolētas un nekontrolētas formas, komponenšu "state" un to  dzīvesciklu (tai skaitā arī izmantojot kopā ar WEB pieprasījumiem). Mācoties React izmantoju pārsvarā funckionālās komponentes un React piedāvātos "hooks", tai skaitā esmu veidojis savus pielāgotos hooks. Savos projektos izmantoju arī React Router.`,
                },
                {
                    name: "Angular",
                    eng: `I have been learning Angular during my 3-month Javascript distance learning course organized by the Turiba Business School. These courses introduced me to this framework. I have been actively using Angular for a while, but over time, as training projects got bigger, the project structure became too intrusive and more difficult to operate compared to React.`,
                    lv: `Ar Angular ir bijusi saskare laikā, kad piedalījos biznesa skolas “Turība” organizētos, 3 mēnešus garos, Javascript attālinātajos mācību kursos. Šie kursi mani iepazīstināja ar šo framework. Kādu laiku aktīvi izmantoju Angular, bet ar laiku, mācību projektiem kļūstos lielākiem, projekta struktūra kļuva pārāk uzbāzīga un sarežģītāk operējama salīdzinot ar React.`,
                },
            ],

            eng: {
                text: ` Javascript has been the programming language I have chosen to go to when starting to learn programming. This language is light enough and quick to understand and logical. I understand and i am able to use all the main principles of the language - variables and their scope, conditions, loops, simple and higher order functions, objects and object-oriented programming, AJAX, JSON, DOM manipulation, etc..`,
            },
            lv: {
                text: `Javascript ir bijusi programmēšanas valoda, kuras virzienā esmu izvēlējis doties uzsākot macīties programmēšanu. Šī valoda ir pietiekami viegla un ātri uztverama, un loģiska. Saprotu un spēju pārvaldīt visus galvenos principus – variables un to scope, kondīcijas, loops, vienkāršās un augstākās klases funkcijas, objektus un objektu orientētu programmēšanu, AJAX, JSON, manipulācijas ar DOM u.c.. `,
            },
        },
        {
            name: "NodeJs",
            frameworks: [
                {
                    name: "Express",
                    eng: `This framework is light and easy to learn. I know how to process incoming requests and send responses to the frontend, as well as the methods and capabilities of these Express request and response objects. Im familiar with the built-in middleware functions of Express and i know how to create my own. Working with this framwork I have gained experience working with json payload, headers, cookies, token, data retrieval from url (params, query) etc.. I understand error handling in communication between the server and the frontend, as well as the nuances of security in WEB requests.`,
                    lv: `Šis frameworks ir pietiekami viegls un skaidrs. Pārvaldu request apstrādi un response nosūtīšanu uz frontendu, tāpat arī šo Express objektu metodes un iespējas. Pārzinu Express iebūvētās middleware funkcijas un protu izmantot ar arī paša radītās. Strādājot ar šo framwork esmu ieguvis pieredzi darbā ar json payload, headers, cookies, token, datu iegūšanu no url adreses (params, query) u.c.. Saprotu erroru pārvaldību komunikācijā starp serveri un frontendu, tāpat arī nianses par drošību WEB pieprasījumos. `,
                },
            ],
            eng: {
                text: `I understand what language NodeJS is and its importance in modern WEB applications. I have not mastered it in depth, but I use the ExpressJs framework in the learning process. I know and I regularly use NPM and the projects available there.`,
            },
            lv: {
                text: `Saprotu, kas par valodu ir NodeJS un tās nozīmi mūsdienu WEB aplikācijās. Padziļinātāk neesmu apguvis to, bet mācību procesā izmantoju ExpressJs frameworku. Protu un arī regulāri lietoju NPM, un tur pieejamos projektus.`,
            },
        },
        {
            name: "MongoDB",
            frameworks: [
                {
                    name: "Mongoose",
                    eng: "I use it quite regularly. I know how to create and use model schemes, as well as search for data and make changes.",
                    lv: "Izmantoju diezgan regulāri. Pārzinu modeļu shēmu taisīšanu un to izmantošanu, kā arī datu meklēšanu un izmaiņu veikšanu.",
                },
            ],
            eng: {
                text: `MongoDB is the only database i had used in the learning process. I understand the difference between SQL and NoSQL databases. I have not mastered MongoDB directly, but through the Mongoose framework.`,
            },
            lv: {
                text: `MongoDB ir vienīgā datubāze ar ko es esmu saskāries un, ko izmantoju mācīšanās procesā. Saprotu atsķīrību starp SQL un NoSQL datubāzēm. Neesmu apguvis MongoDB tieši, bet gan caur Mongoose frameworku.`,
            },
        },
    ],
};
