
(function(){
    const app = angular.module("store", []);
    app.controller('StoreController', function(){
        this.items = gem;

    });

  
    let gem = [
        {
             image: [
                'assets/imgs/gem-01.gif',
                'assets/imgs/gem-02.gif',
                'assets/imgs/gem-03.gif'
           ],
            name: 'Hexagon',
            price: 5.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: false
        },

        {
            name: 'Octogon',
            price: 15.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: false
        },

        {
            name: 'Pentagon',
            price: 25.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: true,
            
        },
        
        {
            name: 'Dodecahedron',
            price: 35.00,
            description: "Hexagonal shaped gemstone",
            canPurchase: true,
            soldOut: true
        }
    ]
})();