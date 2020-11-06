import React from 'react';
import { Form } from 'informed';
import { Link } from 'react-router-dom';
import { mergeClasses } from '../../classify';
import defaultClasses from './forgotPassword.module.scss';
import Button from '../../Components/Button';
import Field from '../../Components/Field';
import TextInput from '../../Components/TextInput';
import { useForgotPassword } from '../../Hooks/Account/useForgotPassword';
import { isRequired, validateEmail } from '../../Utilities/formValidators';
import combine from '../../Utilities/combineValidators';

const ForgotPassword = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const {
    handleSubmit,
    isBusy
  } = useForgotPassword();
  return (
    <div className={`${classes.root} container`}>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header justify-content-center"><h3 className="font-weight-light my-4">Password Recovery</h3></div>
            <div className="card-body">
              <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
              <Form
                onSubmit={handleSubmit}
              >
                <Field label="Email address"
                  classes={{
                    root: 'form-group',
                    label: 'small mb-1'
                  }}
                >
                  <TextInput
                    id="email"
                    field="email"
                    placeholder="Enter email address"
                    validate={combine([isRequired, validateEmail])}
                    validateOnBlur
                  // validate={isRequired}
                  />
                </Field>
                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                  <Link className="small" to="/">Return to login</Link>
                  <Button
                    disabled={isBusy}
                    priority="high"
                    //  onClick={handleSignIn}
                    classes={{
                      root_highPriority: 'btn btn-primary'
                    }}
                  >
                    {'Reset Password'}
                  </Button>
                </div>
              </Form>
            </div>
            <div className="card-footer text-center">
              <div className="small"><Link to="/sign_up">Need an account? Sign up!</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
