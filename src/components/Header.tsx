import React from 'react'

const Header = () => {
    return (
        <div className="bg-[#E4E83E] h-24 flex items-center justify-between">
            <div>
                <h3 className="text-left text-5xl ml-8 text-[#00C49A]">Covid19 Tracker</h3>
            </div>
            <div className="self-end">
                <h3 className="text-[#00C49A] text-lg mr-8">Pray for the end of pandemic</h3>
            </div>
        </div>
    )
}

export default Header
