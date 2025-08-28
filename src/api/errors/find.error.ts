export class FindError extends Error {
  constructor(entity: string) {
    super(`Find ${entity} error!`);
  }
}
