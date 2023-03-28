import { useParams } from "react-router-dom"
import useFetch from "../customhook/covid"
const Detail = () => {
    var { id } = useParams()
    const { api, loading, err } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, false)
    return (
        <div>
            {api.title}
        </div>
    )
}
export default Detail