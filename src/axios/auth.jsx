import axios from 'axios';

const AuthUser = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Create instance
  let instance = axios.create(defaultOptions);
  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
  
    // let token = sessionStorage.getItem('token');
    let token = localStorage.getItem('token');
    if(token.length>0){
        config.headers.Authorization =  token.length>0 ? `Bearer ${token}` : ''; 
    }
    return config;
  });

  return instance;
};

export default AuthUser();