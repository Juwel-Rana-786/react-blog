import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import HeroSection from "../components/HeroSection";

const About = () => {


    const { ChangeAboutPage } = useGlobalContext()

    useEffect(() => {
        ChangeAboutPage()
    }, [])


    return (
        <div>
            <HeroSection />

        </div>

    )
}


export default About;
