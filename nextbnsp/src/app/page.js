import Image from "next/image"; 
import Coffee from '../../public/cofee.jpg';
import NavigationBar from "../components/NavigationBar";
import Card from "@/components/Card";

export default function Home() {
  return ( 
  <div >
    <h1>Welcome to Next.js!</h1>
    <p className="text-line-600 text-4xl font-bold">This is the home page.</p>
    <NavigationBar />
    <Image
      src={Coffee}
      alt="Next.js Logo"
      width={200}
      height={100}
    />
    <Card negara="Indonesia" kota="Bandung" suhu="30°C" />


  </div>);
}
