const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ sucess: true, msg: 'Show all bootcamp' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ sucess: true, msg: `Get bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(200).json({ sucess: true, msg: 'Create new bootcamp' });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
