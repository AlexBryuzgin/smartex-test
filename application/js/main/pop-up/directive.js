(function(){
	angular
		.module('app')
		.directive('popUp', function(){
			return {
				restrict: 'EA',
				templateUrl: '/application/js/main/pop-up/pop-up.html',
				controller: 'PopUpController'
			}
		})
}());