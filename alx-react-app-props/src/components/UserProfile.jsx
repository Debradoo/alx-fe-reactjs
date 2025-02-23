import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const user = useContext(UserContext); // Accessing user data from context

  return ( 
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue' }}>{user.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span></p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;
