import { createSlice } from '@reduxjs/toolkit'

export const recordsToDisplay = 20

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    startRecords: 0,
    endRecords: 20,
    currentPage: 1,
  },
  reducers: {
    nextPage: (state) => {
      state.startRecords = state.startRecords + recordsToDisplay
      state.endRecords = state.endRecords + recordsToDisplay
      state.currentPage = state.currentPage + 1
    },
    previousPage: (state) => {
      state.startRecords = state.startRecords - recordsToDisplay
      state.endRecords = state.endRecords - recordsToDisplay
      state.currentPage = state.currentPage - 1
    },
    lastPage: (state, action) => {
      state.startRecords = action.payload.startLastRecords
      state.endRecords = action.payload.numberOfRecords
      state.currentPage = action.payload.lastPageNumber
    },
    firstPage: (state) => {
      state.startRecords = 0
      state.endRecords = recordsToDisplay
      state.currentPage = 1
    },
  },
})

export const { nextPage, previousPage, lastPage, firstPage } = paginationSlice.actions
export const paginationState = (state) => state.pagination

export default paginationSlice.reducer
