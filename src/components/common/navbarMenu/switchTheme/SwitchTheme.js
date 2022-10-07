import Switch from '@mui/material/Switch'
import { themeMode, selectTheme } from '../../../../features/themeSlice/themeSlice'
import { useSelector, useDispatch } from 'react-redux'
import './SwitchTheme.scss'

function SwitchTheme() {
  const dispatch = useDispatch()
  const theme = useSelector(themeMode)
  const isDarkTheme = theme === 'dark' ? false : true

  const handleChange = () => {
    dispatch(selectTheme(theme === 'light' ? 'dark' : 'light'))
  }
  return <Switch className='switch-theme' checked={isDarkTheme} onChange={handleChange} />
}

export default SwitchTheme
