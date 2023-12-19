import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("TOKEN", res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam etmek için giriş yapın</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
