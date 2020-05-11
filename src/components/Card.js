import React from 'react';

const Card = ({name,email,id,contact,street,phone,website,address}) => {
    // const{ name,email,id} = props; 
     return (
        <div className='tc bg-light-blue dib br2 pa2 ma2 grow bw4 shadow-5'>
            {/* <h1>Robo friends</h1> */}
            <img alt="robot"  src={`https://robohash.org/${id}?100x120`} />
            <div>
                <h3>Name : {name}</h3>
                <p> Email : {email}</p>
                <p> phone : {phone}</p>
            </div>
        </div>
    );
}

export default Card;