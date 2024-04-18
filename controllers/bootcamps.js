/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('./middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({ success: true, data: bootcamps });
});

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = asyncHandler(async (req, res) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return new ErrorResponse(
      `Bootcamp not found with id of ${req.params.id}`,
      404
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return new ErrorResponse(
      `Bootcamp not found with id of ${req.params.id}`,
      404
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res) => {
  const bootcamp = Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
