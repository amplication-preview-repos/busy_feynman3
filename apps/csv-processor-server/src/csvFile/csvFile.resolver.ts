import * as graphql from "@nestjs/graphql";
import { CsvFileResolverBase } from "./base/csvFile.resolver.base";
import { CsvFile } from "./base/CsvFile";
import { CsvFileService } from "./csvFile.service";

@graphql.Resolver(() => CsvFile)
export class CsvFileResolver extends CsvFileResolverBase {
  constructor(protected readonly service: CsvFileService) {
    super(service);
  }
}
