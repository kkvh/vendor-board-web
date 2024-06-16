export class GqlClient {
  private config: GqlClientConfig;
  constructor(config: GqlClientConfig) {
    this.config = config;
    return this;
  }
  async query(query: string) {
    const response = await fetch(this.config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const data = await response.json();
    return data;
  }
}

export type GqlClientConfig = {
  url: string;
};
