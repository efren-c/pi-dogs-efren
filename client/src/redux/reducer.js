import { GET_ALL_DOGS, GET_TEMPERAMENTS, GET_BREED, GET_DOG } from "./action-types"

const intialState = {
    dogs: [],
    temperaments: [],
    allDogs: [],
    details: [],
}

const reducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: payload,
                allDogs: payload
            }


    }
}



export default reducer