import { Link } from "react-router-dom"


export function Nav() {


    return (
<nav className="topnav">
    <section className="info">
        Yetti CRM
    </section>

    <ul className="Nav_right">
        
                <Link to={'supervisor'} > Performance  </Link>  
                <Link to={'attendence'} > Attendence </Link>
                <Link to={'add'} > add staff  </Link>
                <Link to={'add'}> Log out </Link >
        <img src='../src/assets/staff.png' alt="staff icon" />
      
    </ul>
</nav>
    )
}