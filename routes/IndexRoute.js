const express=require('express');
const customerUIroute=require('./customer/customerUIRoute');
const companyUIroute=require('./company/companyUIRoute');
const driverUIroute=require('./driver/driverUIRoutes');

const router=express.Router();

router.use('/companyUI',companyUIroute);
router.use('/customerUI',customerUIroute);
router.use('/driverUI',driverUIroute);

module.exports=router;