import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CsvFileTitle } from "../csvFile/CsvFileTitle";

export const RecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="csvFile.id" reference="CsvFile" label="CSVFile">
          <SelectInput optionText={CsvFileTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
