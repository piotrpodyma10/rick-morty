import React from 'react'
import Card from '../../../common/card/Card'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCharacter } from '../../../../features/dataSlice/dataSlice'
import './Character.scss'

function Character({ data }) {
  const { image, name, species, status } = data
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDetails = (character) => {
    dispatch(selectCharacter(character))
    navigate(`/details/${character.id}`)
  }
  return (
    <div onClick={() => handleDetails(data)}>
      <Card className='character'>
        <img src={image} alt='image' />
        <div className='name'>{name}</div>
        <div>{species}</div>
        <div>{status}</div>
        <div className='details-container'>
          <div>Details</div>
        </div>
      </Card>
    </div>
  )
}

export default Character
