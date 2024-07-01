import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FtpConfigWhereInput = {
  host?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  port?: IntNullableFilter;
  remotePath?: StringNullableFilter;
  username?: StringNullableFilter;
};
