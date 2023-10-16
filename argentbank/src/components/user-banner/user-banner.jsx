import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import UserForm from './user-form';

function Userbanner() {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleCancelClick = () => {
    setIsEditing(false);
  }

  return (
    <div className="header">
      {isEditing ? (
        <UserForm onCancelClick={handleCancelClick} />
      ) : (
        <div>
          <h1>Welcome back<br/>{firstName} {lastName}</h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  )
}

export default Userbanner