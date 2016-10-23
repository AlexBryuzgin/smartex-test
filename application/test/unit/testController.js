describe('MainPageController', function(){
	var ctrl;
	beforeEach(module('app'));
	beforeEach(inject(function($controller){
		ctrl = $controller('MainPageController', {})
	}));
	it('Check Users', function(){
		expect(ctrl.users).toBeDefined();
		expect(ctrl.users[0].name).toBe('Leanne Graham');
		// expect(ctrl.localId).toBeDefined();
		// ctrl.goto(3);
		// expect(ctrl.localId).toBe(3);
	})
});