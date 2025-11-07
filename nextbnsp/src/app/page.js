import Image from "next/image"; 
import Coffee from '../../public/cofee.jpg';
import NavigationBar from "../components/NavigationBar";
import Card from "@/components/Card";
import SideBar from "@/components/SideBar";


export default function Home() {
  return ( 
  <div className="container mx-auto flex-2">
    <div className="grid grid-cols-2 ">
      <div><SideBar /></div>
      <div>
        <NavigationBar />
        <h1>Welcome to Next.js!</h1>
        <p className="text-line-600 text-4xl font-bold">This is the home page.</p>
        <div className="flex flex-wrap">
          <Image
              src={Coffee}
              alt="Next.js Logo"
              width={200}
              height={100}
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <Card negara="Indonesia" kota="Bandung" suhu="20°C" />
          <Card negara="Indonesia" kota="Jakarta" suhu="31°C" />
        </div>
      </div>
    </div>








  </div>);
}
