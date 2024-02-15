import React from 'react'

const Blog = () => {
  return (
    <div>
               {/*====== App Content ======*/}
        <div className="app-content">

            {/*====== Section 1 ======*/}
            <div className="u-s-p-y-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="blog-w-master">
                                <div className="u-s-m-b-60">
                                    <div className="blog-w">

                                        <span className="blog-w__h">SEARCH</span>
                                        <form className="blog-search-form">

                                            <label for="post-search"></label>

                                            <input className="input-text input-text--primary-style" type="text" id="post-search" placeholder="Search"/>

                                            <button className="btn btn--icon fas fa-search" type="submit"></button></form>
                                    </div>
                                </div>
                                <div className="u-s-m-b-60">
                                    <div className="blog-w">

                                        <span className="blog-w__h">CATEGORIES</span>
                                        <ul className="blog-w__list">
                                            <li>

                                                <a href="blog-left-sidebar.html">Corporate</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">Creative</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">Design</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">News</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">Photography</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="u-s-m-b-60">
                                    <div className="blog-w">

                                        <span className="blog-w__h">ARCHIVES</span>
                                        <ul className="blog-w__list">
                                            <li>

                                                <a href="blog-left-sidebar.html">March 2017 (1)</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">December 2017 (3)</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">November 2017 (4)</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">September 2017 (1)</a></li>
                                            <li>

                                                <a href="blog-left-sidebar.html">August 2014 (1)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="u-s-m-b-60">
                                    <div className="blog-w">

                                        <span className="blog-w__h">RECENT POSTS</span>
                                        <ul className="blog-w__b-l">
                                            <li>
                                                <div className="b-l__block">
                                                    <div className="b-l__date">

                                                        <span>25</span>

                                                        <span>July</span>

                                                        <span>2018</span></div>

                                                    <span className="b-l__h">

                                                        <a href="blog-detail.html">Life is an extraordinary Adventure</a></span>

                                                    <span className="b-l__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="b-l__block">
                                                    <div className="b-l__date">

                                                        <span>25</span>

                                                        <span>July</span>

                                                        <span>2018</span></div>

                                                    <span className="b-l__h">

                                                        <a href="blog-detail.html">Everyone can draw but need passion for it</a></span>

                                                    <span className="b-l__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="b-l__block">
                                                    <div className="b-l__date">

                                                        <span>25</span>

                                                        <span>July</span>

                                                        <span>2018</span></div>

                                                    <span className="b-l__h">

                                                        <a href="blog-detail.html">Rap is not an art</a></span>

                                                    <span className="b-l__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="u-s-m-b-60">
                                    <div className="blog-w">

                                        <span className="blog-w__h">RECENT COMMENTS</span>
                                        <ul className="blog-w__b-l-2">
                                            <li>
                                                <div className="b-l__block">

                                                    <span className="b-l__text">admin</span>

                                                    <span className="b-l__text">on</span>

                                                    <span className="b-l__h-2">

                                                        <a href="blog-detail.html">Life is all about opportunity</a></span></div>
                                            </li>
                                            <li>
                                                <div className="b-l__block">

                                                    <span className="b-l__text">admin</span>

                                                    <span className="b-l__text">on</span>

                                                    <span className="b-l__h-2">

                                                        <a href="blog-detail.html">Be More Confident in 30 Seconds</a></span></div>
                                            </li>
                                            <li>
                                                <div className="b-l__block">

                                                    <span className="b-l__text">admin</span>

                                                    <span className="b-l__text">on</span>

                                                    <span className="b-l__h-2">

                                                        <a href="blog-detail.html">Bury A Body With Me</a></span></div>
                                            </li>
                                            <li>
                                                <div className="b-l__block">

                                                    <span className="b-l__text">admin</span>

                                                    <span className="b-l__text">on</span>

                                                    <span className="b-l__h-2">

                                                        <a href="blog-detail.html">Everything Must Die</a></span></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="blog-w">

                                        <span className="blog-w__h">TAGS</span>
                                        <div className="blog-t-w">

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Dresses</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Shirts & Tops</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Polo Shirts</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Sweaters</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Blazers</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Vests</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Jackets</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="bp bp--img u-s-m-b-30">
                                <div className="bp__wrap">
                                    <div className="bp__thumbnail">

                                        {/*====== Image Code ======*/}

                                        <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">

                                            <img className="aspect__img" src="images/blog/post-2.jpg" alt=""/></a>
                                        {/*====== End - Image Code ======*/}
                                    </div>
                                    <div className="bp__info-wrap">
                                        <div className="bp__stat">

                                            <span className="bp__stat-wrap">

                                                <span className="bp__publish-date">

                                                    <a href="blog-left-sidebar.html">

                                                        <span>25 February 2018</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__author">

                                                    <a href="blog-left-sidebar.html">Dayle</a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__comment">

                                                    <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>

                                                        <span>8</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__category">

                                                    <a href="blog-left-sidebar.html">Learning</a>

                                                    <a href="blog-left-sidebar.html">News</a>

                                                    <a href="blog-left-sidebar.html">Health</a></span></span></div>

                                        <span className="bp__h1">

                                            <a href="blog-detail.html">Life is an extraordinary Adventure</a></span>

                                        <span className="bp__h2">A post with the image</span>
                                        <div className="blog-t-w">

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Travel</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Culture</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Place</a></div>
                                        <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <div className="gl-l-r">
                                            <div>

                                                <span className="bp__read-more">

                                                    <a href="blog-detail.html">READ MORE</a></span></div>
                                            <ul className="bp__social-list">
                                                <li>

                                                    <a className="s-fb--color" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li>

                                                    <a className="s-tw--color" href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li>

                                                    <a className="s-insta--color" href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li>

                                                    <a className="s-wa--color" href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                <li>

                                                    <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bp u-s-m-b-30">
                                <div className="bp__wrap">
                                    <div className="bp__thumbnail">

                                        {/*====== Gallery Code ======*/}
                                        <div className="slider-fouc">
                                            <div className="owl-carousel post-gallery">
                                                <div>

                                                    <a href="blog-detail.html">

                                                        <img className="u-img-fluid" src="images/blog/post-1.jpg" alt=""/></a></div>
                                                <div>

                                                    <a href="blog-detail.html">

                                                        <img className="u-img-fluid" src="images/blog/post-2.jpg" alt=""/></a></div>
                                                <div>

                                                    <a href="blog-detail.html">

                                                        <img className="u-img-fluid" src="images/blog/post-3.jpg" alt=""/></a></div>
                                            </div>
                                        </div>
                                        {/*====== End - Gallery Code ======*/}
                                    </div>
                                    <div className="bp__info-wrap">
                                        <div className="bp__stat">

                                            <span className="bp__stat-wrap">

                                                <span className="bp__publish-date">

                                                    <a href="blog-left-sidebar.html">

                                                        <span>25 March 2018</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__author">

                                                    <a href="blog-left-sidebar.html">Admin</a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__comment">

                                                    <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>

                                                        <span>16</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__category">

                                                    <a href="blog-left-sidebar.html">Drawing</a>

                                                    <a href="blog-left-sidebar.html">Design</a>

                                                    <a href="blog-left-sidebar.html">Illustrator</a></span></span></div>

                                        <span className="bp__h1">

                                            <a href="blog-detail.html">Everyone can draw but need passion for it</a></span>

                                        <span className="bp__h2">A post with the gallery</span>
                                        <div className="blog-t-w">

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Creativity</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Art</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Design</a></div>
                                        <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <div className="gl-l-r">
                                            <div>

                                                <span className="bp__read-more">

                                                    <a href="blog-detail.html">READ MORE</a></span></div>
                                            <ul className="bp__social-list">
                                                <li>

                                                    <a className="s-fb--color" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li>

                                                    <a className="s-tw--color" href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li>

                                                    <a className="s-insta--color" href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li>

                                                    <a className="s-wa--color" href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                <li>

                                                    <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bp u-s-m-b-30">
                                <div className="bp__wrap">
                                    <div className="bp__thumbnail">

                                        {/*====== Embed Audio Soundcloud ======*/}
                                        <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/532448574&amp;color=%23333333&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
                                        {/*====== End - Embed Audio Soundcloud ======*/}
                                    </div>
                                    <div className="bp__info-wrap">
                                        <div className="bp__stat">

                                            <span className="bp__stat-wrap">

                                                <span className="bp__publish-date">

                                                    <a href="blog-left-sidebar.html">

                                                        <span>25 April 2018</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__author">

                                                    <a href="blog-left-sidebar.html">John</a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__comment">

                                                    <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>

                                                        <span>99</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__category">

                                                    <a href="blog-left-sidebar.html">Soundcloud</a>

                                                    <a href="blog-left-sidebar.html">Lyrics</a></span></span></div>

                                        <span className="bp__h1">

                                            <a href="blog-detail.html">EDM is only dance-floor oriented it has no emotions</a></span>

                                        <span className="bp__h2">A post with the embed audio</span>
                                        <div className="blog-t-w">

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">EDM</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Trance</a></div>
                                        <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <div className="gl-l-r">
                                            <div>

                                                <span className="bp__read-more">

                                                    <a href="blog-detail.html">READ MORE</a></span></div>
                                            <ul className="bp__social-list">
                                                <li>

                                                    <a className="s-fb--color" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li>

                                                    <a className="s-tw--color" href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li>

                                                    <a className="s-insta--color" href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li>

                                                    <a className="s-wa--color" href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                <li>

                                                    <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bp u-s-m-b-30">
                                <div className="bp__wrap">
                                    <div className="bp__thumbnail">

                                        {/*====== Audio ======*/}
                                        <audio controls>
                                            <source src="audio/1.mp3"/></audio>
                                        {/*====== End - Audio ======*/}
                                    </div>
                                    <div className="bp__info-wrap">
                                        <div className="bp__stat">

                                            <span className="bp__stat-wrap">

                                                <span className="bp__publish-date">

                                                    <a href="blog-left-sidebar.html">

                                                        <span>25 June 2018</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__author">

                                                    <a href="blog-left-sidebar.html">Doe</a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__comment">

                                                    <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>

                                                        <span>15</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__category">

                                                    <a href="blog-left-sidebar.html">Genre</a>

                                                    <a href="blog-left-sidebar.html">Song</a></span></span></div>

                                        <span className="bp__h1">

                                            <a href="blog-detail.html">Pop Genre only focusing on stupidity</a></span>

                                        <span className="bp__h2">A post with the audio</span>
                                        <div className="blog-t-w">

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Pop</a></div>
                                        <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <div className="gl-l-r">
                                            <div>

                                                <span className="bp__read-more">

                                                    <a href="blog-detail.html">READ MORE</a></span></div>
                                            <ul className="bp__social-list">
                                                <li>

                                                    <a className="s-fb--color" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li>

                                                    <a className="s-tw--color" href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li>

                                                    <a className="s-insta--color" href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li>

                                                    <a className="s-wa--color" href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                <li>

                                                    <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bp u-s-m-b-30">
                                <div className="bp__wrap">
                                    <div className="bp__thumbnail">

                                        {/*====== Video ======*/}
                                        <div className="post-video-block">

                                            <a className="post-video-link"></a><video className="post-video" src="video/video-sample.mp4" poster="video/video-thumbnail.jpg"></video></div>
                                        {/*====== End - Video ======*/}
                                    </div>
                                    <div className="bp__info-wrap">
                                        <div className="bp__stat">

                                            <span className="bp__stat-wrap">

                                                <span className="bp__publish-date">

                                                    <a href="blog-left-sidebar.html">

                                                        <span>25 July 2018</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__author">

                                                    <a href="blog-left-sidebar.html">Doe</a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__comment">

                                                    <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>

                                                        <span>56</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__category">

                                                    <a href="blog-left-sidebar.html">Video</a>

                                                    <a href="blog-left-sidebar.html">Camera</a></span></span></div>

                                        <span className="bp__h1">

                                            <a href="blog-detail.html">Save your movement on a camera</a></span>

                                        <span className="bp__h2">A post with the video</span>
                                        <div className="blog-t-w">

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Camera</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Recording</a></div>
                                        <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <div className="gl-l-r">
                                            <div>

                                                <span className="bp__read-more">

                                                    <a href="blog-detail.html">READ MORE</a></span></div>
                                            <ul className="bp__social-list">
                                                <li>

                                                    <a className="s-fb--color" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li>

                                                    <a className="s-tw--color" href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li>

                                                    <a className="s-insta--color" href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li>

                                                    <a className="s-wa--color" href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                <li>

                                                    <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bp">
                                <div className="bp__wrap">
                                    <div className="bp__thumbnail">

                                        {/*====== Embed Video Youtube ======*/}
                                        <iframe src="https://www.youtube.com/embed/qKqSBm07KZk" allowfullscreen></iframe>
                                        {/*====== End - Embed Video Youtube ======*/}
                                    </div>
                                    <div className="bp__info-wrap">
                                        <div className="bp__stat">

                                            <span className="bp__stat-wrap">

                                                <span className="bp__publish-date">

                                                    <a href="blog-left-sidebar.html">

                                                        <span>25 August 2018</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__author">

                                                    <a href="blog-left-sidebar.html">John</a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__comment">

                                                    <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4"></i>

                                                        <span>4</span></a></span></span>

                                            <span className="bp__stat-wrap">

                                                <span className="bp__category">

                                                    <a href="blog-left-sidebar.html">Youtube</a>

                                                    <a href="blog-left-sidebar.html">Videos</a></span></span></div>

                                        <span className="bp__h1">

                                            <a href="blog-detail.html">Oh No! 1 Trillion Videos</a></span>

                                        <span className="bp__h2">A post with the embed video</span>
                                        <div className="blog-t-w">

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Recording</a>

                                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Freetime</a></div>
                                        <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <div className="gl-l-r">
                                            <div>

                                                <span className="bp__read-more">

                                                    <a href="blog-detail.html">READ MORE</a></span></div>
                                            <ul className="bp__social-list">
                                                <li>

                                                    <a className="s-fb--color" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li>

                                                    <a className="s-tw--color" href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li>

                                                    <a className="s-insta--color" href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li>

                                                    <a className="s-wa--color" href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                <li>

                                                    <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="post-center-wrap u-s-p-y-60">

                                {/*====== Pagination ======*/}
                                <ul className="blog-pg">
                                    <li className="blog-pg--active">

                                        <a href="blog-left-sidebar.html">1</a></li>
                                    <li>

                                        <a href="blog-left-sidebar.html">2</a></li>
                                    <li>

                                        <a href="blog-left-sidebar.html">3</a></li>
                                    <li>

                                        <a href="blog-left-sidebar.html">4</a></li>
                                    <li>

                                        <a className="fas fa-angle-right" href="blog-left-sidebar.html"></a></li>
                                </ul>
                                {/*====== End - Pagination ======*/}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== End - Section 1 ======*/}
        </div>
        {/*====== End - App Content ======*/}
    </div>
  )
}

export default Blog
