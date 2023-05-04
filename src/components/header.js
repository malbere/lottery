import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Header = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/register');
    };

    const handleLogIn = () => {
        navigate('/login');
    };

    const handleMain = () => {
        navigate('/');
    };

    const handleLogOUT = () => {
        axios.post('http://localhost:8800/api/user', {"stat": false, "username": username});
        ///setAuthenticated(false);
        axios.get('http://localhost:8800/api')
          .then(response => {
            setAuthenticated(response.authenticated);
            setUsername(response.username);
          })
          .catch(error => {
            setAuthenticated(false);
            setUsername('');
            console.error(error);
          });
        navigate('/');
    };

    const handleAccount = () => {
        /// axios.post('http://localhost:8800/api/user', {"stat": false, "username": username});
        navigate('/');
    };

    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8800/api')
          .then(response => {
            console.log(response.data);
            if (response.data.length == 0){
            }
            else{
                if(response.data.authenticated == false){
                    setAuthenticated(false);
                }
                else{
                    setAuthenticated(true);
                    setUsername(response.data.username);
                }
                console.log(authenticated);
            }
          })
          .catch(error => {
            setAuthenticated(false);
            setUsername('');
            console.error(error);
          });
      }, []);

    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            {
            !authenticated ?
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a onClick={handleMain} class="flex items-center">
                    <img src="/img/logo.png" class="h-14 mr-3" alt="Flowbite Logo" />
                </a>
                <div class="flex md:order-2 flex space-x-4" >
                    <button type="button" onClick={handleGetStartedClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">REGISTER</button>
                    <button type="button" onClick={handleLogIn} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOG IN</button>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            :
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a onClick={handleMain} class="flex items-center">
                    <img src="/img/logo.png" class="h-14 mr-3" alt="Flowbite Logo" />
                </a>
                <div class="flex md:order-2 flex space-x-4" >
                    <button type="button" onClick={handleAccount} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{username}</button>
                    <button type="button" onClick={handleLogOUT} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOG OUT</button>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            }
        </nav>
    );
};

export default Header;
