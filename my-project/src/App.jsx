

import { useState } from 'react'
import './App.css'
import Blogs from './compnents/Blogs/Blogs'
import Bookmarks from './compnents/Bookmarks/Bookmarks'
import Header from './compnents/Header/Header'

function App() {
  const [bookmark,setbookmark] = useState([])
  const [readingtime,setReadingtime] = useState(0)

  const handleToBookmark =  blog => {
     setbookmark([...bookmark,blog])
  }
  const handleReadingtime =  (time,id) => {
     setReadingtime(readingtime+time)
     const remainingBook = bookmark.filter(blog => blog.id !== id)
     setbookmark(remainingBook)
  }
  return (
    <>
      <div>
         <Header></Header>
         <div className='md:flex max-w-7xl mx-auto'>
          <Blogs handleReadingtime={handleReadingtime} handleToBookmark={handleToBookmark} ></Blogs>
          <Bookmarks readingtime={readingtime}  bookmark={bookmark}></Bookmarks>
         </div>
         
      </div>
      
    </>
  )
}

export default App
