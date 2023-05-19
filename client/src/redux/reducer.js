import { GET_DOGS, NEXT_PAGE ,PREV_PAGE, DOG_DETAIL, DOG_SEARCH_NAME, FILTER_PAGE, TEMPERAMENTS,FILTER_TEMPERAMENTS, CREATE_DOG} from "./action_types"

const initialState = {
    numPage: 1,
    allDogs:[],                
    dogs:[],
    dogDetail:[],
    temperaments: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_DOGS: 
        return {
            ...state,
            dogs: action.payload,
            allDogs: action.payload
        }

        case DOG_DETAIL: 
        return {
            ...state,
            dogDetail: action.payload
        }
        case DOG_SEARCH_NAME:
            return{
                ...state,
                dogs: action.payload
            }
        case FILTER_PAGE:
            let copy = [...state.dogs];
            copy = copy.sort((a,b)=> {
                if(String(a.nombre).toLowerCase() > String(b.nombre).toLowerCase()) return action.payload === "a" ? 1 : -1;
                if(String(a.nombre).toLowerCase() < String(b.nombre).toLowerCase()) return action.payload === "b" ? 1 : -1;
                return -1
            })
             return {...state, dogs: copy}   
              
        case TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }
        case FILTER_TEMPERAMENTS:

           const copia =  [...state.allDogs];
           
            const filtered = copia.filter((element)=> {
                const temp = String(element.temperamento);
                const resp = temp.split(", ").join(" ");
                if(action.payload === 'All'){
                    return [...state.dogs]
                }
    
                return resp.includes(action.payload)
            })
            
            return{...state, dogs: filtered}

        case CREATE_DOG: 
        return {...state}

        case NEXT_PAGE:
            return{
                ...state,
                numPage: state.numPage +1 
            }
        case PREV_PAGE:
            return{
                ...state,
                numPage: state.numPage -1
            } 
        default: 
            return {...state}
       
    }
}

export default reducer