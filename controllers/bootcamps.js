const ErrorResponse = require("../utils/errorResponse");
const Bootcamp = require("../models/bootcamps");
const asyncHandler = require('../middleware/asyn')
// const colors = require("colors");


//@desc Get all Boot Camps
//@route GET /api/bootcamps
//@access public

exports.getBootCamps = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.find();
    res.status(200).json({
        success: true,
        count: bootcamp.length,
        data: bootcamp,
    });

});

//@desc Get single Boot Camp
//@route GET /api/bootcamps/:id
//@access public

exports.getBootCamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        return next(
            new ErrorResponse(`Resource not found with the ID of ${req.params.id}`, 404)
        );

    }

    res.status(200).json({
        success: true,
        data: bootcamp,
    });

});

//@desc Create single Boot Camp
//@route POST /api/bootcamps
//@access public

exports.createBootCamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        success: true,
        data: bootcamp,
    });

});

//@desc Update single Boot Camp
//@route PUT /api/bootcamps/:id
//@access private

exports.updateBootCamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!bootcamp) {
        return next(
            new ErrorResponse(`Resource not found with the ID of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        success: true,
        data: bootcamp,
    });

});

//@desc Delete single Boot Camp
//@route DELETE /api/bootcamps/:id
//@access private

exports.deleteBootCamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        return next(
            new ErrorResponse(`Resource not found with the ID of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        success: true,
        data: {},
    });

})