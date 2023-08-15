import { useState } from 'react'
import { Sign_in } from '../Components/Signin_form'
import { Denied} from '../Components/denied'
import { Agent_view } from '../views/main-agent'
import { Sup_v } from '../views/sup_view'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sup_content } from '../Components/Sup_content'
/* Modification on the elements rendering */
  

/*TBD views 
 => Agent_view - agent full view ( single page view)
 => Sign_in - sign in form entry point of spitting views
 => Sup_view - Supervisor view (depricated options for manager view)

          */

 
function App() {
 return ( 
  <Routes >
      <Route  path='/' element={<Sign_in />}> </Route>
      <Route exact path='/Supervisor/*' element={< Sup_v/>}>
      </Route>
       <Route exact path='/Agent/' element={< Agent_view />}></Route>
      <Route path='*' element={< Denied/>}/>
 </Routes>
  )
}

export default App
