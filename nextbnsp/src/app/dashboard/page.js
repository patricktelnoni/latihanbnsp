"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import ProjectTile from '@/components/ProjectTile';

export default function Dashboard(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
         
            const response = await fetch('https://palugada.me/api/info_proyek/');
            const jsonData = await response.json();
            //console.log(jsonData.data);
            setData(jsonData.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto flex-2">
            {data && (
                <div className="grid grid-cols-3 gap-2.5 xl:grid-cols-3">
                {data.map((project) => (
                    <ProjectTile
                        key={project.id}
                        nama_paket={project.nama_paket}
                        nomor_kontrak={project.nomor_kontrak}
                        progress={project.persentase_progress}
                        tanggal_kontrak={project.tanggal_kontrak}
                    ></ProjectTile>
                    )
                )}
                </div>
                       
            )}
        </div>
    );
}
