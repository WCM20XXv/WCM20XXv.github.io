import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SocialFab from './SocialFab.jsx'

createRoot(document.getElementById('social-fab-root')).render(
  <StrictMode>
    <SocialFab />
  </StrictMode>,
)
