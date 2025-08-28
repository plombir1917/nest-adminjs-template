export class CreateError extends Error {
  constructor(entity: string) {
    super(`Create ${entity} error!`);
  }
}
