export interface Context {
  get: (key: string) => any;

  set: (key: string, value: any) => void;

  req: {
    header: (name: string) => string | undefined;
    param: (name: string) => string | undefined;
  };

  json: (body: any, statusCode?: number) => void;
}

export type Next = () => Promise<void>;
