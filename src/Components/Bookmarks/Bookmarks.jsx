import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className='bg-slate-300 p-4 mt-6 rounded-lg'>
            <div className='mb-6'>
                <h3 className='text-3xl'>Reading Time : {readingTime}</h3>
            </div>
            <div className=''>
            <h4 className='text-2xl text-center'>Bookmarked {bookmarks.length}</h4>
            {
                bookmarks.map((bookmark , index) => <Bookmark key={index}  bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number,
}

export default Bookmarks;