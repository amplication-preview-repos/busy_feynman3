import { CsvFileWhereUniqueInput } from "../csvFile/CsvFileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RecordUpdateInput = {
  csvFile?: CsvFileWhereUniqueInput | null;
  data?: InputJsonValue;
};
