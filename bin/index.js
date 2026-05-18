#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import figlet from "figlet";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(
  chalk.green(
    figlet.textSync("Portfolio CLI")
  )
);

// BASIC INFO
const answers = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Your name:"
  },
  {
  type: "input",
  name: "username",
  message: "Terminal username:"
},
{
  type: "input",
  name: "hostname",
  message: "Terminal hostname:"
},
  {
    type: "input",
    name: "role",
    message: "Your role:"
  },
  {
    type: "input",
    name: "about",
    message: "About you:"
  },
  {
    type: "input",
    name: "skills",
    message: "Skills (comma separated):"
  },
  {
  type: "input",
  name: "github",
  message: "GitHub URL:",

  validate: input =>
    input.startsWith("https://")
      || "Must start with https://"
},
  {
  type: "input",
  name: "linkedin",
  message: "LinkedIn URL:",

  validate: input =>
    input.startsWith("https://")
      || "Must start with https://"
},
  {
  type: "input",
  name: "email",
  message: "Email:",

  validate: input =>
    input.includes("@")
      || "Enter valid email"
},{
  type: "input",
  name: "resume",
  message: "Resume PDF path OR URL:",

  validate: input => {

    if (
      input.startsWith("http")
    ) return true;

    if (
      input.endsWith(".pdf")
    ) return true;

    return "Enter valid PDF path or URL";
  }
},
  {
  type: "input",
  name: "phone",
  message: "Phone number with country code:",

  validate: input => {

    const phoneRegex =
/^\+\d{1,4}\s?\d{10,14}$/
    return phoneRegex.test(input)
      || "Enter valid phone number (example: +91 9876543210)";
  }
}
]);

// PROJECTS
const projects = [];

let addMoreProjects = true;

while (addMoreProjects) {

  const project = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Project name:"
    },
    {
      type: "input",
      name: "description",
      message: "Project description:"
    },
    {
  type: "input",
  name: "link",
  message: "Project link:",

  validate: input =>
    input.startsWith("https://")
      || "Must start with https://"
},
    {
      type: "input",
      name: "stack",
      message: "Tech stack (comma separated):"
    }
  ]);

  projects.push(project);

  const again = await inquirer.prompt([
    {
      type: "confirm",
      name: "more",
      message: "Add another project?",
      default: false
    }
  ]);

  addMoreProjects = again.more;
}

// EXPERIENCE
const experiences = [];

let addMoreExperience = true;

while (addMoreExperience) {

  const exp = await inquirer.prompt([
    {
      type: "input",
      name: "company",
      message: "Company name:"
    },
    {
      type: "input",
      name: "role",
      message: "Role:"
    },
    {
      type: "input",
      name: "duration",
      message: "Duration:"
    },
    {
      type: "input",
      name: "description",
      message: "Description:"
    }
  ]);

  experiences.push(exp);

  const again = await inquirer.prompt([
    {
      type: "confirm",
      name: "more",
      message: "Add another experience?",
      default: false
    }
  ]);

  addMoreExperience = again.more;
}

// EDUCATION
const education = [];

let addMoreEducation = true;

while (addMoreEducation) {

  const edu = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Degree:"
    },
    {
      type: "input",
      name: "org",
      message: "Institution:"
    },
    {
      type: "input",
      name: "date",
      message: "Duration:"
    },
    {
      type: "input",
      name: "extra",
      message: "Extra info:"
    }
  ]);

  education.push(edu);

  const again = await inquirer.prompt([
    {
      type: "confirm",
      name: "more",
      message: "Add another education?",
      default: false
    }
  ]);

  addMoreEducation = again.more;
}

// CERTIFICATIONS
const certs = [];

let addMoreCerts = true;

while (addMoreCerts) {

  const cert = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Certification name:"
    },
    {
  type: "input",
  name: "link",
  message: "Certificate link:",

  validate: input =>
    input.startsWith("https://")
      || "Must start with https://"
}
  ]);

  certs.push(cert);

  const again = await inquirer.prompt([
    {
      type: "confirm",
      name: "more",
      message: "Add another certification?",
      default: false
    }
  ]);

  addMoreCerts = again.more;
}

// TEMPLATE
const templatePath = path.join(
  __dirname,
  "../templates/terminal/index.html"
);

let html = await fs.readFile(templatePath, "utf-8");
const outputDir = path.join(process.cwd(), "portfolio");

await fs.ensureDir(outputDir);
let resumeValue = "";

if (answers.resume.startsWith("http")) {

  resumeValue = answers.resume;

}

else if (answers.resume.trim() !== "") {

  const resumeDestination =
    path.join(outputDir, "resume.pdf");

  await fs.copy(
    answers.resume,
    resumeDestination
  );

  resumeValue = "resume.pdf";
}
// DATA OBJECT
const portfolioData = {
    username: answers.username,
hostname: answers.hostname,
resume: answers.resume,
resume: resumeValue,
  name: answers.name,
  logo: figlet.textSync(
  answers.name.toUpperCase(),
  {
font: "Standard"  }
),

  role: answers.role,

  summary: answers.about,

  skills: [
    {
      label: "Tech Stack",

      tags: answers.skills
.split(/[, ]+/)        .map(skill => skill.trim()),

      type: "lang"
    }
  ],

  experience: experiences.map(exp => ({
    title: exp.role,

    org: exp.company,

    date: exp.duration,

    link: "",

linkLabel: "",
    bullets: [exp.description]
  })),

  projects: projects.map(project => ({
    name: project.name,

    stack: project.stack
.split(/[, ]+/)      .map(s => s.trim()),

    link: project.link,

    linkLabel: "↗ github",

    bullets: [project.description]
  })),

  education: education.map(edu => ({
    title: edu.title,

    org: edu.org,

    date: edu.date,

    extra: edu.extra
  })),

  certs: certs.map(cert => ({
    name: cert.name,

    link: cert.link
  })),

  contact: [
    {
      key: "Email",

      val: `<a href="mailto:${answers.email}">
              ${answers.email}
            </a>`
    },

    {
      key: "Phone",

      val: answers.phone
    },

    {
      key: "GitHub",

      val: `<a href="${answers.github}"
                 target="_blank">
              ${answers.github}
            </a>`
    },

    {
      key: "LinkedIn",

      val: `<a href="${answers.linkedin}"
                 target="_blank">
              ${answers.linkedin}
            </a>`
    }
  ]
};

// INJECT DATA
html = html.replace(
  "__DATA__",
  JSON.stringify(portfolioData)
);

// OUTPUT

await fs.writeFile(
  path.join(outputDir, "index.html"),
  html
);

console.log(
  chalk.green(
    "\n🔥 Portfolio generated successfully!\n"
  )
);