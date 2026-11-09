// import Image from "next/image";
// import Link from "next/link";
import "./homepage.css";

export default function Home() {
  return (
    <div>
      <main>

        <nav className="navbar">
            <ul>
                <li id="website-title">Project One</li>
                <li><a href="./signup">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="./" id="navbar-current">Home</a></li>
            </ul>
        </nav>

        <div className="homepage-container">

        <div className="wrapper">
            <form action="">
                <h1> Welcome to Project One </h1>

            </form>

        </div>

        </div>

      </main>
    </div>
  );
}
