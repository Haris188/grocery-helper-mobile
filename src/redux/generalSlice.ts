import { Dispatch, createSlice } from "@reduxjs/toolkit"
import { GlobalStateType } from './index'
import { serverRequest } from "../lib/utils"

export interface GeneralStateType {
    locations: LocationMapType
    user: UserType
}

export interface LocationMapType {
    [x: number]: LocationType
}

export interface LocationType {
    id: number
    city: string
    country: string
    state: string
}

export interface UserType {
    id: number
    first_name: string
    last_name: string
    email: string
    default_location: LocationType
    favourite_stores: number[] | null
}

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        locations: [] as LocationType[],
        user: {} as UserType
    },
    reducers: {
        setLocations(state: GeneralStateType, { payload }: { payload: LocationType[] }) {
            state.locations = payload
        },
        setUser(state: GeneralStateType, { payload }: { payload: UserType }) {
            state.user = payload
        },
    }
})

export const setupInitialState = async (dispatch: Dispatch) => {
    const initialParams = await serverRequest('GET', '/initial_params')

    console.log('initialParams', initialParams)

    dispatch(setLocations(initialParams.locations))
    dispatch(setUser(initialParams.user))
}


export const {
    setLocations,
    setUser
} = generalSlice.actions

export const locationsSelector = (state: GlobalStateType) => state.general.locations
export const userSelector = (state: GlobalStateType) => state.general.user
export default generalSlice
