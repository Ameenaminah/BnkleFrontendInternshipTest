import axios, { AxiosRequestHeaders } from "axios";

export interface IRestService {
  get<TResponse>(
    endpoint: string,
    additionalHeaders?: AxiosRequestHeaders
  ): Promise<TResponse | null>;
}

export class RestService implements IRestService {
  constructor(private readonly baseUrl: string) {}

  async get<TResponse>(
    endpoint: string,
    additionalHeaders?: AxiosRequestHeaders
  ): Promise<TResponse> {
    try {
      const url = this.getUrl(endpoint);

      const response = await axios.get<TResponse>(url, {
        headers: additionalHeaders,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private getUrl(url: string): string {
    return `${this.baseUrl}${url}`;
  }
}
