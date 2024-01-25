import { Home, Login, Dashboard, Page404 } from '../pages/compiler'
import { Routes, Route } from 'react-router-dom'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} /> 
        <Route path='*' element={<Page404 />} />
    </Routes>
  )
}
