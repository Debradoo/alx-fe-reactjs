const UserCard = ({ user }) => {
    if (!user) return null;
  
    return (
      <div>
        <h2>{user.name || user.login}</h2>
        <img src={user.avatar_url} alt={user.login} width={100} />
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;
  