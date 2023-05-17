#!/usr/bin/env node
import fs from "fs";
import chalk from "chalk";
import ncp from "ncp";
import { promisify } from "util";
import path from "path";

const access = promisify(fs.access);
const copy = promisify(ncp);

const currentUrl = import.meta.url;
const templateDir = path.resolve(
  new URL(currentUrl).pathname,
  "../../templates"
);

const options = {
  targetDirectory: process.argv[2] || process.cwd(),
  templateDirectory: templateDir,
};

async function copyTemplateFiles(options) {
  console.log("Copying...");
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

const files = async (options) => {
  try {
    await access(options.templateDirectory, fs.constants.R_OK);
  } catch (error) {
    console.log("error", error);
    console.error("%s Invalid Template Name", chalk.red.bold("ERROR"));
    process.exit(1);
  }

  copyTemplateFiles(options);
};

await files(options);
