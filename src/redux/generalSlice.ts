import { createSlice } from "@reduxjs/toolkit"
import { GlobalStateType } from './index'

export interface GeneralStateType {
    locations: LocationMapType
}

export interface LocationMapType {
    [x:number]: LocationType
}

export interface LocationType {
    id: number
    city: string
    country: string
    state: string
}

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        locations: [] as LocationType[]
    },
    reducers: {
        setLocations(state: GeneralStateType, { payload }: { payload: LocationType[] }) {
            state.locations = payload
        }
    }
})

export const {
    setLocations
} = generalSlice.actions

export const locationsSelector = (state: GlobalStateType) => state.general.locations
export default generalSlice
