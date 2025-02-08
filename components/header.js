class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<!-- Header Ads Start -->
            <section class="header_adss">
                <div class="container-fluid">
                    <div class="header_adss_m">
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                        <span>+++ Moanplease</span>
                    </div>
                </div>
            </section>


            <!-- Header Ads End -->

            <!-- Header Start -->
            <section class="header">
                <div class="container-fluid">
                    <div class="header_m">
                        <div class="col-sm-2">
                            <div class="header_logo">
                                <a href="index.html"><img src="image/logo.png" /></a>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="header_links">
                                <ul>
                                    <li class='menu_dropdown header_links_li' >
                                    <ul class="dropdown">
                                        <li><a href="#">Videos</a>
                                            <ul>
                                                <li><a href="videos.html">Recommended</a></li>
                                                <!-- <li><a href="#" class='submenu_dropdown'>Dropdown <i class="fa-solid fa-angle-right"></i></a> 
                                                    <ul>
                                                        <li><a href="videos.html">Recommended</a></li>
                                                        <li><a href="videos.html">Most Viewed</a></li>

                                                        <li><a href="">Submenu - 2</a></li>
                                                       <li><a href="#">Dropdown <i class="fa-solid fa-angle-right"></i></a>
                                                            <ul>
                                                                <li><a href="">Submenu - 1</a></li>
                                                                <li><a href="">Submenu - 2</a></li>
                                                                <li><a href="">Submenu - 3</a></li>
                                                            </ul>
                                                        </li> 
                                                        <li><a href="">Submenu - 3</a></li>
                                                    </ul>
                                                </li>-->
                                                 <li><a href="videos.html">Most Viewed</a></li>
                                                  <li><a href="videos.html">Trending Now/Hottest</a></li>
                                                
                                                <li><a href="videos.html">Newest</a></li>
                                                 <li><a href="videos.html">Top Rated</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <li  class='header_links_li'><a href="photos.html"> photos</a></li>
                                    <li  class='header_links_li'><a href="allcreators.html">Creators</a></li>
                                    <li  class='header_links_li'><a href="category.html"> category</a></li>
                                    <li  class='header_links_li'><a href="models.html"> models</a></li>
                                    <li  class='header_links_li'><a href="live.html"> Live</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="menu-wrap">
                            <nav class="menu">
                                <div class="icon-list">
                                    <ul>
                                        <li><a href="index.html"><img src='image/logo.png' /> </a></li>
                                       <!-- <li><a href="index.html"> Home </a></li> 
                                        <li><a href="#"> Explore</a></li> -->
                                        <li><a href="videos.html"> videos</a></li>
                                        <li><a href="photos.html"> photos</a></li>
                                        <li  class='header_links_li'><a href="allcreators.html">Creators</a></li>
                                        <li><a href="category.html"> category</a></li>
                                        <li><a href="models.html"> models</a></li>
                                        <li><a href="live.html"> Live</a></li>
                                    </ul>
                                </div>
                                <button class="close-button" id="close-button">X</button>
                            </nav>
                        </div>
                        <button class="menu-button fa fa-bars" id="open-button"></button>
                        <div class="col-sm-2">
                            <div class="header_btns">
                                <div class="dropdown searchdropdown">
                                    <span  class="search-btn dropbtn dropdown-toggle"  type="button" id="searchdropdown" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-magnifying-glass"></i></span>
                                    <ul class="dropdown-menu dropdown-content" aria-labelledby="searchdropdown">
                                        <div class="dropdown-content-m">
                                                <div class="dropdown-content-m-rght">
                                                    <ul>
                                                        <li>
                                                            <span><input placeholder="Search Now" type="text" /><i class="fa-solid fa-magnifying-glass"></i></span>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <i class="fa-solid fa-reply"></i>
                                                                <p>Lorem Ipsum</p>
                                                                <i class="fa-solid fa-x"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <i class="fa-solid fa-reply"></i>
                                                                <p>Lorem Ipsum</p>
                                                                <i class="fa-solid fa-x"></i>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dropdown-content-m-lft">
                                                    <div class="rcmvideocard">
                                                        <img src="image/dropdownimg.png" />
                                                        <div class="rcmvideoinfo">
                                                            <p>
                                                                <span><i class="fa-regular fa-clock"></i>1hr 24mins</span> <span><i class="fa-regular fa-eye"></i>21.3K views</span>
                                                            </p>
                                                            <h3>The Ring’s Lord</h3>
                                                        </div>
                                                    </div>
                                                    <div class="rcmvideocard">
                                                        <img src="image/rcmv21.png" />
                                                        <div class="rcmvideoinfo">
                                                            <p>
                                                                <span><i class="fa-regular fa-clock"></i>1hr 24mins</span> <span><i class="fa-regular fa-eye"></i>21.3K views</span>
                                                            </p>
                                                            <h3>The Ring’s Lord</h3>
                                                        </div>
                                                    </div>
                                                    <div class="rcmvideocard">
                                                        <img src="image/rcmv22.png" />
                                                        <div class="rcmvideoinfo">
                                                            <p>
                                                                <span><i class="fa-regular fa-clock"></i>1hr 24mins</span> <span><i class="fa-regular fa-eye"></i>21.3K views</span>
                                                            </p>
                                                            <h3>The Ring’s Lord</h3>
                                                        </div>
                                                    </div>
                                                    <div class="rcmvideocard">
                                                        <img src="image/rcmv23.png" />
                                                        <div class="rcmvideoinfo">
                                                            <p>
                                                                <span><i class="fa-regular fa-clock"></i>1hr 24mins</span> <span><i class="fa-regular fa-eye"></i>21.3K views</span>
                                                            </p>
                                                            <h3>The Ring’s Lord</h3>
                                                        </div>
                                                    </div>
                                                    <div class="rcmvideocard">
                                                        <img src="image/rcmv24.png" />
                                                        <div class="rcmvideoinfo">
                                                            <p>
                                                                <span><i class="fa-regular fa-clock"></i>1hr 24mins</span> <span><i class="fa-regular fa-eye"></i>21.3K views</span>
                                                            </p>
                                                            <h3>The Ring’s Lord</h3>
                                                        </div>
                                                    </div>
                                                    <div class="rcmvideocard">
                                                        <img src="image/rcmv25.png" />
                                                        <div class="rcmvideoinfo">
                                                            <p>
                                                                <span><i class="fa-regular fa-clock"></i>1hr 24mins</span> <span><i class="fa-regular fa-eye"></i>21.3K views</span>
                                                            </p>
                                                            <h3>The Ring’s Lord</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div class="dropown-show-result-btn">
                                            <button onclick="window.location.href='showresult.html';">See Results in Shoes (357)</button>
                                        </div>
                                    </ul>
                                </div>
                                <button  data-bs-toggle="modal" data-bs-target="#loginmodal">Login</button>
                                <button data-bs-toggle="modal" data-bs-target="#joinmodal">Join</button>
                              <!--  <span class='header_profile'>
                                <div class="dropdown">
                                  <span class="dropdown-toggle" type="button" id="profiledropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src='image/scpro.png' />Anne Doe
                                  </span>
                                  <ul class="dropdown-menu" aria-labelledby="profiledropdown">
                                    <li><a class="dropdown-item" href="myaccount.html"><i class="fa-regular fa-user"></i>My Account</a></li>
                                    <li><a class="dropdown-item" href="notification.html"><i class="fa-regular fa-bell"></i>Notifications</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-file-lock"></i>Privacy Policy</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fa-light fa-file"></i>Terms & Conditions</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-headset"></i>Help & Support</a></li>
                                    <hr>
                                    <li><a class="dropdown-item" href="index.html"><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</a></li>
                                  </ul>
                                </div>
                                </span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Header End -->`;
  }
}

customElements.define('header-component', Header);