import { Xpicker } from "@/components/Xpicker";
import { Xops } from "@/components/Xops";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";

export default function Home() {
  return (    
    <>
      <Header />
      <FirstBlock />
      <Xpicker />
      <Xops />
      <Footer />
    </>
  )
}
