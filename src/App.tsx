import './App.css'
import 'react-chat-elements/dist/main.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from './routes/router'

export const App = () => {

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}