(function () {



    const app = angular.module("store", []);
    app.controller('StoreController', function () {
        this.items = gem;

    });
    app.controller('GalleryController', function () {
        this.current = 0;
        this.setCurrent = function (setCurrent) {
            this.current = setCurrent || 0;

        };
    });

    app.controller('PanelController', function () {
        this.tab = 1;


        this.isSet = function (checkTab) {
            return this.tab === checkTab;
        };

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
    });

    app.controller('ReviewController', function () {
     this.review = {};
     this.addReview = function(item) {
         item.reviews.push(this.review);
         this.review = {};

     };
    });


    let gem = [{

            name: 'Hexagon',
            price: 5.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: false,
            image: [
                'assets/imgs/gem-01.gif',
                'assets/imgs/gem-02.gif'
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this gem! Soooooo SPARKLY!!!",
                    author: "shinyLover@gemworld.com"

                },

                {
                    stars: 4,
                    body: "I love this gem but TOO SPARKLY!!!",
                    author: "kindaLikeShiny@gemworld.com"

                },

                {
                    stars: 3,
                    body: " It's ok but too expensive",
                    author: "mrFrugal@gemworld.com"

                }
            ]
        },

        {
            name: 'Octogon',
            price: 15.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: false,
            reviews: []
        },

        {
            name: 'Pentagon',
            price: 25.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: true,
            reviews: []
        },

        {
            name: 'Dodecahedron',
            price: 35.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: true,
            reviews: []
        }
    ]
})();