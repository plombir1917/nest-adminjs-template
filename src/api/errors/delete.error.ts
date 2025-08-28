export class DeleteError extends Error {
  constructor(entity: string) {
    super(`Delete ${entity} error!`);
  }
}
