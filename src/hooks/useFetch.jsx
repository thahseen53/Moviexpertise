import { useState,useEffect } from "react"


export const useFetch = (path,query="") => {
    const [data,setData] =useState([])
    const url =`https://api.themoviedb.org/3/${path}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&query=${query}`
    useEffect(()=>{
        async function fecthMovieList(){
            const response = await fetch(url)
            const json = await response.json()
            setData(json.results)
        }
        fecthMovieList()
    },[url])

  return { data }
}


