function LoginPage() {
    return (
        <div className="auth-container">
            <h2>Login</h2>
            <p className="error-message"></p>
            <form>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        type="password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <p className="register-link">
                Don't have an account? <a href="/register">Register</a>
            </p>
        </div>
    );
}

export default LoginPage;
