import React, { useState } from 'react';
import styles from './SignUpForm.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here (e.g., API call)
    console.log('Sign-up form submitted:', { email, password });
  };

  return (
    <div className={styles.signUpFormContainer}>
      <div className={styles.wrapper}>
        <h2 className={styles.signUpTitle}>Sign Up</h2>
        <p className={styles.signUpDescription}>Lorem ipsum dolor sit amet adipiscing elit.</p>

        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <input
            type="name"
            className={styles.inputField}
            placeholder="Name"
            value={email}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Button styleType="primary" className={styles.signUpButton} type="submit">
            Sign Up
          </Button>
        </form>

        
        <hr />
        <br />
        <div className={styles.socialLogin}>
          <Button styleType="secondary" className={styles.socialButton}>
            <FaGoogle className={styles.socialIcon} /> Sign up with Google
          </Button>
          <Button styleType="secondary" className={styles.socialButton}>
            <FaFacebook className={styles.socialIcon} /> Sign up with Facebook
          </Button>
          <Button styleType="secondary" className={styles.socialButton}>
            <FaApple className={styles.socialIcon} /> Sign up with Apple
          </Button>
        </div>

        <div className={styles.footerLinks}>
          <p>
            Already have an account? <Link to="/signin" className={styles.loginLink}>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;