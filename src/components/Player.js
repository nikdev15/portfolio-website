import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = ({ className , url}) => (
  <ReactPlayer
    url={url}
    className={className}
    playing
    width="100%"
    height="100%"
    controls={false}
    muted
    loop={true}
  />
);

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`;

const RelativePositionWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const ResponsiveStyledPlayer = ({url}) => (
  <RelativePositionWrapper>
    <AbsolutelyPositionedPlayer url={url} />
  </RelativePositionWrapper>
);

export default ResponsiveStyledPlayer;