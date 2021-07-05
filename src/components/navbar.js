import React from 'react'
import '../Css/navbar.css'



import { NavLink } from "react-router-dom";

export const navbar = () => {
    
    return (
       <>   

            <div className="navbar">
                
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/img">Image</NavLink>
                <NavLink to="/new">Create Ads</NavLink>
                <NavLink to="/learncss">Learn Css</NavLink>
                
                
                
            </div>    
              
           
            
        
       </>
    )
}

export default navbar;