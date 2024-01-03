import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (

        <div className='w-full absolute z-20 top-0 left-1/2 transform -translate-x-1/2 sm:max-w-[1120px] 2xl:max-w-[1920px]'>
            <Image
                height={50}
                width={50}
                src={"/logo.png"}
                alt='logo'
                className='pl-3'
            />
        </div>

    )
}

export default Header
