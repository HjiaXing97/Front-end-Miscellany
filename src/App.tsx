import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "src/Router";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>header</header>
      <Suspense fallback={"请稍后"}>{useRoutes(routes)}</Suspense>
    </div>
  );
}

export default App;
