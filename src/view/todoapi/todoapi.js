import { Link } from "react-router-dom";
import useFetch from "../customhook/covid"
import '../grid.scss'
import "./style.scss"

const ApiTest = () => {
    const { api, loading, err } = useFetch(`https://jsonplaceholder.typicode.com/todos`, false)
    var data = api.splice(0, 10)
    console.log(data);

    return (

        <div className="row">
            {api && api.length > 0 &&
                data.map(item => (
                    <div className="col m-3">
                        <div className="list">

                            <p>{item.title}</p>
                            <button>

                                <Link to={`/apitodo/${item.id}`}>
                                    detail
                                </Link>
                            </button>
                        </div>
                    </div>


                ))}
        </div>


    )
}
export default ApiTest