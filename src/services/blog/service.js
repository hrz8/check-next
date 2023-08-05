export async function getAllBlogs() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();

    const posts = [];

    for (const blog of result) {
        if (blog.id > 50) {
            posts.push(blog);
        }
    }

    return posts;
}

export async function createBlog() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();

    const posts = [];

    for (const blog of result) {
        if (blog.id > 50) {
            posts.push(blog);
        }
    }

    return posts;
}

// export async function getBlogById() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const result = await response.json();

//     const posts = [];

//     for (const blog of result) {
//         if (blog.id > 50) {
//             posts.push(blog);
//         }
//     }

//     return posts;
// }

