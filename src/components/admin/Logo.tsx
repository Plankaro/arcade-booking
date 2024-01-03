import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image
            width={60}
            height={60}
            src={"/logo.png"}
            alt='logo'
        />
    )
}

export default Logo
