const { Router } = require('express');
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerCountry = require('./countries.js');
const routerActivities = require('./activities.js');
const router = Router();
const {Op} = require('sequelize');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);





router.use('/countries', routerCountry);
router.use('/activities', routerActivities);




      
      
 





    // router.post('/addActivity', async (req, res) => {
    //   const { name, dificultad, duracion, temporada,   } = req.body;
    //    if(!name ){
    //       res.status(400).json({
    //         message: 'Faltan datos'
    //       })}
    //   try{

    //     const obj = {  name, dificultad, duracion, temporada, }
    //    const newActivity = await Activities.create(obj)
    // res.send(newActivity);
    //     }catch(error){
    //   console.log(error);
    //   res.status(500).json({
    //     message: 'Error al agregar actividad'
    //   })

    //     }

    // })
   
        

    module.exports = router;