import React, { useEffect, useState } from "react";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatsappButton = () => {

    return (
        <div className="bg-teal-900 hover:animate-bounce w-[35px] h-[35px] p-[7px] z-30 rounded-full fixed bottom-20 right-2">

            <a href='https://api.whatsapp.com/send?phone=919507776777&forceIntent=true&load=loadInIOSExternalSafari'>
                <FontAwesomeIcon icon={faWhatsapp} className='text-teal-100' size='xl' />
            </a>

        </div>
    )
};
export default WhatsappButton;