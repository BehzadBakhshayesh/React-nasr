import React, { useEffect } from 'react'
import { Row, Col, Card, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import a from '../../Assets/images/a.png'
import { getEmployees } from '../../Redux/actions/Employees'
import { comparison } from '../../Redux/actions/Comparison'
import './Home.scss'


const { Meta } = Card
const columns = [
    {
        title: 'Employee Salary',
        dataIndex: 'employee_salary',
        key: 'employee_salary',
    },
    {
        title: 'Employee Age',
        dataIndex: 'employee_age',
        key: 'employee_age',
    },
    {
        title: 'Employee Name',
        dataIndex: 'employee_name',
        key: 'employee_name',
    },

]

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployees())
    }, [])
    const employees = useSelector(state => state.employees)
    const comparisonList = useSelector(state => state.comparison)

    return (
        <>
            <div className='Home'>
                <Row>
                    <Col span={24} className='CardContainer'>
                        {
                            [0, 1, 2, 3].map(item => (
                                <div key={item} className='cardContainer' onClick={() => dispatch(comparison(employees[item]))}>
                                    <Card
                                        hoverable
                                        className='Card'
                                        cover={<img alt="example" src={a} />}
                                    >
                                        <Meta
                                            title={`Name : ${employees[item]?.employee_name || '------'}`}
                                            className='Meta' />
                                    </Card>
                                </div>
                            ))}
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='ComparisonContainer'>
                        <Table
                            dataSource={comparisonList}
                            columns={columns}
                            rowKey='id'
                            pagination={false}
                            className='Table'
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home
