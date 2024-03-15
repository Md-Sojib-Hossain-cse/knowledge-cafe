import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog  , handleBookmark , handleMarkAsRead}) => {

    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} alt={`Cover picture of the title ${title}`} className='w-full mb-8' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <div className='w-14 h-14'>
                        <img src={author_img} alt="" className='w-full h-full object-cover rounded-full' />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p><span>{reading_time}</span> minutes</p>
                    <button className='text-2xl text-red-600' onClick={() => handleBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button className='text-purple-800 font-bold underline' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired,
}

export default Blog;