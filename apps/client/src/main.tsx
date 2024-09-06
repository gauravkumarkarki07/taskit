import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import ReactQueryClientProvider from './Common/Providers/QueryClientProvider'
import {Toaster} from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors/>
    <ReactQueryClientProvider>
      <RouterProvider router={routes} />
    </ReactQueryClientProvider>
  </StrictMode>,
)
