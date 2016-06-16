# influxdb_spammer
Sends loads of requests to influxdb

Add the data you want to send in the *measurements* array follow the convention:
 * name: name of the measurement 
 * mean: the mean value of the measurement 
 * sd: the standard deviantion of the measurement
 * tags: if you have any tag to send (always start with ","). e.g. `,host=host1,datacenter=uk`


You can define the following variables to use in it:
 * INFLUXDB_HOST : the target host of your influxdb (default `127.0.0.1`)
 * INFLUXDB_PORT : the port of your influxdb (default `8086`)
 * INFLUXDB_DB : the database to use (default `mydb`)
 * LOG : if you want to log in the console (default `false`)

