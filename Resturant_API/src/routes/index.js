import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import resturant from '../controller/resturant';
let router =express();
initializeDb(db => {

  router.use(middleware({config,db}));
  router.use('/resturant',resturant({config,db}));
} );
export default router;
