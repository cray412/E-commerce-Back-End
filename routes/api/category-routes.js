const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
    console.log("Get category data");
  } catch (err) {
    res.status(500).json(err);
    console.log(("Error - ", err));
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
    console.log("Get category data");
  } catch (err) {
    res.status(500).json(err);
    console.log(("Error - ", err));
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
    console.log("Added Category");
  } catch(err) {
    res.status(500).json(err);
    console.log(("Error - ", err));
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedCategoryData);
    console.log("Updated Category");
  } catch(err) {
    res.status(500).json(err);
    console.log(("Error - ", err));
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
    console.log("Deleted Category");
  } catch(err) {
    res.status(500).json(err);
    console.log(("Error - ", err));
  }
  // delete a category by its `id` value
});

module.exports = router;
