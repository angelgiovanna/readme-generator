function renderLicenseBadge(license) {
    if (license === "MIT") {
      return `![license](https://img.shields.io/badge/license-MIT-brightgreen)`
    }
    if (license === "APACHE") {
      return `![license](https://img.shields.io/badge/license-APACHE-brightgreen)`
      }
      if (license === "none") {
      return ""
    }
  }
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}
1. [Description](#description)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Github Repository](#github-repository)


## Description
*  ${data.description}
## User Story
*  ${data.userstory}
## Acceptance Criteria
*  ${data.acceptancecriteria}
## Github Repository
*  ${data.github}
  `;
  }
  
module.exports = generateMarkdown;