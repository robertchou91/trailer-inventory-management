app.controller('listController', function($scope) {
    $scope.trailers = [
        {name: 'testing', dimension: '0-0-0', size: 'S', style: 'Style1', condition: 'BAD'},
        {name: 'testing1', dimension: '1-1-1', size: 'S', style: 'Style2', condition: 'GOOD'},
        {name: 'testing2', dimension: '2-2-2', size: 'S', style: 'Style3', condition: 'OK'},
        {name: 'testing3', dimension: '3-3-3', size: 'S', style: 'Style4', condition: 'GOOD'},
        {name: 'testing4', dimension: '4-4-4', size: 'S', style: 'Style5', condition: 'BAD'},
    ];
});