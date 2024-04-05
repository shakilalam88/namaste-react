import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Contact from './components/Contact'
import About from './components/About'
import RestaurantMenu from './components/RestaurantMenu'
// import Grocery from './components/Grocery'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'

import Error from './components/Error'

import '../index.css'
import './output.css'

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// On demand loading

const Grocery = lazy(() => {
  return import('./components/Grocery')
})

const AppLayout = () => {
  const [userName, setUserName] = useState()
  useEffect(() => {
    const data = {
      name: 'shakil',
    }
    setUserName(data.name)
  }, [])

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: 'irfan' }}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resID',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={appRouter} />)
