import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/currentUser';
import mutation from '../mutation/logout';
function Header(props) {
  const onLogoutHandler = () => {
    props.mutate({
      refetchQueries: [{ query }],
    });
  };
  const renderButtons = () => {
    const { loading, user } = props.data;
    if (loading) {
      return <div>loading</div>;
    }
    if (user) {
      return (
        <li>
          {' '}
          <a onClick={onLogoutHandler}>Logout</a>{' '}
        </li>
      );
    } else {
      <div>
        <li>
          <Link to="/signup">Signup </Link>
        </li>
        <li>
          <Link to="/login">Login </Link>
        </li>
      </div>;
    }
  };
  return (
    <nav>
      <Link to="/" className="brand-logo left">
        Home{' '}
      </Link>
      <div className="nav-wrapper">
        <ul>{renderButtons}</ul>
      </div>
    </nav>
  );
}
//This query will return user if authenticated else user will be null
export default graphql(mutation)(graphql(query)(Header));
