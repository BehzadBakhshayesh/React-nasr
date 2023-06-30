import {combineReducers} from 'redux'
import {employees} from './Employees'
import {comparison} from './Comparison'

export default combineReducers({
    employees,
    comparison,
})
