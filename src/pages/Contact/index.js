import { useState, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import classNames from "classnames/bind";

import styles from "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
function Contact() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(preDelta => preDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    //Creat a react hook to add a scroll animation
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])


    return (
        <div className={cx("contact-wrapper")}>
            <div className={cx("contact-container")}>
                <div className={cx("contact-title")}>
                    <h4 className={cx("contact-title_header")}>Contact Us Page</h4>
                </div>
                <div className={cx("contact-content-list")}>
                    <div data-aos="fade-up" className={cx("content-item")}>
                        <div className={cx("content-item-thumbs")}>
                            <img src="https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/zhongli/header_image.png?strip=all&quality=10&w=900" alt="" />
                        </div>
                        <div className={cx("content-item-main liyue ml-15")}>
                            <span className={cx("tagline")}>Welcome to my Portfolio</span>
                            <h1>{`Hi I'm webdecoded`} <span className={cx("wrap")}>{text}</span></h1>
                            <p>Under the mission of "Tech Otakus save the world."</p>
                            <button onClick={() => console.log('connect')}>Let's connect</button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={cx("content-divider")}>
                        <img src="https://img-os-static.hoyolab.com/divider_config/PC/line_3.png" alt="" />
                    </div>
                    <div data-aos="fade-up" className={cx("content-item")}>
                        <div className={cx("content-item-main mondstadt mr-15")}>
                            <span className={cx("tagline")}>My intro</span>
                            <h1>About Me</h1>
                            <p>Full-stack developer, I do database work, servers, systems engineering and client work.</p>
                            <button onClick={() => alert('contact me!')}>Contact me</button>
                        </div>
                        <div className={cx("content-item-thumbs")}>
                            <img src="https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/venti/header_image.png?strip=all&quality=10&w=900" alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className={cx("content-divider")}>
                        <img src="https://img-os-static.hoyolab.com/divider_config/PC/line_3.png" alt="" />
                    </div>
                    <div data-aos="fade-up" className={cx("content-item")}>
                        <div className={cx("content-item-thumbs")}>
                            <img src="https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Shougun.png" alt="" />
                        </div>
                        <div className={cx("content-item-main inazuma ml-15")}>
                            <span className={cx("tagline")}>Favourite skills</span>
                            <h1>My Skills</h1>
                            <p>See fully what skills i have and perform, to develop the project.</p>
                            <button onClick={() => alert('Skill')}>Skills</button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={cx("content-divider")}>
                        <img src="https://img-os-static.hoyolab.com/divider_config/PC/line_3.png" alt="" />
                    </div>
                    <div data-aos="fade-up" className={cx("content-item")}>
                        <div className={cx("content-item-main sumeru mr-15")}>
                            <span className={cx("tagline")}>Contact me</span>
                            <h1>My Contact</h1>
                            <div className={cx("content-item-icon")}>
                                <FontAwesomeIcon icon={faFacebook} className={cx("icon-facebook")}/>
                                <FontAwesomeIcon icon={faYoutube} className={cx("icon-youtube")}/>
                                <FontAwesomeIcon icon={faInstagram} className={cx("icon-instagram")}/>
                            </div>
                            <button onClick={() => alert('More')}>View more</button>
                        </div>
                        <div className={cx("content-item-thumbs")}>
                            <img src="https://i0.wp.com/traveler.gg/wp-content/uploads/nahida.png?fit=2048%2C1024&ssl=1" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;