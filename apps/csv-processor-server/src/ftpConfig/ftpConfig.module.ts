import { Module } from "@nestjs/common";
import { FtpConfigModuleBase } from "./base/ftpConfig.module.base";
import { FtpConfigService } from "./ftpConfig.service";
import { FtpConfigController } from "./ftpConfig.controller";
import { FtpConfigResolver } from "./ftpConfig.resolver";

@Module({
  imports: [FtpConfigModuleBase],
  controllers: [FtpConfigController],
  providers: [FtpConfigService, FtpConfigResolver],
  exports: [FtpConfigService],
})
export class FtpConfigModule {}
