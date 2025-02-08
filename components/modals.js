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
                                <form>
                                    <div class="login-m">
                                        <div class="col-sm-6">
                                            <div class="login-m-l" id="Login">
                                                <div class="wrapper">
                                                    <span class="wrapper_span">As A User</span>
                                                    <div class="input_wrapper">
                                                        <label> <input type="checkbox" class="switch_4" />
                                                        <span class="is_checked"><i class="fa-solid fa-circle-small"></i></span>
                                                        <span class="is_unchecked"><i class="fa-solid fa-circle-small"></i></span></label>
                                                    </div>
                                                    <span class="wrapper_span">As a creator</span>
                                                </div>
                                                <h6>Start for Free</h6>
                                                <h2>Login your account<span>.</span></h2>
                                                <div class="login-form">
                                                    <div class="innerinput">
                                                       
                                                            <input type="email" name="" />
                                                         <label class="floating-label">Email</label>
                                                    </div>
                                                    <div class="innerinput">
                                                       
                                                        <input type="password" name="" />
                                                         <label class="floating-label">Password</label>
                                                    </div>
                                                </div>
                                                <button type="button" onclick="window.location.href='myaccount.html'" class="login-btn">Login</button>
                                                <p>Don’t A Member?<button type="button" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#joinmodal">Join Now</button></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="login-m-r">
                                                <img src="image/loginm.png" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Join Now Modal  -->

            <div class="modal fade login-modal" id="joinmodal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <div class="login">
                                <form>
                                    <div class="login-m">
                                        <div class="col-sm-6">
                                            <div class="login-m-l" id="Register">
                                                <div class="wrapper">
                                                    <span class="wrapper_span">As A User</span>
                                                    <div class="input_wrapper">
                                                        <label><input type="checkbox" class="switch_4" />
                                                        <span class="is_checked"><i class="fa-solid fa-circle-small"></i></span>
                                                        <span class="is_unchecked"><i class="fa-solid fa-circle-small"></i></span></label>
                                                    </div>
                                                    <span class="wrapper_span">As a creator</span>
                                                </div>
                                                <h6>Start for Free</h6>
                                                <h2>Register your account<span>.</span></h2>
                                                <div class="login-form">
                                                    <div class="reg-name">
                                                        <div class="col-sm-6">
                                                            <div class="innerinput">
                                                                <input type="text" name="" />
                                                                <label class="floating-label">First Name</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="innerinput">
                                                                <input type="text" name="" />
                                                                <label class="floating-label">Last Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="innerinput">
                                                        <input type="email" name="" />
                                                        <label class="floating-label">Email</label>
                                                    </div>
                                                    <div class="innerinput">
                                                        <input type="password" name="" />
                                                        <label class="floating-label">Password</label>
                                                    </div>
                                                </div>
                                                <button class="login-btn">Sign Up</button>
                                                <p>Already A Member?<button type="button" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginmodal">Sign In</button></p>
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
  }
}

customElements.define('modal-component', Modal);