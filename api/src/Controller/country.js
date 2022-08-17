const axios = require('axios');
const { Op } = require('sequelize');
const { Countries, Activities } = require('../db')

async function countriesApi(){
             
            const countriesApi = await axios.get("https://restcountries.com/v3/all")
            const filterApi = countriesApi.data.map(e => {
                return {
                    id: e.cca3,
                    name: e.name.common,
                    image: e.flags[0] ? e.flags[0] : 'no hay flag',
                    continente: e.continents[0],
                    capital: e.capital ? e.capital[0] : 'No hay capital',
                    subregion: e.subregion,
                    area: e.area,
                    poblacion: e.population,
                  }
            })
              // console.log('este es el llamado a la api',filterApi)
             return await Countries.bulkCreate(filterApi)

        }

       
           
          
    const getDb = async()=>{
      try{

        const dataBase = await Countries.findAll({
         include:[ {model: Activities,
              attributes: ['name']
         }]
        })
        return dataBase
      }
      catch(err){
        console.log(err)
      }
    }


    const getAllCountries = async()=>{
      try{
        const api = await countriesApi()
        const db = await getDb()
       
        console.log('api', api)
        return [...api, ...db]
  
        
      }
      catch(err){
        console.log(err)
      }
      
    }






module.exports = { 
  countriesApi,
  getAllCountries
 };



//  async function getAllCountries(req, res){
//     const { name } = req.query;
//     try {
      
//         if (!name){
//         const countriesApi = await axios.get("https://restcountries.com/v3/all")
//         const filterApi = countriesApi.data.results.map(e => {
//             return {
//                 id: e.cca3,
//                 name: e.name.common,
//                 image: e.flag,
//                 continente: e.continents[0],
//                 capital: e.capital[0],
//                 subregión: e.subregion,
//                 area: e.area,
//                 poblacion: e.population,
//               }
//         }); 
//         console.log(filterApi)

//         filterApi.forEach(async () => {
//             await Countries.bulkCreate(filterApi)
//         });
//         //  const getApi = await Countries.findAll({include: {model: Activities}})
    

//         const getApi = await Countries.findAll({include: {model: Activities}})
//         // const concate = [...filterApi, ...getApi];
//         console.log(filterApi)
//          return res.send(filterApi);
        
        
//     }

//     else {
//         const countryName = await Countries.findAll({
//             where: { 
//                 name: {
//                     [Op.iLike]: `%${name}%` } 
//             }, include: {model: Activities}
//         })
//         return res.send(countryName);
//     } 
 
// }catch (error) {
//     res.send(error)
// }
// };