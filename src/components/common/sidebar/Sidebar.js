import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import NavbarMenu from '../navbarMenu/NavbarMenu'
import SidebarHeader from './sidebarHeader/SidebarHeader'
import SidebarFilters from './sidebarFilters/SidebarFilters'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button } from '@mui/material'
import './Sidebar.scss'

function Sidebar({ children, window }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [back, setBack] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const drawerWidth = 260
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const container = window !== undefined ? () => window().document.body : undefined
  const handleBack = () => navigate('/')

  useEffect(() => {
    location.pathname.length > 1 ? setBack(true) : setBack(false)
  }, [location.pathname])

  const sidebar = (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <SidebarHeader />
        {back ? (
          <Button className='back-button' onClick={handleBack}>
            <ArrowBackIcon />
          </Button>
        ) : (
          <SidebarFilters />
        )}
      </div>
    </div>
  )

  return (
    <Box className='screen-container'>
      <CssBaseline />
      <NavbarMenu drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Box component='nav' sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
        <Drawer
          container={container}
          className='sidebar'
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
          }}
        >
          {sidebar}
        </Drawer>
        <Drawer
          variant='permanent'
          className='sidebar'
          sx={{
            display: { xs: 'none', lg: 'block' },
          }}
          open
        >
          {sidebar}
        </Drawer>
      </Box>
      <Box
        className='screen-content'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default Sidebar
