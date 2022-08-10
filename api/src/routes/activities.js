const { Router } = require('express');
const router = Router();
const {Countries, Activities} = require('../db');
const {Op} = require('sequelize');


router.get('/', async (req, res) => {
  const allActivities = await Activities.findAll({ include: Countries })
  //filtro para el front que trae todas las actividades
  const filterA = allActivities.map(e => e.name.toLowerCase())
  const total = filterA.filter((item, index) => {
      return filterA.indexOf(item) === index;
  })
  res.json(total)

})

router.post('/', async (req, res, next) => {

  const {
    name, dificultad, duracion, temporada, country
  } = req.body;

  try {
      let activity = await Activities.create({ name, dificultad, duracion, temporada })
      await activity.setCountries(country)

      for (let i = 0; i < country.length; i++) {
        let tem = await Activities.findOne({
            where: {
                name: country[i]
            }
        })
        info.addTemperaments(tem)
    }
    
    res.json(info);
  } catch (error) {
      next(error)
  }

});


// router.post('/', async (req, res, next) => {
//     const { name, dificultad, duracion, temporada, country }  = req.body;
//     console.log('me llego por body',req.body);
//     if(!name ){ 
//         res.status(400).json({
//           message: 'Faltan datos'
//         })}
//     try{

//       const obj = {  name, dificultad, duracion, temporada, }
//      const newActivity = await Activities.create(obj)

//      const db = await Countries.findAll({where: {
//       name: country,
       
        
//      }})
//      console.log('aqui estamos en db',db)
//      await newActivity.setCountries(db)
//         res.json(newActivity);
    

    

     
      
         
       
       
//        }catch(error){
//            next(error);
//          }
//     })

    module.exports = router;