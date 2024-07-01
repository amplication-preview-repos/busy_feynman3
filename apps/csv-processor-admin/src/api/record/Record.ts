import { CsvFile } from "../csvFile/CsvFile";
import { JsonValue } from "type-fest";

export type Record = {
  createdAt: Date;
  csvFile?: CsvFile | null;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
