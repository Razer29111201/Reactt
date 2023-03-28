import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment/moment"
const useFetch = (url, check) => {

    const [api, setAPi] = useState([])
    const [loading, setloading] = useState(true)
    const [err, setErr] = useState(false)
    useEffect(() => {
        setTimeout(() => {

            axios.get('http://localhost:8080/news/tnmt3')
                .then(data => {
                    var api = data.data
                    console.log(data.data);

                    if (check) {
                        api.map(item => {
                            item.Date = moment(item.Date).format("DD/MM/YYYY")
                            return item
                        })
                    }
                    setAPi(api)
                    setloading(false)
                    setErr(false)
                })
                .catch(err => {
                    setloading(false)
                    setErr(true)
                })
        }, 2000)
    }, [])
    return {
        api, loading, err
    }

}
export default useFetch