import React, { Component } from 'react'

export default class More extends Component {
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
              title='Contact'
            >
              More
            </a>
          </nav>
        </header>
        <div className='h3' />
        <h1>Comming Soon.....</h1>
      </div>
    )
  }
}
