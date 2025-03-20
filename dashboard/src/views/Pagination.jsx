import React from "react";
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({pageNumber,setPageNumber,totalItem,perPage,showItem,}) => {
    console.log("Total Pages:", totalItem, "Current Page:", perPage);
    let totalPage = Math.ceil(totalItem / perPage);
    let startPage = pageNumber;
    console.log("Total Pages:", totalPage, "Current Page:", pageNumber);
    let dif = totalPage - pageNumber;
    if (dif <= showItem) {
        startPage = totalPage - showItem;
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage;

    if (startPage <= 0) {
        startPage = 1;
    }

    const createBtn = () => {
        const btns = [];
        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li
                    onClick={() => setPageNumber(i)}
                    className={` ${pageNumber === i
                            ? "bg-[#3948ab] text-white"
                            : "bg-white text-gray-400 hover:border border-[#3948ab36] shadow-md hover:text-gray-400 "
                        }
                w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer `}
                >
                    {i}
                </li>
            );
        }
        return btns;
    };

    return (
        <ul className="flex gap-3">
            {pageNumber > 1 && (
                <li
                    onClick={() => setPageNumber(pageNumber - 1)}
                    className="w-[33px] h-[33px] rounded-full border border-[#3948ab36] flex justify-center items-center  text-[#000000] cursor-pointer"
                >
                    <MdOutlineKeyboardDoubleArrowLeft />
                </li>
            )}
            {createBtn()}
            
            {pageNumber < totalPage && (
                <li
                    onClick={() => setPageNumber(pageNumber + 1)}
                    className="w-[33px] h-[33px] rounded-full border border-[#3948ab36] flex justify-center items-center  text-[#000000] cursor-pointer"
                >
                    <MdOutlineKeyboardDoubleArrowRight />
                </li>
            )}
        </ul>
    );
};

export default Pagination;
