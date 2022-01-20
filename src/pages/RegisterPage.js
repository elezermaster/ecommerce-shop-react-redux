import React, {useState, useEffect} from 'react';
import LottieAnimation from '../components/LottieAnimation';
import animationData from '../assets/lottie/74569-two-factor-authentication.json';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CustomLoader from '../components/CustomLoader';
import { toast } from 'react-toastify';


const RegisterPage = () => {
    const [isLoading, seIstLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {

    }, [isLoading])

    const handleRegister = async() => {
        if(password === cpassword){
            try {
                seIstLoading(true)
                const auth = getAuth();
                const result = await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('user created',user)
                    toast.success(`user created  ${user.email}`)
                    localStorage.setItem("currentUser", JSON.stringify(user))

                    if(user && auth) {
                        navigate('/');
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log('errorCode',errorCode)
                    const errorMessage = error.message;
                    console.log('errorMessage',errorMessage)
                    toast.warning(`user create failed`)
                    toast.warning(errorMessage)
                });
                console.log('result', result)
            } catch (error) {
                
                seIstLoading(false)
            } finally {
                seIstLoading(false)
            }
        } else {
            toast.warning(`password not equal`)
        }
    }

    return (
        <div className='register-parent'>
            {isLoading ? <CustomLoader/> :
            <div className='row justify-content-md-center'>
                <div className="col-md-5">
                    <LottieAnimation 
                        animationData={animationData}
                    />
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="login-form">
                        <h2>
                            Register
                        </h2>
                        <hr />
                       <div className="inputs-wrapper">
                           <div>
                                <input 
                                    className="form-control"
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
                                <input 
                                    className="form-control"
                                    placeholder='confirm'
                                    value={cpassword}
                                    type="text" 
                                    onChange={e=>
                                        setCPassword(e.target.value)
                                    }
                                    />
                           </div>
                       </div>    
                        <button
                            className="my-3 button-28"// button-55"
                            onClick={handleRegister}
                        >
                            REGISTER
                        </button>
                        <hr />
                        <Link
                            className="link-login"
                            to='/login'>
                               GO TO LOGIN
                        </Link>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default RegisterPage;