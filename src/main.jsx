import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes, Route, HashRouter } from 'react-router'
import { Case1 } from './pages/Case1.jsx'
import { Case2 } from './pages/Case2.jsx'
import { Case3 } from './pages/Case3.jsx'
import { Case4 } from './pages/Case4.jsx'
import { NotFound } from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
      <Route path="/*" element={ <NotFound/>}/>
        <Route path="*" element={ <NotFound/>}/>
        <Route path="/" element= {<App />} />
        <Route path="/case1" element= {<Case1/>}/>
        <Route path="/case2" element= {<Case2/>}/>
        <Route path="/case3" element= {<Case3/>}/>
        <Route path="/case4" element= {<Case4/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
