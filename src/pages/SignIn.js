import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

let project_name = "Welcome to Opulent";
let tagline = "Your first healthy step forward";

export default function SignIn() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#09090c" }}
    >
      <div
        className="card p-5 mb-2 text-white mx-auto"
        style={{
          padding: "100px",
          backgroundColor: "#09090c",
        }}
      >
        <form>
          <div className="form-group"></div>
          <h1 className="mb-2">{project_name}</h1>
          <h5 style={{ fontSize: "18px", color: "#98a1b2" }} className="mb-4">
            {tagline}
          </h5>
          <div className="form-group mb-4">
            <label className="form-label">🔒</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <small id="emailHelp" className="form-text text-light">
              Save your password.
            </small>
          </div>
          <div className="mb-3 text-center">
            <button
              style={{
                width: "100%",
              }}
              type="submit"
              className="glow-btn me-4"
            >
              Continue 👋
            </button>
          </div>
          <div className="mb-4 text-center">
            <button
              style={{
                width: "100%",
                backgroundColor: "#424D42",
                borderColor: "#424D42",
              }}
              type="submit"
              className="btn btn-primary"
            >
              Forgot Password
            </button>
          </div>
          <div>
            <label className="form-label">Or</label>
            <br />
            <button
              type="button"
              className="login-with-google-btn"
              onClick={signInWithGoogle}
            >
              Google Sign-In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
