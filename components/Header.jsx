import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase_logic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((store) => store.user);
    const gptInfo = useSelector((store) => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth).then(() => {}
            ).catch((error) => {
            console.log(error);
            navigate("/error")
          });
    }
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const{ uid, email, displayName, photoURL }= user;

              dispatch(addUser({
                uid: uid, 
                email: email, 
                displayName: displayName,
                photoURL: photoURL
                }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
          });

          return () => unsubscribe();
    }, [])

    return (
        <div className="font-bold absolute bg-gradient-to-b from-black w-full z-10 flex items-center justify-between">
            <img 
            className="h-[8rem] ml-5" 
            src={LOGO} 
            alt="logo" />

            {userInfo && (
            <div className="flex gap-5 items-center">
            {gptInfo&&<select className="h-[3rem] text-[1rem] px-3 font-semibold m-2 bg-gray-700 text-white rounded-md" onChange={handleLanguageChange}>
                {SUPPORTED_LANG.map((item) => <option key={item.indentifier} value={item.indentifier}>{item.name}</option>)}
            </select>}
            <button className="h-[3rem] text-[1rem] text-white font-semibold rounded-md bg-purple-700 px-3" onClick={handleGptSearchClick}>{!gptInfo&&"GPT Search"||"HOME"}</button>
            <img onClick={() => handleSignOut()}
            className="h-[3rem] rounded-md mr-16"
            src={userInfo?.photoURL||AVATAR} alt="user" />
            </div>
            )}
        </div>
    );
};

export default Header;