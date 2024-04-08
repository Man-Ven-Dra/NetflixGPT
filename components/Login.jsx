import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase_logic";
import { AVATAR, BACKGROUND } from "../utils/constants";

const Login = () => {
    const [changeForm, setChangeForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if(message) return ;
        
        if(!changeForm){
            //Sign Up logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
                )
            .then((userCredential) => {
            // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: AVATAR
                  }).then(() => {

                  }).catch((error) => {
                    setErrorMessage(error.message)
                  });
                //console.log(user);
            })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
        else{
            //Sign In logic
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
                )
            .then((userCredential) => {
            // Signed up 
                const user = userCredential.user;
                console.log(user);
            })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
    }
    const toggleForm = () => {
        setChangeForm(!changeForm)
    }
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className="absolute w-full h-full">
                <img className="w-full h-full object-cover" src={BACKGROUND} alt="background_img" />
            </div>
            <div className="relative top-[20rem] w-full h-48 flex items-center justify-center ">
            <form className="p-12 bg-black bg-opacity-70 left-[35rem] w-[25rem] h-[30rem] rounded-md" onSubmit={(e)=>{e.preventDefault()}}>
                <div className="items-center w-full h-full">
                    <div className="text-white font-semibold text-4xl my-5">
                        {(changeForm)? "Sign In" : "Sign Up"}
                    </div>
                    {(changeForm)||<input ref={name} type="text" placeholder="Full Name" className="w-full p-2 my-2 bg-black  bg-opacity-0 border-[1px] rounded-md text-white"/>}
                    <input ref={email} type="text" placeholder="Email Address" className="w-full p-2 my-2 bg-black  bg-opacity-0 border-[1px] rounded-md text-white"/>
                    <input ref={password} type="password" placeholder="Password" className="w-full p-2 my-2 bg-black  bg-opacity-0 border-[1px] rounded-md text-white"/>
                    <div className="text-red-600">{errorMessage}</div>
                    <button className="text-white text-lg p-1.5 my-3 w-full rounded-md bg-red-600" onClick={()=>{handleButtonClick()}}>
                        {(changeForm)? "Sign In" : "Sign Up"}
                    </button>
                    <div className="text-white text-opacity-65 my-5">
                        {
                            (changeForm)?<div className="pl-12">New to Netflix?<span className="text-white cursor-pointer hover:text-blue-600" onClick={()=>{toggleForm()}}> Sign Up NOW!</span></div>:
                            <div className="pl-8">Already Registered?<span className="text-white cursor-pointer hover:text-blue-600" onClick={()=>{toggleForm()}}> Sign In NOW!</span></div>
                        }
                    </div>
                </div>
            </form>
            </div>
        </>
        
    );
};

export default Login;