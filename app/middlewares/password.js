const { stringify } = require('ini');
const passport =require('passport');
const { Strategy } = require('passport-jwt');
const { SchemaContext } = require('twilio/lib/rest/events/v1/schema');
const JwtStrategy=require('passport-jwt').Strategy;

// const jwtSecretKey =  process.env.JWT_SECRET_KEY;
// passport.use(new JwtStrategy());

const jump=(req,res)=>{
   const username=req.params.user;
   const password=req.params.password ;
}


module.exports={passport};