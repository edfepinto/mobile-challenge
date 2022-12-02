import { BaseError } from "~/shared/errors/base-error.error";

export class DomainError extends BaseError {
  constructor(message: string) {
    super(message);
  }
}
