const axios = require('axios');
const { Op } = require('sequelize');
const { Countries, Activities } = require('../db')

async function getAllCountries(){
       
      
          
             
            const countriesApi = await axios.get("https://restcountries.com/v3/all")
            const filterApi = countriesApi.data.map(e => {
                return {
                    id: e.cca3,
                    name: e.name.common,
                    image: e.flags[0] ? e.flags[0] : 'no hay flag',
                    continente: e.continents,
                    capital: e.capital ? e.capital : 'No hay capital',
                    subregion: e.subregion,
                    area: e.area,
                    poblacion: e.population,
                  }
            })
              // console.log(filterApi)
             return await Countries.bulkCreate(filterApi)

        }
           
          



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


module.exports = { getAllCountries };