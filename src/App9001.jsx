import React from 'react'
import './App9001.scss'
import Home from './Components/pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import ROUTES from './Components/routes/routes'
import ErrorPage from './Components/pages/ErrorPage'
import Layouts from './Components/Layouts/Layouts'



export default function App9001() {
  RouterProvider,createBrowserRouter,createRoutesFromElements

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<Layouts/>}>
      <Route index element={<Home/>} />
      <Route path={ROUTES.ABOUT} element={ <Home/>} />
      <Route path={ROUTES.FEATURES} element={ <Home/>} />
      <Route path={ROUTES.CONTACT} element={ <Home/>} />
      <Route path='*' element={<ErrorPage/>}/>
    </Route>)
  )
  return (
    <div className='App9001'>
        <RouterProvider router={router}/>
        <h1>Creative Home Simpify your <br /> Furniture</h1>
        <h3>Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</h3>
        <button>Shop Now</button>
        <div className='Bottom-Element'>
          <ul>
            <li>
              <h2>7 </h2>
              <p>Year Experience </p>
            </li>
            <li>
            <hr />
             <h2>2</h2>
             <p>Opened in the Country</p>
            </li>
            <li>
            <hr />
            <h2>10k+</h2>
            <p>Furniture sold</p>
            </li>
            <li>
            <hr />
              <h2>260+</h2>
              <p>Variant Furniture</p>
            </li>
          </ul>
        </div>
    </div>
  )
}
