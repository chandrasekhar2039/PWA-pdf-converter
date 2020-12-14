const express=require("express");
const CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var fs = require('fs');
const app=express();
const path = require('path');


var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

app.get("/input",function (req,res){
  // Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'b45e0b32-6c44-404e-90db-0cdd88b7e570';



var apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

var inputFile = Buffer.from(fs.readFileSync("./test.docx").buffer); // File | Input file to perform the operation on.

const loc=path.resolve(__dirname,'client', 'testt.pdf');

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ');
    response.pipe(fs.createWriteStream(loc));
  }
};
apiInstance.convertDocumentAutodetectToPdf(inputFile, callback);
});


app.get("/",function (req,res){
  res.send("ohh! hello");
});

app.listen(5000,function (){
  console.log("server is running on port:5000");
});
