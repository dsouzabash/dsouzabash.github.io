/* Configuration Variables
    confg.username: Your Web Services Username. This can be found in the Admin Console
    config.secret: Your Web Services Secret. This can also be found in the Admin Console
    config.reportSuite: The report suite you want to call the data from
    config.endpoint: The endpoint you will be hitting
*/

var config = {
    username:     "ADsouza2:T-Mobile USA",
    secret:       "c121b105d38964020e46d4c915fb4687",
    reportSuite:  "tmobusprod",
    endpoint:     "api.omniture.com",
	metrics: 	  ["instances"],
	elements:	  [["geoCity","page","referringDomain","linkExit","searchEngine"]],
	displayName: [["Page Views by City","Page Views","Referring Domain","Exit Links","Search Engine"],["Geo Demographic Map Area","Search Engine"]],
	//metrics: 	  "instances",
	//elements:	  "page",
	method: 	  'Report.Run',
	interval: 	  '1000',
	screenUpdate: '1000'
};