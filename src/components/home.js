import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <div>
        <header className='bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
          <nav className='f6 fw6 ttu tracked'>
            <a
              className='link dim white dib mr3'
              onClick={() => {
                this.props.history.push('/india')
              }}
              title='India'
            >
              India
            </a>
            <a
              className='link dim white dib mr3'
              onClick={() => {
                this.props.history.push('/us')
              }}
              title='Usa'
            >
              USA
            </a>
            <a
              className='link dim white dib mr3'
              onClick={() => {
                this.props.history.push('/turkey')
              }}
              title='Turkey'
            >
              Turkey
            </a>
            <a
              className='link dim white dib'
              onClick={() => {
                this.props.history.push('/more')
              }}
              title='more'
            >
              More
            </a>
          </nav>
        </header>
        <div>
          <div className='h3' />
          <h1>Select any Country for Latest News</h1>
        </div>
      </div>
    )
  }
}

export default Home
