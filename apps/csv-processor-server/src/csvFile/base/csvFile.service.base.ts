/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CsvFile as PrismaCsvFile,
  Record as PrismaRecord,
} from "@prisma/client";

export class CsvFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CsvFileCountArgs, "select">): Promise<number> {
    return this.prisma.csvFile.count(args);
  }

  async csvFiles(args: Prisma.CsvFileFindManyArgs): Promise<PrismaCsvFile[]> {
    return this.prisma.csvFile.findMany(args);
  }
  async csvFile(
    args: Prisma.CsvFileFindUniqueArgs
  ): Promise<PrismaCsvFile | null> {
    return this.prisma.csvFile.findUnique(args);
  }
  async createCsvFile(args: Prisma.CsvFileCreateArgs): Promise<PrismaCsvFile> {
    return this.prisma.csvFile.create(args);
  }
  async updateCsvFile(args: Prisma.CsvFileUpdateArgs): Promise<PrismaCsvFile> {
    return this.prisma.csvFile.update(args);
  }
  async deleteCsvFile(args: Prisma.CsvFileDeleteArgs): Promise<PrismaCsvFile> {
    return this.prisma.csvFile.delete(args);
  }

  async findRecords(
    parentId: string,
    args: Prisma.RecordFindManyArgs
  ): Promise<PrismaRecord[]> {
    return this.prisma.csvFile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .records(args);
  }
}