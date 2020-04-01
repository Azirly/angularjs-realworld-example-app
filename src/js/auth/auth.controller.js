class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  }

  submitForm() {
    this.isSubmitting = true;

    console.log(this.formData);
    if(this.authType == "forget"){
      this._User.forgetAuth(this.authType, this.formData).then(
        //If email exists in DB
        (res) => {
          console.log(this.authType);
          console.log("It was a success");
          this._$state.go('app.reset');
        },
        (err) => {
          console.log(this.authType);
          console.log("There is an error");
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      )
    } else{
      this._User.attemptAuth(this.authType, this.formData).then(
        (res) => {
          console.log(this.authType);
          console.log("It was a success");
          this._$state.go('app.home');
        },
        (err) => {
          console.log(this.authType);
          console.log("There is an error");
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      )
    }
  }
}

export default AuthCtrl;
