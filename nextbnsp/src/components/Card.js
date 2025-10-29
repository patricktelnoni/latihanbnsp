import React from "react";
import Image from "next/image";
import Coffee from '../../public/cofee.jpg';

const Card = ({negara, kota, suhu}) => {
    return (
    <div className="bg-white flex flex-col">
        <div>
            <Image src={Coffee} alt="A cup of coffee" 
            width={100} 
            height={100} />
        </div>
        <div className="text-black w-49">
            <p>{negara}</p>
            <p>{kota}</p>
            <p>{suhu}</p>
        </div>
    </div>
    );
}

export default Card;