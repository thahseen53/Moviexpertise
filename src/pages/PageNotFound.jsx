
import { Link } from 'react-router-dom'
import pageNotFound from '../assets/pageNotFound.jpg'
import { usePageTitle } from '../hooks/usePageTitle'
export const PageNotFound = ({title}) => {
  usePageTitle(title)
  return (
    <main>
        <section className="flex flex-col items-center justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">Oops!</p>
          </div>
          <div className="max-w-lg">
            <img src={pageNotFound}  className="rounded" />
          </div>
          <Link to="/">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-10">Back to MOVIEXPERTISE</button>
          </Link>
        </section>
    </main>
  )
}


