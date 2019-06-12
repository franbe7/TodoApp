import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { Route } from 'src/helpers/Route'
import { Task } from 'src/types/global'
import { newTodo } from 'src/actions'

class HttpService {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: Route.BASE_URL,
    })
  }

  public get(url: string, params = {}): Promise<AxiosResponse<any>> {
    return this.axios.get(url, {
      params,
    })
  }

  public post(url: string, body: newTodo): Promise<AxiosResponse<any>> {
    return this.axios.post(url, body)
  }

  public put(url: string, body: Task): Promise<AxiosResponse<any>> {
    return this.axios.put(url, body)
  }

  public patch(url: string, body: Task): Promise<AxiosResponse<any>> {
    return this.axios.patch(url, body)
  }

  public delete(url: string): Promise<AxiosResponse<any>> {
    return this.axios.delete(url)
  }
}

export default new HttpService()
