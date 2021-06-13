const Page = require('../models/pageModel');
const controller = require('../controllers/genericFunctionController');

exports.getAllPages = controller.getAll(Page); 
exports.getPageById = controller.getOneById(Page);
exports.getPagesByGraph = controller.find(Page, 'graph');
exports.createPage = controller.upsert(Page);
exports.getPage = controller.getOne(Page);   
exports.updatePage = controller.updateOne(Page);
exports.deleteOnePage = controller.deleteOne(Page);
exports.deleteAllPages = controller.deleteMany(Page); 


