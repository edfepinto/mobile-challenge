export class BaseError {
  public message: string;
  public code: number;
  public errors: object[];

  constructor(message: string, errors: object[] = null, code = 400) {
    this.message = message;
    this.code = code;
    this.errors = errors;
  }
}

