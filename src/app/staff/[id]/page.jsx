"use client";

import { useQuery, gql } from "@apollo/client";
import LoadingSpinner from "../../../components/loader";
import styled from "styled-components";

const GET_STAFF_MEMBER = gql`
  query GetStaffMember($id: ID!) {
    staffMember(id: $id) {
      id
      name
      job
      gender
      votes
      bio
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #6c757d;
  font-size: 20px;
  font-weight: 700;
`;

const JobTitle = styled.h2`
  font-size: 0.75rem;
  text-align: center;
  color: #adb5bd;
`;

const Description = styled.p`
  color: #6c757d;
  font-size: 1rem;
  text-align: center;
`;

const StaffDetailPage = ({ params }) => {
  const { id } = params;
  const { loading, error, data } = useQuery(GET_STAFF_MEMBER, {
    variables: { id },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Personel Detayı Hata: {error.message}</p>;

  const staffMember = data.staffMember;

  return (
    <Wrapper>
      <Image
        src={
          staffMember.gender === "male"
            ? "/man-profile.svg"
            : "/women-profile.svg"
        }
        alt="Profile Picture"
      />
      <Title>{staffMember.name}</Title>
      <JobTitle>{staffMember.job}</JobTitle>
      <Description>{staffMember.bio}</Description>
      <p>
        <strong>Oy Sayısı: </strong>
        {staffMember.votes}
      </p>
    </Wrapper>
  );
};

export default StaffDetailPage;
