import React from 'react';
import { Form } from 'informed';
import { Link } from 'react-router-dom';
import { mergeClasses } from '../../classify';
import defaultClasses from './signUp.module.scss';
import Button from '../../Components/Button';
import Field from '../../Components/Field';
import TextInput from '../../Components/TextInput';
import { useSignUp } from '../../Hooks/Account/useSignUp';
import {
  isRequired,
  validateEmail,
  hasLengthAtLeast,
  validatePassword,
  validateConfirmPassword
} from '../../Utilities/formValidators';
import combine from '../../Utilities/combineValidators';


const SignUp = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const {
    handleSubmit,
    isBusy
  } = useSignUp();
  return (
    <div className={`${classes.root} container`}>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header justify-content-center"><h3 className="font-weight-light my-4">Create Account</h3></div>
            <div className="card-body">
              <Form
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="col-md-6">
                    <Field label="First Name"
                      classes={{
                        root: 'form-group',
                        label: 'small mb-1'
                      }}
                    >
                      <TextInput
                        id="first_name"
                        field="first_name"
                        placeholder="Enter first name"
                        validate={isRequired}
                        validateOnBlur
                      />
                    </Field>
                  </div>
                  <div className="col-md-6">
                    <Field label="Last Name"
                      classes={{
                        root: 'form-group',
                        label: 'small mb-1'
                      }}
                    >
                      <TextInput
                        id="last_name"
                        field="last_name"
                        placeholder="Enter last name"
                        validate={isRequired}
                        validateOnBlur
                      />
                    </Field>
                  </div>
                </div>
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
                  />
                </Field>
                <div className="form-row">
                  <div className="col-md-6">
                    <Field label="Password"
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
                        validate={combine([
                          isRequired,
                          [hasLengthAtLeast, 8],
                          validatePassword
                        ])}
                        validateOnBlur
                      />
                    </Field>
                  </div>
                  <div className="col-md-6">
                    <Field label="Confirm Password"
                      classes={{
                        root: 'form-group',
                        label: 'small mb-1'
                      }}
                    >
                      <TextInput
                        id="confirm"
                        field="confirm"
                        type="password"
                        placeholder="Confirm password"
                        validate={combine([isRequired, validateConfirmPassword])}
                        validateOnBlur
                      />
                    </Field>
                  </div>
                </div>

                <div className="form-group mt-4 mb-0">
                  <Button
                    disabled={isBusy}
                    priority="high"
                    type="submit"
                    classes={{
                      root_highPriority: 'btn btn-primary btn-block'
                    }}
                  >
                    {'Create Account'}
                  </Button>

                </div>
              </Form>
            </div>
            <div className="card-footer text-center">
              <div className="small"><Link to="/">Have an account? Go to login</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
