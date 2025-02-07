import React, { useState } from 'react';
import styles from './SignInForm.module.css';
import Button from '../Button/Button';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here (e.g., API call)
    console.log('Sign-in form submitted:', { email, password });
  };

  return (
    <div className={styles.signInFormContainer}>
      <div className={styles.wrapper}>
        <h2 className={styles.signInTitle}>Log In</h2>
        <p className={styles.signInDescription}>Lorem ipsum dolor sit amet adipiscing elit.</p>

        <form className={styles.signInForm} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.inputField}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button styleType="primary" className={styles.loginButton} type="submit">
            Log In
          </Button>
        </form>

        <div className={styles.divider}></div>

        <div className={styles.socialLogin}>
          <Button styleType="secondary" className={styles.socialButton}>
            <FaGoogle className={styles.socialIcon} /> Log in with Google
          </Button>
          <Button styleType="secondary" className={styles.socialButton}>
            <FaFacebook className={styles.socialIcon} /> Log in with Facebook
          </Button>
          <Button styleType="secondary" className={styles.socialButton}>
            <FaApple className={styles.socialIcon} /> Log in with Apple
          </Button>
        </div>

        <div className={styles.footerLinks}>
          <Link to="/forgot-password" className={styles.footerLink}>Forgot your password?</Link>
          <p>
            Don't have an account? <Link to="/signup" className={styles.signUpLink}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;