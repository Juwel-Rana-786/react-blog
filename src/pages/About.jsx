import HeroSection from "../components/HeroSection"

const About = () => {
    const data = {
        name: "About",
        image: "./image/about1.svg"
    }
    return (
        <div>
            <HeroSection {...data} />
        </div>
    )
}

export default About
