export class ApiClient {
  constructor(private readonly baseUrl: string) {}
  async getHealth() {
    const response = await fetch(`${this.baseUrl}/health`);
    if (!response.ok) throw new Error("API health check failed");
    return response.json() as Promise<{ ok: boolean; service: string }>;
  }
}
