import {
  BaseEntity,
  EntityValidator,
} from "~/domain/entities/base-entity.entity";
import { DomainError } from "~/domain/errors/domain-error.error";

describe("BaseEntity", () => {
  describe("WITH body of SomeEntity defined", () => {
    interface SomeEntityBody {
      name: string;
      age: number;
      isDeveloper: boolean;
    }

    describe("WITH validators for body properties defined", () => {
      const someEntityValidator: EntityValidator<SomeEntityBody> = {
        name: (name: string) => {
          return name === "Eduardo Pinto";
        },
        age: (age: number) => {
          return age === 20;
        },
        isDeveloper: (isDeveloper: boolean) => {
          return isDeveloper;
        },
      };

      describe("WITH SomeEntity itself defined", () => {
        class SomeEntity extends BaseEntity<SomeEntityBody> {
          constructor(entityData: SomeEntityBody) {
            super(entityData, "SomeEntity", someEntityValidator);
          }
        }

        describe("WHEN SomeEntity instantiated with valid values", () => {
          const someEntity = new SomeEntity({
            name: "Eduardo Pinto",
            age: 20,
            isDeveloper: true,
          });

          it("SHOULD be a valid entity", () => {
            expect(someEntity.isValid).toBe(true);
          })
        });

        describe("WHEN SomeEntity instantiated with invalid values", () => {
          const someEntityWithInvalidName = new SomeEntity({
            name: "Jussara Neves",
            age: 20,
            isDeveloper: true
          });

          const someEntityWithInvalidAge = new SomeEntity({
            name: "Eduardo Pinto",
            age: 40,
            isDeveloper: true
          });

          const someEntityWithInvalidDeveloperFlag = new SomeEntity({
            name: "Eduardo Pinto",
            age: 20,
            isDeveloper: false
          });

          it("SHOULD be a invalid entity", () => {
            expect(someEntityWithInvalidName.isValid).toBe(false);
            expect(someEntityWithInvalidAge.isValid).toBe(false);
            expect(someEntityWithInvalidDeveloperFlag.isValid).toBe(false);
          })
        })
      });
    });

    describe("WITH validators for body properties not defined", () => {
      it("SHOULD throw a domain error when .valid is called", () => {
        const executeThrowableCode = () => {
          class SomeEntity extends BaseEntity<SomeEntityBody> {
            constructor(entityData: SomeEntityBody) {
              // @ts-ignore
              super(entityData, "SomeEntity", {});
            }
          }

          const someEntity = new SomeEntity({ name: "Eduardo Pinto", age: 20, isDeveloper: true });
            
          someEntity.isValid
        }
        
        expect(executeThrowableCode).toThrowError(DomainError);
      })
    })
  });
});
