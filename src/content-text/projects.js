export const projectsIntro = {
    lv: {
        title: "Par projektiem",
        intro: `Kopš sāku mācīties programmēt ir radīti dažādi nelieli un vienkārši projekti, lai gūtu koda rakstīšanas praksi. Esmu aptvēris daudz zināšanas un guvis praksi gan klienta, gan arī servera puses koda rakstīšanā un datu kustībā starp tiem. Pašmācības projektu izstrādē esmu sapratis cik liela nozīme ir plānošanai pirms rakstīt jebkādu kodu. Praktizēju objektu orientētu programmēšanu, ievēroju „separation of concerns” un „dry code” principus. Esmu ieguvis labu sapratni un pieredzi par „state managment” specifiskās komponentēs, kā arī visā aplikācijā kopumā. Saprotu aplikācijas lietotāja autentifikācijas un autorizācijas principus. 
        Zemāk variet apskatīt daļu no manis pašmācībā izstrādātiem projektiem. Ar katru projektu gūstu lielāku pieredzi un praksi, kā arī identificēju iepriekšējo projektu koda rakstīšanas kļūdas. Šo visu pieredzi ņemu vērā pie katra no nākamajiem projektiem, ko radu. Kods paliek tīrāks un pārdomātāks, tāpat arī koda rakstīšana paliek raitāka un efektīvāka. Brīdī, kad sāku just, ka ir jau pārliecība apgūtajās tehnoloģijās, nākamajos projektos cenšos iekļaut jaunas tehnoloģijas, ko mācīties. 
        `,
    },
    eng: {
        title: "About projects",
        intro: `Since I started to learn programming, various small and simple projects have been created to gain code writing practice. I have gained a lot of knowledge and experience in writing both client and server side code and moving data between them. During these self-study projects development, I understood the importance of planning before writing any code. I practiced object-oriented programming, followed the principles of "separation of concerns" and "dry code". I have gained a good understanding and experience of state management in specific components as well as in the application as a whole. I understand the principles of application user authentication and authorization. Below you can see some of mine self-study projects. With each project, I have gained more experience and practice, also identified my code writing mistakes. I take all this experience into account in each of the next projects I create. The code becomes cleaner and smarter, and the writing of the code becomes smoother and more efficient. The moment I start to feel confident in the technologies I have already learned, I try to include new technologies to learn in future projects.`,
    },
};

