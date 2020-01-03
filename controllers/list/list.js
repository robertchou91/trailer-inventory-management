app.controller('listController', function($scope) {
    $scope.trailers = [
        {modelnumber: 800800, dimension: '0x0x0', year: 1991, color: 'color1', payload: '100lbs', price: '$400', manufacturer: 'China', condition: 'BAD', quantity: 1},
        {modelnumber: 812812, dimension: '1x1x1', year: 1993, color: 'color2', payload: '200lbs', price: '$300', manufacturer: 'Japan', condition: 'GOOD', quantity: 5},
        {modelnumber: 833833, dimension: '2x2x2', year: 1899, color: 'color3', payload: '500lbs', price: '$400', manufacturer: 'Mexico', condition: 'OK', quantity: 10},
        {modelnumber: 844844, dimension: '3x3x3', year: 2009, color: 'color4', payload: '300lbs', price: '$550', manufacturer: 'Mexico', condition: 'GOOD', quantity: 12},
        {modelnumber: 855855, dimension: '4x4x4', year: 2019, color: 'color5', payload: '200lbs', price: '$300', manufacturer: 'USA', condition: 'BAD', quantity: 7},
    ];
});