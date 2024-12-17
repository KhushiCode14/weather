import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.token);

      setSuccess("Registered successfully!");
      // setSuccess(true);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    fetchData();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register
        </h1>
        {error && <p>{error}</p>}
        {loading && <p>{loading}</p>}
        {success && <p>{success}</p>}
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Username:
            </label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email:
            </label>
            <Input
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              placeholder="email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Password:
            </label>
            <Input
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              placeholder="password"
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Have an account?
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:text-blue-700"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
