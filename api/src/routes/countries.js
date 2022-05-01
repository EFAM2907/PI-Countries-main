 const { Router } = require('express');

 const {Countries, Activities} = require('../db');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');


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

router.get('/:id', async(req, res, next) => {
    try{
        const {id} = req.params;

        const country = await Countries.findByPk(id, {
            include: [{ model: Activities  }]});
            
          country ? res.json(country) : res.status(404).json({
            message: 'No se encontro el pais'});
                
    }catch (error) {
        next(error);
    }
});


// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

module.exports = router;



