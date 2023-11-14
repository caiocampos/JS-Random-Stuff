export class ApiError extends Error {
  status!: number;

  constructor(message: string, code?: number) {
    super(message);
    if (code !== undefined) {
      this.status = code;
    }
  }
}
