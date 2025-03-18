import styles from "../Skills/Skills.module.css";

function GetSkill() {
     return (
          <div id="skill1" className={styles["skill-box"]}>
               <div className={styles["skill-icon"]}></div>
               <p>Javascript</p>
          </div>
     );
}

function Skills() {
     return (
          <div id="skills-box" class="container">
               <h2 id="skills">Skills</h2>
               <section id="skills-container">
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
     );
}

export default Skills;
