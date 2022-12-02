import { UuidAdapter } from "~/infra/uuid/uuid.adapter";
import { DomainError } from "../errors/domain-error.error";

export type EntityValidator<T> = {
  [EntityAttribute in keyof T]: (
    arg: T[EntityAttribute]
  ) => boolean;
};

export abstract class BaseEntity<T> {
  public readonly _id: string;
  public readonly _name: string;
  public readonly _body: T;
  private entityValidator: EntityValidator<T>;

  constructor(
    entityData: T,
    entityName: string,
    entityValidator: EntityValidator<T>,
    id?: string
  ) {
    this._name = entityName;
    this._body = entityData;
    this.entityValidator = entityValidator;

    if (!id) {
      const uuidGenerator = new UuidAdapter();
      this._id = uuidGenerator.generate();
    } else {
      this._id = id;
    }
  }

  get isValid(): boolean {
    const validatorsOutput = Object.getOwnPropertyNames(this._body).map(
      (sourceAttribute) => {
        const entityBodyAttribute = this._body[sourceAttribute];
        const validator = this.entityValidator[sourceAttribute];
        if (!validator) {
          throw new DomainError(
            `Validator not implemented for ${sourceAttribute} attribute of ${this._name} entity`
          );
        }
        return validator(entityBodyAttribute);
      }
    );

    return validatorsOutput.every((output) => output === true);
  }
}
