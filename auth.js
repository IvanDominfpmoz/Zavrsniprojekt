const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//RUTE, ovde havata kolekciju
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

  return client.db('Cluster0').collection('auth') // vracas koju kolekciju hoces da koristis ovde
}

module.exports = router