import { CsvFile as TCsvFile } from "../api/csvFile/CsvFile";

export const CSVFILE_TITLE_FIELD = "filePath";

export const CsvFileTitle = (record: TCsvFile): string => {
  return record.filePath?.toString() || String(record.id);
};
