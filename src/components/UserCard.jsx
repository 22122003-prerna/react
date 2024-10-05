import React from 'react';

const UserCard = (props) => {
  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-lg flex-grow flex flex-col items-center justify-center h-full'>
      <p id="user-Title" className='text-lg font-semibold mb-2'>
        {props.name}
      </p>
      <img 
        id='user-image' 
        className='w-32 h-32 rounded-full object-cover mb-4' 
        src={props.image} 
        alt={props.name} 
      />
      <p id='user-description' className='text-gray-600'>
        {props.desc}
      </p>
    </div>
  );
};

export default UserCard;


