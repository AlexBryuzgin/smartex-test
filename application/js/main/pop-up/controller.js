(function(){
	angular
		.module('app')
		.controller('PopUpController', PopUpController);

	PopUpController.$inject = ['$scope','popUpService'];
	function PopUpController($scope, popUpService){
		$scope.userData = popUpService.get();debugger;
	}
}());