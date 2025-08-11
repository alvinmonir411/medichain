import Hiro from "@/Component/Hiro";
import KeyInformationSection from "@/Component/KeyInformation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Hiro />
      </div>
      <div className="md:-mt-30">
        <KeyInformationSection />
      </div>
    </div>
  );
}
