(function() {
    var app = angular.module('piggottApp', ['ngSanitize']);

    app.controller('PortfolioController', function(){
        this.projects = portfolio;
        this.teaching = presentations;
        this.showingOverlay = false;
        this.viewedProject = this.projects[0];

        this.toggleOverlay = function(itemType, index){
            if(this.showingOverlay){
                $("#infoOverlay").hide("slide", { direction: "down" }, 500);
                $(".section").fadeIn(600);
                this.showingOverlay = false;
            }
            else{
                $(".section").fadeOut(300);
                if(itemType == "presentation")
                    this.viewedProject = this.teaching[index];
                else
                    this.viewedProject = this.projects[index];
                $("#infoOverlay").show("slide", { direction: "down" }, 500);
                this.showingOverlay = true;
            }
        };
    });

    var portfolio = [
    {
        id: "galeRedesign",
        title: 'gale.com redesign',
        workType: "website",
        inProgress: true,
        roles: "research | design",
        thumbnail: "images/portfolioImages/thumbnails/galeThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "hello"
    }, {
        id: "galeResearcher",
        title: 'gale researcher',
        workType: "web app",
        inProgress: false,
        roles: "research | design",
        thumbnail: "images/portfolioImages/thumbnails/galeResearcherThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "Gale Researcher is a new product that's launching intended to help first and second year university students to succeed in some of their larger lecture classes. Instead of dropping them into a huge database of articles, this product organizes relevant primary and secondary sources to help students write better papers with stronger, quality sources. <p/>For this project, my primary role was research. I interviewed students about their research and paper writing habits. From, there, I helped write 20 different personas capturing the many different types of student we had talked with. Then, we mapped and prioritized these personas with the business. I then helped perform design assessments once we had designs to better understand how well our prototype worked and where we could make improvements."
    }, {
        id: "foreignLands",
        title: 'foreign lands',
        workType: "android app",
        inProgress: false,
        roles: "design | development",
        thumbnail: "images/portfolioImages/thumbnails/foreignLandsThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "Foreign Lands was born out of a need to help travelers adapt to their locations. Switching to a new measurement system, currency, and timezone can be difficult and this app aims to help with the most common conversions for speed, distance, etc. I designed and developed this app as a personal project allowing me to keep up with the latest Android design langugage."
    }, {
        id: "vidaTalk",
        title: 'vidatalk',
        workType: "ios app",
        inProgress: false,
        roles: "research | design",
        thumbnail: "images/portfolioImages/thumbnails/vidaTalkThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "Vidatalk is an iPad app that was developed to support those in the hospital that couldn't speak for themselves. As part of the research team, I interviewed and observed nurses, doctors, and patients in serious condition (such as the emergency room) with inhibited speech. This helped inform what the most important responses were and the easiest ways for nurses, doctors, and family to interact with patients. With research in hand, I helped design a simple interface that put the most common responses up front. For more, head over <a href='http://www.vidatak.com/vidatalk.html'>here</a>."
    }, {
        id: "eTechnician",
        title: 'eTechnician HD',
        workType: "Windows 10, 8, 7",
        inProgress: false,
        roles: "research | design",
        thumbnail: "images/portfolioImages/thumbnails/eTechnicianThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: ""
    }, {
        id: "cosmosMLP",
        title: 'Cosmos MLP',
        workType: "windows phone app suite",
        inProgress: false,
        roles: "research | design | development",
        thumbnail: "images/portfolioImages/thumbnails/myDeskThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "The Cosmos Mobile Learning Platform (now the Intergalactic Mobile Learning Center) is a set of Windows Phone apps used by 3rd graders in Singapore that originated from a class of mine at the University of Michigan. The myDesk app is a container around 6 separate apps (SketchIt, Recorder, MapIt, KWL, NotePad, Blurb), and messageBoard is a standalone app for communicating with classmates. These apps were deeply integrated into the curriculum so that their use supported, rather than directed, their learning. I designed SketchIt, Recorder, and messageBoard. See the apps in the Windows Phone Store here: <a href='http://www.windowsphone.com/en-us/store/app/mydesk/5f57dc71-3905-49e1-8144-fa840cf78a4b'>mydesk</a> and <a href='http://www.windowsphone.com/en-in/store/app/messageboard/7d2755b0-a26d-4293-ac2b-4b257c5a77ea'>messageboard</a>"
    }
    ];

  var presentations = [
    {
        id: "pairing",
        title: 'the power of promiscuous pairing',
        location: "agile & beyond 2014",
        thumbnail: "images/portfolioImages/thumbnails/powerThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "This workshop takes a short time to introduce pairing and then gets right into the activity: pairing promiscuously! The activity has people work as a pair and then re-pair and re-pair again as they build on previous work. This intent is to show people that working with others, quickly and creatively, can help make work more fun and more productive. See the presentation <a href='downloads/The_Power_of_Promiscuous_Pairing.pptx'>here</a>."
    }, {
        id: "scenarios",
        title: 'strength in scenarios',
        location: "agile 2013",
        thumbnail: "images/portfolioImages/thumbnails/strengthThumbnail.png",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "This presentation helps demonstrate the importance of using a realistic scenario when assessing designs. Using scenarios (workflow-based stories that provide a framework for getting user feedback) allows the user to give more honest, relevant feedback more closely related to the work they do on an everyday basis. See the full description <a href='http://sched.co/11SUAHC'>here</a> and see the presentation <a href='downloads/Strength_in_Scenarios.pdf'>here</a>."
    }, {
        id: "menloWay",
        title: 'agile & design thinking',
        location: "menlo innovations",
        thumbnail: "images/portfolioImages/thumbnails/menloThumbnail.png",
        hasSource: true,
        source: "@menloinnovation",
        sourceLink: "https://twitter.com/menloinnovation/status/644935756025217024",
        banner: "",
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        description: "As part of Menlo Innovations, I have been able to connect with and teach many companies our best practices when it comes to design, agile, and corporate culture. This has allowed me to experience a whole new world when it comes to organizational change; from large corporations diving into agile to small companies getting their first taste of user centric practices. Here's a link to the course description: <a href='http://menloinnovations.com/by-visiting/high-tech-anthropology'>High-Tech Anthropology&reg;</a>"
    }
    ];

})();
