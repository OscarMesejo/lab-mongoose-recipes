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
      "title": "Chocolate Chip Cookies",
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

  // .then(() => {
  //   return Recipe.insertMany(data)

  //   data.array.forEach(title => {
  //     console.log(title)
  //   });

  // })


  .then(() => {
    return Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
    console.log('success message!');
  })

  // .then(() => {
  //   return Recipe.deleteOne(
  //     {
  //       "title": "Carrot Cake",
  //       "level": "Amateur Chef",
  //       "ingredients": [
  //         "6 cups grated carrots",
  //         "1 cup brown sugar",
  //         "1 cup raisins",
  //         "4 eggs",
  //         "1 1/2 cups white sugar",
  //         "1 cup vegetable oil",
  //         "2 teaspoons vanilla extract",
  //         "1 cup crushed pineapple, drained",
  //         "3 cups all-purpose flour",
  //         "1 1/2 teaspoons baking soda",
  //         "1 teaspoon salt",
  //         "4 teaspoons ground cinnamon"
  //       ],
  //       "cuisine": "International",
  //       "dishType": "dessert",
  //       "image": "https://images.media-allrecipes.com/userphotos/720x405/3605684.jpg",
  //       "duration": 130,
  //       "creator": "Chef Nadia"
  //     }
  //   )
      // console.log('success message!');
  // })

  // mongoose.connection.close


  // .catch(error => {
  //   console.error('Error connecting to the database', error);
  // });
