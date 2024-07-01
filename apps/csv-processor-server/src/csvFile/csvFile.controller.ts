import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CsvFileService } from "./csvFile.service";
import { CsvFileControllerBase } from "./base/csvFile.controller.base";

@swagger.ApiTags("csvFiles")
@common.Controller("csvFiles")
export class CsvFileController extends CsvFileControllerBase {
  constructor(protected readonly service: CsvFileService) {
    super(service);
  }
}
