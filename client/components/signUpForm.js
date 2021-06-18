import React, { useState } from 'react';
import { hashHistory } from 'react-router';

import AuthForm from '../components/AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutation/signup';
import query from '../queries/currentUser';
function SignUpForm(props) {
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
        refetchQueries: [{ query }],
      })
      .catch((res) => setErrors(res.graphQLErrors.map((err) => err.message)));
  };
  return (
    <div>
      <h3>Signup</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}
export default graphql(query)(graphql(mutation)(SignUpForm));
