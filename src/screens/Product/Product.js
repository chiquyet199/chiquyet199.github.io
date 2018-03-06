import React from 'react'
import { Loading } from 'components'

export class Home extends React.Component {
  state = { text: 'ssss' }
  render() {
    return (
      <div>
        <Loading text={this.state.text} />
      </div>
    )
  }
}

export default Home
