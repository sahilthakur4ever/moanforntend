class Modal extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<!-- Login Modal  -->
                                 <div class="modal fade login-modal" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <div class="login">
                                <form id="loginForm">
                                    <div class="login-m">
                                        <div class="col-sm-6">
                                            <div class="login-m-l" id="Login">
                                                <div class="wrapper">
                                                    <span class="wrapper_span">As A User</span>
                                                    <div class="input_wrapper">
                                                        <label><input type="checkbox" class="switch_4" id="loginRoleToggle" />
                                                        <span class="is_checked"><i class="fa-solid fa-circle-small"></i></span>
                                                        <span class="is_unchecked"><i class="fa-solid fa-circle-small"></i></span></label>
                                                    </div>
                                                    <span class="wrapper_span">As a creator</span>
                                                </div>
                                                <h6>Start for Free</h6>
                                                <h2>Login your account<span>.</span></h2>
                                                <div class="login-form">
                                                    <div class="innerinput">
                                                        <input type="email" id="loginEmail" required />
                                                        <label class="floating-label">Email</label>
                                                    </div>
                                                    <div class="innerinput">
                                                        <input type="password" id="loginPassword" required />
                                                        <label class="floating-label">Password</label>
                                                    </div>
                                                </div>
                                                <button type="submit" class="login-btn">Login</button>
                                                <p>Don’t A Member?<button type="button" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#joinmodal">Join Now</button></p>
                                                <p><button type="button" id="forgotPasswordBtn">Forgot Password?</button></p>
                                                <p id="loginError" style="color: red;"></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="login-m-r">
                                                <img src="image/loginm.png" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div id="forgotPasswordSection" style="display: none;">
                                    <div class="login-m">
                                        <div class="col-sm-6">
                                            <div class="login-m-l" id="ForgotPassword">
                                                <div class="wrapper">
                                                    <span class="wrapper_span">Forgot Password</span>
                                                    <div class="input_wrapper">
                                                        <label><input type="checkbox" class="switch_4" id="forgotRoleToggle" />
                                                        <span class="is_checked"><i class="fa-solid fa-circle-small"></i></span>
                                                        <span class="is_unchecked"><i class="fa-solid fa-circle-small"></i></span></label>
                                                    </div>
                                                    <span class="wrapper_span">As a creator</span>
                                                </div>
                                                <h6>Start for Free</h6>
                                                <h2>Forgot Password<span>.</span></h2>
                                                <div class="login-form">
                                                    <div class="innerinput">
                                                        <input type="email" id="resetEmail" required />
                                                        <label class="floating-label">Email</label>
                                                    </div>
                                                </div>
                                                <button type="button" id="sendResetLinkBtn" class="login-btn">Send Reset Link</button>
                                                <p><button type="button" id="backToLoginFromOtp" class="login-btn">Back to Login</button></p>
                                                <p id="resetError" style="color: red;"></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="login-m-r">
                                                <img src="image/loginm.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="otpSection" style="display: none;">
                                    <div class="login-m">
                                        <div class="col-sm-6">
                                            <div class="login-m-l" id="Otp">
                                                <div class="wrapper">
                                                    <span class="wrapper_span">OTP Verification</span>
                                                    <div class="input_wrapper">
                                                        <label><input type="checkbox" class="switch_4" id="otpRoleToggle" />
                                                        <span class="is_checked"><i class="fa-solid fa-circle-small"></i></span>
                                                        <span class="is_unchecked"><i class="fa-solid fa-circle-small"></i></span></label>
                                                    </div>
                                                    <span class="wrapper_span">As a creator</span>
                                                </div>
                                                <h6>Start for Free</h6>
                                                <h2>OTP Verification<span>.</span></h2>
                                                <div class="login-form">
                                                    <div class="innerinput">
                                                        <input type="text" id="otpInput" maxlength="6" required />
                                                        <label class="floating-label">OTP</label>
                                                    </div>
                                                </div>
                                                <button type="button" id="verifyOtpBtn" class="login-btn">Verify OTP</button>
                                                <p><button type="button" id="backToLoginFromOtp" class="login-btn">Back to Login</button></p>
                                                <p id="otpError" style="color: red;"></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="login-m-r">
                                                <img src="image/loginm.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="newPasswordSection" style="display: none;">
                                    <div class="login-m">
                                        <div class="col-sm-6">
                                            <div class="login-m-l" id="NewPassword">
                                                <div class="wrapper">
                                                    <span class="wrapper_span">New Password</span>
                                                    <div class="input_wrapper">
                                                        <label><input type="checkbox" class="switch_4" id="newPasswordRoleToggle" />
                                                        <span class="is_checked"><i class="fa-solid fa-circle-small"></i></span>
                                                        <span class="is_unchecked"><i class="fa-solid fa-circle-small"></i></span></label>
                                                    </div>
                                                    <span class="wrapper_span">As a creator</span>
                                                </div>
                                                <h6>Start for Free</h6>
                                                <h2>New Password<span>.</span></h2>
                                                <div class="login-form">
                                                    <div class="innerinput">
                                                        <input type="password" id="newPasswordInput" required />
                                                        <label class="floating-label">New Password</label>
                                                    </div>
                                                    <div class="innerinput">
                                                        <input type="password" id="confirmPasswordInput" required />
                                                        <label class="floating-label">Confirm Password</label>
                                                    </div>
                                                </div>
                                                <button type="button" id="resetPasswordBtn" class="login-btn">Reset Password</button>
                                                <p id="newPasswordError" style="color: red;"></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="login-m-r">
                                                <img src="image/loginm.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              <!-- Join Now Modal  -->
              <div class="modal fade login-modal" id="joinmodal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                  <div class="modal-dialog modal-xl modal-dialog-centered">
                      <div class="modal-content">
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeregisterForm"></button>
                          <div class="modal-body">
                              <div class="login">
                                  <form id="registerForm">
                                      <div class="login-m">
                                          <div class="col-sm-6">
                                              <div class="login-m-l" id="Register">
                                                  <div class="wrapper">
                                                      <span class="wrapper_span">As A User</span>
                                                      <div class="input_wrapper">
                                                          <label><input type="checkbox" class="switch_4" id="registerRoleToggle" />
                                                          <span class="is_checked"><i class="fa-solid fa-circle-small"></i></span>
                                                          <span class="is_unchecked"><i class="fa-solid fa-circle-small"></i></span></label>
                                                      </div>
                                                      <span class="wrapper_span">As a creator</span>
                                                  </div>
                                                  <h6>Start for Free</h6>
                                                  <h2>Register your account<span>.</span></h2>
                                                  <div class="login-form">
                                                      <div class="innerinput">
                                                          <input type="email" id="registerEmail" required />
                                                          <label class="floating-label">Email</label>
                                                      </div>
                                                      <div class="innerinput">
                                                          <input type="password" id="registerPassword" required />
                                                          <label class="floating-label">Password</label>
                                                      </div>
                                                          <div class="innerinput">
                                                          <input type="password" id="registerconfirmPassword" required />
                                                          <label class="floating-label">Confirm Password</label>
                                                      </div>
                                                  </div>
                                                  <button type="submit" class="login-btn">Sign Up</button>
                                                  <p>Already A Member?<button type="button" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginmodal">Sign In</button></p>
                                                  <p id="registerError" style="color: red;"></p>
                                              </div>
                                          </div>
                                          <div class="col-sm-6">
                                              <div class="login-m-r">
                                                  <img src="image/signupm.png" />
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;
        this.querySelector("#loginForm").addEventListener("submit", this.loginUser.bind(this));
        this.querySelector("#registerForm").addEventListener("submit", this.registerUser .bind(this)); // Add this line
        this.querySelector("#forgotPasswordBtn").addEventListener("click", this.showForgotPassword.bind(this));
        this.querySelector("#sendResetLinkBtn").addEventListener("click", this.sendResetLink.bind(this));
        this.querySelector("#verifyOtpBtn").addEventListener("click", this.verifyOtp.bind(this));
        this.querySelector("#resetPasswordBtn").addEventListener("click", this.resetPassword.bind(this));
        this.querySelector("#backToLoginFromForgot").addEventListener("click", this.showLoginModal.bind(this));
        this.querySelector("#backToLoginFromOtp").addEventListener("click", this.showLoginModal.bind(this));
    }
    showForgotPassword() {
        document.getElementById("forgotPasswordSection").style.display = "block";
        document.getElementById("loginForm").style.display = "none";
    }
    async sendResetLink() {
        const email = document.querySelector("#resetEmail").value;
        const resetError = document.querySelector("#resetError");
        resetError.textContent = ""; 
        try {
            const response = await fetch("http://13.52.243.89:8080/user/forgotPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (data.statusCode ==200) {
                localStorage.setItem("resetUserId", data.userId);
                document.getElementById("otpSection").style.display = "block";
                document.getElementById("forgotPasswordSection").style.display = "none";
            } else {
                resetError.textContent = data.message || "Failed to send OTP.";
            }
        } catch (error) {
            resetError.textContent = "Error connecting to the server.";
        }
    }
    async verifyOtp() {
        const otp = document.querySelector("#otpInput").value;
        const otpError = document.querySelector("#otpError");
        const userId = localStorage.getItem("resetUserId");
        otpError.textContent = "";
        if (!userId) {
            otpError.textContent = "User verification failed. Please restart the process.";
            return;
        }
        try {
            const response = await fetch("http://13.52.243.89:8080/user/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, otp }),
            });
            console.log(response," i am varify response");
            const data = await response.json();
            console.log(data,"i am varify data");
            if (data.statusCode == 200) {
                document.getElementById("newPasswordSection").style.display = "block";
                document.getElementById("otpSection").style.display = "none";
            } else {
                otpError.textContent = data.message || "Invalid OTP.";
            }
        } catch (error) {
            otpError.textContent = "Error connecting to the server.";
        }
    }
    async resetPassword() {
        const newPassword = document.querySelector("#newPasswordInput").value;
        const confirmPassword = document.querySelector("#confirmPasswordInput").value;
        const newPasswordError = document.querySelector("#newPasswordError");
        const userId = localStorage.getItem("resetUserId"); 
        newPasswordError.textContent = ""; 
        if (!userId) {
            newPasswordError.textContent = "User verification failed. Please restart the process.";
            return;
        }
        if (newPassword !== confirmPassword) {
            newPasswordError.textContent = "Passwords do not match.";
            return;
        }
        try {
            const response = await fetch("http://13.52.243.89:8080/user/resetPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, newPassword, confirmPassword }),
            });
            const data = await response.json();
            if (data.statusCode === 200) {
                alert("Password reset successful! You can now log in.");
                localStorage.removeItem("resetUserId"); 
                this.closeModal(); 
                this.showLoginModal();
            } else {
                newPasswordError.textContent = data.message || "Failed to reset password.";
            }
        } catch (error) {
            newPasswordError.textContent = "Error connecting to the server.";
        }
    }
    showLoginModal() {
        const loginModal = new bootstrap.Modal(document.getElementById("loginmodal"));
        loginModal.show();
    }
    closeModal() {
        const modal = document.getElementById("loginmodal");
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    }
    async loginUser(event) {
        event.preventDefault();
        const email = document.querySelector("#loginEmail").value;
        const password = document.querySelector("#loginPassword").value;
        const role = document.querySelector("#loginRoleToggle").checked ? "creator" : "user"; 
        const errorMessage = document.querySelector("#loginError");
        try {
            const response = await fetch("http://13.52.243.89:8080/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("userToken", data.token); 
                window.location.href = "myaccount.html";
            } else {
                errorMessage.textContent = data.message || "Login failed. Please try again.";
            }
        } catch (error) {
            errorMessage.textContent = "Error connecting to server.";
        }
    }
    async registerUser (event) {
        event.preventDefault(); // Prevent the default form submission
        const email = document.querySelector("#registerEmail").value.trim();
        const password = document.querySelector("#registerPassword").value.trim();
        const confirmPassword = document.querySelector("#registerconfirmPassword").value.trim();
        const role = document.querySelector("#registerRoleToggle").checked ? "creator" : "user"; 
        const errorMessage = document.querySelector("#registerError");
        errorMessage.textContent = "";
        
        if (!email || !password || !confirmPassword) {
            errorMessage.textContent = "All fields are required.";
            return;
        }
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            return;
        }
        try {
            const response = await fetch("http://13.52.243.89:8080/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, confirmPassword, role }),
            });
            const data = await response.json();
            if (data.statusCode == 200) {
                alert("Registration successful! You can now log in.");
                localStorage.setItem("registeredUser Email", email); 
                window.location.href = "myaccount.html"; 
            } else {
                errorMessage.textContent = data.message || "Registration failed. Please try again.";
            }
        } catch (error) {
            errorMessage.textContent = "Error connecting to the server.";
        }
    }
}
customElements.define("modal-component", Modal);

