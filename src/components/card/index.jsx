"use client";

import styled from "styled-components";
import Link from "next/link";

function Card({ name, job, onClick, id, vote, gender }) {
  const Title = styled.h1`
    font-size: 1rem;
    text-align: center;
    color: #6c757d;
    min-height: 43px;
  `;

  const JobTitle = styled.h2`
    font-size: 0.75rem;
    text-align: center;
    min-height: 33px;
    color: #adb5bd;
    margin-bottom: 20px;
  `;

  const Card = styled.section`
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px;
    border: 1px solid #efefef;
  `;

  const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  `;

  const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    position: relative;
  `;

  const Button = styled.button`
    width: 100%;
    background-color: #2dc44d;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    z-index: 100;
    position: relative;
    &:hover {
      background-color: #1d9b40;
      border-radius: 5px;
    }
  `;

  const Vote = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #2dc44d;
    -webkit-border-top-right-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-topright: 10px;
    -moz-border-radius-bottomleft: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 0.75rem;
    padding: 10px;
    color: white;
  `;

  const StyledLink = styled(Link)`
    width: 100%;
    color: inherit;
    text-decoration: none;
  `;

  return (
    <Wrapper>
      <Card>
        <Image
          src={gender === "male" ? "/man-profile.svg" : "/women-profile.svg"}
          alt="Profile Picture"
        />

        <StyledLink href={`staff/${id}`}>
          <Title>{name}</Title>
        </StyledLink>

        <JobTitle>{job}</JobTitle>
        <Vote>{vote}</Vote>
        <Button onClick={onClick}>OY KULLAN</Button>
      </Card>
    </Wrapper>
  );
}

export default Card;
