var App = angular.module('sixHackApp', []);

App.controller('nuevaAppCtrl', ['$scope', function($scope) {
/*
	$scope.news = [
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship1",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
		},
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship2",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
		},
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship3",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
		},
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship4",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
		},
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship5",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
		},
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship6",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
		},
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship7",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
		}
	];*/
	$scope.news = [
		{
			"title" : "North Korea sanctions: Philippines to seize cargo ship1",
			"text" : "The Philippines says it has seized a North Korean ship in line with tightened UN sanctions targeting the country's nuclear programme.",
			"link" : "www.apio.com"
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