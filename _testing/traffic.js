
var http = require("http");


var u = "http://dev.virtualearth.net/REST/V1/Routes/Driving?o=json&wp.0=2110%20Colorado%20Ave,Los%20Angeles,CA&wp.1=915%20rosemont%20ave,90026&avoid=minimizeTolls&du=mi&key=AtyXrNLra-Ltmse3ycU82taqqTZ1pC0zUgXE1gEyxcZx23gwyP52bE_s4M5phkU-";


var options = {
  host: 'dev.virtualearth.net',
  port: 80,
  path: '/REST/V1/Routes/Driving?o=json&wp.0=2110%20Colorado%20Ave,%20Los%20Angeles,%20CA&wp.1=915%20rosemont%20ave,90026&avoid=minimizeTolls&du=mi&key=AtyXrNLra-Ltmse3ycU82taqqTZ1pC0zUgXE1gEyxcZx23gwyP52bE_s4M5phkU-',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  var body = "";
  res.on('data', function (chunk) {
    // console.log('BODY: ' + chunk);
    body = body+chunk;
  });
  res.on('end', function(){
  	b = body.replace(/'/g, "\'");
  	console.log('\n\nBODY: ', b.authenticationResultCode);
  })
  // console.log('BODY: ' + body);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();


// http.get(u, function(res) {
//   console.log("Got response: " + res.statusCode);
//   //console.log(res);
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
// //     body = body+chunk;
//   });
//   die();
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });