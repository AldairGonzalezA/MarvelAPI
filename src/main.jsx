import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MarvelApp } from './MarvelApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarvelApp />
  </StrictMode>,
)
