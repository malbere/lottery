import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8800/api')
          .then(response => {
            setAuthenticated(response.authenticated);
            console.log(response.authenticated);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    

    const handleRegister = () => {
        navigate('/register');
    };

    const handleMain = () => {
        navigate('/');
    };

      const handleSubmit = async (el) => {
        const response = await axios.get('http://localhost:8800/users');
        el.preventDefault();
        let exist = 0;
        for(let i = 0;i<response.data.length;i++){
          if(response.data[i].user_name === username){
              exist = 1;
          }
        }
        if(exist){
          const check = await axios.get('http://localhost:8800/users', {'username': username, 'password': password});
          console.log(check);
          console.log('Logged in!');
          axios.post('http://localhost:8800/api/user', {"stat": true, "username": username});
          setAuthenticated(true);
          navigate('/');
        }
        else{
          alert('Wrong username or password');
          console.log('Wrong username or password');
        }
    
      };
    return (
        <div>
        {
        authenticated ? <p>Вы уже зареганы</p> :
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a onClick={handleMain} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-271 h-100 mr-2" src="/img/logo.png" alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Log in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
                                <input value={username} onChange={el => setUserName(el.target.value)} type="login" name="login" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={password} onChange={el => setPassword(el.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <button onClick={handleSubmit} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    Log in
                                </button>
                            </div>
                            <div className="mt-6">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Don't have an accoung? <a onClick={handleRegister} href="#" className="text-primary-600 hover:text-primary-700">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        }
        </div>
    );
}

export default Login;
