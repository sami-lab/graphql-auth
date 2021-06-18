import React, { useState, useEffect } from 'react';
import { hashHistory } from 'react-router';
import AuthForm from '../components/AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutation/login';
import query from '../queries/currentUser';

function LoginForm(props) {
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    if (props.data.user) {
      hashHistory.psuh('/dashboard');
    }
  }, [props.data]);
  const onSubmit = ({ email, password }) => {
    props
      .mutate({
        variables: {
          email,
          password,
        },
        refetchQueries: [{ query }], //Refetch queries will run parallal with .then means promise willl resolve as soon as mutation runs
      })

      .catch((res) => setErrors(res.graphQLErrors.map((err) => err.message)));
  };
  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}
export default graphql(query)(graphql(mutation)(LoginForm));
