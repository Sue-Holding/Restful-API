import { Cookie, SessionData } from "express-session";

const testSession: SessionData = {
  user: { name: "Test User" },
  cookie: new Cookie
};

console.log(testSession.user?.name);