const express=require("express");
const CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var fs = require('fs');
const app=express();


var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "b45e0b32-6c44-404e-90db-0cdd88b7e570"

var api = new CloudmersiveConvertApiClient.ConvertDataApi()

app.get("/input",function (req,res){

var apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

// var inputFile = fs.readFileSync("test.docx"); // {File} Input file to perform the operation on.
var inputFile =__dirname+"/test.docx"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  console.log("working");
  if (error) {
    console.error(error);
    console.log("error");
  } else {
    console.log('API called successfully. Returned data: ');
  }
};
// api.convertDataCsvToJson(Buffer.from(inputFile.buffer), callback);
apiInstance.convertDocumentAutodetectToPdf(inputFile, callback);
res.end();
});


app.get("/",function (req,res){
  res.send("ohh! hello");
});

app.listen(5000,function (){
  console.log("server is running on port:5000");
});
