import{Routes, Route} from 'react-router-dom'
import { MovieList,MovieDetail,Search,PageNotFound } from '../pages'

const AllRoutes = () => {
  return (
    <div className='dark:bg-slate-800'>
  <Routes>
    <Route path="/" element={<MovieList pathParameter="movie/now_playing" title="now_playing"/>} />
    <Route path="movie/:id" element={<MovieDetail />} />
    <Route path="movie/upcoming" element={<MovieList pathParameter="movie/upcoming" title="upcoming"/>} />
    <Route path="movie/top" element={<MovieList pathParameter="movie/top_rated"/>} title="top rated" />
    <Route path="movie/popular" element={<MovieList pathParameter="movie/popular"/>} title="popular" />
    <Route path="search" element={<Search pathParameter="search/movie"/>} />
    <Route path="*" element={<PageNotFound/>} title="404 page not found"/>
  </Routes>
  </div>
  )
}

export default AllRoutes

