/**
 * @Author: Create by wuyuwuqiu.  on 12月
 * @createdTime: 2022-12-24 13:40
 * @description:  路由配置文件
 */

import React, { lazy } from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router";

const Main = lazy(() => import("src/views/Main"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/main"} />
  },
  {
    path: "/main",
    element: <Main />
  }
];

export default routes;
