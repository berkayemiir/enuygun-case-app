"use client";

import React from "react";
import Card from "../card";
import { useQuery, useMutation, gql } from "@apollo/client";
import styled from "styled-components";
import LoadingSpinner from "../loader";

const GET_STAFF_MEMBERS = gql`
  query GetStaffMembers {
    staffMembers {
      id
      name
      job
      gender
      votes
    }
  }
`;

const VOTE_FOR_STAFF = gql`
  mutation VoteForStaff($id: ID!) {
    voteForStaff(id: $id) {
      id
      name
      job
      gender
      votes
    }
  }
`;

const Wrapper = styled.div`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: scroll;
  height: 100%;
  max-height: 100vh;

  @media only screen and (min-width: 991px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

function StaffList() {
  const { loading, error, data } = useQuery(GET_STAFF_MEMBERS);
  const [voteForStaff] = useMutation(VOTE_FOR_STAFF);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Personel Hata: {error.message}</p>;

  const handleVoteForStaff = async (id) => {
    try {
      await voteForStaff({ variables: { id } });
      console.info(`${id} için oy verildi`);
    } catch (error) {
      throw new Error(`{id} için oy verilirken hata oluştu.`);
    }
  };

  const sortedStaffMembers = [...data.staffMembers].sort(
    (a, b) => b.votes - a.votes
  );
  return (
    <Wrapper>
      {sortedStaffMembers.map((staff) => (
        <Card
          key={staff.id}
          id={staff.id}
          name={staff.name}
          job={staff.job}
          vote={staff.votes}
          gender={staff.gender}
          onClick={() => handleVoteForStaff(staff.id)}
        />
      ))}
    </Wrapper>
  );
}

export default StaffList;
