/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CsvFileWhereUniqueInput } from "../../csvFile/base/CsvFileWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class RecordWhereInput {
  @ApiProperty({
    required: false,
    type: () => CsvFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CsvFileWhereUniqueInput)
  @IsOptional()
  @Field(() => CsvFileWhereUniqueInput, {
    nullable: true,
  })
  csvFile?: CsvFileWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  data?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { RecordWhereInput as RecordWhereInput };