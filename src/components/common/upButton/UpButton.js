import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Button } from '@mui/material'
import './UpButton.scss'

function UpButton() {
  const [isVisible, setIsVisible] = useState(false)
  const moveUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    isVisible && (
      <Button className='up-button' onClick={moveUp}>
        <ArrowUpwardIcon />
      </Button>
    )
  )
}

export default UpButton
