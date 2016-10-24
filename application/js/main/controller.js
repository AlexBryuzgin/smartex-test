(function(){
	angular
		.module('app')
		.controller('MainPageController', MainPageController);

	MainPageController.$inject = ['$scope', '$rootScope', 'restService', 'popUpService'];
	function MainPageController($scope, $rootScope, restService, popUpService){
		var vm = this;
		vm.localId = null;
		//get data from API
		vm.users = [];
		restService.getData()
		.$promise
		.then(function(response){
			vm.users = response;
			console.log(vm.users);
		});
		//show detalisation
		//vm.user = {};
		vm.showflag = false;
		vm.goto = function(id){
			vm.showflag = true;
			popUpService.set(vm.users[id-1]);
			// vm.user = vm.users[id-1];
			// localStorageService.set('userId', id);
			// if(localStorageService.get('userData') == undefined || localStorageService.get('userData') == null )
			// 	localStorageService.set('userData',  vm.users[id - 1]);
			// vm.user = localStorageService.get('userData');
			console.log(vm.user);
			var aaa = popUpService.get();
			
		};
		//close pop-up detalisation window
		vm.closePopup = function(){
			vm.showflag = false;
			popUpService.clear();
			// localStorageService.clearAll();
		};

		/*
		Writing the ID to local storage and watching, if it has a value
		(for opening detalisation after refreshing/closing the page)
		*/
		// vm.localId = localStorageService.get('userId');
		// $scope.$watch(function(){
		// 	return vm.localId
		// }, function(){
		// 	if(vm.localId != undefined){
		// 		console.log(vm.localId);
		// 		vm.goto(vm.localId);
		// 	};
		// });
	}
}());