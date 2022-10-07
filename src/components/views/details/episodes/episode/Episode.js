import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataState, getEpisode } from '../../../../../features/dataSlice/dataSlice'
import './Episode.scss'

function Episode({ episodeUrl }) {
  const dispatch = useDispatch()
  const { episodeInfo } = useSelector(dataState)
  const { id, name, air_date, episode } = episodeInfo

  useEffect(() => {
    if (episodeUrl) {
      dispatch(getEpisode(episodeUrl))
    }
  }, [episodeUrl, dispatch])

  return (
    <div className='episode'>
      <div>
        Episode ID: <span className='value'>{id}</span>
      </div>
      <div>
        Episode Name: <span className='value'>{name}</span>
      </div>
      <div>
        Episode Air Date: <span className='value'>{air_date}</span>
      </div>
      <div>
        Episode: <span className='value'>{episode}</span>
      </div>
    </div>
  )
}

export default Episode
