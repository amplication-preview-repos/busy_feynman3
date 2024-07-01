import * as graphql from "@nestjs/graphql";
import { FtpConfigResolverBase } from "./base/ftpConfig.resolver.base";
import { FtpConfig } from "./base/FtpConfig";
import { FtpConfigService } from "./ftpConfig.service";

@graphql.Resolver(() => FtpConfig)
export class FtpConfigResolver extends FtpConfigResolverBase {
  constructor(protected readonly service: FtpConfigService) {
    super(service);
  }
}
