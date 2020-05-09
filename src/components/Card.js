import React from 'react';

const Card = ({name,email,id,contact}) => {
    // const{ name,email,id} = props; 
     return (
        <div className='tc bg-light-blue dib br2 pa2 ma2 grow bw4 shadow-5'>
            {/* <h1>Robo friends</h1> */}
            <img alt="robot"  src={`https://robohash.org/${id}?100x120`} />
            <div>
                <h2>Name : {name}</h2>
                <p>Email : {email}</p>
                <p>{contact}</p>
            </div>
        </div>
    );
}

export default Card;