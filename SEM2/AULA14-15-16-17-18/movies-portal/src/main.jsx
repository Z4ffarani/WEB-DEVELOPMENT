import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx' 
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Contato from './pages/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/movies', element: <MovieListPage />},
      {path: '/movies/:id', element: <MovieDetailPage />},
      {path: '/genre', element: <GenreListPage />},
      {path: '/genre/:id', element: <MoviesByGenrePage />},
      {path: '/contato', element: <Contato />},
      {path: '*', element: <PageNotFound />}, 
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)