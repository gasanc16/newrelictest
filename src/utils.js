let utils = {
	loadJSON: function(fileName, callback) {   
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', fileName, true); 
		xobj.setRequestHeader('Access-Control-Allow-Headers', 'http://localhost:8080');
		xobj.onreadystatechange = function () {
			  if (xobj.readyState == 4 && xobj.status == "200") {
				callback(xobj.responseText);
			  }
		};
		xobj.send(null);  
	},

	setWindowVariables: function(name, value, scope) {
		window[name] = value.bind(scope);
	},

	compareBy: function(a, b, key, reverse) {
		let order = reverse ? -1 : 1;
		
		if (a[key] > b[key]) {
			return 1 * order;
			} else if (a[key] < b[key]) {
			return -1 * order;
			}
		return 0;
		
	}
};

module.exports = utils;