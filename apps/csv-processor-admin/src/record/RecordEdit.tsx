import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CsvFileTitle } from "../csvFile/CsvFileTitle";

export const RecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="csvFile.id" reference="CsvFile" label="CSVFile">
          <SelectInput optionText={CsvFileTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
