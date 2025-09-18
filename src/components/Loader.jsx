// Loader.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

// Spin animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Loader container
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // full screen height
`;

// Earth loader
const Earth = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #4cafef; // water color
  border-top: 6px solid #81c784; // land color
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Earth />
    </LoaderWrapper>
  );
};

export default Loader;
