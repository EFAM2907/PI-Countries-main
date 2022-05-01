const { Router } = require('express');
const router = Router();
const {Countries, Activities} = require('../db');
const {Op} = require('sequelize');

router.post('/', async (req, res, next) => {
    const { name, dificultad, duracion, temporada, country }  = req.body;
    
    if(!name ){
        res.status(400).json({
          message: 'Faltan datos'
        })}
    try{

      const obj = {  name, dificultad, duracion, temporada, }
     const newActivity = await Activities.create(obj)

    //  const db = await Countries.findAll({where: {id: {
    //     [Op.in]: Array.isArray(country) ? country : [country]
        
    //  }}})
    //  await newActivity.setCountries(db)
        res.json(newActivity);
    

    

     
  res.send(newActivity);
      
         
       
       
       }catch(error){
           next(error);
         }
    })

    module.exports = router;