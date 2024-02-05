import PropTypes from 'prop-types';
import { IoMdBookmark } from "react-icons/io";

const Blog = ({blog, handleToBookmark,handleReadingtime}) => {
    const {title,cover,reading_time,author_img,author,post_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`}></img>
            <div className='flex justify-between  items-center mt-3 '>
                <div className='flex gap-3 items-center justify-center'>
                        <div className="avatar">
                        <div className="w-12 rounded-full ">
                            <img src={author_img} />
                        </div>
                        </div>

                        <div>
                            <h3 className='text-1xl mb-2'>{author}</h3>
                            <p>{post_date}</p>
                        </div>
                </div>
                <div className='items-center flex'>
                    <span>{reading_time} minute read </span>
                    <button onClick={() => handleToBookmark(blog)} className='ml-2 text-2xl text-red-400'><IoMdBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl w-full mt-6">{title}</h2>
            <p className='mt-6'>
                {
                    hashtags.map((has,i) => <span className='ml-4' key={i}><a  href="">{has} </a></span>)
                }
            </p>
            <button onClick={() => {handleReadingtime(blog.reading_time,blog.id)}} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookmark: PropTypes.func.isRequired,
    handleReadingtime: PropTypes.func.isRequired,
};
export default Blog;