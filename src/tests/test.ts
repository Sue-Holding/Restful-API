import { SessionData } from "express-session";

const testSession: SessionData = {
  user: { name: "Test User" }
};

console.log(testSession.user?.name);