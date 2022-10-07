import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../features/dataSlice/dataSlice'
import { themeMode } from '../../features/themeSlice/themeSlice'
import AppRoutes from '../../routing/appRoutes'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const theme = useSelector(themeMode)
  document.body.setAttribute('data-theme', theme)

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return <AppRoutes />
}

export default App
