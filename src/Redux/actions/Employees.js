import axios from 'axios'
import { message } from 'antd'

export function employees (data){
    return{
        type: 'EMPLOYEES',
        payload: data
    }
}
export const getEmployees =() =>{
    return (dispatch)=>{
        axios('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => dispatch(employees(response.data.data)))
        .catch(err => message.error(`${err}`))
    } 
}
