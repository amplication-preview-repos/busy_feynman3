import { FtpConfig as TFtpConfig } from "../api/ftpConfig/FtpConfig";

export const FTPCONFIG_TITLE_FIELD = "username";

export const FtpConfigTitle = (record: TFtpConfig): string => {
  return record.username?.toString() || String(record.id);
};
