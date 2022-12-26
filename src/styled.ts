import styled from "styled-components";

export const AppWrap = styled.div`
  height: 100%;
  .ant-layout-sider {
    box-shadow: 2px 2px 20px rgba(245, 245, 245);
  }
  .ant-layout {
    height: 100%;
  }
  .ant-layout-content {
    margin: 5px;
  }
  .ant-layout-header,
  .ant-layout-footer {
    background: var(--bgColor);
  }
`;
