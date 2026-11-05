// import Image from "next/image";
// import Link from "next/link";
import "./login.css";

export default function Home() {
  return (
    <div>
      <main>

        <h1>Project One</h1>

        <nav className="navbar">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
            </ul>
        </nav>

        <div id="login-content">
            <h3> This is the Login Page< /h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id feugiat est. Aliquam malesuada nisl id nunc vestibulum suscipit. Maecenas nunc ex, iaculis a augue sed, vestibulum blandit turpis. Nulla eget placerat elit. Vivamus dignissim odio in hendrerit vulputate. Aenean aliquet orci eu erat hendrerit sagittis. Etiam eget nunc ut est feugiat elementum sit amet ut augue. Donec ac est ac quam porta ultrices vel quis lectus. </p>
        </div>

      </main>
    </div>
  );
}
