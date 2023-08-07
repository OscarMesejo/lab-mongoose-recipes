const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://oscarmesejo:tr4z5b3d@cluster0.mhgyzrr.mongodb.net/';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })

  .then(() => {

    return Recipe.create({
      "title": "Chocolate Chip Obsessed Cookies",
      "level": "Amateur Chef",
      "ingredients": [
        "1/2 cup light brown sugar",
        "1 large egg",
        "2 tablespoons milk",
        "1 1/4 teaspoons vanilla extract",
        "2 cups semisweet chocolate chips"
      ],
      "cuisine": "French",
      "dishType": "dessert",
      "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4398987.jpg&w=596&h=399.32000000000005&c=sc&poi=face&q=85",
      "duration": 30,
      "creator": "Chef Jennifer"
    })
      .then(data => console.log(data.title));
  })

  //LAB Review
  .then(() => {
    return Recipe.insertMany(data)
  })
  .then((alltherecipies) => {
    alltherecipies.forEach((recipe) => {
      console.log(recipe.title)
    })
  })


  .then(() => {
    return Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 }, {new: true})
  })
  .then(updatedRecipie => console.log('Recipe updated!', updatedRecipie))

  .then(() => {
    return Recipe.deleteOne({title: 'Carrot Cake'})
  })
  .then((deleted)=> console.log('Recipe deleted!', deleted))

  .catch(error => {
    console.error('Error connecting to the database', error);
  })

  .finally(()=>{
    mongoose.connection.close(()=>{
      console.log('DB is closed!');
    })
  })
