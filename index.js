axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())
app.use(logger('tiny'));

app.use(require('./routes'));




//http.createServer((req, res)=>{
 // res.write(users.join(", ")); //display the list of users on the page
 // res.write("\n\n"+emails.join(", ")); //display the list of users on the page
 // res.end(); //end the response
//}).listen(8000); // listen for requests on port 8000

let user = []; // names of users will be stored here
//let email = [];
(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people/");
    console.log(data.results);
    user = data.results.map(user=>user.name);
   // name = data.map(name=>name.name);
   // emails = data.map(email=>email.email);
    console.log(user);
   // console.log(emails);
  } catch(error){
    console.log(error)
  }
})();

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});


