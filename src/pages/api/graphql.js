import { ApolloServer, gql } from "apollo-server-micro";
import { staffMembers } from "../../app/data/mockData";

const typeDefs = gql`
  type StaffMember {
    id: ID!
    name: String!
    job: String!
    gender: String!
    bio: String!
    votes: Int!
  }

  type Query {
    staffMembers: [StaffMember!]!
    staffMember(id: ID!): StaffMember
  }

  type Mutation {
    voteForStaff(id: ID!): StaffMember
  }
`;

const resolvers = {
  Query: {
    staffMembers: () => staffMembers,
    staffMember: (_, { id }) => {
      const foundStaff = staffMembers.find(
        (staff) => Number(staff.id) === Number(id)
      );
      if (!foundStaff) {
        throw new Error("Staff member not found");
      }
      return foundStaff;
    },
  },
  Mutation: {
    voteForStaff: (_, { id }) => {
      const staffIndex = staffMembers.findIndex(
        (staff) => staff.id === parseInt(id)
      );
      if (staffIndex === -1) {
        throw new Error("Staff member not found");
      }
      staffMembers[staffIndex].votes++;
      return staffMembers[staffIndex];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

await apolloServer.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
