import React from 'react';
import Card from './Card';

const Cardlist =({robots}) => {
  // if(true)  {
  //   throw new Error('NOOOOO');
  // }
 return (
    <div>
      {
            robots.map((user,i) => {
                return (
                        <Card 
                        key={i} 
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].username} 
                        contact={robots[i].contact} 
                        phone = {robots[i].phone} 
                        website = {robots[i].website}
                       // address = {robots[i].}
                          
                        />
                );
        })
      }
    </div> 

    );
}

export default Cardlist;