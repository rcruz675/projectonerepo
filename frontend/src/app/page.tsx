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
            <div className="welcome-wrapper">
                <h1> Welcome to the Arknights Terra Wiki, Doctor! </h1>

                <p> We are an unofficial, community-driven information website about the mobile tower defense game, <i>Arknights</i>, currently hosting <span style={{ color: "cyan", textDecoration: "underline", textDecorationColor: "white" }}>17,590 articles</span>. <br />Do remember to visit the <span style={{ color: "cyan" }}>policies and guidelines page</span> to know the dos and don'ts of the Arknights Terra Wiki. </p>

                <p style={{ color: "yellow" }}> <span style={{ color: "red", fontWeight: "bold" }}>NOTICE:</span> The Arknights Terra Wiki contains <span style={{ color: "cyan", fontWeight: "bold" }}>SPOILERS</span> for content not yet released on the Global server of Arknights. Proceed at your own risk! </p>
                <p style={{ color: "yellow" }}> Please note that the Arknights Terra Wiki is understaffed at this time, thus some articles may be incomplete and the updating of existing articles may be slower than expected. If you wish to help out by joining the wiki's administration team, please contact the <span style={{ color: "cyan" }}>administrators</span>. </p>

                <p> If you are a wiki editor from Fandom, you can reclaim your username <span style={{ color: "cyan" }}>through this link</span>. </p>
                <p> We have a sister wiki dedicated to <i>Arknights: Endfield</i>: the <span style={{ color: "cyan" }}>Endfield Talos Wiki</span>! </p>


            </div>

        </div>

        </div>

      </main>
    </div>
  );
}
