const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
<h1 align="center">Hi 👋, I'm Kangkai</h1>

<!-- Year progress bar -->
<p align="center">⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %</p>

---

<!-- Auto update time -->
<p align="center">⏰ Updated on ${new Date().toUTCString()}</p>

---

<!-- About me -->
<h3 align="center">About Me</h3>

<p align="center">I'm current student at school 42</p>

<a href="https://github.com/JaeSeoKim/badge42"><img src="https://badge42.vercel.app/api/v2/cl1t6f1fn000609meta42ah3l/stats?cursusId=21&coalitionId=45" alt="42 stats" style="display: block; margin-left: auto; margin-right: auto; width: 70%" /></a>


<!-- Teck stack -->
<h3 align="center">🛠 &nbsp;Tech Stack</h3>

<!-- Language -->
<div style="text-align: center;">
	<img src="https://img.shields.io/badge/C-00599C?&style=for-the-badge&logo=c&logoColor=white" alt="c" />
	<img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="c++" />
	<img src="https://img.shields.io/badge/JAVASCRIPT-F5DB18?style=for-the-badge&logo=javascript&logoColor=white" alt="javascript" />
	<img src="https://img.shields.io/badge/TYPESCRIPT-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
	<img src="https://img.shields.io/badge/PYTHON-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="python" />
</div>

<!-- Framework -->
<div style="text-align: center;">
	<img src="https://img.shields.io/badge/ANGULAR-A6120D?style=for-the-badge&logo=angular&logoColor=white" alt="angular" />
	<img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react" />
	<img src="https://img.shields.io/badge/NESTJS-CC013A?style=for-the-badge&logo=nestjs&logoColor=white" alt="nestjs" />
	<img src="https://img.shields.io/badge/FLASK-000000?style=for-the-badge&logo=flask&logoColor=white" alt="flask" />
</div>

<!-- Infrastructure -->
<div style="text-align: center;">
	<img src="https://img.shields.io/badge/DOCKER-0DB7ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker" />
</div>

<!-- Connect with me -->
<h3 align="center">🤝🏻 &nbsp;Connect with me</h3>

<!-- Social link -->
<div style="text-align: center;">
<a href="mailto:kangkai.ye@hotmail.com"><img alt="Email" src="https://img.shields.io/badge/kangkai.ye@hotmail.com-00599C?style=for-the-badge&logo=microsoft-outlook&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/kangkai-ye/"><img alt="Linkedin" src="https://img.shields.io/badge/LINKEDIN-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://kev-ye.github.io"><img alt="About me" src="https://img.shields.io/badge/ABOUT_ME-F45E3F?style=for-the-badge&logo=Codemagic&logoColor=white" /></a>
</div>

<h3 align="center">My GitHub Contributions</h3>

![](https://raw.githubusercontent.com/kev-ye/kev-ye/master/assets/github-contribution-grid-snake.svg) 

<div style="text-align: center; margin-top: 20px">
	<details>
		<summary>Click for GitHub Stats</summary>
		<img alt = "GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=kev-ye&show_icons=true&hide=issues&icon_color=000000&hide_border=true&title_color=00599C&text_color=555" style="margin: 20px; width: 70%" />
		<br>
		<img alt="Most Used Lang" src="https://github-readme-stats.vercel.app/api/top-langs/?username=kev-ye&title_color=00599C&layout=compact&hide_border=true" style="width: 70%" />
	</details>
</div>
\
`

console.log(readme)