import HeroSection from "../components/HeroSection"


const Home = () => {
    const data = {
        name: "Juwel Rana",
        image: "./image/hero.svg"
    }
    return (

        <>
            <HeroSection {...data} />
        </>
    )
}

export default Home
