const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    //get the data
    const categoryIdData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    //if there isn't data, due to a faulty id, throw error...
    if (!categoryIdData) {
      res.status(404).json({message: "There is no category with that ID."});
      return;
    }
    //...otherwise work
    else {
      res.status(200).json(categoryIdData);
    }
  }
  //other error
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategoryData = await Category.create({
      id: req.body.id,
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
