import Image from "next/image";
import image from "../../public/mhmdfruitslogoNoBg.png";
import Menu from "@/components/Menu";
import HeroSection from "@/components/Hero";
import Break from "@/components/Break";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Break />
      <Menu />
    </div>
  );
}
