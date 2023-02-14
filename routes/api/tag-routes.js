const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    //get the data
    const tagIdData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    //if there isn't data, due to a faulty id, throw error...
    if (!tagIdData) {
      res.status(404).json({message: "There is no tag with that ID."});
      return;
    }
    //...otherwise work
    else {
      res.status(200).json(tagIdData);
    }
  }
  //other error
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
   // create a new category
   try {
    const newTagData = await Tag.create({
      id: req.body.id,
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdateData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagUpdateData) {
      res.status(404).json({message: "There is no tag with that ID."});
      return;
    }
    else {
      res.status(200).json({message: `Tag ${req.body.id} updated successfully.`});
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDeleteTarget = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagDeleteTarget) {
      res.status(404).json({message: "There is no tag with that ID."});
      return;
    }
    else {
      res.status(200).json({message: "The tag has been deleted."});
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
