import './Styles/App.css'
import {Routes, Route} from 'react-router'
import Home from './Pages/Home'
import Documents from './Pages/Documents'
import Layout from './Components/Layout'

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='documents' element={<Documents/>} />
        </Route>

    </Routes>
    </>

  )
}

export default App
