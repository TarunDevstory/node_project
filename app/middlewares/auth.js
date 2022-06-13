const express= require('express');
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');

require("dotenv").config();

const jwtSecretKey =  process.env.JWT_SECRET_KEY;
const data = {
    time:Date(),
    userId:12,
}

const token=jwt.sign(data, jwtSecretKey);



module.exports={token}