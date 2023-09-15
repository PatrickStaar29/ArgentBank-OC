import Bankcard from "../components/bankcard/bankcard"
import Bankcheck from "../components/bankcheck/bankcheck"
import Banksave from "../components/banksave/banksave"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Userbanner from "../components/user-banner/user-banner"

function User (){
    return(
        <>
            <Header/>
            <main className='main bg-dark'>
                <Userbanner/>
                <Bankcheck/>
                <Banksave/>
                <Bankcard/>
            </main>
            <Footer/>
        </>
    )
}

export default User