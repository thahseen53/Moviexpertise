
import Card from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { usePageTitle } from "../hooks/usePageTitle"
export const MovieList = ({pathParameter,title}) => {
    const {data:movies} = useFetch(pathParameter)
    usePageTitle(title)
  return (

    <main>
        <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap other:justify-evenly">
               { movies.map(movie=>(
                <Card key={movie.id} movie={movie}/>
               ))}
            </div>
        </section>
    </main>
  )
}


