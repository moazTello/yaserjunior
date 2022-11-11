const Sequelize=require('sequelize');

const con=new Sequelize('juniorDB','root','',{dialect:'mysql',host:'localhost'});

module.exports=con;