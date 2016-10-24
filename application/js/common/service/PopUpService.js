(function(){
	angular
		.module('app')
		.service('popUpService', popUpService);

	popUpService.$inject = [];
	function popUpService(){
		this.set = setData;
		this.get = getData;

		var data = {};
		function setData(newData){
			data = newData;
		}
		function getData(){
			return data;
		}
	}	
}());