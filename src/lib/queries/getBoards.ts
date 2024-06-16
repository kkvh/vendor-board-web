export const getBoards = `
{
  boards {
    id
    name
    vendor {
      name
      slug
    }
    devices {
      name
      id
    }
  }
}
`;
