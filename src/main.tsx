import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'
import { SiteDataProvider } from './context/SiteDataContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteDataProvider>
      <App />
      <SpeedInsights />
      <Analytics />
    </SiteDataProvider>
  </StrictMode>
)
