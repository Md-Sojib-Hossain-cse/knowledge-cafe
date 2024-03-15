import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropType from 'prop-types';

const Blogs = ({handleBookmark , handleMarkAsRead}) => {
    const [blogs , setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    } , [])

    return (
        <div className="col-span-1 lg:col-span-2">
            <h3>Blogs : {blogs.length}</h3>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookmark={handleBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    >
                    </Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleBookmark : PropType.func.isRequired,
    handleMarkAsRead : PropType.func.isRequired,
}


export default Blogs;