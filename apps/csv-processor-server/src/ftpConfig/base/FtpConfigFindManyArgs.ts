/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FtpConfigWhereInput } from "./FtpConfigWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FtpConfigOrderByInput } from "./FtpConfigOrderByInput";

@ArgsType()
class FtpConfigFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FtpConfigWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FtpConfigWhereInput, { nullable: true })
  @Type(() => FtpConfigWhereInput)
  where?: FtpConfigWhereInput;

  @ApiProperty({
    required: false,
    type: [FtpConfigOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FtpConfigOrderByInput], { nullable: true })
  @Type(() => FtpConfigOrderByInput)
  orderBy?: Array<FtpConfigOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FtpConfigFindManyArgs as FtpConfigFindManyArgs };