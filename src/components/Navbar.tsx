import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/auth");
      }}
    >
      Authenticate
    </button>
  );
}

export default Navbar;
