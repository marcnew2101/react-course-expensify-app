import React from 'react';
import { Redirect } from 'react-router-dom';
import { startLogout } from '../actions/auth.js';
import { connect } from 'react-redux';

class Header extends React.Component {

  state = {
    redirect: false
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <h1 className="header__title">Allowance App</h1>
            <button className="button button--link" onClick={() => {
              this.props.dispatch(startLogout())
            }}>Logout</button>
            {this.props.admin ? (
              <button className="button button--link" onClick={this.handleOnClick}>Admin</button>
            ) : (null)}
            {this.state.redirect ? <Redirect to='/admin'/> : null}
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      admin: state.admin
  }
}

export default connect(mapStateToProps)(Header);
