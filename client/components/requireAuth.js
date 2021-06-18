import React, { useEffect } from 'react';
import { hashHistory } from 'react-router';

import query from '../queries/currentUser';
import { graphql } from 'react-apollo';

export default (WrapedComponent) => {
  function RequireAuth() {
    useEffect(() => {
      if (!props.data.loading && !props.data.user) {
        hashHistory.psuh('/login');
      }
    }, [props.data]);
    return <WrapedComponent {...props} />;
  }
  return graphql(query)(RequireAuth);
};
