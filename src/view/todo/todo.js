
import { useState } from "react"



const Todo = (props) => {
    const [todolist, setTodo] = useState([
        { id: 1, name: 'viet', de: 'laptrinh' },
        { id: 2, name: 'thuong', de: 'laptrinh' }
    ])

    const [news, setNews] = useState()

    const deletaData = (id) => {
        let cu = todolist
        cu = cu.filter(item => (
            item.id !== id
        ))
        setTodo(cu)
    }


    const changValue = (event) => {
        setNews(event.target.value)
    }
    const saveValue = () => {
        let newTodo = { id: '1', name: news, de: 'dev' }
        setTodo([...todolist, newTodo])
    }
    const deleteTodo = (e) => {
        var id = e.id
        deletaData(id)
    }
    return (
        <div>
            <input type="text" onChange={(event) => changValue(event)} /><br></br>
            <button onClick={() => saveValue()}>Click</button>
            <ul>
                {todolist.map(item => (

                    <li>{item.name}
                        <span onClick={() => deleteTodo(item)}>X</span>
                    </li>


                ))}
            </ul>
        </div >
    )
}
export default Todo