import { useEffect, useRef, useState } from "react";
import Widget from "./Widget";
import styled from "styled-components";

declare global {
  interface Window {
    Trustpilot?: Trustpilot;
  }
}

type Trustpilot = {
  version?:
    | "carousel"
    | "dropDown"
    | "evaluate"
    | "grid"
    | "horizontal"
    | "list"
    | "listFiltered"
    | "microButton"
    | "microCombo"
    | "microReviewCount"
    | "microStar"
    | "microTrustScore"
    | "mini"
    | "miniCarousel"
    | "popUp"
    | "quote"
    | "reviewCollector"
    | "slider"
    | "starter";
  loadFromElement?: (
    divCurrent: React.MutableRefObject<HTMLDivElement>,
    bool: boolean
  ) => void;
};

const Trustpilot: React.FC<Trustpilot> = ({ version }) => {
  const [trustPilot, setTrustPilot] = useState(null);
  const widget = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined) setTrustPilot(window.Trustpilot);

    // another component may have loaded the trustpilot script
    if (!trustPilot) {
      const script = document?.createElement("script");
      script.src =
        "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      if (typeof window !== undefined)
        script.onload = () => {
          window.Trustpilot.loadFromElement(widget.current, true);
          setTrustPilot(window.Trustpilot);
        };
      document.body.appendChild(script);
    } else {
      trustPilot.loadFromElement(widget.current, true);
    }
  }, [trustPilot]);

  if (!trustPilot || !version)
    return (
      <Wrapper>
        <p>
          It appears that your browser (or its extension) is blocking
          Trustpilot.
        </p>
      </Wrapper>
    );

  if (version === "carousel")
    return (
      <Wrapper>
        <Widget height="140px" id="53aa8912dec7e10d38f59f36" ref={widget} />
      </Wrapper>
    );

  if (version === "dropDown")
    return (
      <Wrapper>
        <Widget height="30px" id="5418052cfbfb950d88702476" ref={widget} />
      </Wrapper>
    );

  if (version === "evaluate")
    return (
      <Wrapper>
        <Widget height="850px" id="530d0eaf748a510e2093cf9b" ref={widget} />
      </Wrapper>
    );

  if (version === "grid")
    return (
      <Wrapper>
        <Widget height="500px" id="539adbd6dec7e10e686debee" ref={widget} />
      </Wrapper>
    );

  if (version === "horizontal")
    return (
      <Wrapper>
        <Widget height="28px" id="5406e65db0d04a09e042d5fc" ref={widget} />
      </Wrapper>
    );

  if (version === "list")
    return (
      <Wrapper>
        <Widget height="500px" id="539ad60defb9600b94d7df2c" ref={widget} />
      </Wrapper>
    );

  if (version === "listFiltered")
    return (
      <Wrapper>
        <Widget height="500px" id="539ad998dec7e10e686debe0" ref={widget} />
      </Wrapper>
    );

  if (version === "microButton")
    return (
      <Wrapper>
        <Widget height="25px" id="5419b757fa0340045cd0c938" ref={widget} />
      </Wrapper>
    );

  if (version === "microCombo")
    return (
      <Wrapper>
        <Widget height="20px" id="5419b6ffb0d04a076446a9af" ref={widget} />
      </Wrapper>
    );

  if (version === "microReviewCount")
    return (
      <Wrapper>
        <Widget height="24px" id="5419b6a8b0d04a076446a9ad" ref={widget} />
      </Wrapper>
    );

  if (version === "microStar")
    return (
      <Wrapper>
        <Widget height="24px" id="5419b732fbfb950b10de65e5" ref={widget} />
      </Wrapper>
    );

  if (version === "microTrustScore")
    return (
      <Wrapper>
        <Widget height="20px" id="5419b637fa0340045cd0c936" ref={widget} />
      </Wrapper>
    );

  if (version === "mini")
    return (
      <Wrapper>
        <Widget height="150px" id="53aa8807dec7e10d38f59f32" ref={widget} />
      </Wrapper>
    );

  if (version === "miniCarousel")
    return (
      <Wrapper>
        <Widget height="350px" id="539ad0ffdec7e10e686debd7" ref={widget} />
      </Wrapper>
    );

  if (version === "popUp")
    return (
      <Wrapper>
        <Widget height="30px" id="5418015fb0d04a0c9cf721f2" ref={widget} />
      </Wrapper>
    );

  if (version === "quote")
    return (
      <Wrapper>
        <Widget height="300px" id="54d0e1d8764ea9078c79e6ee" ref={widget} />
      </Wrapper>
    );

  if (version === "reviewCollector")
    return (
      <Wrapper>
        <Widget height="52px" id="56278e9abfbbba0bdcd568bc" ref={widget} />
      </Wrapper>
    );

  if (version === "slider")
    return (
      <Wrapper>
        <Widget height="240px" id="54ad5defc6454f065c28af8b" ref={widget} />
      </Wrapper>
    );

  if (version === "starter")
    return (
      <Wrapper>
        <Widget height="100%" id="5613c9cde69ddc09340c6beb" ref={widget} />
      </Wrapper>
    );

  return null;
};

const Wrapper = styled.div`
  padding: 1rem;
`;

export default Trustpilot;