export const projects = [
    {
        id: 1,
        title: {
            lv: "Iepirkumu liste",
            eng: "Shopping list",
        },
        about: {
            lv: `Aplikācija, kur iespējams izveidot veikala iepirkumu sarakstu un atzīmēt visus produktus vai katru indivinduāli kā izpildītu/neizpildītu. Iespējams arī izveidot un saglabāt ēdienu receptes ar attiecīgi nepieciešamajiem produktiem receptes pagatavošanai. Receptes sastāvdaļas iespējams nosūtīt pa tiešo uz kādu no esošajiem iepirkumu sarakstiem. Pašā iepirkumu sarakstā katrs produkts ir ar norādi, vai tas ir pievienots no receptes, tāpat arī redzams cik porcijām tas ir paredzēts.`,
            eng: `An application where it is possible to create a store grocery shopping list and mark all products or each individually as completed / uncompleted. It is also possible to create and save food recipes with the necessary products for cooking the recipe. Recipe ingredients can be sent directly to one of the existing shopping lists. In the shopping list itself, each product indicates if it is received from recipe or not and also there is mentioned for how much servings it is used for.`,
        },
        technologies: ["React", "Sass", "TypeScript", "ExpressJs", "MongoDB"],
        see: {
            title: {
                lv: "Apskatīt projektu iekš",
                eng: "View project on",
            },
            links: {
                web: "https://s-list.netlify.app/",
                github: "https://github.com/mart8ins/sList-fo",
            },
        },
    },
    {
        id: 2,
        title: {
            lv: "Elementi e-veikals",
            eng: "Elementi e-store",
        },
        about: {
            lv: `Nav “default” preču kategoriju, bet admins produktu pārvaldības lapā var veidot dinamiskas kategorijas un attiecīgi pievienot arī šīm kategorijām produktus. Ir iespējams pievienot arī bildes. Katru produktu var rediģēt un mainīt gan veco, gan arī jauno cenu, pielikt atzīmi, ka produkts ir izpārdošanas produkts. Ir iespējams produktu arī paslēpt no tirdzniecības. Pasūtījumu pārvaldības sadaļā pastāv vairāki pasūtījuma statusi. Saņemtajā pasūtījumā var redzēt pasūtījuma un pasūtītāja informāciju. Ir iespējams mainīt statusu un atstāt pasūtījuma statusa informācijas komentāru priekš paša admina. E-veikala klients var veikt pasūtījumu gan reģistrējoties, gan arī nereģistrējoties. Reģistrējoties ir priekšrocība, ka pie “checkout” automātiski importējas pasūtītāja profilā iepriekš ievadītie dati (tel. nummurs, adrese utt.). Tāpat arī savā profilā var sekot līdzi savu pasūtījumu statusiem. Admina opciju apskatei variet ielogoties LIETOTĀJS - viesis, PAROLE - viesisviesis.`,
            eng: `No default product categories, but you can create dynamic categories on the admins product management page and add products to those categories accordingly. You can also add photos of products. Each product can be edited and both the old and the new price can be changed, you can also mark the product as a sale product. It is also possible to hide the product from trade. There are several order statuses in the order management section. In the received order you can see the order and customer information. It is possible to change the status and leave a comment on the order status information for the admin himself. The customer of the e-shop can place an order both by registering and without registering. When registering, there is an advantage that the data previously entered in the customer's profile (phone number, address, etc.) is automatically imported into the checkout. You can also keep track of the status of your orders on your profile. You can login to view admin options USER - viesis, PASSWORD - viesisviesis.`,
        },
        technologies: ["EJS", "Javascript", "CSS", "Bootstrap", "ExpressJs", "MongoDB", "Cloudinary Image Storage"],
        see: {
            title: {
                lv: "Apskatīt projektu iekš",
                eng: "View project on",
            },
            links: {
                web: "https://limitless-oasis-47617.herokuapp.com/",
                github: "https://github.com/mart8ins/elementi_express",
            },
        },
    },
    {
        id: 3,
        title: {
            lv: "Blogošanas lapa",
            eng: "Blogging site",
        },
        about: {
            lv: `Vienkārša blogošanas mājaslapa ar 5 tēmu sadaļām. Ir iespējama komentēšana un vērtēšana. Savā profilā var redzēt visus savus izveidotos blogus. Tāpat arī iespējams apskatīt kopsavilkumu komentāriem, ko lietotājs atstājis citu lietotāju blogos un redzēt arī citu lietotāju atstātos komentārus paša blogos.`,
            eng: `A simple blogging website with 5 themed sections. It is possible to comment and rate blogs. You can see all the blogs you've created in your profile. It is also possible to view a summary of comments left by you on other users blogs and to see comments left by other users on your own blogs.`,
        },
        technologies: ["EJS", "Javascript", "CSS", "ExpressJS", "MongoDB"],
        see: {
            title: {
                lv: "Apskatīt projektu iekš",
                eng: "View project on",
            },
            links: {
                web: "https://fathomless-waters-93208.herokuapp.com/",
                github: "https://github.com/mart8ins/blogz",
            },
        },
    },
    {
        id: 4,
        title: {
            lv: "TV šovi",
            eng: "TV shows",
        },
        about: {
            lv: `Vienkārša mājaslapa, kur meklēt TV šovus. Var apskatīt to sezonas un sezonu epizodes. Izmantots TVmaze API.`,
            eng: `A simple website to search for TV shows. See their seasons and all episodes. Used TVmaze API.`,
        },
        technologies: ["EJS", "Javascript", "CSS", "TVmaze API"],
        see: {
            title: {
                lv: "Apskatīt projektu iekš",
                eng: "View project on",
            },
            links: {
                web: "https://lit-shelf-87355.herokuapp.com/",
                github: "https://github.com/mart8ins/TvShows",
            },
        },
    },
];
