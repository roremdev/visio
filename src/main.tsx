import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './main.css'
import { WelcomePage } from '@welcome/welcome.page'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
