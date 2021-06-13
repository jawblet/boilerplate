const express = require('express'); 
const router = express.Router(); 
const pageController = require('../controllers/pageController'); 
const getParams = require('../middleware/getParams');
const getQuery = require('../middleware/getQuery');
const getBody = require('../middleware/getBody');


//param middleware 
router.param('graphId', getParams.getParamsGraphId); 
router.param('slug', getParams.getParamsSlug); 

router.post('/', getBody.getFilter, pageController.createPage);   
 
//get pages by id
router
    .route('/:id')
    .get(pageController.getPageById)
    .delete(pageController.deleteOnePage); 

//get pages by graph
router.get('/graph/:graphId', 
    getQuery.getQueryParams,  
    pageController.getPagesByGraph);

router.get('/graph/:graphId/:slug', 
    pageController.getPage);

//admin
router.get('/', pageController.getAllPages);
router.delete('/', pageController.deleteAllPages); 


module.exports = router; 

//router.get('/:graphId/connections', pageController.getConnections); 
//router.put('/link/:id', pageController.updateLinked);  
//router.put('/unlink/:id', pageController.updateUnlinked);  