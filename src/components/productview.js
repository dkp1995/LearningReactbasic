import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Css/productview.css'

export const Productview = () => {

    const [user, setUsers] = useState([]);


    const getUsers = async () => {

        const response  = await fetch("https://api.github.com/users");
        setUsers(await response.json());
        
       
        

    }


    useEffect(() => {

          getUsers();
    }, [] )



    

    return (
        <div className="row">
            {user.map((val) =>{

                return (


                    <div className="col-4">

                        <div className="card mt-3 sizeofcard">

                            <img src={val.avatar_url} class="card-img-top"/>

                            <div class="card-body">
                                    <h5 class="card-title">{val.login}</h5>
                                    <h6 className="card-text">{val.id}</h6>
                                    <h6 class="card-text">This has 8gb of ram and 200gb internal storage </h6>

                                    <div className="location">
                                        
                                        <p >Dhoomanganj, transport nagar</p>
                                

                                    </div>

                                
                        
                            </div>



                        </div>

                    </div>
                )
                    


            })}


            
             
            
        </div>
    )
}

export default Productview;
