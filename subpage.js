function headerCode(targetSection) {
    return `
<header class="navbar hide-in-mobile" id="navbar">
    <a class="logo innerlink" href="index.html#${targetSection}"><img id="logo" src="common-assets/logo.png"></a>
    <nav id="pc-nav-items" class="nav-items text-item-container">
        <ul>
            <li><a class="innerlink${targetSection == "works" ? " highlighted" : ""}" href="index.html#works">Works</a></li>
            <li><a class="innerlink${targetSection == "research" ? " highlighted" : ""}" href="index.html#research">Research</a></li>
            <li><a class="innerlink${targetSection == "projects" ? " highlighted" : ""}" href="index.html#projects">Projects</a></li>
            <li><a class="innerlink" href="index.html#about">About</a></li>
        </ul>
    </nav>
</header>
<div id="toc"></div>
`;
}
function footerNavbarCode(targetSection) {
    return `
    <div class="navbar-mobile hide-in-pc" id="navbar">
        <a class="logo innerlink" href="index.html#works"><img src="common-assets/logowhite.png"></a>
        <nav class="nav-items">
            <ul>
                <li><a class="innerlink${targetSection == "works" ? " highlighted" : ""}" href="index.html#works">W</a></li>
                <li><a class="innerlink${targetSection == "research" ? " highlighted" : ""}" href="index.html#research">R</a></li>
                <li><a class="innerlink${targetSection == "projects" ? " highlighted" : ""}" href="index.html#projects">P</a></li>
                <li><a class="innerlink" href="index.html#about">A</a></li>
            </ul>
        </nav>
    </div>
`;
}
const footerCodeW = `
    <section id="works" class="section-container background-black">
        <h1>Works</h1>
        <div class="content-container">
            <a class="innerlink" href="ourhomedoc.html">
                <div class="content-item">
                    <img src="home-assets/ourhomedoc.png" alt="OurHomeDoc">
                    <div class="hover-content">
                        <h3>OurHomeDoc</h3>
                        <p>Lead Designer at a Healthcare Startup Connecting Home-Visit Doctors with Patients</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="seez-game-design.html">
                <div class="content-item">
                    <img src="home-assets/seez.png" alt="SeeZ Game Design">
                    <div class="hover-content">
                        <h3>SeeZ Game Design</h3>
                        <p>Internship at GoQba Technology</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="seez-leaderboard.html">
                <div class="content-item">
                    <img src="home-assets/seez-leaderboard.png" alt="SeeZ Leaderboard">
                    <div class="hover-content">
                        <h3>SeeZ Leaderboard</h3>
                        <p>Internship at GoQba Technology</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="army-caregiving.html">
                <div class="content-item">
                    <img src="home-assets/army-caregiving.png" alt="Designs for Caregiving">
                    <div class="hover-content overflowing">
                        <h3>Designs for Caregiving</h3>
                        <p>Service for ROK/US Army</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="army-cultural.html">
                <div class="content-item">
                    <img src="home-assets/army-cultural.png" alt="Designs for Cultural Exchange">
                    <div class="hover-content overflowing">
                        <h3>Designs for Cultural Exchange</h3>
                        <p>Service for ROK/US Army</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="yourwellcup.html">
                <div class="content-item">
                    <img src="home-assets/yourwellcup.png" alt="yourWellCup">
                    <div class="hover-content overflowing">
                        <h3>yourWellCup</h3>
                        <p>Provided design advice & suggestions for reusable cup rental service startup</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <div class="subpage-mobile-margin hide-in-pc"></div>
`;
const footerCodeR = `
    <section id="research" class="section-container background-black">
        <h1>Research</h1>
        <div class="content-container">
            <a class="innerlink" href="ttokttok.html">
                <div class="content-item">
                    <img src="home-assets/ttokttok.png" alt="TTOKTTOK">
                    <div class="hover-content">
                        <h3>TTOKTTOK</h3>
                        <p>A personal smart subway guide customized for each user in every step of their subway
                            journey.<br><br><b>Universal Design Contest Second Award</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="umds.html">
                <div class="content-item">
                    <img src="home-assets/umds.png" alt="UMDS">
                    <div class="hover-content">
                        <h3>UMDS</h3>
                        <p>A universal metro direction sign system that visualizes train destinations as icons and provides auditory landmarks for visually impaired riders.<br><br><b>Universal Design Contest Third Award</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="sleeptube.html">
                <div class="content-item">
                    <img src="home-assets/sleeptube.png" alt="SleepTube">
                    <div class="hover-content">
                        <h3>SleepTube</h3>
                        <p>A digital self-control tool to enhance the benefits of watching videos before
                            bedtime.<br><br><b>Proceedings of HCI Korea 2024</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="udl.html">
                <div class="content-item">
                    <img src="home-assets/udl.png" alt="UDL Course Material Modification System">
                    <div class="hover-content overflowing">
                        <h3>UDL Course Material Modification System</h3>
                        <p>Undergraduate Researcher at Georgia Tech CoWell Lab</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="idea-island.html">
                <div class="content-item">
                    <img src="home-assets/idea-island.png" alt="Idea Island">
                    <div class="hover-content">
                        <h3>Idea Island</h3>
                        <p>Research Internship at SNU HCS Lab</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <div class="subpage-mobile-margin hide-in-pc"></div>
`;
const footerCodeP = `
    <section id="projects" class="section-container background-black">
        <h1>Projects</h1>
        <div class="content-container">
            <a class="innerlink" href="vbath.html">
                <div class="content-item">
                    <img src="home-assets/vbath.png" alt="VBATH">
                    <div class="hover-content">
                        <h3>VBATH</h3>
                        <p>A fully immersive bath experience</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="gjgt.html">
                <div class="content-item">
                    <img src="home-assets/gjgt.png" alt="Rebranding Gyeongju Gotaek">
                    <div class="hover-content">
                        <h3>Rebranding Gyeongju Gotaek</h3>
                        <p>2023F Identity Design Final Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="ramblin-realm.html">
                <div class="content-item">
                    <img src="home-assets/ramblin-realm.png" alt="Ramblin' Realm">
                    <div class="hover-content">
                        <h3>Ramblin’ Realm</h3>
                        <p>2025S Intro to UI Design Group Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="metamorphosis.html">
                <div class="content-item">
                    <img src="home-assets/metamorphosis.png" alt="Metamorphosis">
                    <div class="hover-content">
                        <h3>Metamorphosis</h3>
                        <p>2024F 3D Graphic Design Final Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="snu-campus-tour.html">
                <div class="content-item">
                    <img src="home-assets/snu-mentoring.png" alt="Campus Tour Materials">
                    <div class="hover-content">
                        <h3>Campus Tour Materials</h3>
                        <p>for the 2024 SNU Mentoring Volunteer Event</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <div class="subpage-mobile-margin hide-in-pc"></div>
`;


