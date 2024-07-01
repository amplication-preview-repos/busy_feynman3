import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FtpConfigService } from "./ftpConfig.service";
import { FtpConfigControllerBase } from "./base/ftpConfig.controller.base";

@swagger.ApiTags("ftpConfigs")
@common.Controller("ftpConfigs")
export class FtpConfigController extends FtpConfigControllerBase {
  constructor(protected readonly service: FtpConfigService) {
    super(service);
  }
}
