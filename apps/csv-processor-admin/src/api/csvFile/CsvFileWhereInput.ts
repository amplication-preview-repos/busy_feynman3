import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";

export type CsvFileWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  processed?: BooleanNullableFilter;
  records?: RecordListRelationFilter;
};
