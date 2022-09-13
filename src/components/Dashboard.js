import { useNavigate } from "react-router-dom";
function Dashboard() {
        let navigate = useNavigate();
        return <h1 className="primary-heading">Welcome to Dashboard <button onClick={() => {
                navigate("/")
         }}>Logout</button></h1>
}

export default Dashboard;
