class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<section class="footer">
                <div class="container">
                    <div class="footer_m">
                        <div class="footer_cnt">
                            <a href='index.html'><img src="image/logo.png" /></a>
                            <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                        <div class="footer_cnt">
                            <h3>Information</h3>
                            <ul>
                                <li><a href="termsconditions.html">Terms & Conditions</a></li>
                                <li><a href="privacypolicy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="footer_cnt">
                            <h3>Support and Help</h3>
                            <ul>
                                <li><a href="contactus.html">Contact Support</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6>Copyrights Moanplease.com. All Rights Reserved</h6>
            </section>`;
  }
}

customElements.define('footer-component', Footer);