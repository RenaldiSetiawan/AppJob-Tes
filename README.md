# Simple APP ReactJs & NodeJs

##  How to run this code
1. Clone this repository
3. Update config.js sesuaikan user_name, user_password
4. Open command line in the cloned folder, lalu exec command berikut :
   - yarn install
   - yarn start, untuk running/debug applikasi
5. Test API di postman (http://localhost:3000/Route>expreess/server>routes)
6. Test FrontEnd client (http://localhost:3000/Route>expreess>Client-Side:ReactDOMServer/mainrouter)
   
----------------------------------------

## Nodemon supaya bisa debug gunakan : 
### edit nodemon.json
{
    "verbose": false,
    "watch": [
      "./server"
    ],
    "exec" : "babel-node ./server/server.js"
},

### untuk built-up : 

{
    "verbose": false,
    "watch": [
      "./server"
    ],
    "exec": "webpack --mode=development --config webpack.config.server.js && node ./dist/server.generated.js"
}
