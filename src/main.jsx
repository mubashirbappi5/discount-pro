import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainRoutes from './Route/MainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './Provider/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContext>
   <RouterProvider router={MainRoutes} />
   </AuthContext>
  </StrictMode>,
)
