export class UpdateError extends Error {
  constructor(entity: string) {
    super(`Update ${entity} error!`);
  }
}
