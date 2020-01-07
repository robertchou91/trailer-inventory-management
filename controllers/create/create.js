
app.controller("myCreate", function ($scope, $http, $window) {
   $scope.regex = '\\d+';
   //    $scope.upload = function() {
   //       var f = document.getElementById('file').files[0];
   //       var r = new FileReader();
   //       r.onloadend = function(e) {
   //           var data = e.target.result;
   //       }
   //       r.readAsBinaryString(f);
   //   }



   
   $scope.submit = function () {
      var data = {

         title: $scope.modelnum,
         image: $scope.image,
         manufacturer: $scope.manufacturer,
         price: $scope.amount,
         model: $scope.modelnum,
         capacity: $scope.payload,
         dimension: $scope.dimension,
         condition: $scope.condition,
         color: $scope.color,
         year: $scope.year,
         quantity: $scope.quantity

      }

      $http.post('https://cargo-trailer-server.herokuapp.com/api/trailers/', (data)).then(function (response) {

         if (response.data)

            $scope.msg = "Post Data Submitted Successfully!";
         console.log($scope.msg)
         console.log(response.status)
         console.log(response.data.image)
         $window.location.href = '#!/list'

      })
   }
});


