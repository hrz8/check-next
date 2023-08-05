'use client';

import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/redux/slicers/blog-slice";

export default function ListBlogs() {
    const blogs = useSelector((state) => state.blog.value.posts);
    const isLoadingBlog = useSelector((state) => state.blog.value.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            {isLoadingBlog ? 'loading' : (
                <ul>
                    {blogs.map((blog, i) => (<li key={`blog-${i}`}>{blog.title}</li>))}
                </ul>
            )}
            
        </>
    )
}