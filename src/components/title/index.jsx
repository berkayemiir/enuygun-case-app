"use client";

import React from "react";
import styled from "styled-components";

function Title({ children }) {
  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e9ecef;
    margin-bottom: 20px;
  `;

  const Title = styled.h1`
    color: #6c757d;
    font-size: 20px;
    font-weight: 700;
  `;
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
}

export default Title;
