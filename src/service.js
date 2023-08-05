import { setBlog } from "./redux/slicers/blog-slice";

export async function fetchBlogs(dispatch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();

    const posts = [];

    for (const blog of result) {
        if (blog.id > 50) {
            posts.push(blog);
        }
    }

    dispatch(setBlog({posts}));
}

