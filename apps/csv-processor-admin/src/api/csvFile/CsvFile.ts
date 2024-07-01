import { Record } from "../record/Record";

export type CsvFile = {
  createdAt: Date;
  filePath: string | null;
  id: string;
  processed: boolean | null;
  records?: Array<Record>;
  updatedAt: Date;
};
