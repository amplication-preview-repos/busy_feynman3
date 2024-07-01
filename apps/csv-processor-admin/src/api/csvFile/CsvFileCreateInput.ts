import { RecordCreateNestedManyWithoutCsvFilesInput } from "./RecordCreateNestedManyWithoutCsvFilesInput";

export type CsvFileCreateInput = {
  filePath?: string | null;
  processed?: boolean | null;
  records?: RecordCreateNestedManyWithoutCsvFilesInput;
};
