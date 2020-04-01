function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider
  //Juston's Edits Start Here
  .state('app.forget', {
    url: '/forget',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Forget Password',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  })

  .state('app.reset', {
    url: '/reset',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Reset Password',
    button: 'Submit',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  })
  //Juston's Edits End Here

  .state('app.login', {
    url: '/login',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign in',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  })

  .state('app.register', {
    url: '/register',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign up',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  });

};

export default AuthConfig;
