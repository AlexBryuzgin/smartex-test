(function(){
	angular
		.module('app')
		.service('restService', restService);

	restService.$inject = ['$resource'];
	function restService($resource){
		this.getData = getData;
		function getData(){
			return ApiData().getData();
		};
		var ApiData = function(){
			return $resource('',{},{
				getData:{
					method: 'GET',
					url: 'http://jsonplaceholder.typicode.com/users',
					isArray: true
				}
			})
		}
	}
}());