import React from "react";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatsAppButton = () => {

    return (
        <div className="bg-green-500 hover:animate-bounce w-10 h-10 px-[6px] py-[4px] z-20 rounded-full fixed bottom-20 right-2">

            <a href='https://api.whatsapp.com/send?phone=919507776777&forceIntent=true&load=loadInIOSExternalSafari'>
                <FontAwesomeIcon icon={faWhatsapp} className='text-white' size='2x' />
            </a>

        </div>
    )
};
export default WhatsAppButton;