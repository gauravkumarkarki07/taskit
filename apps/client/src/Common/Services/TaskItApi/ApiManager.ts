const BASE_URL = import.meta.env.VITE_TASKIT_BASE_URL;

export class ApiManager {
  //Api request
  private static async apiRequest<T>(method: string, url: string, body?: T) {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
      });
      if (!response.ok) {
        const errorData=await response.json();
        throw Error(errorData.message);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error('An Unknown Error Occured')
      }
    }
  }

  //Request methods
  static get(url: string) {
    return this.apiRequest("GET", url);
  }

  static post<T>(url: string, data: T) {
    return this.apiRequest("POST", url, data);
  }

  static put<T>(url: string, data: T) {
    return this.apiRequest("PUT", url, data);
  }

  static delete(url: string) {
    return this.apiRequest("DELETE", url);
  }
}
