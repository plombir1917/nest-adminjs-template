export interface IRepository {
  create(data: any): Promise<any>;

  findOne(id: number): Promise<any>;

  findAll(): Promise<any[]>;

  delete(id: number): Promise<any>;

  count(): Promise<number>;

  findOneBy(param: any): Promise<any>;
}
