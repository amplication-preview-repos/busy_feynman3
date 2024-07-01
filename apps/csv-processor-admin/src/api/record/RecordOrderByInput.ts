import { SortOrder } from "../../util/SortOrder";

export type RecordOrderByInput = {
  createdAt?: SortOrder;
  csvFileId?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
