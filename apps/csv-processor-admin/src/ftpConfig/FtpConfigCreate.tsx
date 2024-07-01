import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FtpConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="host" source="host" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="remotePath" source="remotePath" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
