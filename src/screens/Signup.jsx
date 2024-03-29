import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Main from './Main';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is already signed in
        const token = localStorage.getItem('token');
        if (token) {
            // If user is signed in, redirect to login page
            navigate('/signup');
        }
    }, [navigate]);

    const handelSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:8000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);
        localStorage.setItem('token', json.authtoken);
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handelSubmit}>
                    <div className="my -5">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2 my-5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                onChange={onchange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            onChange={onchange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            onChange={onchange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="my-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={onchange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                    <Link to="/Main" className="flex w-full justify-center rounded-md bg-[#674188] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5D3891] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

    Sign in
 
</Link>

                    </div>
                </form>
                <p>Already a user? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;
