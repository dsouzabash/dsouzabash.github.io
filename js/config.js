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
	metrics: 	  ["instances","orders"],
	elements:	  [["page","referringDomain","linkExit","geoCity"],["geoDMA","searchEngine"]],
	displayName: [["Page Views","Referring Domain","Exit Links","Page Views by City"],["Geo Demographic Map Area","Search Engine"]],
	//metrics: 	  "instances",
	//elements:	  "page",
	method: 	  'Report.Run',
	interval: 	  '30000',
	screenUpdate: '10000'
};