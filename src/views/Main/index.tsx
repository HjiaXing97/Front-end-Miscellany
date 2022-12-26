import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "src/Router";
import { Layout } from "antd";
import { AppWrap } from "./styles";
import AppMenu from "src/components/AppMenu";
import { useLocation } from "react-router";

const Main = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AppWrap>
      <Layout>
        {!["/low-code"].includes(pathname) && (
          <Layout.Sider width={264} theme={"light"}>
            <AppMenu />
          </Layout.Sider>
        )}

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
};

export default Main;
