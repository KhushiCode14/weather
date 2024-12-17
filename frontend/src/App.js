// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Weather from "./components/Weather";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./ProtectedRoutes";
function App() {
  return (
    <div className="max-w-10xl min-w-7xl flex flex-col justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Weather />
            </ProtectedRoute>
          }
        />
        {/* public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<h1>Page Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
