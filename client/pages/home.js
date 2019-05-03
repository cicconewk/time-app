import 'babel-polyfill'
import React, { Component } from 'react'
import axios from 'axios'

import Navbar from '../components/navbar/components/navbar'
import Content from '../components/content/components/content'
import CardLayout from '../components/card/components/card-layout'
import Card from '../components/card/components/card'

export default class Home extends Component {
  state = {
    timeZone: '',
    data_array: [],
  }

  handleGetTimes = async () => {
    try {
      const resolved = await axios.get('/api/times/', {baseURL: "http://localhost:3000"})
      console.log(resolved)
    } catch (err) {
      console.error(err)
    }
  }

  componentDidMount() {
    axios.get('/api/times/', {baseURL: "http://localhost:3000"})
      .then(response => {
        this.setState({data_array: response.data.data})
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div>
        <Navbar />
        <Content>
          <CardLayout>
            {
              this.state.data_array.map(city => {
                const date = new Date().toLocaleString('es-ES', {timeZone: city.timezone}).split(" ")
                return (<Card data={city} date={date[0]} time={date[1]} key=""  />)
              })
            }
          </CardLayout>
        </Content>
      </div>
    )
  }
}
