import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Change this to simulate authentication

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
