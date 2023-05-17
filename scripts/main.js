import path from "path";
import Listr from "listr";
import { npmSetup } from "./pkgjson";
import chalk from "chalk";

export const createProject = async (options) => {
  options = {
    ...options,
    template: options.typescript ? "typescript" : "javascript",
    targetDirectory:
      options.targetDirectory || `${process.cwd()}/${options.directory}`,
  };

  const currentUrl = import.meta.url;
  const templateDir = path.resolve(
    new URL(currentUrl).pathname,
    "../../templates",
    options.template.toLowerCase()
  );
  options.templateDirectory = templateDir;

  const npm = await npmSetup(options);
  const allTasks = new Listr([npm]);

  await allTasks.run();
  console.log("%s Installation Complete", chalk.green.bold("DONE"));
  return true;
};
