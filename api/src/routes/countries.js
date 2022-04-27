 const { Router } = require('express');

 const {Countries, Activities} = require('../db');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
const {getAllCountries} = require('../controladores/country.js');

 const router = Router();

router.get('/', async(req, res, next) => {
     try{
         const {name} = req.query;
         const countries =  await Countries.findAll();
         if(!name){
             res.json(countries);
         }else{
                const filter = countries.filter(country => country.name.toLowerCase().includes(name.toString().toLowerCase()));
                res.json(filter);
            }




     }catch (error) {
         next(error);
     }
});
// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

module.exports = router;



