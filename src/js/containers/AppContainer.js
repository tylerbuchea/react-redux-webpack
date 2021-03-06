import { connect } from 'react-redux';
import {
  changeUser,
  refreshRepos,
} from '../actions';

import App from '../components/App';

function getRepos(user) {
  return dispatch => {
    fetch(`https://api.github.com/users/${user.name}/repos`)
      .then(res => res.json())
      .then(res => {
        if (res.errors) throw Error(res.errors[0].message);
        console.log(res);
        dispatch(refreshRepos(res));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

const mapStateToProps = (state) => ({
  user: state.user,
  repos: state.repos,
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => {
    dispatch(changeUser(user));
  },
  refreshRepos: (user) => {
    dispatch(getRepos(user));
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
