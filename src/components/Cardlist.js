import React from 'react';
import Card from './Card';

const Cardlist =({robots}) => {
  console.log(robots);
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
                        id={user.id}
                        name={user.name}
                        email={user.username} 
                        contact={user.contact} 
                        phone = {user.phone} 
                        website = {user.website}
                        street = {user.address.street}
                      />
                );
        })
      }
    </div> 

    );
}

export default Cardlist;