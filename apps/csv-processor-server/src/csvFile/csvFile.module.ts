import { Module } from "@nestjs/common";
import { CsvFileModuleBase } from "./base/csvFile.module.base";
import { CsvFileService } from "./csvFile.service";
import { CsvFileController } from "./csvFile.controller";
import { CsvFileResolver } from "./csvFile.resolver";

@Module({
  imports: [CsvFileModuleBase],
  controllers: [CsvFileController],
  providers: [CsvFileService, CsvFileResolver],
  exports: [CsvFileService],
})
export class CsvFileModule {}
