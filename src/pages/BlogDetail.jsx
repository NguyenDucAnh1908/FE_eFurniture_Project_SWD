import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/blogs/get-blog-detail/${id}`);
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch blog detail');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    useEffect(() => {
        const fetchTagsAndCategories = async () => {
            if (blog) {
                try {
                    const tagResponses = await Promise.all(blog.tagsBlog.map(tag => axios.get(`http://localhost:8080/api/tags-blog/${tag.id}`)));
                    const categoryResponses = await Promise.all(blog.categories.map(category => axios.get(`http://localhost:8080/api/categories-blog/${category.id}`)));

                    const fetchedTags = tagResponses.map(response => response.data);
                    const fetchedCategories = categoryResponses.map(response => response.data);

                    setTags(fetchedTags);
                    setCategories(fetchedCategories);
                } catch (error) {
                    console.error('Failed to fetch tags and categories', error);
                }
            }
        };

        fetchTagsAndCategories();
    }, [blog]);

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

                    {/*====== Detail Post ======*/}
                    <div className="detail-post">
                        <div className="bp-detail">
                            <div className="bp-detail__thumbnail">

                                {/*====== Image Code ======*/}
                                <div className="aspect aspect--bg-grey aspect--1366-768">

                                    <img className="aspect__img" src={blog.thumbnail} alt="" /></div>
                                {/*====== End - Image Code ======*/}
                            </div>
                            <div className="bp-detail__info-wrap">
                                <div className="bp-detail__stat">

                                    <span className="bp-detail__stat-wrap">

                                        <span className="bp-detail__publish-date">

                                            <a href="blog-right-sidebar.html">

                                                <span>{blog.createdAt.substring(0, 10)}</span>

                                            </a></span></span>

                                    <span className="bp-detail__stat-wrap">

                                        <span className="bp-detail__author">

                                            <a href="blog-right-sidebar.html">Daylse</a></span></span>

                                    <span className="bp-detail__stat-wrap">

                                        <span className="bp-detail__category">


                                            {/* Display categories */}

                                            {categories.map((category, index) => (
                                                <React.Fragment key={category.id}>
                                                    <span>{category.name}</span>
                                                    {index < categories.length - 1 && ' '}
                                                </React.Fragment>
                                            ))}



                                        </span></span>
                                </div>

                                <span className="bp-detail__h1">

                                    <a href="blog-detail.html">{blog.title}</a></span>


                                <div className="blog-t-w">
                                    {/* Hiển thị thẻ (tag) của blog */}
                                    <div>

                                        {tags.map((tag, index) => (
                                            <React.Fragment key={tag.id}>
                                                <span className="gl-tag btn--e-transparent-hover-brand-b-2" >{tag.tagName}</span>
                                                {index < tags.length - 1 && ' '}
                                            </React.Fragment>
                                        ))}

                                    </div>

                                </div>



                                <p className="bp-detail__p" dangerouslySetInnerHTML={{ __html: blog.content }}></p>

                                <div className="post-center-wrap">
                                    <ul className="bp-detail__social-list">
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
                                <div className="gl-l-r bp-detail__postnp">
                                    <div>

                                        <a href="blog-detail.html">Previous Post</a></div>
                                    <div>

                                        <a href="blog-detail.html">Next Post</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Detail Post ======*/}
             
                {/*====== End - Section 1 ======*/}
            </div>
            {/*====== End - App Content ======*/}
        </div>
    )
}

export default BlogDetail
