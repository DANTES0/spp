import './App.css'
import { Header } from './components/Header'
import { RouterProvider } from 'react-router'

import { router } from './routes'

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      {/* <MainPage /> */}
    </>
  )
}

export default App
