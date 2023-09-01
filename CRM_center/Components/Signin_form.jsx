import { useState, useEffect, useRef , useContext} from "react"
import AuthContext from '../src/assets/authProvider'

    const LOGIN_URL = '/signin' ;


export function Sign_in()  {
    const {setAuth} = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succes, setSucess] = useState('');

 

    useEffect( () => {
        setErrMsg('');
    }, [username, password]);

const handleSubmit = async (e) => {
     e.preventDefault();

     try {
        const response = await fetch(LOGIN_URL, 
            JSON.stringify({username, _password: password},
            {
                headers: { 'content-type' : 'application/json'},
            }))
        console.log(JSON.stringify(response))
        setUsername('');
        setPassword('');
     } catch (error) {
        if(!error?.response) {
            setErrMsg('No response from the server')
        }
        else if (error.response?.status == 400) {
            setErrMsg('Missng username or Password')
        } else {
            setErrMsg('Login Failed !!')
        }
        errRef.current.focus();
     }
}

    return (
        <> 
            
        <form className="SignIn_Card" alt="sign in form" onSubmit={handleSubmit}> <br />
        <img  className="IconFlag" />
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive" ></p>
        <label htmlFor="Username">Username</label> <br />
        <input 
        type="text" 
        aria-label="Username" 
        className="usernameField"
        autoComplete="off"
        ref={userRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        /> 
        <br />
        <label htmlFor="password">Password</label> <br />
        <input 
        type="password"
        aria-label="Password" 
        className="passwordField"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
                 /> <br />
        <button className="SigninButton" type="Submit"> Sign In </button>        
        </form>
        </>
    )
}