import { setupServer, SetupServerApi } from "msw/node";
import { handlers } from "./handlers.js";

export const server = setupServer(...handlers);