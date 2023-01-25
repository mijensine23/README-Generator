// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license === 'None'){
    licenseBadge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink; 

  //switch function for links to selected license
  switch (license) {
    case 'MIT':
      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';  
      break;
    case 'GNU GLPv2':
      licenseLink = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'APACHE 2.0':
      licenseLink= '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    default:
      break;

  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license != 'None') {
    licenseSection += '## License\n'
    licenseSection += 'Visit' + renderLicenseLink(license) + 'for more detailed information about this license\n';
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: ${data.userLicense}](${renderLicenseBadge(data)})](${renderLicenseLink(data)})

  ## Description\n${data.description}\n
  Deployed URL\n${data.userURL}
  
  ## Table of Contents\n
-[Installation](#Installation)\n
-[Usage](#Usage)\n
-[Contributions](#Contribution)\n
-[Test](#Test)\n
-[Questions](#Questions)\n

##Installation:
${data.userInstall}

##Usage:
${data.userInstructions}

##Contributions:
${data.contributor}

##Tests:
${data.test}

##Questions:
-Github Username:[${data.userName}](https://github.com(${data.userName})
-Email Address: ${data.userEmail}
`;
}

module.exports = generateMarkdown;
