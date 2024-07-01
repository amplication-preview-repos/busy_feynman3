import { CsvFileWhereUniqueInput } from "../csvFile/CsvFileWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecordWhereInput = {
  csvFile?: CsvFileWhereUniqueInput;
  data?: JsonFilter;
  id?: StringFilter;
};
