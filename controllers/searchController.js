const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.search = catchAsync(async (req, res) => {
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        const results = await User.find({username: regex})
    
       res.status(200).json({
        status: 'success',
        data: {
            results
        }
    })
 }
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}



/* working fxn
exports.search = catchAsync(async (req, res) => {

    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        const results = await User.find({username: regex})
    
       res.status(200).json({
        status: 'success',
        data: {
            results
        }
    })
 }
});
*/

/*
    const firstLetter = req.query.search.charAt(0);
        
        const firstRegex = new RegExp(escapeRegex(firstLetter), 'gi');
*/