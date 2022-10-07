import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    status: '',
    gender: '',
  },
  reducers: {
    filterByName: (state, action) => {
      state.name = action.payload
    },
    filterByStatus: (state, action) => {
      state.status = action.payload
    },
    filterByGender: (state, action) => {
      state.gender = action.payload
    },
  },
})

export const { filterByName, filterByStatus, filterByGender } = filtersSlice.actions
export const filtersState = (state) => state.filters

export default filtersSlice.reducer
