const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//RUTE, ovdje se hvata kolekcija
router.post('/', async(req, res) =>{
  const posts = await loadUserCollection(); // kolekcija
  await posts.insertOne({
    user: req.body,
    createdAt:new Date()
  });
  res.status(201).send();
})

//Get User Collection
router.get('/', async (req, res) =>{
  const posts = await loadUserCollection();
  res.send(await posts.find({}).toArray());
})



//Functions
async function loadUserCollection() { //kolekcija
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://testfanshop:testfanshop123@cluster0.kpvhlnr.mongodb.net/test', { // adresa kolekcije
    useNewUrlParser: true
  });

  return client.db('Cluster0').collection('auth') // vraca se kolekcija koju hocemo da koristmo ovdje
}

module.exports = router
