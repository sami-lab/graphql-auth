import gql from 'graphql-tag';

export default gql`
  mutaation Login($email: String, $password: String){
      login(email:$email, passsword: $password){
          id,
          email
      }
  }
`;
