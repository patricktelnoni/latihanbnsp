import React from "react";
import Image from "next/image";
import Progress from 'react-circle-progress-bar'


const Card = ({nama_paket, nomor_kontrak, progress}) => {
    return (
    <div className="bg-white flex flex-row items-center p-4 ">
        <div>
        </div>
        <div className="text-black w-32">
            <p>{nama_paket}</p>
            <p>{nomor_kontrak}</p>
            <p><Progress progress={progress} /></p>
        </div>
    </div>
    );
}

export default Card;