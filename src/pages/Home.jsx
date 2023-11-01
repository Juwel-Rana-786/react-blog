import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import HeroSection from "../components/HeroSection";


const Home = () => {

    const { ChangeHomePage } = useGlobalContext()

    useEffect(() => {
        ChangeHomePage()
    }, [])

    return (

        <>
            <HeroSection />
        </>
    )
}

export default Home
