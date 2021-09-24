import React from "react";

import Trustpilot from "./Trustpilot";

export default {
  title: "Trustpilot/Widgets",
  component: Trustpilot,
};

export const Error = () => <Trustpilot />;
Error.parameters = { controls: { hideNoControlsWarning: true } };

export const Carousel = () => <Trustpilot version="carousel" />;
Carousel.parameters = { controls: { hideNoControlsWarning: true } };

export const DropDown = () => <Trustpilot version="dropDown" />;
DropDown.parameters = { controls: { hideNoControlsWarning: true } };

export const Evaluate = () => <Trustpilot version="evaluate" />;
Evaluate.parameters = { controls: { hideNoControlsWarning: true } };

export const Grid = () => <Trustpilot version="grid" />;
Grid.parameters = { controls: { hideNoControlsWarning: true } };

export const Horizontal = () => <Trustpilot version="horizontal" />;
Horizontal.parameters = { controls: { hideNoControlsWarning: true } };

export const List = () => <Trustpilot version="list" />;
List.parameters = { controls: { hideNoControlsWarning: true } };

export const ListFiltered = () => <Trustpilot version="listFiltered" />;
ListFiltered.parameters = { controls: { hideNoControlsWarning: true } };

export const MicroButton = () => <Trustpilot version="microButton" />;
MicroButton.parameters = { controls: { hideNoControlsWarning: true } };

export const MicroCombo = () => <Trustpilot version="microCombo" />;
MicroCombo.parameters = { controls: { hideNoControlsWarning: true } };

export const MicroReviewCount = () => <Trustpilot version="microReviewCount" />;
MicroReviewCount.parameters = { controls: { hideNoControlsWarning: true } };

export const MicroStar = () => <Trustpilot version="microStar" />;
MicroStar.parameters = { controls: { hideNoControlsWarning: true } };

export const MicroTrustScore = () => <Trustpilot version="microTrustScore" />;
MicroTrustScore.parameters = { controls: { hideNoControlsWarning: true } };

export const Mini = () => <Trustpilot version="mini" />;
Mini.parameters = { controls: { hideNoControlsWarning: true } };

export const MiniCarousel = () => <Trustpilot version="miniCarousel" />;
MiniCarousel.parameters = { controls: { hideNoControlsWarning: true } };

export const PopUp = () => <Trustpilot version="popUp" />;
PopUp.parameters = { controls: { hideNoControlsWarning: true } };

export const Quote = () => <Trustpilot version="quote" />;
Quote.parameters = { controls: { hideNoControlsWarning: true } };

export const ReviewCollector = () => <Trustpilot version="reviewCollector" />;
ReviewCollector.parameters = { controls: { hideNoControlsWarning: true } };

export const Slider = () => <Trustpilot version="slider" />;
Slider.parameters = { controls: { hideNoControlsWarning: true } };

export const Starter = () => <Trustpilot version="starter" />;
Starter.parameters = { controls: { hideNoControlsWarning: true } };
