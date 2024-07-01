import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CsvFileServiceBase } from "./base/csvFile.service.base";

@Injectable()
export class CsvFileService extends CsvFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
