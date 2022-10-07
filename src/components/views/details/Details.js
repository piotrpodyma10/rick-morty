import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { dataState, getCharacter } from '../../../features/dataSlice/dataSlice'
import Card from '../../common/card/Card'
import moment from 'moment'
import Episodes from './episodes/Episodes'
import './Details.scss'

function Details() {
  const { id } = useParams()
  const { character } = useSelector(dataState)
  const { image, name, status, species, type, gender, origin, created, episode } = character
  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.keys(character).length === 0) {
      dispatch(getCharacter(id))
    }
  }, [dispatch])

  return (
    <div className='details'>
      <Card className='header'>
        <img src={image} />
        <div className='character-info'>
          <div className='name'>{name}</div>
          <div>{status}</div>
          <div>{species}</div>
          <div>{type}</div>
          <div>{gender}</div>
          <div>{origin?.name}</div>
          <div>{moment(created).format('DD-MM-YYYY')}</div>
        </div>
      </Card>
      <Episodes episodes={episode} />
    </div>
  )
}

export default Details
