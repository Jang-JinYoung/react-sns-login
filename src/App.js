import './App.css';

function App() {
  const SNSauthUri = {
    kakao: "https://kauth.kakao.com/oauth/authorize?",
  };

  const loginType = ["kakao", "naver", "google", "apple"];

  const SNS = {
    kakao: {
      client_id: "client_id",
      response_type: "code",
      redirect_uri: "http://localhost:3000/oauth2/callback/kakao",
      prompt: "login",
    },

  };

  const getSNSAuthUri = (e) => {
    return Object.entries(SNS[e])
      .map(([key, value]) => value && `${key}=${value}`)
      .filter((v) => v)
      .join("&");
  };


  /** SNS 로그인 버튼 클릭 */
  const clickSNSLoginButton = (type) => {
    window.location.href = `${SNSauthUri[type]}${getSNSAuthUri(type)}`;
  };



  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;


