import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleBookmark = blog =>  {
    const newBookmark = [...bookmarks , blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-6'>
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
