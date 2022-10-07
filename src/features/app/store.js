import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../dataSlice/dataSlice'
import filtersSlice from '../filtersSlice/filtersSlice'
import paginationSlice from '../paginationSlice/paginationSlice'
import themeSlice from '../themeSlice/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    filters: filtersSlice,
    pagination: paginationSlice,
    data: dataSlice,
  },
})
