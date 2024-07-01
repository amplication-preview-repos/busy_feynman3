import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecordList } from "./record/RecordList";
import { RecordCreate } from "./record/RecordCreate";
import { RecordEdit } from "./record/RecordEdit";
import { RecordShow } from "./record/RecordShow";
import { CsvFileList } from "./csvFile/CsvFileList";
import { CsvFileCreate } from "./csvFile/CsvFileCreate";
import { CsvFileEdit } from "./csvFile/CsvFileEdit";
import { CsvFileShow } from "./csvFile/CsvFileShow";
import { FtpConfigList } from "./ftpConfig/FtpConfigList";
import { FtpConfigCreate } from "./ftpConfig/FtpConfigCreate";
import { FtpConfigEdit } from "./ftpConfig/FtpConfigEdit";
import { FtpConfigShow } from "./ftpConfig/FtpConfigShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CSVProcessor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Record"
          list={RecordList}
          edit={RecordEdit}
          create={RecordCreate}
          show={RecordShow}
        />
        <Resource
          name="CsvFile"
          list={CsvFileList}
          edit={CsvFileEdit}
          create={CsvFileCreate}
          show={CsvFileShow}
        />
        <Resource
          name="FtpConfig"
          list={FtpConfigList}
          edit={FtpConfigEdit}
          create={FtpConfigCreate}
          show={FtpConfigShow}
        />
      </Admin>
    </div>
  );
};

export default App;
