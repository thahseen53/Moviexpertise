import { useEffect } from "react"

export const usePageTitle = (title) => {
        useEffect(()=>{
            document.title=`${title} /Moviexpertise`
        })
      return null
}


