import { faker } from "@faker-js/faker";

export const staffMembers = [];
for (let i = 0; i < 10; i++) {
  const person = {
    id: i + 1,
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
    gender: faker.person.sexType(),
    bio: faker.person.bio(),
    votes: 0,
  };
  staffMembers.push(person);
}
