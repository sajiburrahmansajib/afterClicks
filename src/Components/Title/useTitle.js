import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | AfterClicks`;
    }, [title])
}

export default useTitle;