//@desc Get all Boot Camps
//@route GET /api/bootcamps
//@access public

exports.getBootCamps = (req, res, next) => {
    res.status(200).json({
        "success": true,
        msg: 'bootcamps'

    });
}


//@desc Get single Boot Camp
//@route GET /api/bootcamps/:id
//@access public

exports.getBootCamp = (req, res, next) => {
    res.status(200).json({
        "success": true,
        msg: `show bootcamp with ID of ${req.params.id}`,

    });
}


//@desc Create single Boot Camp
//@route POST /api/bootcamps
//@access public

exports.createBootCamp = (req, res, next) => {
    res.status(200).json({
        "success": true,
        msg: 'Created Sucessfully'
    });
}


//@desc Update single Boot Camp
//@route PUT /api/bootcamps/:id
//@access private

exports.updateBootCamp = (req, res, next) => {
    res.status(200).json({
        "success": true,
        msg: 'Updated'

    });
}



//@desc Delete single Boot Camp
//@route DELETE /api/bootcamps/:id
//@access private

exports.deleteBootCamp = (req, res, next) => {
    res.status(200).json({
        "success": true,
        msg: "Deleted"

    });
}