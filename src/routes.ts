// import { type RouteConfig, route, index } from '@react-router/dev/routes'

import { createBrowserRouter } from 'react-router'
import { MainPage } from './pages/MainPage.tsx'
import { AuthPage } from './pages/AuthPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
  },
  {
    path: '/auth',
    Component: AuthPage,
  },
])
