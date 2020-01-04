app.controller("logincontrol", function($scope,$http,$window) {
    $scope.submit= function(){
       var data = {
        username : $scope.username,
        password : $scope.password
         }
 
       $http.post('https://cargo-trailer-server.herokuapp.com/api/login', (data)).then(function (response) {
         if (response.data){
         $scope.msg = "Succesfully logged in";
         alert($scope.msg);
         console.log($scope.msg);
         console.log(response.status);
         $window.location.href = '#!/list';
      
    
         }
         
         
    })
 }
 });


