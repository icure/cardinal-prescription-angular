export interface TokenStore {
  put: (key: string, value: string) => Promise<string>;
  get: (key: string) => Promise<string>;
}
