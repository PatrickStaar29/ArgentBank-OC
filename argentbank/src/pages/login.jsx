import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Form from '../components/form/form'

function Login (){
    return(
        <>
            <Header/>
                <main className='main bg-dark'>
                    <Form/>
                </main>
            <Footer/>
        </>
    )
}

export default Login