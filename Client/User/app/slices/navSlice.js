import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    oStation:null,
    dStation:null,
    ticketInformation:null,
    user:null,
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        }, 
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setOStation:(state, action) => {
            state.oStation = action.payload;
        },
        setdStation: (state, action) => {
            state.dStation = action.payload;
        },  setTicketInformation: (state, action) => {
            state.ticketInformation = action.payload;
        },setUser:(state,action) => {
            state.user=action.payload;
        }
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setOStation, setdStation, setTicketInformation, setUser } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation; 
export const selectoStation = (state) => state.nav.oStation;
export const selectdStation = (state) => state.nav.dStation;
export const selectTicketInformation = (state) => state.nav.ticketInformation;
export const selectUser = (state) => state.nav.user;
export default navSlice.reducer;    
