// import React from 'react'
import Home from "./home/home"
import {Routes,Route} from "react-router-dom"
import Courses from "./courses/Courses"
import SignUp from "./components/SignUp"
function App() {
  return (
     < >
       {/* <Home/>  */}
       <div className="dark:bg-slate-900 dark:text-white" >

        <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/course" element={<Courses/>} ></Route>
        <Route path="/sign-up" element={<SignUp/>} ></Route>

      </Routes>
       </div>
      
     </>
  )
}

export default App