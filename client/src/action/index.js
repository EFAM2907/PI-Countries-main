import axios from 'axios';
import { 
   GET_COUNTRIES,
    GET_COUNTRIES_ERROR,
    GET_COUNTRY_DETAIL,
} from './namesAction'

export default function getCountries() {
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

export  function getCountryDetail(id) {
    return dispatch => {
        axios.get(`http://localhost:3001/countries/${id}`)
            .then(response => {
                dispatch({
                    type:  GET_COUNTRY_DETAIL,
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