import { SortOrder } from "../../util/SortOrder";

export type CsvFileOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  processed?: SortOrder;
  updatedAt?: SortOrder;
};
