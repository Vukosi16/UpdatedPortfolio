import './Styles/App.css'
import {Routes, Route} from 'react-router'
import Home from './Pages/Home'
import Documents from './Pages/Documents'
import Layout from './Components/Layout'
import Projects from './Pages/Projects'
import RecentWork from './Pages/RecentWork'
import { GetInTouch } from './Pages/GetInTouch'

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='documents' element={<Documents/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='recent-work' element={<RecentWork/>} />
          <Route path='get-in-touch' element={<GetInTouch/>} />
        </Route>

    </Routes>
    </>

  )
}

export default App
