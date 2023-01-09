import React from "react";

const login = {
    "naver" : "https://nid.naver.com/oauth2.0/authorize",
    "kakao" : "https://kauth.kakao.com/oauth/authorize",
}

// https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=h9rA5YtXEZYFtXZ1pKKe&redirect_uri=http://localhost:3000/callback
const naver = {
    "response_type" : "code",
    "client_id" : "h9rA5YtXEZYFtXZ1pKKe",
    "redirect_uri" : "http://localhost:3000/callback"
};

// https://kauth.kakao.com/oauth/authorize?client_id=f0db481b6229a4dddd63ecd236be6b92&redirect_uri=http://localhost:3000/callback&response_type=code
const kakao = {
    "response_type" : "code",
    "client_id" : "f0db481b6229a4dddd63ecd236be6b92",
    "redirect_uri" : "http://localhost:3000/callback",
};

const SNSLogin = () => {

    const test = (obj, type) => {

        const keys = Object.keys(obj);
        const url = keys.map(key => {
            return `${key}=${obj[key]}`;
        }).join("&");
    
        // console.log(`${login[type]}?${url}`);
        window.location.href = `${login[type]}?${url}`;
    }
    return (
        <div>
            <button onClick={() => test(naver, "naver")}>네이버</button>
            <button onClick={() => test(kakao, "kakao")}>카카오</button>
        </div>
    );
};

export default SNSLogin;