/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { uuid4 } from '../strings';

interface HttpClientParams {
  url: string;
  config?: Omit<AxiosRequestConfig, 'url' | 'headers'>;
  version?: string;
  headers?: Record<string, string>;
}

interface HttpClientParamsWithData<T = any> extends HttpClientParams {
  config?: Omit<AxiosRequestConfig, 'url' | 'headers' | 'data'>;
  data?: T;
}

interface HttpClient {
  get<T = any>(params: HttpClientParams): AxiosPromise<T>;
  delete<T = any>(params: HttpClientParams): AxiosPromise<T>;
  head<T = any>(params: HttpClientParams): AxiosPromise<T>;
  post<T = any, D = any>(params: HttpClientParamsWithData<D>): AxiosPromise<T>;
  put<T = any, D = any>(params: HttpClientParamsWithData<D>): AxiosPromise<T>;
  patch<T = any, D = any>(params: HttpClientParamsWithData<D>): AxiosPromise<T>;
}

/**
 * ### Метод создает и возращает объект axiosInstance
 *
 * @param {string} apiVersion - версия API
 *
 * @returns {HttpClient} - объект AxiosInstance
 */
export const createHttpClient = (apiVersion = 'v1'): HttpClient => {
  const axiosInstance = axios.create();

  /**
   * ### Метод для отправки GET-запроса
   *
   * @example
   * get('URL_TO_BACKEND', {params: { search: 'Сбербанк' }});
   *
   * @param {string} url - URL эндпоинта для отправки запроса
   * @param {AxiosRequestConfig} config - Настройки для запроса
   * @param {object} headers - Дополнительные заголовки
   *
   * @returns {AxiosPromise<any>} Результат ответа от сервера
   */
  const get = <T = any>({
    url,
    config,
    headers = {},
  }: HttpClientParams): AxiosPromise<T> =>
      axiosInstance.get<T>(url, {
        headers: {
          'x-ruid': uuid4(),
          ...headers,
        },
        ...config,
      });

  /**
   * ### Метод для отправки DELETE-запроса
   *
   * @example
   * deleteReq('URL_TO_BACKEND');
   *
   * @param {string} url - URL эндпоинта для отправки запроса
   * @param {AxiosRequestConfig} config - Настройки для запроса
   * @param {string} version - Версия API эндпоинта
   * @param {object} headers - Дополнительные заголовки
   *
   * @returns {AxiosPromise<any>} Результат ответа от сервера
   */
  const deleteReq = <T = any>({
    url,
    config,
    version = apiVersion,
    headers = {},
  }: HttpClientParams): AxiosPromise<T> => {
    const versionStr = version ? `api/${version}` : '';
    return axiosInstance.delete<T>(`${versionStr}/${url}`, {
      headers: {
        'x-ruid': uuid4(),
        ...headers,
      },
      ...config,
    });
  };

  /**
   * ### Метод для отправки HEAD-запроса
   *
   * @example
   * head('URL_TO_BACKEND');
   *
   * @param {string} url - URL эндпоинта для отправки запроса
   * @param {AxiosRequestConfig} config - Настройки для запроса
   * @param {string} version - Версия API эндпоинта
   * @param {object} headers - Дополнительные заголовки
   *
   * @returns {AxiosPromise<any>} Результат ответа от сервера
   */
  const head = <T = any>({
    url,
    config,
    version = apiVersion,
    headers = {},
  }: HttpClientParams): AxiosPromise<T> => {
    const versionStr = version ? `api/${version}` : '';
    return axiosInstance.head<T>(`${versionStr}/${url}`, {
      headers: {
        'x-ruid': uuid4(),
        ...headers,
      },
      ...config,
    });
  };

  /**
   * ### Метод для отправки POST-запроса
   *
   * @example
   * post('URL_TO_BACKEND', data);
   *
   * @param {string} url - URL эндпоинта для отправки запроса
   * @param {Array<?Object>} data - данные запроса
   * @param {AxiosRequestConfig} config - Настройки для запроса
   * @param {string} version - Версия API эндпоинта
   * @param {object} headers - Дополнительные заголовки
   *
   * @returns {AxiosPromise<any>} Результат ответа от сервера
   */
  const post = <T = any, D = any>({
    url,
    data,
    config,
    headers = {},
  }: HttpClientParamsWithData<D>): AxiosPromise<T> =>
      axiosInstance.request<T>({
        url,
        method: 'post',
        headers: {
          'x-ruid': uuid4(),
          ...headers,
        },
        ...config,
        data,
      });

  /**
   * ### Метод для отправки PUT-запроса
   *
   * @example
   * put('URL_TO_BACKEND', data,);
   *
   * @param {string} url - URL эндпоинта для отправки запроса
   * @param {Array<?Object>} data - данные запроса
   * @param {AxiosRequestConfig} config - Настройки для запроса
   * @param {string} version - Версия API эндпоинта
   * @param {object} headers - Дополнительные заголовки
   *
   * @returns {AxiosPromise<any>} Результат ответа от сервера
   */
  const put = <T = any, D = any>({
    url,
    data,
    config,
    headers = {},
  }: HttpClientParamsWithData<D>): AxiosPromise<T> => axiosInstance.request<T>({
      url,
      method: 'put',
      headers: {
        'x-ruid': uuid4(),
        ...headers,
      },
      ...config,
      data,
    });

  /**
   * ### Метод для отправки PATCH-запроса
   *
   * @example
   * patch('URL_TO_BACKEND', data);
   *
   * @param {string} url - URL эндпоинта для отправки запроса
   * @param {Array<?Object>} data - Данные запроса
   * @param {AxiosRequestConfig} config - Настройки для запроса
   * @param {string} version - Версия API эндпоинта
   * @param {object} headers - Дополнительные заголовки
   *
   * @returns {AxiosPromise<any>} Результат ответа от сервера
   */
  const patch = <T = any, D = any>({
    url,
    data,
    config,
    version = apiVersion,
    headers = {},
  }: HttpClientParamsWithData<D>): AxiosPromise<T> => {
    const versionStr = version ? `api/${version}` : '';
    return axiosInstance.request<T>({
      url: `${versionStr}/${url}`,
      method: 'patch',
      headers: {
        'x-ruid': uuid4(),
        ...headers,
      },
      ...config,
      data,
    });
  };

  return {
    get,
    delete: deleteReq,
    head,
    post,
    put,
    patch,
  };
};
