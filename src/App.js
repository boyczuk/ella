import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>For My Love ❤️</h1>
      <p style={styles.message}>
        You make every day special, and I just wanted to say how much I appreciate you! 💕
      </p>
      <div style={styles.heart}>❤️</div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffe6e6",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ff3366",
  },
  message: {
    fontSize: "18px",
    color: "#333",
    maxWidth: "400px",
  },
  heart: {
    fontSize: "50px",
    color: "#ff3366",
    animation: "heartbeat 1s infinite alternate",
  },
};

export default App;
