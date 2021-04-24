const catchAsync = require('../utils/catchAsync');

//get one by id
exports.getOneById = (Model, populateOpts) => 
    catchAsync(async (req, res) => { 

        let query = await Model.findById(req.params.id);
        if(populateOpts) query = query.populate(populateOpts).execPopulate(); 

        const doc = await query; 
    
    res.status(200).json({
        status: 'success',
        data: {
            doc
        }
    }); 
});

//get one (generic)
exports.getOne = (Model, populateOpts) => catchAsync(async (req, res) => {
    console.log(req.body);
    let query = await Model.findOne(req.body);
    if(populateOpts) query = query.populate(populateOpts).execPopulate(); 

    const doc = await query;
    res.status(200).json({
        status: 'success',
        data: {
            doc
        }  
    }); 
});
 

//get many (generic)
exports.find = (Model, populate, opts) => catchAsync(async(req, res) => {
    let docs; 
    let popOpts = { _id: 0 };

    if(opts) {
        popOpts = JSON.parse(opts);
    }

    if(populate) {
        docs = await Model.find(req.body).populate(populate, popOpts); 
    } else {
        docs = await Model.find(req.body);
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            docs
        }
    })  
});

//get all 
exports.getAll = (Model, filter) => catchAsync(async(req, res) => {
    let docs = await Model.find(filter);
    res.status(200).json({
        status: 'success',
        docs
    });
});

//create one
exports.create = (Model) => catchAsync(async(req, res) => { 
    const doc = await Model.create(req.body); 
    res.status(201).json({
        status: 'success',
        data: {
            doc
        }
    })
});

//upsert one 
exports.upsert = (Model) => catchAsync(async(req, res) => {
    const doc = await Model.findOneAndUpdate(
        req.filter, 
        req.body, 
        {
            upsert: true,
            new: true
        }); 
        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        })
})
 
//update one 
exports.updateOne = (Model) => catchAsync(async(req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
 
    res.status(200).json({
        status: 'success', 
        data: {
            doc
        }
    })   
});

//push one 
exports.pushOne = (Model) => catchAsync(async(req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, 
        { $push: req.body }, 
        {  new: true });
 
    res.status(200).json({
        status: 'success',
        data: {
            doc
        }
    });   
});
 
//add to set 
exports.addToSet = (Model) => catchAsync(async(req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, 
       { $addToSet: req.body },
       {  new: true });

       res.status(200).json({
        status: 'success',
        data: {
            doc
        }
    }) 
})


//delete one by id 
exports.deleteOne = (Model) => catchAsync(async(req, res) => {
    await Model.findByIdAndDelete(req.params.id); 
    res.status(204).json({
        status: 'deleted',
        data: null
    })
});


//delete all
exports.deleteMany = (Model) => catchAsync(async(req, res) => {
    console.log(req.body);

    await Model.deleteMany(req.body); 

    res.status(204).json({
        status: 'deleted',
        data: null 
    });
});

//paginate
exports.paginate = (Model) => catchAsync(async(req, res) => {
    const docs = await Model.paginate({ house: req.params.houseId, room: req.params.room }, 
                                    { offset: req.query.offset, limit: req.query.limit });
    res.status(200).json({
        status: 'success',
        data: { docs }
    });
});
