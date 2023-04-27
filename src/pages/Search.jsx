import { useSearchParams } from "react-router-dom"
import Card from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { usePageTitle } from "../hooks/usePageTitle"

export const Search = ({pathParameter}) => {
    const[query] = useSearchParams()
    const queryParams = query.get('q')
    const {data:movies} = useFetch(pathParameter,queryParams)
    usePageTitle(`results for ${queryParams}`)
  return (

    <main>
        <section className="max-w-7xl mx-auto py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryParams}'` : `Result for '${queryParams}'` }</p>
            <div className="flex justify-start flex-wrap">
               { movies.map(movie=>(
                <Card key={movie.id} movie={movie}/>
               ))}
            </div>
        </section>
    </main>
  )
}


