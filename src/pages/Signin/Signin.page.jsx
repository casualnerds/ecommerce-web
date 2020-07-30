import React, { Component } from 'react'

import styles from './Signin.module.css';

class Signin extends Component {

    render() {
        return (
            <div className={styles.signinContainer}>
                <h1>Welcome to Serb<span style={{ color: '#4CAF50', fontSize: '60px' }}>AA</span>da Administrator</h1>
                <div className={styles.signinWrap}>
                    <h3 className={styles.singinH3}>Login to your account</h3>
                    <form>
                        <input type="text" id="username" name="username" placeholder='Username' /><br /><br />
                        <input type="password" id="pword" name="pword" placeholder='Password' /><br /><br />
                        <label style={{ float: "left", marginBottom: 14 }} htmlFor="remember">
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                        <input type="submit" value="Sign In" />
                    </form>
                </div>
            </div>
        )
    }
}


export { Signin };
