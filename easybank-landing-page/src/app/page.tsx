import Header from "../components/header"
import Footer from "@/components/footer/"
import WhyChooseEasyBank from "@/components/whyChooseEasyBank"
import LatestArticles from "@/components/latestArticles"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WhyChooseEasyBank />
        <LatestArticles />
      </main>
      <Footer />
    </>
  )
}
