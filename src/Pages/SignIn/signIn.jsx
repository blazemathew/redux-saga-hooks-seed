import React from 'react';
import { Form } from 'informed';
import { Link } from 'react-router-dom';

import { useSignIn } from 'Hooks/Account/useSignIn';

import { mergeClasses } from 'classify';
import defaultClasses from './signIn.module.scss';

import Button from 'Components/Button';
import Field from 'Components/Field';
import TextInput from 'Components/TextInput';
import Checkbox from 'Components/Checkbox';

import { isRequired, validateEmail } from 'Utilities/formValidators';
import combine from 'Utilities/combineValidators';

const SignIn = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const { handleSubmit, isBusy, setFormApi } = useSignIn();

  return (
    <div className={`${classes.root} container`}>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header justify-content-center">
              <h3 className="font-weight-light my-4">Login</h3>
            </div>
            <div className="card-body">
              <Form className={classes['form-signin']} onSubmit={handleSubmit} getApi={setFormApi}>
                <Field
                  label="Email address"
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
                  />
                </Field>
                <Field
                  label="Password"
                  classes={{
                    root: 'form-group',
                    label: 'small mb-1'
                  }}
                >
                  <TextInput
                    id="password"
                    field="password"
                    type="password"
                    placeholder="Enter password"
                    validate={isRequired}
                    validateOnBlur
                  />
                </Field>

                <div className="form-group">
                  <Checkbox
                    classes={{
                      // root:`${classes.custom_checkbox}`,
                      label: 'small mb-1'
                    }}
                    id="remember"
                    field="remember"
                    label="Remember me"
                  />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                  <Link className="small" to="/forgot_password">
                    Forgot Password?
                  </Link>
                  <Button
                    disabled={isBusy}
                    type="submit"
                    priority="high"
                    classes={{
                      root_highPriority: 'btn btn-primary'
                    }}
                  >
                    {'Login'}
                  </Button>
                </div>
              </Form>
            </div>
            <div className="card-footer text-center">
              <div className="small">
                <Link to="/sign_up">Need an account? Sign up!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
