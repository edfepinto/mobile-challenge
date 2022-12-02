import "react-native-get-random-values";
import { v4 } from "uuid";

import { UuidPort } from "./uuid.port";

export class UuidAdapter implements UuidPort {
  generate(): string {
    return v4();
  }
}
