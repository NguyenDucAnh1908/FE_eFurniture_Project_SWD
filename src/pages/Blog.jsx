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
    const [allCategories, setAllCategories] = useState([]);
    const [allTags, setAllTags] = useState([]);
    const [slides, setSlides] = useState([]);
    const [totalPages, setTotalPages] = useState(0);




    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/blogs/get_all_blogs?page=${currentPage}`);
                setBlogs(response.data.blogs);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch blogs');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [currentPage]);


    

    useEffect(() => {
        const fetchCategoriesAndTags = async () => {
            try {
                const categoriesResponse = await axios.get('http://localhost:8080/api/v1/categories-blog/get-all-categoriesBlog');
                const tagsResponse = await axios.get('http://localhost:8080/api/v1/tags-blog/get-all');

                setAllCategories(categoriesResponse.data);
                setAllTags(tagsResponse.data);
            } catch (error) {
                console.error('Failed to fetch categories and tags', error);
            }
        };

        fetchCategoriesAndTags();
    }, []);


    const fetchTag = async (tagId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tags-blog/${tagId}`);
            setTags(prevState => ({
                ...prevState,
                [tagId]: response.data
            }));
        } catch (error) {
            console.error(`Failed to fetch tag with id ${tagId}`, error);
        }
    };

    useEffect(() => {
        blogs.forEach(blog => {
            blog.tagBlogIds.forEach(tagId => {
                if (!tags[tagId]) {
                    fetchTag(tagId);
                }
            });
        });
    }, [blogs]);



    const fetchTag2 = async (categoryId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/categories-blog/${categoryId}`);
            setCategories(prevState => ({
                ...prevState,
                [categoryId]: response.data
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





    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/blogs/latest-three-blogs')
            .then(response => response.json())
            .then(data => setSlides(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const generatePageNumbers = () => {
        const maxPagesToShow = 4;
        const firstPageIndex = Math.max(0, currentPage - 1);
        const lastPageIndex = Math.min(totalPages - 1, firstPageIndex + maxPagesToShow - 1);

        const pageNumbers = [];

        for (let i = firstPageIndex; i <= lastPageIndex; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const renderPaginationButtons = () => {
        return generatePageNumbers().map(page => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page)}>{page + 1}</button>
            </li>
        ));
    };

    const handleNextButtonClick = () => {
        handlePageChange(currentPage + 1);
    };

    const handlePrevButtonClick = () => {
        handlePageChange(currentPage - 1);
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
                                                {allCategories.map(category => (
                                                    <li key={category.id}>
                                                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="u-s-m-b-60">
                                        <div className="blog-w">

                                            <span className="blog-w__h">RECENT POSTS</span>
                                            <ul className="blog-w__b-l">
                                                {/* Map through the last 3 blogs */}
                                                {slides.map((blog, index) => (
                                                    <li key={blog.id}>
                                                        <div className="b-l__block">
                                                            <div className="b-l__date">
                                                                <span>{blog.createdAt.substring(0, 10)}</span>
                                                            </div>
                                                            <span className="b-l__h">
                                                                {/* Link to the blog's detail page */}
                                                                <Link to={`/blog-detail/${blog.id}`}>{blog.title}</Link>
                                                            </span>
                                                            <span className="b-l__p">{truncateText(blog.content.replace(/<[^>]*>/g, ''), 100)}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="blog-w">

                                            <span className="blog-w__h">TAGS</span>
                                            <div className="blog-t-w">
                                                {allTags.map(tag => (
                                                    <a key={tag.id} className="gl-tag btn--e-transparent-hover-brand-b-2" href={`/tag/${tag.id}`}>{tag.tagName}</a>
                                                ))}
                                            </div>
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

                                                            <a href="blog-left-sidebar.html">{blog.userFullName}</a></span></span>



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

                                                            <Link to={`/blog-detail/${blog.id}`} className="bp__read-more">
                                                                <a href="blog-detail">READ MORE</a>
                                                            </Link>

                                                        </span></div>



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
                                    <ul className="blog-pg" style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center' }}>
                                        {currentPage > 0 && (
                                            <li style={{ margin: '0 5px' }}>
                                                <button onClick={handlePrevButtonClick} className="page-link">Previous</button>
                                            </li>
                                        )}
                                        {renderPaginationButtons()}
                                        {currentPage < totalPages - 1 && (
                                            <li style={{ margin: '0 5px' }}>
                                                <button onClick={handleNextButtonClick} className="page-link">Next</button>
                                            </li>
                                        )}
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