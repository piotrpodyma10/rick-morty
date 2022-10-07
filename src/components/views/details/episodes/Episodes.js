import React, { useState } from 'react'
import Episode from './episode/Episode'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Card from '../../../common/card/Card'
import './Episodes.scss'

function Episodes({ episodes }) {
  const [tab, setTab] = useState(0)
  const handleTab = (event, value) => setTab(value)
  return (
    <Card className='episodes'>
      <Tabs className='tabs' value={tab} onChange={handleTab}>
        {episodes?.map((episode, index) => (
          <Tab key={index} label={`Episode ${index + 1}`} />
        ))}
      </Tabs>
      <Episode key={episodes?.[tab]} episodeUrl={episodes?.[tab]} />
    </Card>
  )
}

export default Episodes
