import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Banner from '../components/banner/banner'
import Presentation from '../components/presentation/presentation'

function Home(){
    return(
        <>
            <Header/>
            <main>
                <Banner/>
                <Presentation/>
            </main>
            <Footer/>
        </>
    )
}

export default Home