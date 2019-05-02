var model = require('../src/model');
var utils = require('../src/utils');
var mocks = require('./mocks/mocks');

describe('loadData()', function(){
	it('valdiate if loadJSON have been called', () => {
		utils.loadJSON = jest.fn();
		model.loadData();
		expect(utils.loadJSON).toHaveBeenCalled();
  	});
});

describe('setUpData()', function(){
	beforeAll(function(){
		model.appData = [].concat(mocks.appData);
	});

	it('Validate if hostlist and appbyhost has proper values', () => {
		model.setUpData();
		expect(model.hostList).toEqual(mocks.hostList);
		expect(model.appsByHost).toEqual(mocks.appsByHost);
  	});
});

describe('getTopAppsByHost()', function(){
	beforeAll(function(){
		model.appsByHost = mocks.appsByHost;
	});

	it('Should return expected values', () => {
		const HOST_NAME = '128406fc-0d3f.tiana.biz';
		
		let topAppByHost = model.getTopAppsByHost(HOST_NAME);
		expect(topAppByHost).toEqual(mocks.topAppByHost);
  	});
});

describe('addAppToHosts()', function(){
	beforeAll(function(){
		model.appData = [];
		model.setUpData = jest.fn();
		model.displayData = jest.fn();
	});

	it('Should add a host to the appData object, and refresh the view', () => {
		const APP_NAME = 'Some app Name';
		const APP_CONTRIBUTORS = ['Mr. Developer'];
		const APP_VERSION = 42;
		const APP_APDEX = 38;
		const APP_HOST = ['987654.fancy.host'];
		
		model.addAppToHosts(APP_NAME, APP_CONTRIBUTORS, APP_VERSION, APP_APDEX, APP_HOST);
		expect(model.appData).toEqual(mocks.addedHost);
		expect(model.setUpData).toHaveBeenCalled();
		expect(model.displayData).toHaveBeenCalled();
  	});
});

describe.only('removeAppFromHosts()', function(){
	beforeAll(function(){
		model.appData = mocks.addedHost;
		model.setUpData = jest.fn();
		model.displayData = jest.fn();
	});

	it('Should add a host to the appData object, and refresh the view', () => {
		const APP_NAME = 'Some app Name';
		
		model.removeAppFromHosts(APP_NAME);
		expect(model.appData).toEqual([]);
		expect(model.setUpData).toHaveBeenCalled();
		expect(model.displayData).toHaveBeenCalled();
  	});
});


