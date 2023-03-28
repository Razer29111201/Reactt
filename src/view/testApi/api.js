import moment from 'moment/moment'
import './api.css'

import useFetch from "../customhook/covid"



const Covid = () => {
    var a = moment().startOf('day').toISOString(true)

    var b = moment().startOf('day').subtract(30, 'days').toISOString(true)

    const { api, loading, err } = useFetch(`https://api.covid19api.com/country/vietnam?from=${b}&to=${a}`, true)

    return (


        < table >
            <tr>
                <th>Date</th>
                <th>Acctive</th>
                <th>Confirmed</th>
                <th>Deaths</th>
            </tr>
            {api && api.length > 0 && loading === false &&

                api.map(item =>
                (

                    <tr>
                        <td>
                            {item.Date}
                        </td>
                        <td>
                            {item.Active}
                        </td>
                        <td>
                            {item.Confirmed}
                        </td>
                        <td>
                            {item.Deaths}
                        </td>

                    </tr>

                ))

            }
            {loading === true &&
                <td>Loading</td>
            }
            {
                err === true && <td>Errr</td>
            }
        </table>

    )


}
export default Covid