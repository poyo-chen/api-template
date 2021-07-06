export interface CRUD {
  listAll: (limit: number, page: number) => Promise<any>;
  create: (resource: any) => Promise<any>;
}
