import { Button } from '@material-tailwind/react';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function CreateAccountForm() {
    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [confpass, setConfpass] = useState();
    const [wallet, setWallet] = useState();
    const [login, setLogin] = useState(0);

    const [usersarray, setUsersarray] = useState(null);

    const handleLogIn = () => {
        navigate('/login');
    };

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8800/users');
          ///console.log(response.data[1]);
          setUsersarray(response.data);
          console.log(response);

          let exist = 0;
          for(let i = 0;i<response.data.length;i++){
            if(response.data[i].user_name == username){
                exist = 1;
            }
          }
          if(exist){
            alert('This user alredy exist');
            console.log('This user alredy exist');
          }
          else{
            const adding = await axios.post('http://localhost:8800/users', {'username': username, 'password': password, 'wallet': wallet});
            console.log(adding);
            setLogin(1);
            navigate('/');
          }

        } catch (error) {
          console.error(error);
        }
      };

    const handleSubmit = (el) => {
        el.preventDefault();
        if(password == confpass && wallet != ''){
            if(password.length > 8){
            fetchData();
            console.log(usersarray);
            }
            else{
                alert('Len of the password must be more than 8');
                console.log('Len of the password must be more than 8');
            }
        }
        else{
            alert('Passwards must be the same')
            console.log('Passwards must be the same');
        }
        ///const response = axios.get('http://localhost:8800/users');
        ///console.log(response.data[1]);

        ///console.log(username);
        ///console.log(password);
        ///console.log(confpass);
        ///console.log(wallet);    
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-271 h-100 mr-2" src="/img/logo.png" alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                <input type="text" name="username" id="username" value={username} onChange={el => setUserName(el.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user1025" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" onChange={el => setPassword(el.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" onChange={el => setConfpass(el.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="wallet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Crypto wallet</label>
                                <input type="text" name="wallet" id="wallet" onChange={el => setWallet(el.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-2 dark:ring-offset-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-medium text-gray-900 dark:text-white">I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">Terms of Service</a></label>
                                </div>
                            </div>
                            <div>
                                <button type="submit"   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    Create account
                                </button>
                            </div>
                            
                        </form>
                        <div className="mt-6">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Already have an account? <a onClick={handleLogIn} href="#" className="text-primary-600 hover:text-primary-700">Sign in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateAccountForm;
