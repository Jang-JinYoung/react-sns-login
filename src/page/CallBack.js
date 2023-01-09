import React from "react";

const CallBack = () => {

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  console.log(code);
  return <div>callback</div>
};

export default CallBack;