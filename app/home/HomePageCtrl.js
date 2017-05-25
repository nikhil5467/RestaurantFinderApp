angular.module('myapp')
	.controller('HomePageCtrl', ['$scope',
		function ($scope) {
			$scope.test = "Welcome to restaurant finder";
			$scope.model={};
			$scope.cities = [
			{
				name: 'Bangalore',
				value: 'BNG'
			},
			{
				name: 'Mumbai',
				value: 'MUM'
			}];

			$scope.localities = [
			{
				name: 'IndiraNagar',
				value: 'ING'
			},
			{
				name: 'Whitefield',
				value: 'WHF'
			}];

			$scope.onSearch = function(){
				console.log($scope.model.city);
				console.log($scope.model.locality);
			};

		}]);