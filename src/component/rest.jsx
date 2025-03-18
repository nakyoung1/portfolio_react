function rest() {
     $(function () {
          // 스크롤 이벤트 감지
          $(window).on("scroll", function () {
               if ($(this).scrollTop() > 100) {
                    $("#topButton").fadeIn(); // 버튼 나타남
               } else {
                    $("#topButton").fadeOut(); // 버튼 사라짐
               }
          });
          // 버튼 클릭 시 최상단으로 이동
          $("#topButton").on("click", function () {
               $("html, body").animate({ scrollTop: 0 }, 300); // 0.5초(500ms) 동안 스크롤 업
          });
          $("header p").on("click", function () {
               $("html, body").animate({ scrollTop: 0 }, 300); // 0.5초(500ms) 동안 스크롤 업
          });
          $(window).on("scroll", function () {
               if ($(this).scrollTop() > 100) {
                    $("nav").css({
                         "background-color": "#eee",
                         color: "#111",
                    });
                    $("#header-list a").css({ color: "#111" });
                    $("#header-list a")
                         .on("mouseenter", function () {
                              // 마우스를 올렸을 때
                              $(this).css("color", "#8d5d5d");
                         })
                         .on("mouseleave", function () {
                              // 마우스를 뗐을 때
                              $(this).css("color", "#111");
                         });
                    $("#weather-container").css({
                         display: "none",
                    });
               } else {
                    $("nav").css({
                         "background-color": "transparent",
                         color: "#eee",
                    });
                    $("#header-list a").css({ color: "#eee" });
                    $("#header-list a")
                         .on("mouseenter", function () {
                              // 마우스를 올렸을 때
                              $(this).css("color", "#8d5d5d");
                         })
                         .on("mouseleave", function () {
                              // 마우스를 뗐을 때
                              $(this).css("color", "#eee");
                         });
                    $("#weather-container").css({
                         display: "block",
                    });
               }
          });
          $(".project-box").on("click", function () {
               var link = $(this).find("a").attr("href"); // <a> 태그 안의 href 값을 가져옴
               if (link) {
                    window.open(link, "_blank"); // 새 창에서 링크 열기
               }
          });
     });
     return (
          <div>
               <div id="main-container">
                    <div id="about-box" class="container">
                         <h2 id="about">About</h2>
                         <section id="about-container">
                              <div id="introduce-box">
                                   <div class="wrapper">
                                        <article id="name" class="about_icon">
                                             {/* <aside><img src="./img/about/name.png"></aside> */}
                                             <aside>
                                                  <h4>이름</h4>
                                                  <p>이나경</p>
                                             </aside>
                                        </article>
                                   </div>
                                   <div class="wrapper">
                                        <article id="birth" class="about_icon">
                                             {/* <aside><img src="./img/about/birth.png"></aside> */}
                                             <aside>
                                                  <h4>생년월일</h4>
                                                  <p>94.11.06</p>
                                             </aside>
                                        </article>
                                   </div>
                                   <div class="wrapper">
                                        <article id="location" class="about_icon">
                                             {/* <aside><img src="./img/about/location.png"></aside> */}
                                             <aside>
                                                  <h4>위치</h4>
                                                  <p>대구광역시 동구</p>
                                             </aside>
                                        </article>
                                   </div>
                                   <div class="wrapper">
                                        <article id="phone" class="about_icon">
                                             {/* <aside><img src="./img/about/phone.png"></aside> */}
                                             <aside>
                                                  <h4>휴대폰</h4>
                                                  <p>010.8900.5730</p>
                                             </aside>
                                        </article>
                                   </div>
                                   <div class="wrapper">
                                        <article id="email" class="about_icon">
                                             {/* <aside><img src="./img/about/email.png"></aside> */}
                                             <aside>
                                                  <h4>이메일</h4>
                                                  <p>skrud5730@naver.com</p>
                                             </aside>
                                        </article>
                                   </div>
                                   <div class="wrapper">
                                        <article id="education" class="about_icon">
                                             {/* <aside><img src="./img/about/education.png"></aside> */}
                                             <aside>
                                                  <h4>학력</h4>
                                                  <p>경북대학교 기계공학부</p>
                                             </aside>
                                        </article>
                                   </div>
                              </div>
                         </section>
                    </div>
               </div>
               <div id="skills-box" class="container">
                    <h2 id="skills">Skills</h2>
                    <section id="skills-container">
                         <div id="skill1" class="skill-box">
                              <div id="skill1-icon" class="skill-icon"></div>
                              <p>Javascript</p>
                         </div>
                         <div id="skill2" class="skill-box">
                              <div id="skill2-icon" class="skill-icon"></div>
                              <p>HTML</p>
                         </div>
                         <div id="skill3" class="skill-box">
                              <div id="skill3-icon" class="skill-icon"></div>
                              <p>CSS</p>
                         </div>
                         <div id="skill4" class="skill-box">
                              <div id="skill4-icon" class="skill-icon"></div>
                              <p>Premiere Pro</p>
                         </div>
                         <div id="skill5" class="skill-box">
                              <div id="skill5-icon" class="skill-icon"></div>
                              <p>Photoshop</p>
                         </div>
                         <div id="skill6" class="skill-box">
                              <div id="skill6-icon" class="skill-icon"></div>
                              <p>Illustrator</p>
                         </div>
                    </section>
               </div>
               <div id="projects-box" class="container">
                    <h2 id="projects">Projects</h2>
                    <section id="projects-container">
                         <div id="project1" class="project-box" data-desc="To-Do List ">
                              <a href="https://nakyoung1.github.io/todolist/" target="_blank">
                                   {" "}
                              </a>
                         </div>
                         <div id="project2" class="project-box" data-desc="Momentum">
                              <a href="https://nakyoung1.github.io/my_momentum/" target="_blank">
                                   {" "}
                              </a>
                         </div>
                         <div id="project3" class="project-box" data-desc="Pet Webpage">
                              <a href="https://nakyoung1.github.io/bom/" target="_blank">
                                   {" "}
                              </a>
                         </div>
                         <div id="project4" class="project-box" data-desc="Festival Intro Video">
                              <div id="project4-video-container">
                                   {/* <video id="project4-video" controls  muted autoplay > */}
                                   <div src="img/2023 VECTOR FESTIVAL.mp4"></div>
                              </div>
                         </div>
                    </section>
               </div>

               <footer>©2025 Lee Na Kyoung. All rights reserved</footer>
               <button id="topButton">▲</button>
          </div>
     );
}
