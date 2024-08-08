import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Food Foster",
    email: "foodfoster@support.com",
  },
});

export default UserContext;
