import { projects } from "/src/projects.js";

let portfolio = document.getElementById("portfolio");
let portfolioHtml = ``;

projects.forEach(project => {
    console.log(project);
    portfolioHtml += `
    <article class="col project-card tag-style-1 ${project.categoryTagClasses}">
        <div class="col-md-4 project-content-left">
            <ul class="category-tags pad-b-2">
            `;

            project.categoryTags.forEach((tag, index) => {
                portfolioHtml += `
                <li class="tag tag-style-${index}">${tag}</li>
                `;
                console.log(index);
            });

            portfolioHtml += `   
            </ul>
        <a href=${project.linkProject} rel="noreferrer noopener">
            <h3>${project.title}</h3>
        </a>
            <p>${project.description}</p>
            <ul class="category-tags pad-b-2">
            `;

            project.projectTags.forEach((tag, index) => {
                portfolioHtml += `
                <li class="tag tag-style-${index}">${tag}</li>
                `;
            });
            
            portfolioHtml += `
            </ul>
            <div class="external-links">
                <a href=${project.linkProject} rel="noreferrer noopener" class="sm-lockup">
                    <img loading="lazy" src="/imgs/svg/icon-read-more.svg" alt="Read more">
                    <p class="keyword">Read more</p>
                </a>
                <a href="${project.linkExt}" rel="noreferrer noopener" target="_blank" class="sm-lockup">
                    <img loading="lazy" src="/imgs/svg/external-link.svg" alt="Go to live site">
                    <p class="keyword">Go to live site</p>
                </a>
            </div>
        </div>
        <div class="col project-content-right">
            <a href="/project-ce-cpt.html" rel="noreferrer noopener" tabindex="-1">
                <img loading="lazy" class="thumb-img" src="${project.thumbImg}" alt="${project.alt}">
            </a>
        </div>
    </article>
    `;
});
portfolio.innerHTML = portfolioHtml;