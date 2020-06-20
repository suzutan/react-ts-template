import React from 'react'
import logo from './logo.svg'
import './App.css'

interface Props {
  name: string
}
interface State {
  name: string
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: props.name,
    }
  }
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <br />
            <div>{this.state.name}</div>
          </a>
        </header>
      </div>
    )
  }
}

export default App
