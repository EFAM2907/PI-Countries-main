import axios from 'axios';
import { 
   GET_COUNTRIES,
    GET_COUNTRIES_ERROR,
    GET_COUNTRY_DETAIL,
    FILTRAR_POR_CONTINENTE,
    BY_NAME,
    ASC,
    DESC,
    PASC,
    PDESC

} from './namesAction'

export  function getCountries() {
    return dispatch => {
        axios.get("http://localhost:3001/countries")
            .then(response => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_COUNTRIES_ERROR,
                    payload: err
                })
            })
    }
}

export function   getCountriesDetail(id){
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/countries/${id}`)
        dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data })
    }
}


export function filtrarPorContinente(continents) {
    return {

        type: FILTRAR_POR_CONTINENTE,
        payload:continents,

    }
}


export function getByName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/countries/?name=${name}`)
            return dispatch({
                type: BY_NAME,
                payload: res.data
            })
        }
        catch (err) {
            return dispatch({
                type: BY_NAME,
                payload: err
            })
        }
    }
}

export function sortByAsc(payload) {
    return {
        type: ASC,
        payload
    }
}

export function sortByDesc(payload) {
    return {
        type: DESC,
        payload
    }
}

export function sortByPasc(payload) {
    return{
        type: PASC,
        payload
    }}

    export function sortByPdesc(payload) {
        return{
            type: PDESC,
            payload
        }}

        export function CrearActividad(actividad) {
            return async function () {
            
                const res = await axios.post(`http://localhost:3001/activities`, actividad)

        }} 
       
