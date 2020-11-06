import axios from 'axios';
// import { toast } from "react-toastify";

export const login = async (credentials) => {
  try {
    // const response = await axios.post("auth/login", credentials);
    // console.log(response);
    // const { access_token, refreshToken } = response.data;

    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${access_token.token}`;

    // setToken(access_token, refreshToken);
    // localStorage.setItem("user", JSON.stringify(response.data.user));
    const token = JSON.stringify(credentials);
    const user = {
      email: credentials.email,
      username: credentials.email.split('@')[0]
    };

    setToken(token, JSON.stringify(user));

    return {
      token,
      user
    };
  } catch (error) {
    console.log(error.response.data);
    throw error.response;
  }
};

export const signup = async (payload) => {
  try {
    //   Make api call to create a new user

    // return await axios.post('auth/signup', payload);
    return payload;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const verifyEmail = async (token) => {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    const res = await axios.get('/auth/verifyEmail');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const resendEmail = async (payload) => {
  try {
    return await axios.post('auth/resendEmail', payload);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logout = async () => {
  try {
    // return await axios.post("auth/logout");
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const refreshAccessToken = async () => {
  try {
    const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
    const getTokenUrl = axios.defaults.baseURL + 'auth/getToken';

    if (refresh_token) {
      const response = await fetch(getTokenUrl, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + refresh_token.token,
          Accept: 'application/json, text/plain, */*'
        }
      });

      const { access_token, refreshToken, message } = await response.json();

      if (access_token && refreshToken) {
        setToken(access_token, refreshToken);
      } else {
        localStorage.clear();
        // toast.error('Token Expired!', {
        //   position: "top-right",
        //   autoClose: true,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // });
        window.location = '/';
      }

      return access_token.token;
    }
  } catch (error) {
    localStorage.clear();
  }
};

export async function setToken(access_token, user, refresh_token) {
  localStorage.setItem('access_token', access_token);
  localStorage.setItem('user', user);
  localStorage.setItem('refresh_token', refresh_token);
}

export const sendPasswordResetMail = async (email) => {
  try {
    return await axios.post('auth/passwordReset', {
      email
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const resetPassword = async (password, token) => {
  try {
    return await axios.post('auth/updatePassword', {
      password,
      token
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getUser = async () => {
  try {
    const res = await axios.get('/users/getUser');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
