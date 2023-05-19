import { DOG_DETAIL, GET_DOGS , NEXT_PAGE, PREV_PAGE, DOG_SEARCH_NAME, FILTER_PAGE, TEMPERAMENTS, FILTER_TEMPERAMENTS, CREATE_DOG} from "./action_types";
import axios from "axios"

export const getDogs = () => {
    return async function(dispatch){
        await axios.get('http://localhost:3001/dogs')
        .then(response => response.data)
        .then(data => dispatch({type: GET_DOGS, payload: data}))
    }
}

export const getDogsById = (id) => {
  return async function(dispatch){
      await axios.get(`http://localhost:3001/dogs/${id}`)
      .then(response => response.data)
      .then(data => dispatch({type: DOG_DETAIL, payload: data}))
  }
}

export const getDogsByName = (name) => {
  return async function(dispatch){
      await axios.get(`http://localhost:3001/dogs/?nombre=${name}` )
      .then(response => response.data)
      .then(data => dispatch({type: DOG_SEARCH_NAME, payload: data}))
  }
}

export const filter_page = (order) => {
  return {type: FILTER_PAGE, payload:order}
;}

export const getAllTemperament = () => {
  return async function(dispatch){
    await axios.get(`http://localhost:3001/temperament`)
    .then(response => response.data)
    .then(data => dispatch({type: TEMPERAMENTS, payload: data}))
}
}
export const filterTemp = (event) => {
  return {type: FILTER_TEMPERAMENTS, payload: event}
}
export const nextPage = ()=>{
  return {type: NEXT_PAGE }
}
export const prevPage = ()=>{
  return {type: PREV_PAGE }
}
export const createDog = form => async dispatch => {
  let dogs = await axios.post('http://localhost:3001/dogs', form);
  console.log(dogs)
  return dispatch({
    type: CREATE_DOG,
    payload: dogs
  })
  // return async function(dispatch){
  //   console.log(obj)
  //   return await axios.post(`http://localhost:3001/dogs`, form)
  //   .then(response=> response.data)
  //   .then(data=> console.log(data))
  //   .then(data=>  dispatch({type: CREATE_DOG, payload: data}))
    
  // }
}