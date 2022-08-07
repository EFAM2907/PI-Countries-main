import { 
    GET_COUNTRIES,
      GET_COUNTRY_DETAIL,
      FILTRAR_POR_CONTINENTE,
      BY_NAME,
      BY_ODER,
      ASC,
      DESC,
      PASC,
      PDESC
} from '../action/namesAction'

const initialState = {
    countries: [],
    countryDetail: [],
   countryFilter: [],
  };
  
   const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES: {
        return {
          ...state,
          countries: action.payload,
          countryFilter: action.payload
        };
    }
      case GET_COUNTRY_DETAIL: {
        return {
          ...state,
          countryDetail: action.payload,
        };
    }
    case FILTRAR_POR_CONTINENTE:{

      console.log('action', action.payload);

      console.log('estamos en estado countries', state.countries)
    const paises = state.countryFilter;
    const filtrar = action.payload === 'All' ? paises : paises.filter(i => i.continente == action.payload);
        return {
            ...state,
            countries: filtrar
            // state.countries.filter(i => i.continente?.includes(action.payload)),
  }}
  case BY_NAME:{
    return {
      ...state,
      countries: action.payload,

    }}

    case ASC:{
      return {
        ...state,
        countries: state.countries.slice().sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }}
    case DESC:{
     return{
        ...state,
        countries: state.countries.slice().sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
     }}
      case PDESC:{
        return {
          ...state,
          countries: state.countries.slice().sort((a,b) => (a.poblacion > b.poblacion) ? 1 : ((b.poblacion > a.poblacion) ? -1 : 0))
    
        }}
        case PASC:{
          return{
            ...state,
            countries: state.countries.slice().sort((a,b) => (a.poblacion < b.poblacion) ? 1 : ((b.poblacion < a.poblacion) ? -1 : 0))
          }
        }
    
    
  
      default:
        return state;

}
   }

export default rootReducer;
//   case BY_ODER:{
  
//     const orderCountries = action.payload === 'Asc'?
//     state.countries.sort(function (a, b) {
//       if(a.name > b.name) {
//         return 1;
//       }
//       if(b.name < a.name) {
//         return -1;
//       }
//       return 0;
// }) : state.countries.slice().sort(function (a, b) {
//       if(a.name > b.name) {
//         return -1;
//       }
//       if(b.name < a.name) {
//         return 1;
//       }
//       return 0;
// })
// return {
//   ...state,
//   countries: orderCountries,
// }
//   }
