import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Button } from '@mui/material'
import {
  firstPage,
  lastPage,
  nextPage,
  paginationState,
  previousPage,
  recordsToDisplay,
} from '../../../../../features/paginationSlice/paginationSlice'
import './Pagination.scss'
import { useDispatch, useSelector } from 'react-redux'

function Pagination({ numberOfRecords }) {
  const { currentPage } = useSelector(paginationState)
  const dispatch = useDispatch()
  const numberOfPages = numberOfRecords / recordsToDisplay
  const firstPageNumber = 1
  const lastPageNumber = Math.ceil(numberOfPages)
  const lastRecordsPage = Math.floor(numberOfPages)
  const startLastRecords = lastRecordsPage * recordsToDisplay

  const handleFirstPage = () => dispatch(firstPage())
  const handlePreviousPage = () => dispatch(previousPage())
  const handleNextPage = () => dispatch(nextPage())
  const handleLastPage = () =>
    dispatch(
      lastPage({ startLastRecords: startLastRecords, numberOfRecords: numberOfRecords, lastPageNumber: lastPageNumber })
    )

  return (
    <div className='pagination'>
      {firstPageNumber !== currentPage && (
        <>
          <Button onClick={handleFirstPage}>
            <KeyboardDoubleArrowLeftIcon />
          </Button>
          <Button onClick={handlePreviousPage}>
            <KeyboardArrowLeftIcon />
          </Button>
        </>
      )}
      <Button>{currentPage}</Button>
      {lastPageNumber !== currentPage && (
        <>
          <Button onClick={handleNextPage}>
            <KeyboardArrowRightIcon />
          </Button>
          <Button onClick={handleLastPage}>
            <KeyboardDoubleArrowRightIcon />
          </Button>
        </>
      )}
    </div>
  )
}

export default Pagination
