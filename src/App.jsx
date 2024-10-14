import React from "react";

import LogoVer1 from "./components/assets/logo/ver1/logoVer1";
import LogoVer2 from "./components/assets/logo/ver2/logoVer2";

import MinusIconVer1 from "./components/assets/minus_icon/ver1/minusIconVer1";
import PlusIconVer1 from "./components/assets/plus_icon/ver1/plusIconVer1";

import LinkVer1 from "./components/assets/link/ver1/linkVer1";
import LinkVer2 from "./components/assets/link/ver2/linkVer2";
import LinkVer3 from "./components/assets/link/ver3/linkVer3";

import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Logotypes from "./components/logotypes/logotypes";
import Services from "./components/servicescomponent/services";
import Cta_block from "./components/cta_block/cta_block";
import Case_studies from "./components/case_studies/case_studies";
import Our_working_process from "./components/our_working_process/Our_working_process";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      {/* <h1>test</h1>
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

      <ButtonVer1 content="book a quote" width="1000px"/>
      <ButtonVer2 content="quote" width="100%"/>
      <ButtonVer3 content="test" width="200px"/>

      <LinkVer1 />
      <LinkVer2 />
      <LinkVer3 /> */}

      <Navbar />
      <Header />
      <Logotypes />
      <Services />
      <Cta_block />
      <Case_studies />
      <Our_working_process />
      <Team />
      <Footer />
    </>
  );
}

export default App;
