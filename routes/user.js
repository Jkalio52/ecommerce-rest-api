// API endpoints that will be used in retrieving data from your database
// Set up user endpoints
const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

const UserServiceInstance = new UserService();


// Add the logic for handling CRUD operations related to users and their accounts
module.exports = (app) => {
   app.use('/users', router);

   router.get('/:userId', async (req, res, next) => {
      try {
         const { userId } = req.params;
         const response = await UserServiceInstance.get({ id: userId });

         res.status(200).send(response);
      } catch(err) {
         next(err);
      }
   });


   router.put('/:userId', async (req, res, next) => {
      try {
         const { userId } = req.params;
         const data = req.body;
         const response = await UserServiceInstance.update({ id: userId, ...data });

         res.status(200).send(response);
      } catch(err) {
         next(err);
      }
   });
}