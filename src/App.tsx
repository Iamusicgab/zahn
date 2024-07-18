import Home from "./pages/home";
import New from "./pages/new";
import Appointment from "./pages/appointment";
import Prescription from "./pages/prescription";
import Patients from "./pages/patients";
import Login from "./pages/login";
import Signup from "./pages/signup";
import PatientsPlaceholder from "./pages/patientsPlaceholder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./components/userContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="p-4">
			<BrowserRouter>
				<UserContext>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route element={<PrivateRoute />}>
							<Route path="/" element={<Home />} />
							<Route path="/new" element={<New />} />
							<Route path="/appointment" element={<Appointment />} />
							<Route path="/prescription" element={<Prescription />} />
							<Route path="/patients" element={<Patients />} />
							<Route path="/patients/:id" element={<PatientsPlaceholder />} />
						</Route>
					</Routes>
				</UserContext>
			</BrowserRouter>
		</div>
	);
}

export default App;
