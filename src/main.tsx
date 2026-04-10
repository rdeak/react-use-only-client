import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ItemCard} from "./item-card.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ItemCard itemId={1} />
    <ItemCard itemId={2} />
  </StrictMode>,
)
