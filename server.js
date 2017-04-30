const express = require('express');
const bodyParser= require('body-parser');
const app=express();
express.static
app.use(express.static('public'))
app.use(bodyParser.json())
app.set('view engine','ejs')
var db
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://admin:Tnp4ydaf@ds123331.mlab.com:23331/star-wars', (err,database) =>
{

	if (err) return console.log(err)
	db=database
	app.listen(process.env.PORT || 3000,function() { console.log ('listening on 3000')})

})


//urlencoded extract vdata from form
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', function (req,res)
	{
		db.collection('quotes').find().toArray((err,result) =>
{
if(err) return console.log(err)
res.render('index.ejs',{quotes:result})

})
	})

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.post('/quotes', (req,res) =>
	 {
		console.log('You just pressed a button')
		console.log(req.body)
		db.collection('quotes').save(req.body, (err,result) => {
			if(err) return console.log(err)
			console.log("Record Added to DB")
			res.redirect('/')
		}) })
	

