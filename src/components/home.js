import React from 'react';

import ProductView from './productview';


export const home = () => {
    return (
        <div>

            
                <div className="container">

                                    

                        <div class="row">

                            <div class="col-3 sidebar">  

                                <div className="">

                                </div>

                            </div>
                        
                            <div class="col-9 sidebar" >
                                <ProductView /> 
                            </div>
                        


                        </div>





                </div>
                                    
        </div>
    )
}

export default home;