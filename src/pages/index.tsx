import Footer from "./footer"
import Hello from "./hello"
import News from "./news"
import Pop from "./pop"

export default function Home() {
  return (
    <>
    <div className="bg-green-50">
      <Hello/>
      <Pop/>
      <News/>
      <Footer/>
    </div>
    </>
  )
}
