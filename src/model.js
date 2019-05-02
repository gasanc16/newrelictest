let utils = require('./utils');
let view = require('./view');
let App = require('./appClass');

const DATA_FILE_NAME = './data/host-app-data.json';
const MAX_APPS_NUMBER = 25;

let model = {
	appData: [],
	hostList: new Set(),
	appsByHost: {},

    loadData: function(onSuccess) {
        utils.loadJSON(DATA_FILE_NAME, (response) => { 
			this.appData = JSON.parse(response); 
			this.setUpData();
			onSuccess(this.appsByHost);
        });
	},
	
	setUpData: function() {
		this.hostList = this.extractHostNames(this.appData);
		this.appsByHost = this.extractAppsByHost(this.appData, this.hostList);
	},

    getTopAppsByHost: function(hostName) {
		if (!hostName) {
			console.error('None host name has being provided');
		} 

		return this.appsByHost[hostName].slice(0, MAX_APPS_NUMBER);
	}, 

	addAppToHosts:  function(name, contributors, version, apdex, host) {
		this.appData.push(new App(name, contributors, version, apdex, host));
		this.setUpData();
		this.displayData();
	}, 

	removeAppFromHosts: function(name) {
		if (!name) {
			console.error('None host name has being provided');
		} 
		this.appData = this.appData.filter((o) => {
			return o.name.toLowerCase() !== name.toLowerCase();
		});

		this.setUpData();
		this.displayData();
	},

	extractHostNames: function(appData) {
		let hostList = new Set();
		appData.forEach(element => {
			element.host.forEach(hosts => {
				hostList.add(hosts);
			});
		});

		return hostList;
	},
	
	extractAppsByHost: function(appData, hostList) {
		let appsByHost = {};
		hostList.forEach(host => {
			appsByHost[host] = this.getAppsByHost(host, appData);
		});

		return appsByHost;
	},
	
	getAppsByHost: function(hostName, appData) {
		return appData.filter((app) => {
			return app.host.includes(hostName);
		}).sort(function(a, b){ 
			return utils.compareBy(a, b, 'apdex', true);
		});
	}
};

module.exports = model;