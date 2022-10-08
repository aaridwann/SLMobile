import { createContext, useEffect, useReducer } from "react";
import GetLocation from "../../Utils/GetLocation";

export const LocationContext = createContext()

export default function LocationProvider({ children }) {
    const [stateLocation, dispatchLocation] = useReducer(LocationReudcer, initialStateLocation)
    async function Location() {
        const Location = await GetLocation()
        if (!Location.state) return dispatchLocation({ type: ActionTypeLocation.errorLocation, payload: Location.message })
        return dispatchLocation({ type: ActionTypeLocation.addLocation, payload: Location.data })
    }

    useEffect(() => {
        Location()
    }, [])

    return (
        <LocationContext.Provider value={{ stateLocation, dispatchLocation }}>
            {children}
        </LocationContext.Provider>
    )
}


const ActionTypeLocation = {
    addLocation: 'ADD_LOCATION',
    errorLocation: 'ERROR_LOCATION',
}

const initialStateLocation = {
    state: false,
    loading: true,
    error: false,
    message: '',
    location: null
}

function LocationReudcer(state, action) {
    const { payload } = action
    switch (action.type) {
        case ActionTypeLocation.addLocation:
            return ({ ...state, loading: false, state: true, location: payload })
        case ActionTypeLocation.errorLocation:
            return ({ ...state, loading: false, state: false, location: null, error: true, message: payload })
        default:
            return state
    }
}