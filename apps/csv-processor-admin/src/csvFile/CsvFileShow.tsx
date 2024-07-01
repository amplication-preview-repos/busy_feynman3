import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CSVFILE_TITLE_FIELD } from "./CsvFileTitle";

export const CsvFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="filePath" source="filePath" />
        <TextField label="ID" source="id" />
        <BooleanField label="processed" source="processed" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Record"
          target="csvFileId"
          label="Records"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CSVFile"
              source="csvfile.id"
              reference="CsvFile"
            >
              <TextField source={CSVFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
