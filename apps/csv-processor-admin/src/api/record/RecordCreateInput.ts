import { CsvFileWhereUniqueInput } from "../csvFile/CsvFileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RecordCreateInput = {
  csvFile?: CsvFileWhereUniqueInput | null;
  data?: InputJsonValue;
};
