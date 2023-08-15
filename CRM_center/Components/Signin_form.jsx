

export function Sign_in()  {
    return (
        <> 
            
        <form className="SignIn_Card" alt="sign in form"> <br />
        <img  className="IconFlag" />
        <label htmlFor="Username">Username</label> <br />
        <input type="text" aria-label="Username" className="usernameField" /> <br />
        <label htmlFor="Username">Password</label> <br />
                <input type="password" aria-label="Password" className="passwordField"/> <br />
        <button className="SigninButton" type="Submit"> Sign In </button>        
        </form>
        </>
    )
}