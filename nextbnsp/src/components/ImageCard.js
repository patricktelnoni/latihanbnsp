import React from "react";
import Image from "next/image";
import Coffee from '../../public/cofee.jpg';

const ImageCard = ({nama, deskripsi, imageurl, onClick}) => {
    const foto = imageurl != null ? imageurl : Coffee;
    return (
    <div onClick={onClick} className="w-full h-full overflow-hidden cursor-pointer group">
        <Image className="object-cover object-center w-full h-full max-w-full rounded-lg"
            src={foto}
            height={640}
            width={480}
            alt="gallery-photo" />
    </div>
    );
}

export default ImageCard;