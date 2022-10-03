import logo from './logo.svg';
import './App.css';

function App() {
  const authUri = {
    kakao: "https://kauth.kakao.com/oauth/authorize?",
    naver: "https://nid.naver.com/oauth2.0/authorize?",
    google: "https://accounts.google.com/o/oauth2/v2/auth?",
    apple: "https://appleid.apple.com/auth/authorize?",
  };

  const loginType = ["kakao", "naver", "google", "apple"];

  /** SNS 로그인 버튼 클릭 */
  const clickSNSLoginButton = (type) => {
    // window.location.href = `${authUri[type]}${getSNSAuthUri(type)}`;
  };



  return (
    <div className="App">
      <header className="App-header">
        <div className="login_sns">
          <h3>SNS 계정 간편가입</h3>
          <ul>
            {loginType.map((type) => {
              return (
                <li key={type}>
                  <button style={{ marginTop: "10px" }} onClick={() => clickSNSLoginButton(type)}>{type}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
