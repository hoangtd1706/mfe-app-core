import axios, { AxiosRequestConfig } from "axios";

//get access token
function getAccessToken() {
  const token = window.sessionStorage.getItem("access_token");
  return token;
}

//get refresh token
function getRefreshToken() {
  const token = window.localStorage.getItem("refresh_token");
  return token;
}

function getInstance(url: string, config?: AxiosRequestConfig) {
  const timeOut = 10 * 60 * 1000;
  let defaultConfig: AxiosRequestConfig = {
    baseURL: url,
    timeout: timeOut,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  };

  if (config !== undefined) {
    defaultConfig = config;
    defaultConfig.baseURL = url;
    defaultConfig.timeout = timeOut;
    defaultConfig.headers = {
      ...config.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    };
  }

  const instance = axios.create(defaultConfig);

  function refreshToken() {
    return instance.post("v1/i/token/refresh-token", {
      refreshToken: getRefreshToken(),
    });
  }

  // response parse
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const code = error.response.status;
      if (code === 401) {
        // console.log('get new token using refresh token', getRefreshToken());
        return refreshToken()
          .then((rs) => {
            // console.log('get token refreshToken>>', rs.data);
            const { access_token, refresh_token } = rs.data;

            instance.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${access_token}`;
            sessionStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);

            const config = error.config;
            if (config.headers !== undefined) {
              config.headers["Authorization"] = `Bearer ${access_token}`;
              return instance(config);
            } else {
              sessionStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              window.location.reload();

              return null;
            }
          })
          .catch(() => {
            sessionStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            window.location.reload();
          });
      }

      return Promise.reject(error);
    }
  );

  return instance;
}

const axiosBuilder = {
  getInstance,
};

export default axiosBuilder;
