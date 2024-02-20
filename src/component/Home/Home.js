import './Home.scss';
import hero from "../../home-image.jpg";

export default function Home() {
    return <div className="content">
        <div className="greetings">
            <h1>Hello, <br/> I'm <span className="name">RIFQI</span>. <br/> A <span
                className="pos">Web Developer.</span></h1>
            <button className="home-cta">Contact Me</button>
        </div>
        <div className="home-image">
            <img src={hero} alt="home"/>
        </div>
    </div>
}