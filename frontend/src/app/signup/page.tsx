// import Image from "next/image";
// import Link from "next/link";
import "./signup.css";

export default function Home() {
  return (
    <div>
      <main>

        <nav className="navbar">
            <ul>
                <li id="website-title">Project One</li>
                <li><a href="/signup" id="navbar-current">Sign Up</a></li>
                <li><a href="./login">Login</a></li>
                <li><a href="./">Home</a></li>
            </ul>
        </nav>

        <div className="signup-container">

        <div className="wrapper">
            <form action="">
                <h1> Sign Up </h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <i className='bx bxs-user-circle'></i>
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                    <i className='bx bxs-envelope'></i>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <i className='bx bxs-lock'></i>
                </div>

                <div className="remember-forget">
                    <label id="remember-me"><input type="checkbox" /> Accept <a href="#">Terms</a> & <a href="#">Conditions</a> </label>

                </div>

                <button type="submit" className="btn"> Sign Up </button>

                <div className="register-link">
                    <p> Already have an account? <a href="./login"> Login here </a> </p>
                </div>

            </form>

        </div>

        </div>

      </main>
    </div>
  );
}
