import mongoose from 'mongoose';
import {Router} from 'express';

import Resturant from '../model/resturant';
export default({config,db})=>{

let api=Router();
api.post('/add',(req,res)=>{
let newrest=new Resturant();
newrest.name=req.body.name;

newrest.save(err=>{if(err){res.send(err);}
res.json({message:'successful'});
});

});


api.get('/',(req,res)=>
{
Resturant.find({},(err,resturants)=>{
  if(err)
  {res.send(err);}
  res.json(resturants);

});


});
api.get('/:id',(req,res)=>
{
Resturant.findById(req.params.id,(err,resturants)=>{
  if(err)
  {res.send(err);}
  res.json(resturants);

});


});


api.put('/:id',(req,res)=>{
Resturant.findById(req.params.id,(err,resturant)=>
{
if(err)
{
  res.send(err);
}

  resturant.name=req.body.name;
  resturant.save(err=>{
if(err)
{
  res.send(err);
}
    res.json({message:"updated "});
  });
});

});

api.delete('/:id',(req,res)=>{
  Resturant.remove({_id:req.params.id},(err,rest)=>
{
  if(err){
    res.send(err);}
  res.json({message:"delete"});
});
});
return api;

}
