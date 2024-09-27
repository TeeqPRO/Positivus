import React from "react";

import LogoVer1 from "./components/assets/logo/ver1/logoVer1";
import LogoVer2 from "./components/assets/logo/ver2/logoVer2";

import MinusIconVer1 from "./components/assets/minus_icon/ver1/minusIconVer1";
import PlusIconVer1 from "./components/assets/plus_icon/ver1/plusIconVer1";

import ButtonVer1 from "./components/assets/button/ver1/buttonver1";
import ButtonVer2 from "./components/assets/button/ver2/buttonVer2";
import ButtonVer3 from "./components/assets/button/ver3/buttonVer3";

import LinkVer1 from "./components/assets/link/ver1/linkVer1";
import LinkVer2 from "./components/assets/link/ver2/linkVer2";
import LinkVer3 from "./components/assets/link/ver3/linkVer3";

function App() {
  return (
    <>
      <h1>test</h1>
      <h2>test</h2>
      <h3>test</h3>
      <h4>test</h4>
      <p>test</p>

      <h2 className="headingVer1">
        Label
      </h2>
      <h2 className="headingVer2">
        Label
      </h2>

      <LogoVer1 />
      <LogoVer2 />

      <MinusIconVer1 />
      <PlusIconVer1 />

      <ButtonVer1 />
      <ButtonVer2 />
      <ButtonVer3 />

      <LinkVer1 />
      <LinkVer2 />
      <LinkVer3 />
    </>
  );
}

export default App;
