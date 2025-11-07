"use client";

import React, { useEffect, useState } from 'react';
import ImageCard from '../../../components/ImageCard';
import Paginate from '../../../components/Pagination';
import ImageModal from '@/components/Modal';
import Image from 'next/image';

export default function GalleryPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const itemsPerPage = 15;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const [totalPages, setTotalPages] = useState(0);

    const openImageModal = (imageUrl) => {
        console.log("Opening modal for image:", imageUrl);
        setSelectedImage(imageUrl);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://palugada.me/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result);
                setData(result['data']);
                setTotalPages(Math.ceil(result['data'].length / itemsPerPage));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Gallery Page</h1>
            <p>Welcome to the gallery! Here you can see various images.</p>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && 
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-cols-3">
                    {currentItems.map((item)=>(
                        <div key={item.id} 
                            onClick={() => {openImageModal(item.foto_produk)}}>
                            <ImageCard 
                                nama={item.name}
                                deskripsi={item.description}
                                imageurl={item.foto_produk} 
                                
                            />
                        </div>
                    ))}   
                  <Paginate 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={(page) => setCurrentPage(page)} 
                  />
                </div>
            }
            <ImageModal isOpen={modalOpen} onClose={() => closeModal()}>
                {selectedImage && (
                <Image
                    src={selectedImage}
                    alt='Selected Image'
                    width={800} // Adjust as needed for modal display
                    height={600} // Adjust as needed for modal display
                />
                )}
            </ImageModal>
        </div>
    );
}