// Insert formatted header navbar
let header = document.getElementById("header-w");
if (header != null) header.innerHTML = headerCode("works");
else {
    header = document.getElementById("header-r");
    if (header != null) header.innerHTML = headerCode("research");
    else {
        header = document.getElementById("header-p");
        if (header != null) header.innerHTML = headerCode("projects");
    }
}

// Insert formatted footer navbar
let footerId;
let footer = document.getElementById("footer-w");
if (footer != null){
    footer.innerHTML = footerCodeW + footerNavbarCode("works");
    footerId = "footer-w";
}
else {
    footer = document.getElementById("footer-r");
    if (footer != null){
        footer.innerHTML = footerCodeR + footerNavbarCode("research");
        footerId = "footer-r";
    }
    else {
        footer = document.getElementById("footer-p");
        if (footer != null){
            footer.innerHTML = footerCodeP + footerNavbarCode("projects");
            footerId = "footer-p";
        }
    }
}

// Insert table of contents
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function scrollToBottom(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
const toc = document.getElementById("toc");
document.addEventListener("DOMContentLoaded", function(){
    const sectionHeaders = document.querySelectorAll(".subpage-section h2");
    let list = "";

    sectionHeaders.forEach((header, idx) => {
        const id = "section-" + idx;
        header.id = id;

        const emphOption = header.classList.contains("section-emph") ? " emph" : "";
        if(!header.classList.contains("section-ignore")) list += `<a href="#${id}" class="toc-item toc-hidable-item${emphOption}">${header.textContent}</a>`
    });
    if(list) list = `<a class="toc-item" onclick="scrollToTop()">↑</a>` + list + `<a class="toc-item" onclick="scrollToBottom()">↓</a>`;
    toc.innerHTML = list;

    setSlideAnimation(50);
});

const footerElement = document.getElementById(footerId);
function updateTOCVisibility(){
    const tocRect = toc.getBoundingClientRect();
    const footerRect = footerElement.getBoundingClientRect();

    if(tocRect.bottom >= footerRect.top){
        toc.style.opacity = 0;
        toc.style.pointerEvents = "none";
    }
    else{
        toc.style.opacity = 1;
        toc.style.pointerEvents = "auto";
    }
}
window.addEventListener("scroll", updateTOCVisibility);