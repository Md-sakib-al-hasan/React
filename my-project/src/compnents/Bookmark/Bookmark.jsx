import PropTypes from 'prop-types'
const Bookmark = ({book}) => {
    const {title} = book;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    book: PropTypes.object
}

export default Bookmark;