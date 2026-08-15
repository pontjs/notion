import { runCLI } from "pontx/sdk-cli";
import { BASE_URL_ENV, DEFAULT_BASE_URL } from "./src/runtime";

export default runCLI({
  name: "pontx-notion",
  executeApi: {
    baseURL: process.env[BASE_URL_ENV] ?? DEFAULT_BASE_URL,
  },
});
