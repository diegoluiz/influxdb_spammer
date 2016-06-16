var request = require("request");
var async = require("async");

var host = process.env.INFLUXDB_HOST || "127.0.0.1";
var port = process.env.INFLUXDB_PORT || "8086";
var db = process.env.INFLUXDB_DB || "mydb"
var log =  process.env.LOG_ON || false;

var sendMetrics = function(measurements){
  measurements.forEach(function(i){
    var randomNumber = Math.floor(Math.random() * (i.sd * 2 + 1)) - i.sd;
    var value = i.mean + randomNumber;
    var postBody = i.name + i.tags + ' value=' + value;

    request({
      method: 'POST',
      uri: dbUrl,
      body: postBody
    },
    function (error, response, body) {
      if (error) {
        return console.error('upload failed:', error);
      }
      if (log){
        console.log('Value posted: ', postBody, ' Response:', response.statusCode);
      }
    });
  });
}

var dbUrl = "http://"+host+":"+port+"/write?db="+db;

var measurements = [
   { name: "cpu", mean: 100, sd: 10, tags: ',datacenter=e1,host=server01', }
  ,{ name: "memory", mean: 1024, sd: 256, tags: ',datacenter=e1,host=server01', }
  ,{ name: "requests.received.count", mean: 10, sd: 1, tags: ',datacenter=e1,host=server01', }
];
sendMetrics(measurements)
if (log){
  console.log(" ");
}
