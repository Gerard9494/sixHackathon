var App = angular.module('sixHackApp', []);

App.controller('nuevaAppCtrl', ['$scope', function($scope) {

	$scope.news = [
		{
			title : "North Korea sanctions: Philippines to seize cargo ship1",
			text : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			link : "www.apio.com"
		}
	];

	console.log($scope.news);

	/*$http.get('http://localhost:8080/user/56c849f20e0a9de465f80695/jobs').then(function(res) {
		// do stuff
		//$scope.offers = res;
		console.log(res.data);
	}, function(error){
		console.log('ops');
	});*/
}]);