import { projects } from "/src/projects.js";

let portfolio = document.getElementById("portfolio");
let portfolioHtml = ``;

projects.forEach(project => {
        
    portfolioHtml += `
    <article class="col project-card tag-style-1 ${project.categoryTagClasses[0]} ${project.categoryTagClasses[1]} ">
        <div class="col-md-4 project-content-left">
            <ul class="category-tags pad-b-2">
            `;

            project.categoryTags.forEach((tag, index) => {
                portfolioHtml += `
                <li class="tag tag-style-${index}">${tag}</li>
                `;
            });
            
            portfolioHtml += `   
            </ul>`

            if (project.linkProject !== "") {
                portfolioHtml += `
                    <a href=${project.linkProject} rel="noreferrer noopener">
                    `
            }

            portfolioHtml += `
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
            `

                if(project.linkProject !== ""){
                    portfolioHtml += `
                    <a href="${project.linkProject}" rel="noreferrer noopener" class="sm-lockup">
                        <img loading="lazy" src="/imgs/svg/icon-read-more.svg" alt="Read more">
                        <p class="keyword">Read more</p>
                    </a>`
                }

                if(project.linkGitHub !== ""){
                    portfolioHtml += `
                    <a href="${project.linkGitHub}" rel="noreferrer noopener" target="_blank" class="sm-lockup">
                        <img loading="lazy" src="/imgs/svg/github.svg" alt="View on GitHub">
                        <p class="keyword">View on GitHub</p>
                    </a>`
                }

                if(project.linkExt !== ""){
                    portfolioHtml += `
                    <a href="${project.linkExt}" rel="noreferrer noopener" target="_blank" class="sm-lockup">
                        <img loading="lazy" src="/imgs/svg/external-link.svg" alt="Go to live site">
                        <p class="keyword">Go to live site</p>
                    </a>`
                }

                portfolioHtml += `
                        </div>
                    </div>`

                if(project.thumbImg !== ""){
                    portfolioHtml += `
                    <div class="col project-content-center">
                        <a href="/project-ce-cpt.html" rel="noreferrer noopener" tabindex="-1">
                            <img loading="lazy" class="thumb-img" src="${project.thumbImg}" alt="${project.alt}">
                        </a>
                    </div>`
                }
            
            portfolioHtml += `
            </article>
    `;
});
portfolio.innerHTML = portfolioHtml;