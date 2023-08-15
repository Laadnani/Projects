
import { Nav } from "../Components/Navigation"
import { Sup_content } from "../Components/Sup_content"
import { Sup_attendence } from "../Components/Sup_attend"
import { Add_staff } from "../Components/Add_staff"
import { Routes, Route} from 'react-router-dom'



/* 
Sup_content = content for performance screen on supervisor view 
Sup_attende = content for attendence screen on all staff (only for manager screen)
Sup_attend = content for agents and staff attendence on Sup view
Add_staff = content to add an agent of a new supervisor 
*/
export function Sup_v() {
    return (
        
        <> 
        <Nav />
        <Routes>
            <Route path='Supervisor' element={< Sup_content />} />
            <Route path='/attendence' element={< Sup_attendence />} />
            <Route path='/add' element={< Add_staff />} />
        </Routes>
        </>
    )
}