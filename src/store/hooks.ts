import {createSlice, createAsyncThunk, createReducer, createAction, PayloadAction} from '@reduxjs/toolkit';
import {Filter, Tickets} from "../avia-tickets-types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface ReducerInitialState {
    tickets: Tickets[],
    filters: Filter[]
}

const initialState: ReducerInitialState = {
    tickets: [] as Tickets[],
    filters: [
        {label: "Все", done: false, id: 1},
        {label: "Без пересадок ", done: false, id: 2},
        {label: "1 пересадка", done: false, id: 3},
        {label: "2 пересадки", done: false, id: 4},
        {label: "3 пересадки", done: false, id: 5}

    ],
}

export const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        updateList(state, action: PayloadAction<Tickets[]>) {
            state.tickets = state.tickets.concat(action.payload)
        },
        onClick(state,action: PayloadAction<Filter>){
            let filter=action.payload
            const checkedItem=()=>{
                if(!!state.filters.find(filter =>filter.id === 1 && filter.done)){
                    state.filters= state.filters.map(filter =>{
                        filter.done = true
                        return filter
                    })
                }else if(state.filters.filter(filter=>filter.done).length === 4 ){
                    state.filters=state.filters.map(filter =>{
                        filter.done = false
                        return filter
                    })
                }
            }
            state.filters=state.filters.map(value => {
                if (value.id === filter.id) {
                    value.done = !filter.done
                }
                return value
            })
            if(filter.id===1){
                checkedItem()
            }
            state.filters[0].done = state.filters.filter(filter => filter.id != 1 && filter.done).length === 4;
        }
    }
})

export default ticketSlice.reducer
