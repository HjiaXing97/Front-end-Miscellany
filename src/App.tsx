import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "src/Router";
import { Layout } from "antd";
import { AppWrap } from "./styled";
import AppMenu from "src/components/AppMenu";

function App() {
  return (
    <AppWrap>
      <Layout>
        <Layout.Sider width={264}>
          <AppMenu />
        </Layout.Sider>
        <Layout>
          <Layout.Header>Header</Layout.Header>
          <Layout.Content>
            <Suspense fallback={"请稍后"}>{useRoutes(routes)}</Suspense>
          </Layout.Content>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>
      </Layout>
    </AppWrap>
  );
}

export default App;
