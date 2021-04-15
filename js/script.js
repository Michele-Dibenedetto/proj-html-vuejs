var app = new Vue({
    el: "#root",
    data: {
        logo: "img/logo.svg",
        openHours: "Mon - Sat - 9:00 - 18:00",
        phone: "+1 (305) 1234-5678",
        email: "hello@example.com",
        address: "Main Avenue, 987",
        navHeader: [
            {
                link: "HOME"
            },

            { 
                link: "ABOUT"
            },

            {
                link: "SERVICES"
            },

            {
                link: "PROCESS"
            },

            {
                link: "TESTIMONIALS"
            }
        ],

        navFooter: [
            {
                title: "About",
                list: ["The Company", "Istitutional", "Social & Events", "Innovation", "Environment", "Tecnhology"]
            },

            {
                title: "Transport",
                list: ["Industrialized", "Chemicals", "Packaged liquids", "Construction", "Laminated wood", "And others"]
            },

            {
                title: "Support",
                list: ["Responsibility", "Terms of use", "About cookies", "Privacy Policy", "Accessibility", "Information",]
            }
        ]
    }
})