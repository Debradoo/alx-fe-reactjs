const UserProfile = (props) => {
    return ( 
        <div className="userprofile">
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
     );
}
 
export default UserProfile;