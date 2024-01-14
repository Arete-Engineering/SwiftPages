import profile_picture from "./temp-pfp.jpg";
import "./styles.css";

let project_name = "Opulent";

export default function Header() {
    return (
        <header className="App_header">
            <ul>
                <li><a href="#">{project_name}</a></li>
                <li><a href="#">Earth</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">Memory</a></li>
                <li><img src={profile_picture} alt="ProfilePicture" className="profile_picture"/></li>
            </ul>
        </header>
    )
}