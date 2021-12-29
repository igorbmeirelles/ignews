import { NextApiRequest, NextApiResponse } from "next";

const users = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: "igor",
    },
    {
      id: 2,
      name: "Barreto",
    },
  ];
  return response.json(users);
};

export default users;
