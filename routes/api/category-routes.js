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
  try {
    const categoryUpdateData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryUpdateData) {
      res.status(404).json({message: "There is no category with that ID."});
      return;
    }
    else {
      res.status(200).json({message: `Category ${req.body.id} updated successfully.`});
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDeleteTarget = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryDeleteTarget) {
      res.status(404).json({message: "There is no category with that ID."});
      return;
    }
    else {
      res.status(200).json({message: "The category has been deleted."});
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
