// OPTION 1:
// const COMMUNITY = {
//   id: "commId",
//   /**
//    *
//    */
//   users: ["userId1", "userId2", "......", "userId11294309"],
// };

// const USER = {
//   id: "userId1",
//   /**
//    *
//    */
//   communities: ["commId1", "commId2"],
// };

// // OPTION 2 - SQL APPROACH
// const USER_COMMUNITY = {
//     userId: 'userId1',
//     communityId: 'commId'
// }

// // OPTION 3
const USER = {
  id: "userId1",
  /**
   *
   */
  // subcollection
  communitySnippets: [
    {
      communityId: "commId1",
      photoURL: "someURL",
      // a few other things
    },
    {
      communityId: "commId2",
      photoURL: "someURL",
    },
    /**
     *
     */
    {
      communityId: "commId10",
      photoURL: "someURL",
    },
  ],
};

const COMMUNITY = {
  id: "commId",
  numOfMembers: "23947230472389245093480594387",
};
