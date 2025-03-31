function headerCode(targetSection){ return `
<header class="navbar hide-in-mobile" id="navbar">
    <a class="logo innerlink" href="index.html#${targetSection}"><img src="common-assets/logo.png"></a>
    <nav class="nav-items text-item-container">
        <ul>
            <li><a class="innerlink${targetSection == "works" ? " highlighted" : ""}" href="index.html#works">Works</a></li>
            <li><a class="innerlink${targetSection == "projects" ? " highlighted" : ""}" href="index.html#projects">Projects</a></li>
            <li><a class="innerlink" href="index.html#contact">Contact</a></li>
            <li><a href="cv2025s.pdf" target="_blank">CV</a></li>
        </ul>
    </nav>
</header>
`; }
const footerCodeW = `
    <section id="works" class="section-container background-black">
        <h1>Works</h1>
        <div class="content-container">
            <a class="innerlink" href="seez-game-design.html">
                <div class="content-item">
                    <img src="home-assets/work1.png" alt="Project 1">
                    <div class="hover-content">
                        <h3>SeeZ Game Design</h3>
                        <p>Internship at GoQba Technology</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="seez-leaderboard.html">
                <div class="content-item">
                    <img src="home-assets/work2.png" alt="Project 2">
                    <div class="hover-content">
                        <h3>SeeZ Leaderboard</h3>
                        <p>Internship at GoQba Technology</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="army-caregiving.html">
                <div class="content-item">
                    <img src="home-assets/work3.png" alt="Project 3">
                    <div class="hover-content">
                        <h3>Designs for Caregiving</h3>
                        <p>Service for ROK/US Army</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="army-cultural.html">
                <div class="content-item">
                    <img src="home-assets/work4.png" alt="Project 4">
                    <div class="hover-content">
                        <h3>Designs for Cultural Exchange</h3>
                        <p>Service for ROK/US Army</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="idea-island.html">
                <div class="content-item">
                    <img src="home-assets/work5.png" alt="Project 4">
                    <div class="hover-content">
                        <h3>Idea Island</h3>
                        <p>Research Internship at SNU HCS Lab</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="yourwellcup.html">
                <div class="content-item">
                    <img src="home-assets/work6.png" alt="Project 4">
                    <div class="hover-content">
                        <h3>yourWellCup</h3>
                        <p>Provided design advice & suggestions for reusable cup rental service startup</p>
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
            <a class="innerlink" href="ttokttok.html">
                <div class="content-item">
                    <img src="home-assets/project1.png" alt="TTOKTTOK">
                    <div class="hover-content">
                        <h3>TTOKTTOK</h3>
                        <p>A personal smart subway guide customized for each user in every step of their subway
                            journey.<br><br><b>Universal Design Contest Second Award</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="metamorphosis.html">
                <div class="content-item">
                    <img src="home-assets/project2.png" alt="Metamorphosis">
                    <div class="hover-content">
                        <h3>Metamorphosis</h3>
                        <p>2024F 3D Graphic Design Final Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="umds.html">
                <div class="content-item">
                    <img src="home-assets/project3.png" alt="UMDS">
                    <div class="hover-content">
                        <h3>UMDS</h3>
                        <p>A universal metro direction sign design system where the destination of the trains are
                            visualized as icons and the sign serves as a auditory landmark for the visually
                            impaired.<br><br><b>Universal Design Contest Third Award</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="vbath.html">
                <div class="content-item">
                    <img src="home-assets/project4.png" alt="VBATH">
                    <div class="hover-content">
                        <h3>VBATH</h3>
                        <p>A fully immersive bath experience</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="sleeptube.html">
                <div class="content-item">
                    <img src="home-assets/project5.png" alt="SleepTube">
                    <div class="hover-content">
                        <h3>SleepTube</h3>
                        <p>A digital self-control tool to enhance the benefits of watching videos before
                            bedtime.<br><br><b>Proceedings of HCI Korea 2024</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="gjgt.html">
                <div class="content-item">
                    <img src="home-assets/project6.png" alt="Project 4">
                    <div class="hover-content">
                        <h3>Rebranding Gyeongju Gotaek</h3>
                        <p>2023F Identity Design Final Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="paris-bike.html">
                <div class="content-item">
                    <img src="home-assets/project7.png" alt="Project 4">
                    <div class="hover-content">
                        <h3>Redesigning the Public Bike Infrastructure of Paris</h3>
                        <p>2023 SNU in Paris Group Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink" href="snu-campus-tour.html">
                <div class="content-item">
                    <img src="home-assets/project8.png" alt="Project 4">
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
const footerNavbarCode = `
    <div class="navbar-mobile hide-in-pc" id="navbar">
        <a class="logo innerlink" href="index.html#works"><img src="common-assets/logowhite.png"></a>
        <nav class="nav-items">
            <ul>
                <li><a class="innerlink" href="index.html#works">W</a></li>
                <li><a class="innerlink" href="index.html#projects">P</a></li>
                <li><a class="innerlink" href="index.html#contact">C</a></li>
            </ul>
        </nav>
    </div>
`;
let header = document.getElementById("header");
if(header != null) header.innerHTML = headerCode("works");
else{
    header = document.getElementById("header-p");
    if(header != null) header.innerHTML = headerCode("projects");
}
let footer = document.getElementById("footer");
if(footer != null) footer.innerHTML = footerCodeW + footerNavbarCode;
else{
    footer = document.getElementById("footer-p");
    if(footer != null) footer.innerHTML = footerCodeP + footerNavbarCode;
}