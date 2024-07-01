import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FtpConfigServiceBase } from "./base/ftpConfig.service.base";

@Injectable()
export class FtpConfigService extends FtpConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
