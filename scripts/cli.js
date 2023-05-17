import { createProject } from "./main";

export async function cli(args) {
  const options = {
    directory: args._[0],
    typescript: args["--typescript"] || false,
  };
  await createProject(options);
}
