import React, { useState    } from 'react'

import '../Css/newad.css'

export const Newad = () => {


    const [fullname , setfullName] = useState({

        fname : "",
        lname : '',
        email : "",
        password : ''

    });





    const inputEvent = (event) => {

        const value = event.target.value;
        const name = event.target.name;

        setfullName((preValue) =>{

            console.log(preValue)

            return {
                ...preValue,
            [name]: value,
            }

            // if(name === "fname") {

            //     return{

            //         fname : value,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         password : preValue.password,
            //     };

      


            // }else if(name === "lname") {

            //     return{

            //         fname : preValue.fname,
            //         lname : value,
            //         email : preValue.email,
            //         password : preValue.password,
            //     };

               
            // }else if(name === "email") {

            //     return{

            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : value,
            //         password : preValue.password,
            //     };

               
            // }else if(name === "password") {

            //     return{

            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         password : value,
            //     };

               
            // }


            
        })
       

    }

    const onSumbits = (event) => {
        
        event.preventDefault();

    }
  

    return (
        <div className="mycont">   

            <h1>Hello {fullname.fname} {fullname.lname} {fullname.email} {fullname.password}</h1>

            <form onSubmit={onSumbits}>

                <div className="mainbox">

                    <input type="text" 
                    placeholder="Enter First name" 
                    onChange={inputEvent}
                    name="fname"/>  <br/><br/>

                    <input type="text" 
                    placeholder="Enter last name"
                     onChange={inputEvent}
                     name="lname"/>  <br/><br/>
                    
                    <input type="text" 
                    placeholder="Enter your email address" 
                    onChange={inputEvent}
                    name="email"/>  <br/><br/>

                    <input type="text" 
                    placeholder="Enter your password " 
                    onChange={inputEvent}
                    name="password"/>  <br/><br/>

                    <hr/>

                    <input type="submit" value="Submit" alt="btn"/>


                </div>

            </form>
            
        </div>
    )
}

export default Newad; 
