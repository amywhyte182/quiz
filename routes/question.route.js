const express = require('express');
const app = express();
const questionRoute = express.Router();

// Question model
let Question = require('../models/question');
const question = require('../models/question');

// Get All questions
questionRoute.route('/').get((req, res) => {
    question.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
        })
    })

    // Get single question
    questionRoute.route('/read/:id').get((req, res) => {
        Question.findById(req.params.id, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    
    questionRoute.route('/num/:num').get((req, res) => {
        Question.find({num: req.params.num}, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data) }
            })
        })

	
	// Update Question
questionRoute.route('/update/:id').put((req, res, next) => {
  Room.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

questionRoute.route('/updatebynum/:num').put((req, res, next) => {
  Question.findOneAndUpdate({num: req.params.num}, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})


/*

=============================potential login code========================

  app.route('/login')
    // show the form (GET http://localhost:PORT/login)
    .get(function(req, res) { 
      var output = 'registering! ';
      var username = req.query['username'];
      var password = req.query['password'];
      if (typeof username != 'undefined' && typeof password != 'undefined') {
        output+=('There was input: ' + username + ' and ' + password);
        res.send(output);
        console.log('Start database');

        MongoClient.connect(uri, function (err, db) {
            if(err) throw err;
            //Write databse Insert/Update/Query code here..
            console.log('Start the database stuff');
            var dbo = db.db("cwdb");
            var myobj = { username: username, password: password };
            dbo.collection("users").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 user inserted");
              db.close();
            });
            console.log('End the database stuff');
        });

      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin' : '*'
        });
        var readStream = fs.createReadStream(__dirname + '/userInput.html');
        // send a message
        readStream.pipe(res);
      }
    })
    // process the form (POST http://localhost:/login)
    .post(function(req, res) {
      console.log('from post something');
      var output = 'processing the login form... ';
      var username = req.query.username;
      var password = req.query.password;
      console.log('The params:'+ req.query.username + " " + req.query.password);
      if (typeof username != 'undefined' && typeof password != 'undefined') {
        output+=('There was input: ' + username + ' and ' + password);
      } else {
        output += 'No input?'
      }
      /// To do....database stuff
      res.send(output);
  });
});
*/

        module.exports = questionRoute;