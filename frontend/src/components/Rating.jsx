import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { CiStar} from 'react-icons/ci';
const Rating = ({rating}) => {
    return (
        <>
            {
                rating>=1 ?<span className = 'text-[#edbb0e]'><FaStar/></span>:
            rating >= .5 ?<span className = 'text-[#edbb0e]'><FaStarHalfAlt/></span> : 
            <span className = 'text-[#edbb0e]'><CiStar/></span>

            }
            {
                rating>=2 ?<span className = 'text-[#edbb0e]'><FaStar/></span>:
            rating >= 1.5 ?<span className = 'text-[#edbb0e]'><FaStarHalfAlt/></span> : 
            <span className = 'text-[#edbb0e]'><CiStar/></span>

            }
            {
                rating>=3 ?<span className = 'text-[#edbb0e]'><FaStar/></span>:
            rating >= 2.5 ?<span className = 'text-[#edbb0e]'><FaStarHalfAlt/></span> : 
            <span className = 'text-[#edbb0e]'><CiStar/></span>

            }
            {
                rating>=4 ?<span className = 'text-[#edbb0e]'><FaStar/></span>:
            rating >= 3.5 ?<span className = 'text-[#edbb0e]'><FaStarHalfAlt/></span> : 
            <span className = 'text-[#edbb0e]'><CiStar/></span>

            }
            {
                rating>=5 ?<span className = 'text-[#edbb0e]'><FaStar/></span>:
            rating >= 4.5 ?<span className = 'text-[#edbb0e]'><FaStarHalfAlt/></span> : 
            <span className = 'text-[#edbb0e]'><CiStar/></span>

            }
        </>
    );
};

export default Rating;