import React from "react";
import Image from "next/image";
import Progress from 'react-circle-progress-bar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import ProgressBar from "@ramonak/react-progress-bar";


const Card = ({nama_paket, nomor_kontrak, progress, tanggal_kontrak}) => {
    return (
    <div className="bg-white flex flex-col p-4 mx-auto mb-2 mt-2 rounded-xl shadow-lg">

            <p className="text-blue-200 text-sm">{tanggal_kontrak}</p>

        <div className="text-black w-32">
            <p className="text-md font-bold">{nama_paket}</p>
            <p className="text-sm font-extralight">{nomor_kontrak}</p>

        </div>
        <div style={{ width: 75, height: 75 }} className="flex flex-col items-start mx-4">
            <p className="text-sm font-bold start-0">Progress</p>
            <CircularProgressbar value={progress} text={`${progress}%`} />
        </div>
    </div>
    );
}

export default Card;