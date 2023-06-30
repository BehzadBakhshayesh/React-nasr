import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import './App.scss'

const { Content } = Layout;

const App = () => {
  return (
    <>
      <main className='App'>
        <Layout className='Layout'>
          <Content className='Content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </main>
    </>
  )
}

export default App
