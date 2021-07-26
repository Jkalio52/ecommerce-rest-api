// API endpoints that will be used in retrieving data from your database
// Set up order endpoints
const express = require('express');
const router = express.Router();

const OrderService = require('../services/OrderService');
const OrderServiceInstance = new OrderService();


// Add the logic for handling CRUD operations related to orders.
/*
Users need to be able to see the orders they’ve placed in the past. This requires that you allow users the ability to access their order history as well as the details of specific orders.
*/
module.exports = (app) => {
   app.use('/orders', router);

   router.get('/', async (req, res, next) => {
      try {
         const { id } = req.user;
         const response = await OrderServiceInstance.list(id);

         res.status(200).send(response);
      } catch(err) {
         next(err);
      }
   });


  router.get('/:orderId', async (req, res, next) => {
     try {
        const { orderId } = req.params;
        const response = await OrderServiceInstance.findById(orderId);

        res.status(200).send(response);
      } catch(err) {
         next(err);
      }
   });
}
