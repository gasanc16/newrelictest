let model = require('./model');
let utils = require('./utils');
let view = require('./view');


// model.loadData(model.displayData.bind(model)); // REVISAR SI DEBE LLAMAR AL VIEW EN VEZ DE AL MODEL
model.loadData(view.displayData.bind(view)); // REVISAR SI DEBE LLAMAR AL VIEW EN VEZ DE AL MODEL

utils.setWindowVariables('getTopAppsByHost', model.getTopAppsByHost, model); 
utils.setWindowVariables('addAppToHosts', model.addAppToHosts, model); 
utils.setWindowVariables('removeAppFromHosts', model.removeAppFromHosts, model); 
