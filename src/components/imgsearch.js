import React, {useState} from 'react'

export const Imgsearch = () => {

     const [img, setImg] = useState("");

    const loadimage = (event) => {

        setImg(event.target.value);

        console.log(img);
    }

    const image = 'https://source.unsplash.com/400x300/?'+img;


    return (
        <div className="text-center">
            <h1>My Google Image</h1>

            <hr></hr>

            <input type="text" placeholder="Search Images" onChange={loadimage}/>

            <hr></hr>

            {img === "" ? null : <img src={image} alt="search"/>    } 


        </div>
    )
}

export default Imgsearch;
