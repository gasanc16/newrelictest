# New Relic Apdex Board - Code challenge

### Environment notes

* To start the application it is required to run:
    * npm install (install webpack and jest dependencies)
    * npm run build (compile the app)
* To retrieve the data from the json file it were implemented a httprequest, then, to avoid 'CORS policy' error it is neaded to put the application in a server or to host the json file and change the value of the path in model.js in the variable: DATA_FILE_NAME, in the develop process was used the "Live Server" extension from VS Code.

### Application notes

* The methods 'getTopAppsByHost', 'addAppToHosts' and 'removeAppFromHosts' were setted as global methods to be able to call them from the browser's console.
* For the method getTopAppsByHost it is required to add an app name as parameter
* There were not implemented any kind of data validations for 'addAppToHosts' method as there were not specified the implementation of it 
    * addAppToHosts example: addAppToHosts('Some Application', ['Mr Developer', 'Lord Developer'], 1, 150, ['9876.host','123456.host'] )
* 'removeAppFromHosts' method was implemented expecting the app name to be removed
    * removeAppFromHosts example: removeAppFromHosts('Some Application')
* Due to the short time, there were implemented just a few test (and not in a deep way) from model module as acknowledge of the importance of testing.