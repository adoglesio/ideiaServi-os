import Link from "next/link"
 
function Home() {
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        <div><Link href="/tempo">
            <a>Acessar página Tempo</a>
        </Link></div>
    </div>)
}


export default Home