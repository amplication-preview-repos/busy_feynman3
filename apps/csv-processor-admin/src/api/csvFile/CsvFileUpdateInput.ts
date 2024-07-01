import { RecordUpdateManyWithoutCsvFilesInput } from "./RecordUpdateManyWithoutCsvFilesInput";

export type CsvFileUpdateInput = {
  filePath?: string | null;
  processed?: boolean | null;
  records?: RecordUpdateManyWithoutCsvFilesInput;
};
