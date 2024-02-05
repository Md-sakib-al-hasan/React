
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmark, readingtime}) => {
  return (
        <div className="md: w1/3 text-center bg-gray-300 ml-4 mt-2 pt-4 ">
            <div>
                <h1 className='text-2xl'>Reading Time {readingtime}</h1>
            </div>
            <h1 className='text-3xl '>Bookmarked Blogs : {bookmark.length}</h1>
            {
                bookmark.map((book,id) => <Bookmark key={id}   book={book}></Bookmark>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmark: PropTypes.array,
    readingtime: PropTypes.number
}

export default Bookmarks
