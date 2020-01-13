const controller = require('./controller.js');
const router = require('express').Router();


router 
    .route('/')
    .get(controller.get)
    .post(controller.post)


router
    .route('/:index')           // using as a variable for delete 
    .delete(controller.delete)


module.exports = router;