import { CsvFileWhereInput } from "./CsvFileWhereInput";
import { CsvFileOrderByInput } from "./CsvFileOrderByInput";

export type CsvFileFindManyArgs = {
  where?: CsvFileWhereInput;
  orderBy?: Array<CsvFileOrderByInput>;
  skip?: number;
  take?: number;
};
