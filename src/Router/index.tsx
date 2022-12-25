/**
 * @Author: Create by wuyuwuqiu.  on 12月
 * @createdTime: 2022-12-24 13:40
 * @description:  路由配置文件
 */

import React, { lazy } from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router";

const PersonalCenter = lazy(() => import("src/views/PersonalCenter"));
const LowCode = lazy(() => import("src/views/LowCode"));
const FlowDesign = lazy(() => import("src/views/FlowDesign"));
const DataSource = lazy(() => import("src/views/DataSource"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/data-source"} />
  },
  {
    path: "/data-source",
    element: <DataSource />
  },
  {
    path: "/personal-center",
    element: <PersonalCenter />
  },
  {
    path: "/low-code",
    element: <LowCode />
  },
  {
    path: "/flow-design",
    element: <FlowDesign />
  }
];

export default routes;
