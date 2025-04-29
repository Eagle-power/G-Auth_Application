import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const Login = () => {
  const { user } = useContext(AuthContext);

  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  const handleLogout = () => {
    window.location.href = "http://localhost:3000/auth/logout";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {user ? (
          <>
            <img src={user.profilePicture} alt="User avatar" style={styles.avatar} />
            <h2 style={styles.heading}>Welcome, {user.displayName}</h2>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <div style={styles.buttonWrapper}>
            <p style={styles.welcomeTitle}>Welcome to My Google Sign In page</p>
            <p style={styles.subtext}>Sign in with Google in a very easy way.</p>
            <button onClick={handleLogin} style={styles.loginButton}>
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                style={styles.googleIcon}
              />
              Login with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '380px',
    width: '100%',
  },
  avatar: {
    width: '100px',
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: '1.8rem',
    fontWeight:'bold',
    marginBottom: '0.5rem',
    color: '#333',
  },
  subtext: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.2rem',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#fff',
    color: '#444',
    border: '2px solid #ccc',
    borderRadius: '12px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  googleIcon: {
    width: '30px',
    height: '30px',
  },
  logoutButton: {
    backgroundColor: '#ff4b5c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default Login;
