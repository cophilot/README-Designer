/* eslint-disable no-template-curly-in-string */
export function convertREADME(githubName, fullName, repoName) {
    const text = [
        '<div align="center">',
        '  <br />',
        '  <!-- <img src="" alt="${REPONAME}Logo" width="30%"/> -->',
        '  <h1>${REPONAME}</h1>',
        '  <p>',
        '     Description',
        '  </p>',
        '</div>',
        '',
        '<!-- Badges -->',
        '<div align="center">',
        '   <a href="https://github.com/${GITHUBNAME}/${REPONAME}/releases">',
        '       <img src="https://img.shields.io/github/v/release/${GITHUBNAME}/${REPONAME}?display_name=tag" alt="current realease" />',
        '   </a>',
        '   <a href="https://github.com/${GITHUBNAME}/${REPONAME}/blob/master/LICENSE">',
        '       <img src="https://img.shields.io/github/license/${GITHUBNAME}/${REPONAME}" alt="license" />',
        '   </a>',
        '   <a href="https://github.com/${GITHUBNAME}/${REPONAME}/stargazers">',
        '       <img src="https://img.shields.io/github/stars/${GITHUBNAME}/${REPONAME}" alt="stars" />',
        '   </a>',
        '   <a href="https://github.com/${GITHUBNAME}/${REPONAME}/commits/master">',
        '       <img src="https://img.shields.io/github/last-commit/${GITHUBNAME}/${REPONAME}" alt="last commit" />',
        '   </a>',
        '</div>',
        '',
        '---',
        '',
        '* [Bugs](#bugs)',
        '* [Release Notes](#release-notes)',
        '',
        '---',
        '',
        '## Bugs',
        '',
        '* *no known bugs*',
        '',
        '---',
        '',
        '## [Release Notes](https://github.com/${GITHUBNAME}/${REPONAME}/blob/master/CHANGELOG.md)',
        '',
        '### [v0.0.1](https://github.com/${GITHUBNAME}/${REPONAME}/tree/0.0.1)',
        '',
        '* *Initial release*',
        '',
        '---',
        '',
        'by [${FULLNAME}](https://github.com/${GITHUBNAME})',
    ];
    repoName = repoName.replace(/ /g, '-');
    let result = '';
    for (let line of text) {
        line = line.replace(/\$\{GITHUBNAME\}/g, githubName);
        line = line.replace(/\$\{FULLNAME\}/g, fullName);
        line = line.replace(/\$\{REPONAME\}/g, repoName);
        result += line + '\n';
    }
    return result;
}
