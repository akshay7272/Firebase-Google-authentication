import React from "react";

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>Hello World</h1>
      <button style={{ padding: "20px" }} onClick={logout}>
        Logout
      </button>
    </div>
  );
}
export default Home;
