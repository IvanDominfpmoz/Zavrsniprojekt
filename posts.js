const express = require('express');
const mongodb = require('mongodb');
const router = express.Router(); // router je komponenta express-a koja sluzi za određivanje rute prema komponentama 



//Get Posts
router.get('/', async (req, res) =>{
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
})


//Add posts
router.post('/', async(req, res) =>{
  const posts = await loadPostsCollection();
  await posts.insertOne({ //insert one
    apparel: req.body, //req.body je podatak koji dobiva kad odradi request i smjesta ga u apparel
    createdAt:new Date() // datum
  });
  res.status(201).send();//salje signal 201 posiljaocu kao potvrda da je sve proslo ok
})

//Delete Post
router.delete('/:id', async (req, res)=>{ // sve ove dalje funkcije su iste, samo se mijenja request to su GET, POST, DELETE
  const posts = await loadPostsCollection();
  await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
  res.status(200).send()
})

//Functions
async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://testfanshop:testfanshop123@cluster0.kpvhlnr.mongodb.net/test', { // adresa kolekcije
    useNewUrlParser: true
  });

  return client.db('Cluster0').collection('posts')// vraca put do posts kolekcije
}

module.exports = router
