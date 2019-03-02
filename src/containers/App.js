import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import {NotificationContainer} from "Components/ReactNotifications";
import {defaultStartPath} from 'Constants/defaultValues'
import {connect} from "react-redux";
import AppLocale from '../lang';
import MainRoute from 'Routes';
import login from './Login';
import error from 'Routes/error'
import 'Assets/css/vendor/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css';
import "Assets/css/sass/themes/gogo.light.purple.scss";

const InitialPath = ({component: Component, ...rest, authUser}) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location}
          }}
        />}
  />;

class App extends Component {

  render() {
    const {location, match, userAdmin, locale} = this.props;
    const currentAppLocale = AppLocale[locale];
    if (location.pathname === '/' || location.pathname === '/admin' || location.pathname === '/admin/') {
      return (<Redirect to={defaultStartPath}/>);
    }
    return (
      <Fragment>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >

          <Fragment>
            <NotificationContainer/>
            <Switch>
              <InitialPath
                path={`${match.url}admin`}
                authUser={userAdmin}
                component={MainRoute}
              />
              <Route path={`/login`} component={login}/>
              <Route path={`/error`} component={error}/>
              <Redirect to="/error"/>
            </Switch>
          </Fragment>
        </IntlProvider>
      </Fragment>
    );
  }
}

const mapStateToProps = ({authUser, settings}) => {
  const {userAdmin} = authUser;
  const {locale} = settings;
  return {
    userAdmin,
    locale
  };
};

export default connect(mapStateToProps, {})(App);

