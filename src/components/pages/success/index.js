import {useNavigate} from "react-router";
import styles from './index.css'

export default function Success() {

    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <div className="jumbotron text-center p-account container">
                <h1 className="display-3">Thank You!</h1>
                <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                <p>
                Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
                </p>
                <p className="lead">
                <button onClick={() => navigate('/')} class="btn btn-primary btn-sm">Continue to Shopping</button>
                </p>
            </div>
        </div>
    )
}