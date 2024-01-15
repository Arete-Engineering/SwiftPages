import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

let project_name = 'Opulent';
let tagline = 'Your memories, your journal.';

export default function SignIn() {
    const [ user ] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };
    return (
        <div className="sign_in">
            <h1>{project_name}</h1>
            <h4>{tagline}</h4>
            <button type="button" className="btn btn-primary btn-sm" onClick={signInWithGoogle}>Google Sign-In</button>
        </div>
    )
}