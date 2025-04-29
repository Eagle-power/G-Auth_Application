import Login from "./Login";
import './index.css'
function App() {
  return (
    <>
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textAlign: "center",
          marginBottom: "20px",
          
        }}
      >
        <span style={{ color: "#4285F4" }}>G</span>
        <span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span>
        <span style={{ color: "#EA4335" }}>e</span>{" "}
        <span style={{ animation: "colorShift 3s linear infinite" }}>
          Authentication
        </span>
      </h1>
      <Login />
    </>
  );
}

export default App;
