import { useEffect, useState } from "react"

const Time = () => {
    const [time, seTime] = useState('5')
    useEffect(() => {


        if (time === 0) {
            alert('hết time')
            return
        }
        let timer = setInterval(() => {
            seTime(time - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [time])
    console.log(time);
    return (
        <div>{time}</div>
    )

}
export default Time