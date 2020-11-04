import axios from "axios";
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;

const login = (data) => {
    return axios.get('http://localhost:3000/login').then(response => {
      return axios.post("http://localhost:3000/login", {
        user:{...data}
      })
      .then(response => {
        localStorage.setItem("isLogged", true)
        return response.data;
      }).catch(error => {
        localStorage.setItem("isLogged", false);
        return error.response;
    });
    });
  }
  const signup = async (data) => {
      return axios.get('http://localhost:3000/signup/sign_up').then(response => {
      return axios.post("http://localhost:3000/signup/", {
        user: {...data}
      })
      .then(response => {
        return response.data;
    }).catch(error => {
        return response.data;
    })
    });
  }
  const logout = async () => {
      return axios.delete("http://localhost:3000/logout")
      .then(response => {
        localStorage.setItem("isLogged", false);
        return false;
      });
    }
  const isLogged = async() =>{
      if (localStorage.getItem('isLogged') === "true"){
      return axios.get('http://localhost:3000/login').then(response => {
        if(response.data.status.code === 200)
          return true;
      });
    }
      localStorage.setItem('isLogged', false);
      return false;
  }

export {login,logout,signup,isLogged};