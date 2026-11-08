// import Image from "next/image";
// import Link from "next/link";
import "./login.css";

export default function Home() {
  return (
    <div>
      <main>



        <nav className="navbar">
            <ul>
                <li id="website_title">Project One</li>
                <li><a href="./signup">Sign Up</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Home</a></li>
            </ul>
        </nav>

        <div className="login-container">

        <div className="wrapper">
            <form action="">
                <h1> Login </h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <i className='bx bxs-user-circle'></i>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <i className='bx bxs-lock'></i>
                </div>

                <div className="remember-forget">
                    <label id="remember-me"><input type="checkbox" /> Remember me </label>
                    <a href="#"> Forgot Password? </a>

                </div>

                <button type="submit" className="btn"> Login </button>

                <div className="register-link">
                    <p> Don't have an account? <a href="#"> Register here </a> </p>
                </div>

            </form>

        </div>

        </div>

      </main>
    </div>
  );
}
