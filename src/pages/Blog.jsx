import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [tags, setTags] = useState({});
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/blogs/get_all_blogs?page=${currentPage}`);
                setBlogs(response.data.blogs);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch blogs');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [currentPage]);

    // Hàm để gọi API và lấy thông tin về một tag dựa trên id của nó
    const fetchTag = async (tagId) => {
        try {
            // Thực hiện cuộc gọi API để lấy thông tin về tag dựa trên id
            const response = await axios.get(`http://localhost:8080/api/tags-blog/${tagId}`);
            // Lưu thông tin của tag vào state
            setTags(prevState => ({
                ...prevState,
                [tagId]: response.data // Lưu thông tin tag với key là id của tag
            }));
        } catch (error) {
            console.error(`Failed to fetch tag with id ${tagId}`, error);
        }
    };

    useEffect(() => {
        // Lấy danh sách các tagIds từ các blogs hiện tại và gọi fetchTag cho mỗi tagId
        blogs.forEach(blog => {
            blog.tagBlogIds.forEach(tagId => {
                if (!tags[tagId]) { // Kiểm tra xem thông tin tag đã được lấy hay chưa
                    fetchTag(tagId);
                }
            });
        });
    }, [blogs]);



    const fetchTag2 = async (categoryId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/categories-blog/${categoryId}`);
            setCategories(prevState => ({
                ...prevState,
                [categoryId]: response.data // Lưu thông tin tag với key là id của tag
            }));
        } catch (error) {
            console.error(`Failed to fetch categoryId with id ${categoryId}`, error);
        }
    };

    useEffect(() => {
        blogs.forEach(blog => {
            blog.categoryBlogIds.forEach(categoryId => {
                if (!categories[categoryId]) {
                    fetchTag2(categoryId);
                }
            });
        });
    }, [blogs]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


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

                                                <input className="input-text input-text--primary-style" type="text" id="post-search" placeholder="Search" />

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

                                                            <a href="blog-detail">Life is an extraordinary Adventure</a></span>

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

                                                            <a href="blog-detail">Everyone can draw but need passion for it</a></span>

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

                                                            <a href="blog-detail">Rap is not an art</a></span>

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

                                                            <a href="blog-detail">Life is all about opportunity</a></span></div>
                                                </li>
                                                <li>
                                                    <div className="b-l__block">

                                                        <span className="b-l__text">admin</span>

                                                        <span className="b-l__text">on</span>

                                                        <span className="b-l__h-2">

                                                            <a href="blog-detail">Be More Confident in 30 Seconds</a></span></div>
                                                </li>
                                                <li>
                                                    <div className="b-l__block">

                                                        <span className="b-l__text">admin</span>

                                                        <span className="b-l__text">on</span>

                                                        <span className="b-l__h-2">

                                                            <a href="blog-detail">Bury A Body With Me</a></span></div>
                                                </li>
                                                <li>
                                                    <div className="b-l__block">

                                                        <span className="b-l__text">admin</span>

                                                        <span className="b-l__text">on</span>

                                                        <span className="b-l__h-2">

                                                            <a href="blog-detail">Everything Must Die</a></span></div>
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

                            {/* list */}
                            <div className="col-lg-9 col-md-8 col-sm-12">

                                {blogs.map(blog => (
                                    <div className="bp bp--img u-s-m-b-30" key={blog.id}>
                                        <div className="bp__wrap">
                                            <div className="bp__thumbnail">

                                                {/*====== Image Code ======*/}

                                                <Link to={`/blog-detail/${blog.id}`} className="aspect aspect--bg-grey aspect--1366-768 u-d-block">
                                                    <img className="aspect__img" src={blog.thumbnail} alt="" />
                                                </Link>


                                            </div>
                                            <div className="bp__info-wrap">
                                                <div className="bp__stat">

                                                    <span className="bp__stat-wrap">

                                                        <span className="bp__publish-date">

                                                            <a href="blog-left-sidebar.html">

                                                                <span>{blog.createdAt.substring(0, 10)}</span>

                                                            </a></span></span>

                                                    <span className="bp__stat-wrap">

                                                        <span className="bp__author">

                                                            <a href="blog-left-sidebar.html">Dayle</a></span></span>

                                                    {/* <span className="bp__stat-wrap">
                                                        <span className="bp__comment">
                                                            <a href="blog-detail"><i className="far fa-comments u-s-m-r-4"></i>
                                                                <span></span></a>
                                                        </span>
                                                    </span> */}

                                                    <span className="bp__stat-wrap">

                                                        <span className="bp__category">

                                                            {/* get-category */}

                                                            {blog.categoryBlogIds.map((categoryId, index) => {
                                                                const categorie = categories[categoryId];
                                                                if (categorie) {
                                                                    return (
                                                                        <React.Fragment key={categorie.id}>
                                                                            <a className="bp__category" href="blog-left-sidebar.html">{categorie.name}</a>
                                                                            {index < blog.categoryBlogIds.length - 1 && ' '} {/* Thêm khoảng trắng nếu chưa phải là thẻ cuối cùng */}
                                                                        </React.Fragment>
                                                                    );
                                                                } else {
                                                                    return null;
                                                                }
                                                            })}



                                                        </span></span>




                                                </div>

                                                <span className="bp__h1">


                                                    <Link to={`/blog-detail/${blog.id}`} className="bp__h1">
                                                        {blog.title}
                                                    </Link>

                                                </span>

                                                {/* <span className="bp__h2">A post with the image</span> */}
                                                <div className="blog-t-w">


                                                    {/* get-tagName */}
                                                    <div>
                                                        {blog.tagBlogIds.map(tagId => {
                                                            const tag = tags[tagId];
                                                            if (tag) {
                                                                return (
                                                                    <a key={tag.id} className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">{tag.tagName}</a>
                                                                );
                                                            } else {
                                                                return null;
                                                            }
                                                        })}
                                                    </div>

                                                </div>


                                                <p>{truncateText(blog.content.replace(/<[^>]*>/g, ''), 240)}</p>

                                                <div className="gl-l-r">
                                                    <div>

                                                        <span className="bp__read-more">

                                                            <a href="blog-detail">READ MORE</a></span></div>
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
                                    </div>))}



                                <nav className="post-center-wrap u-s-p-y-60">
                                    {/*====== Pagination ======*/}
                                    <ul className="blog-pg">
                                        {[1, 2].map(page => (
                                            <li key={page} className={currentPage === page - 1 ? 'blog-pg--active' : ''}>
                                                <button onClick={() => handlePageChange(page - 1)}>{page}</button>
                                            </li>
                                        ))}
                                        <li>
                                            <button onClick={() => handlePageChange(currentPage + 1)} className="fas fa-angle-right"></button>
                                        </li>
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
        </div >
    )
}

export default Blog
