export interface IRepository {
  create(data: any): Promise<any>;

  findOne(id: string): Promise<any>;

  findAll(): Promise<any[]>;

  delete(id: string): Promise<any>;

  count(): Promise<number>;

  findOneBy(param: any): Promise<any>;
}
