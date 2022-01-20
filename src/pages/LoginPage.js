import React, {useState} from 'react';
import LottieAnimation from '../components/LottieAnimation';
import animationData from '../assets/lottie/83374-ecommerce.json';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async() => {
        try {
            const auth = getAuth();
            console.log('auth', auth)
            await signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success(`hello ${user.email}`)
                localStorage.setItem("currentUser", JSON.stringify(user))
               
                if(user && auth) {
                    navigate('/');
                }
              })
              .catch((error) => {
                const errorCode = error.code;
                toast.warning(errorCode)
                const errorMessage = error.message;
                toast.warning(errorMessage)
              });            
        } catch (error) {
            
        } finally {

        }
    }

    return (
        <div className='register-parent'>
            <div className='row justify-content-md-center'>
                <div className="col-md-5">
                    <LottieAnimation 
                        animationData={animationData}
                    />
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="login-form">
                        <h2>
                            Login
                        </h2>
                        <hr />
                        <div className="inputs-wrapper">
                            <div className="">
                                <input 
                                className="form-control "
                                placeholder='email'
                                value={email}
                                type="text" 
                                onChange={e=>
                                    setEmail(e.target.value)
                                }
                                />
                                <input 
                                    className="form-control"
                                    placeholder='password'
                                    value={password}
                                    type="text" 
                                    onChange={e=>
                                        setPassword(e.target.value)
                                    }
                                    />
                            </div>
                        </div>
                        <button
                            className="my-3 button-28"// button-55"
                            onClick={handleLogin}
                        >
                            ENTER
                        </button>
                        <hr />
                        <Link
                            className="link-login"
                            to='/register'>
                               GO TO REGISTER
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;