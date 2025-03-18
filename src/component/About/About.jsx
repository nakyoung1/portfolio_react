import nameImg from "../../assets/about/name.png";
import birthImg from "../../assets/about/birth.png";
import locationImg from "../../assets/about/location.png";
import phoneImg from "../../assets/about/phone.png";
import emailImg from "../../assets/about/email.png";
import educationImg from "../../assets/about/education.png";
import styles from "../About/About.module.css";

function Info({ id, img, title, content }) {
     return (
          <article id={id} className={styles.about_icon}>
               <aside>
                    <img src={img} alt={title} />
               </aside>
               <aside>
                    <h4>{title}</h4>
                    <p>{content}</p>
               </aside>
          </article>
     );
}

function ShowInfo({ infos }) {
     return (
          <div className={styles.wrapper}>
               {infos.map((item, index) => (
                    <Info
                         key={index}
                         id={item.id}
                         img={item.img}
                         title={item.title}
                         content={item.content}
                    />
               ))}
          </div>
     );
}

function About() {
     const infos = [
          { id: "name", img: nameImg, title: "이름", content: "이나경" },
          { id: "birth", img: birthImg, title: "생년월일", content: "94.11.06" },
          { id: "location", img: locationImg, title: "위치", content: "대구광역시 동구" },
          { id: "phone", img: phoneImg, title: "휴대폰", content: "010.8900.5730" },
          { id: "email", img: emailImg, title: "이메일", content: "skrud5730@naver.com" },
          { id: "education", img: educationImg, title: "학력", content: "경북대학교 기계공학부" },
     ];
     return (
          <div id="about-box" className={styles.container}>
               <h2 className={styles.about}>About</h2>
               <section className={styles.about_container}>
                    {/* <div className={styles.introduceBox}> */}
                    <ShowInfo infos={infos} />
                    {/* </div> */}
               </section>
          </div>
     );
}

export default About;
