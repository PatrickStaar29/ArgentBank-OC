import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Form from '../components/form/form'

function Signin (){
    return(
        <>
            <Header/>
                <main className='main bg-dark'>
                    <Form/>
                </main>
            <Footer/>
            <script src='./js/connection.js'></script>
        </>
    )
}

export default Signin