/**
 * Created by Administrator on 2016/4/11.
 */

var app=angular.module("phonecatControllers",[]);
app.controller("PhoneListCtrl",['$scope','Phone',function($scope,Phone){

   // $http.get('phones/phones.json').success(function(data){
   //    $scope.phones=data;
   //});
    $scope.phones=Phone.query();
    $scope.orderPop='age';
}]);

app.controller('PhoneDetailCtrl',['$scope','$routeParams','Phone',
    function($scope,$routeParams,Phone) {
        //$scope.phoneId=$routeParams.phoneId;
        // $http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
        //     $scope.phone=data;
        //     $scope.mainImageUrl=data.images[0];
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }

    }]);

