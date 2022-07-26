import { NavLink } from "react-router-dom";


export default function NavigationLinkBar(){
    
    return(
        
        <>
        
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/todo/open"}>Open</NavLink>
            <NavLink to={"/todo/inprogress"}>In Progress</NavLink>
            <NavLink to={"/todo/done"}>Done</NavLink>
        </>
    )
}