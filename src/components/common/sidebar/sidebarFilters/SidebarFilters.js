import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import React from 'react'
import {
  filterByGender,
  filterByName,
  filterByStatus,
  filtersState,
} from '../../../../features/filtersSlice/filtersSlice'
import './SidebarFilters.scss'
import { useDispatch, useSelector } from 'react-redux'

function SidebarFilters() {
  const dispatch = useDispatch()
  const { name, status, gender } = useSelector(filtersState)
  const handleName = (e) => dispatch(filterByName(e.target.value))
  const handleStatus = (e) => dispatch(filterByStatus(e.target.value))
  const handleGender = (e) => dispatch(filterByGender(e.target.value))

  return (
    <div className='sidebar-filters'>
      <TextField className='filter' label='Filter by name' variant='outlined' value={name} onChange={handleName} />
      <FormControl className='filter'>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label='Status'
          onChange={handleStatus}
          inputProps={{ MenuProps: { disableScrollLock: true } }}
        >
          <MenuItem value='unknown'>Unknown</MenuItem>
          <MenuItem value='Alive'>Alive</MenuItem>
          <MenuItem value='Dead'>Dead</MenuItem>
        </Select>
      </FormControl>
      <FormControl className='filter'>
        <InputLabel>Gender</InputLabel>
        <Select
          value={gender}
          label='Gender'
          onChange={handleGender}
          inputProps={{ MenuProps: { disableScrollLock: true } }}
        >
          <MenuItem value='unknown'>unknown</MenuItem>
          <MenuItem value='Male'>Male</MenuItem>
          <MenuItem value='Female'>Female</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SidebarFilters
