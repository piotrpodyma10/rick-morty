import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { dataState } from '../../../../features/dataSlice/dataSlice'
import { filtersState } from '../../../../features/filtersSlice/filtersSlice'
import { paginationState } from '../../../../features/paginationSlice/paginationSlice'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import Character from '../character/Character'
import Pagination from './pagination/Pagination'
import Progress from '../../../common/progress/Progress'
import './CharacterList.scss'

function CharacterList() {
  const { name, status, gender } = useSelector(filtersState)
  const { characters, loading } = useSelector(dataState)
  const [filteredCharacters, setFilteredCharacters] = useState(characters)
  const { startRecords, endRecords } = useSelector(paginationState)
  const numberOfRecords = filteredCharacters.length

  useEffect(() => {
    setFilteredCharacters(characters.filter((character) => characterMatchesFilter(character, name, gender, status)))
  }, [characters, name, gender, status])

  function characterMatchesFilter(character, name, gender, status) {
    if (name && !character.name.includes(name)) return false
    if (gender && character.gender !== gender) return false
    if (status && character.status !== status) return false
    return true
  }

  return (
    <div className='character-list'>
      {loading ? (
        <Progress />
      ) : filteredCharacters.length > 0 ? (
        <>
          <div className='character-list-container'>
            {filteredCharacters.slice(startRecords, endRecords).map((character) => (
              <Character key={Math.random()} data={character} />
            ))}
          </div>
          <Pagination numberOfRecords={numberOfRecords} />
        </>
      ) : (
        <div className='no-data'>
          Unfortunately, there is no such character
          <div className='icon'>
            <SentimentVeryDissatisfiedIcon />
          </div>
        </div>
      )}
    </div>
  )
}

export default CharacterList
