import gql from 'graphql-tag';

export default gql`
  mutaation Signup($email: String, $password: String){
      signup(email:$email, passsword: $password){
          id,
          email
      }
  }
`;
