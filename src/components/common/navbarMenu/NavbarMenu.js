import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SwitchTheme from './switchTheme/SwitchTheme'
import Image from '../../../assets/imgs/logo-title.png'
import './NavbarMenu.scss'

function NavbarMenu({ handleDrawerToggle, drawerWidth }) {
  return (
    <AppBar
      position='fixed'
      className='navbar-menu'
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        ml: { lg: `${drawerWidth}px` },
      }}
    >
      <Toolbar className='action-container'>
        <div className='toggle-icon-container'>
          <IconButton
            className='toggle-icon'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <img src={Image} alt='image' />
        <SwitchTheme />
      </Toolbar>
    </AppBar>
  )
}

export default NavbarMenu
