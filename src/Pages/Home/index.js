import React, { useEffect, useState, Fragment } from "react";
import { ContainerHome } from "../../Containers/ContainerHome";
import { ContainerBtc } from "../../Containers/ContainerBtc";
import { ContainerBtcDetails } from "../../Containers/ContainerBtcDetails";
import { ContainerBtcGraph } from "../../Containers/ContainerBtcGraph";
import { HeaderPage } from "../../Components/HeaderPage";
import { FooterPage } from "../../Components/FooterPage";
import { TitlePage } from "../../Components/TitlePage";
import { BtcPrice } from "../../Components/BtcPrice";
import { BtcStatus } from "../../Components/BtcStatus";
import { BtcGraph } from "../../Components/BtcGraph";
import { BtnLogout } from "../../Components/BtnLogout";
import { Loader } from "../../Components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  const renderBtcStatus = () => (
    <Fragment>
      <ContainerBtcDetails>
        <BtcPrice />
        <BtcStatus />
      </ContainerBtcDetails>
      <ContainerBtcDetails>
        <ContainerBtcGraph>
          <BtcGraph />
        </ContainerBtcGraph>
      </ContainerBtcDetails>
    </Fragment>
  );
  const renderBtcPrice = () => (isLoading ? <Loader /> : renderBtcStatus());

  return (
    <ContainerHome>
      <HeaderPage>
        <TitlePage title="Home" />
        <BtnLogout />
      </HeaderPage>
      <ContainerBtc>{renderBtcPrice()}</ContainerBtc>
      <FooterPage />
    </ContainerHome>
  );
};

export { Home };
