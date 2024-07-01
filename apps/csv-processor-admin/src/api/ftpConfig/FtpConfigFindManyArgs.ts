import { FtpConfigWhereInput } from "./FtpConfigWhereInput";
import { FtpConfigOrderByInput } from "./FtpConfigOrderByInput";

export type FtpConfigFindManyArgs = {
  where?: FtpConfigWhereInput;
  orderBy?: Array<FtpConfigOrderByInput>;
  skip?: number;
  take?: number;
};
