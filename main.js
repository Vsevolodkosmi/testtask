angular.module("myApp", [])
.controller("firstCtr", function ($scope) {

    $scope.item = {}
    $scope.tempInput1 = "Annual earnings";
    $scope.tempInput="Company name";
    $scope.tasksArray=[];
    $scope.addNew = function () {
        if ($scope.tempInput) {
            $scope.tasksArray.push({ company: $scope.item.company, earnings: $scope.item.earnings });
            $scope.tempInput = "";
        } else {
            console.log('Leer');

        }}

    $scope.deleteItem = function (item) {
        var index = $scope.tasksArray.indexOf(item);
        console.log(index);
        $scope.tasksArray.splice(index, 1);

     $scope.editItem = function (item) {
            $scope.editListing = true;
            $scope.existingListing = item;


        }
    };
});