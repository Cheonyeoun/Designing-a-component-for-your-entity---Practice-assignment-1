import React from 'react';

function Usercard() {

  const profilePhoto = 'https://png.pngtree.com/png-vector/20220628/ourmid/pngtree-user-profile-avatar-vector-admin-png-image_5289693.png';
  const name = 'S Vignesh Pandiyan';
  const email = 'vigneshpandiyan08@email.com';
  const phone = '+91 6300322156+3';
  const address = 'ln Colony Road, kongaredyypalli, India';

  return (
    <div className="max-w-sm p-4 rounded-lg shadow-lg bg-red-100  ">

      <div className="flex justify-center mb-4">
        <img
          src={profilePhoto}
          alt="User Profile"
          className="w-24 h-24 rounded-full border-2 border-cyan-300"
        />
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-600">{name}</h2>
        <p className="p-1 text-gray-500">{email}</p>
        <p className="p-1 text-gray-500">{phone}</p>
        <p className="p-1 text-gray-500">{address}</p>
      </div>
    </div>
  );
}

export default Usercard;
