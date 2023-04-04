import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="nav-off">
        <div className="div">
          <div className="divOff">
            <Link to="/" className="head">
              {' '}
              Home{' '}
            </Link>{' '}
            <Link to="/services" className="head">
              {' '}
              Services{' '}
            </Link>{' '}
          </div>{' '}
          <Link to="/" className="headOne">
            Skillprowise <br /> Training Academy{' '}
          </Link>{' '}
          <Link to="/contactUs" className="head">
            {' '}
            Contact us{' '}
          </Link>{' '}
        </div>{' '}
      </nav>
    )
  }
}

export default Header
