import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from './routes/router'
import { Navbar } from './components/navbar'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainRouter />
    </BrowserRouter>
  )
}