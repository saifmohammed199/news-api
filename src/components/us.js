import React, { Component } from 'react'

class Us extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
      n: 1
    }
  }

  componentDidMount () {
    window.fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=4ac2f1b77f0e426ab1fcbd2a8641b12c'
    )
      .then(result => result.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        })
      })
  }

  render () {
    var { isLoaded, items } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
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
          <div>Data is Loaded</div>
          <div className='h3' />
          <div className='flex flex-wrap'>
            {items.articles.map(
              source => (
                <article
                  key={source.id == null ? this.state.n + 1 : source.id}
                  className='mw5  bg-white br3 pa3 pa4-ns mv3 ba ma3 pd3 center b--black-10
'
                >
                  <div className='tc'>
                    <img
                      src={source.urlToImage}
                      className='br-300 h30 w30 dib'
                    />
                    <h1 className='f4'>{source.title}</h1>
                    <hr className='mw3 bb bw1 b--black-10' />
                  </div>
                  <p
                    className='lh-copy measure center f6 black-70'
                    onClick={console.log('hello')}
                  >
                    {source.description}
                  </p>
                  <a
                    href={source.url}
                    className='link black dim db mw5 pa2 br2 ba b--black-10 shadow-1'
                  >
                    Read More
                  </a>
                </article>
              )

              // console.log(source)
            )}
          </div>
        </div>
      )
    }
  }
}

export default Us
