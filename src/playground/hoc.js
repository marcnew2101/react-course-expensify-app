import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Title: {props.title}</h1>
    <p>Description: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAdmin ? props.isAdmin : <p>This is private info. Do not share.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isLoggedIn ? (<WrappedComponent {...props}/>) : <p>Please log in to view page.</p>}

    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Details here' title='Title here'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isLoggedIn={false} info='Info here' title='Title here'/>, document.getElementById('app'));