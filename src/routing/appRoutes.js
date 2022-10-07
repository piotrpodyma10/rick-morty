import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Sidebar from '../components/common/sidebar/Sidebar'
import General from '../components/views/general/General'
import Details from '../components/views/details/Details'

export const AppRoutes = () => (
  <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path='/*' element={<General />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
)

export default AppRoutes
