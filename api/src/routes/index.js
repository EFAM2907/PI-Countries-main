const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerCountry = require('./countries.js');

const router = Router();
const {Op} = require('sequelize');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const axios = require('axios');
const {Countries, Activities} = require('../db.js');


router.use('/countries', routerCountry);

// router.get('/getAll', async (req, res) => {

//   try{
//     const apiCountriesResponse = await axios.get('https://restcountries.com/v3/all')
//     var apiCountries = apiCountriesResponse.data.map((e) => {
//             return {
//               id: e.cca3,
//               name: e.name.common,
//               image: e.flag,
//               continent: e.continents ? e.continents[0] : 'no hay continente',
//               capital: e.capital ? e.capital[0] : 'Not hay capital',
//               subregion: e.subregion,
//               area: e.area,
//               population: e.population
//             }
    
//           })
       
//     const myBd = await Countries.findAll({include: [{model: Activities}]})
//      const concate = [...apiCountries, ...myBd];

//     res.json(concate);
//         }

//   catch(error){
//     console.log(error);
//     res.status(500).json({
//       message: 'Error al obtener los paises'
//     })
//   }

      
      
 
//     })

// router.get('/', async (req, res) => {

//      const {name} = req.query;

//       try{
//       if(!name){
//         const pais = await Countries.findAll({include: [{model: Activities}]})
//         res.json(pais);
//       }
//         else{
//           const encoPais = await Countries.findAll({ where: {
//             name: {
//               [Op.iLike]: `%${name}%`
//             },
//           }, include: [{model: Activities}]})
       
//           if(!encoPais[0]){
//             res.status(404).json({
//               message: `no se encuentra ningun Pais con el nombre , ${name}`,
//             })
//           }
//           res.json(encoPais);
//       }
//     }


      
//       catch(error){
//         console.log(error);
//         res.status(500).json({
//           message: 'Error al obtener los nombres'
//         })
//       }

// })






    router.post('/addActivity', async (req, res) => {
      const { name, dificultad, duracion, temporada,   } = req.body;
       if(!name ){
          res.status(400).json({
            message: 'Faltan datos'
          })}
      try{

        const obj = {  name, dificultad, duracion, temporada, }
       const newActivity = await Activities.create(obj)

       
    res.send(newActivity);
    
        
      
      
        }catch(error){
      console.log(error);
      res.status(500).json({
        message: 'Error al agregar actividad'
      })

        }

    })
   
        

    module.exports = router;