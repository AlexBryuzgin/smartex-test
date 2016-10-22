(function(){
	angular
		.module('app')
		.controller('MainPageController', MainPageController);

	MainPageController.$inject = ['$scope', 'restService', 'localStorageService'];
	function MainPageController($scope, restService, localStorageService){
		var vm = this;

		vm.users = [];
		restService.getData()
		.$promise
		.then(function(response){
			vm.users = response;
			console.log(vm.users);
		})
		vm.user = {};
		vm.showflag = false;
		vm.goto = function(id){
			vm.showflag = true;
			localStorageService.set('userId', id);
			vm.user = vm.users[id - 1];
			console.log(vm.user)
		}
		vm.closePopup = function(){
			vm.showflag = false;
			localStorageService.clearAll();
		}
		vm.prevent = function(event){
			event.preventDefault();
		}
	}
}());