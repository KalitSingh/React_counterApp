import {Component} from 'react'
// const Welcome = () => <h1>Hello, User</h1>
class Welcome extends Component {
  render() {
    const {name, title} = this.props
    return (
      <h1 className={title}>
        Hi {name} Don't Get Panic You are Learning Class component Just Like
        functional Component ok *_*
      </h1>
    )
  }
}

export default Welcome
