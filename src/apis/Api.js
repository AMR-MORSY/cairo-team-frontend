import axios from "axios";
import router from "../router/index";
import store from "../vuex/store";


import * as bootstrap from 'bootstrap';



let Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

function showUnauthorizedToast()
{
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap =new bootstrap.Toast(toastLiveExample);
    
    toastBootstrap.show();


}
function showNetworkToast()
{
  const NetworkToast = document.getElementById('NetworkErrorToast');
  const NetworkToastBootstrap = new bootstrap.Toast(NetworkToast);
  NetworkToastBootstrap.show();

}


Api.defaults.withCredentials = true;
Api.defaults.baseURL = import.meta.env.VITE_BASE_URL;

Api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${store.getters.token}`;
  store.dispatch("displaySpinnerPage", false);
  return config;
});

Api.interceptors.response.use(
  function (response) {
    store.dispatch("displaySpinnerPage", true);
    
    return response;
  },
  function (error) {
    store.dispatch("displaySpinnerPage", true);
   
    if (
     
      error.response.status == 419 ||
      error.response.status == 403
    ) {


      router.push({ path: "/unauthorized" });
   
     

     
     
    }
    else if( error.response.status == 401 )
    {
      showUnauthorizedToast();

    }
    else if(error.message=="Network Error")
    {
      showNetworkToast();

    }

    return Promise.reject(error);
  }
);

let downloadApi = axios.create({
  responseType: "blob",
  headers: {
    "Content-Type": "application/json",
  },
});
downloadApi.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${store.getters.token}`;
  store.dispatch("displaySpinnerPage", false);
  return config;
});

let uploadApi = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
uploadApi.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${store.getters.token}`;
  store.dispatch("displaySpinnerPage", false);
  return config;
});

uploadApi.defaults.withCredentials = true;
uploadApi.defaults.baseURL = import.meta.env.VITE_BASE_URL;
uploadApi.interceptors.response.use(
  function (response) {
    store.dispatch("displaySpinnerPage", true);
    return response;
  },
  function (error) {
    store.dispatch("displaySpinnerPage", true);
    if (
     
      error.response.status == 419 ||
      error.response.status == 403
    ) {


      router.push({ path: "/unauthorized" });
   
     

     
     
    }
    else if( error.response.status == 401 )
    {
      showUnauthorizedToast();

    }
    else if(error.message=="Network Error")
    {
      showNetworkToast();

    }

    return Promise.reject(error);
  }
);
downloadApi.defaults.withCredentials = true;
downloadApi.defaults.baseURL = import.meta.env.VITE_BASE_URL;
downloadApi.interceptors.response.use(
  function (response) {
    store.dispatch("displaySpinnerPage", true);
    return response;
  },
  function (error) {
    store.dispatch("displaySpinnerPage", true);
    if (
     
      error.response.status == 419 ||
      error.response.status == 403
    ) {


      router.push({ path: "/unauthorized" });
   
     

     
     
    }
    else if( error.response.status == 401 )
    {
      showUnauthorizedToast();

    }
    else if(error.message=="Network Error")
    {
      showNetworkToast();

    }

    return Promise.reject(error);
  }
);

function allInstances() {
  return {
    Api: Api,
    downloadApi: downloadApi,
    uploadApi: uploadApi,
  };
}

export default allInstances();
