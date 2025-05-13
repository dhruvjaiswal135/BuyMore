import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const adminDashboard = () => {

    const state = {
        series: [
            {
                name: "Orders",
                data: [23, 24, 45, 56, 77, 88, 109, 65, 71, 23, 34, 76]
            },
            {
                name: "Revenue",
                data: [33, 24, 35, 26, 97, 38, 19, 45, 21, 93, 45, 55]
            },
            {
                name: "Sellers",
                data: [53, 34, 15, 76, 37, 48, 139, 85, 91, 43, 21, 11]
            }
        ],
        options: {
            color: ['#450098', '#540000'],
            plotOptions: {
                radius: 30,
            },
            chart: {
                background: 'transparent',
                foreColor: '#pink',
            },
            datalables: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                linecap: 'butt',
                colors: ['#D6BD98', '#677D6A', '#C7DB9C'],
                width: 2.8,
                dashArray: 0,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            legend: {
                position: 'top',
            },

            // here the graph is made responsive
            // here the graph is made responsive

            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                            'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    },
                    options: {
                        plotOptions: {
                            line: {
                                horizontal: true,
                            },
                        },
                        chart: {
                            height: '350px',
                        }
                    }
                }
            ]

        }
    }
    return (
        <div className="px-2 md:px-7 py-12 ">
            {/* this is the card section */}
            <div
                className="w-full grid grid-cols-1 sm:grid-cols-2
             md:grid-cols-2 lg:grid-cols-4 gap-7 ">
                {/* this is the first card */}
                <div className="flex justify-centre items-center
                px-4 py-6 bg-[#e6f5f8] rounded-2xl ">
                    <div className="flex flex-col w-full justify-start items-start gap-1
                    text-[#000000]">
                        <h2 className="text-4xl ">307.48K</h2>
                        <div className="flex flex-row w-full justify-between items-center">
                            <div>
                                <span className="text-sm text-gray-500 font-light">
                                    Total Sale
                                </span>
                                <h3 className="text-xl text-[#175d21] font-medium">+30%</h3>
                                <span className="text-xs text-gray-500 font-light">
                                    This month
                                </span>
                            </div>
                            <img
                                className="w-[90px]"
                                src="http://localhost:3000/inc.png"
                                alt="" />
                            {/* <div
                className="flex w-[40px] h-[47px]
                    rounded-full bg-black text-xl"
              ></div> */}
                        </div>
                    </div>
                </div>
                {/* this is the second card */}
                <div className="flex justify-centre items-center
                px-4 py-6 bg-[#eefcef] rounded-2xl ">
                    <div className="flex flex-col w-full justify-start items-start gap-1
                    text-[#000000]">
                        <h2 className="text-4xl ">48K</h2>
                        <div className="flex flex-row w-full justify-between items-center">
                            <div>
                                <span className="text-sm text-gray-500 font-light">
                                    Total Product Sale
                                </span>
                                <h3 className="text-xl text-[#175d21] font-medium">+20%</h3>
                                <span className="text-xs text-gray-500 font-light">
                                    This month
                                </span>
                            </div>
                            <img
                                className="w-[90px]"
                                src="http://localhost:3000/inc.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* this is the third card */}
                <div
                    className="flex justify-centre items-center
                px-4 py-6 bg-[#edf6fc] rounded-2xl "
                >
                    <div
                        className="flex flex-col w-full justify-start items-start gap-1
                    text-[#000000]"
                    >
                        <h2 className="text-4xl ">345</h2>
                        <div className="flex flex-row w-full justify-between items-center">
                            <div>
                                <span className="text-sm text-gray-500 font-light">
                                    Total Sellers
                                </span>
                                <h3 className="text-xl text-[#9d2222] font-medium">-10%</h3>
                                <span className="text-xs text-gray-500 font-light">
                                    This month
                                </span>
                            </div>
                            <img
                                className="w-[90px] h-[40px]"
                                src="http://localhost:3000/loss.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* this is the forth card */}
                <div
                    className="flex justify-centre items-center
                px-4 py-6 bg-[#f7f3fb] rounded-2xl ">
                    <div
                        className="flex flex-col w-full justify-start items-start gap-1
                    text-[#000000]">
                        <h2 className="text-4xl ">1480</h2>
                        <div className="flex flex-row w-full justify-between items-center">
                            <div>
                                <span className="text-sm text-gray-500 font-light">Orders</span>
                                <h3 className="text-xl text-[#175d21] font-medium">+30%</h3>
                                <span className="text-xs text-gray-500 font-light">
                                    This month
                                </span>
                            </div>
                            <img
                                className="w-[90px]"
                                src="http://localhost:3000/inc.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" w-full flex flex-wrap mt-7 justify-between">
                {/* this is the chart section */}
                <div className="w-full lg:w-9/12 lg:pr-3 ">
                    <div className="w-full p-4 rounded-md ">
                        <Chart options={state.options} series={state.series}
                            type="line" height={300} />
                    </div>
                </div>
                {/* here live chat section starts */}
                <div className="w-full lg:w-3/12 lg:pl-4 mt-4 lg:mt-0  ">
                    <div className="w-full p-4 rounded-md bg-[#ffffff] text-[#000000]">
                        <div className="flex pb-2 border-b-[1px] justify-between items-center">
                            <h2 className="font-normal text-[16px] text-[#000000]">Recent Chat</h2>
                            <Link className="text-xs text-slate-400 font-light">See all</Link>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 text-[#000000]">
                            <ol className="relative border-1 border-slate-600 ">
                                {/* this is for admin chat */}
                                <li>
                                    <div className="flex items-center gap-2 ">
                                        <img className="w-[35px] rounded-full" src="http://localhost:3000/admin.webp" alt="" />
                                        <div className="flex w-full items-center justify-between">
                                            <h2 className="font-medium text-sm">Admin</h2>
                                            <span className="text-xs text-slate-400">16:40</span>
                                        </div>

                                    </div>
                                    <div className="p-2 mt-2 bg-[#f7f3fb] rounded-lg ">
                                        <div className=" text-sm"> Welcome to BuyMore
                                        </div>
                                    </div>
                                    <div className="p-2 mt-2 bg-[#f7f3fb] rounded-lg ">
                                        <div className=" text-sm"> Congratulations for registering.
                                        </div>
                                    </div>
                                </li>
                                {/* this is for seller chat */}
                                <li>
                                    <div className="flex mt-3 items-center gap-2 ">
                                        <div className="flex w-full items-center justify-between">
                                            <span className="text-xs text-slate-400">16:45</span>
                                            <h2 className="font-medium text-sm">Seller</h2>
                                        </div>
                                        <img className="w-[30px] rounded-full" src="http://localhost:3000/user.png" alt="" />
                                    </div>
                                    <div className="p-2 mt-2 bg-[#eefcef] rounded-lg ">
                                        <div className=" text-sm text-end"> Thank You.
                                        </div>
                                    </div>

                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full flex flex-wrap justify-between">
                {/* here table starts */}
            <div className="w-full lg:w-9/12 bg-[#edf6fz]  mt-2">
                <div className="flex justify-between items-center pb-3 border-b-[1px]">
                    <h2 className="font-normal text-lg ">Top selling products</h2>
                    <Link className="text-sm font-light">See all</Link>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm border-b-[1px] text-center text-[#000000]">
                        <thead className="text-sm font-light text-[#000000] uppercase border-b-[1px] ">
                        <tr>
                            <th scope = 'col' className="px-4 text-xs font-light py-3">Order Id</th>
                            <th scope = 'col' className="px-4 text-xs py-3 font-light">Product</th>
                            <th scope = 'col' className="px-4 text-xs py-3 font-light">Category</th>
                            <th scope = 'col' className="px-4 text-xs py-3 font-light">Price</th>
                            <th scope = 'col' className="px-4 text-xs py-3 font-light">Payment Status</th>
                            <th scope = 'col' className="px-4 text-xs py-3 font-light">Active</th>
                        </tr>
                        </thead>
                        {/* table rows */}
                        <tbody>
                            <tr className="border-b-[1px]">
                                <td scope="row" className="py-4 text-[#a0a0a0] px-6 font-normal
                                whitespace-nowrap">#34543</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Denim Jacket</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Clothing</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">$1400</td>
                                <td scope="row" className="py-4 text-[#25b727] px-6 font-normal
                                whitespace-nowrap">Paid</td>
                                <td scope="row" className="py-4 px-6 font-normal text-[#3848ab]
                                whitespace-nowrap"><Link>View</Link></td>
                            </tr>
                            <tr className="border-b-[1px]">
                                <td scope="row" className="py-4 text-[#a0a0a0] px-6 font-normal
                                whitespace-nowrap">#34543</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Denim Jacket</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Clothing</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">$1400</td>
                                <td scope="row" className="py-4 text-[#b72525] px-6 font-normal
                                whitespace-nowrap">Pending</td>
                                <td scope="row" className="py-4 px-6 font-normal text-[#3848ab]
                                whitespace-nowrap"><Link>View</Link></td>
                            </tr>
                            <tr className="border-b-[1px]">
                                <td scope="row" className="py-4 text-[#a0a0a0] px-6 font-normal
                                whitespace-nowrap">#34543</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Denim Jacket</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Clothing</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">$1400</td>
                                <td scope="row" className="py-4 text-[#b72525] px-6 font-normal
                                whitespace-nowrap">Pending</td>
                                <td scope="row" className="py-4 px-6 font-normal text-[#3848ab]
                                whitespace-nowrap"><Link>View</Link></td>
                            </tr>
                            <tr className="border-b-[1px]">
                                <td scope="row" className="py-4 text-[#a0a0a0] px-6 font-normal
                                whitespace-nowrap">#34543</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Denim Jacket</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Clothing</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">$1400</td>
                                <td scope="row" className="py-4 text-[#b72525] px-6 font-normal
                                whitespace-nowrap">Pending</td>
                                <td scope="row" className="py-4 px-6 font-normal text-[#3848ab]
                                whitespace-nowrap"><Link>View</Link></td>
                            </tr>
                            <tr className="border-b-[1px]">
                                <td scope="row" className="py-4 text-[#a0a0a0] px-6 font-normal
                                whitespace-nowrap">#34543</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Denim Jacket</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">Clothing</td>
                                <td scope="row" className="py-4 px-6 font-normal
                                whitespace-nowrap">$1400</td>
                                <td scope="row" className="py-4 text-[#25b727] px-6 font-normal
                                whitespace-nowrap">Paid</td>
                                <td scope="row" className="py-4 px-6 font-normal text-[#3848ab]
                                whitespace-nowrap"><Link>View</Link></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            {/* here the Top sellers list starts */}
            <div className="w-full lg:w-3/12 lg:pl-4 mt-4 lg:mt-0 ">
                    <div className="w-full p-4 rounded-md bg-[#ffffff] text-[#000000]">
                        <div className="flex pb-2 border-b-[1px] justify-between items-center">
                            <h2 className="font-normal text-[16px] text-[#000000]">Top Sellers</h2>
                            <Link className="text-xs text-slate-400 font-light">See all</Link>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 text-[#000000]">
                            <ol className="relative border-1 p-2 border-slate-600 ">
                                {/* this is for admin chat */}
                                <li>
                                    <div className="flex pb-4 items-center gap-2 ">
                                        <img className="w-[35px] rounded-full" src="http://localhost:3000/user2.png" alt="" />
                                        <div className="flex w-full items-center justify-between">
                                            <div>
                                            <h2 className="font-normal text-sm">Narayana Fabrics</h2>
                                            <h2 className="font-thin text-xs">Clothing</h2>
                                            </div>
                                            <h2 className="text-xs text-slate-400">$110.65</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex pb-4  items-center gap-2 ">
                                        <img className="w-[35px] rounded-full" src="http://localhost:3000/user.png" alt="" />
                                        <div className="flex w-full items-center justify-between">
                                            <div>
                                            <h2 className="font-normal text-sm">Narayana Fabrics</h2>
                                            <h2 className="font-thin text-xs">Clothing</h2>
                                            </div>
                                            <h2 className="text-xs text-slate-400">$110.65</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex pb-4 items-center gap-2 ">
                                        <img className="w-[35px] rounded-full" src="http://localhost:3000/user2.png" alt="" />
                                        <div className="flex w-full items-center justify-between">
                                            <div>
                                            <h2 className="font-normal text-sm">Narayana Fabrics</h2>
                                            <h2 className="font-thin text-xs">Clothing</h2>
                                            </div>
                                            <h2 className="text-xs text-slate-400">$110.65</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    {/* this is list */}
                                    <div className="flex pb-4 items-center gap-2 ">
                                        <img className="w-[35px] rounded-full" src="http://localhost:3000/user.png" alt="" />
                                        <div className="flex w-full items-center justify-between">
                                            <div>
                                            <h2 className="font-normal text-sm">Narayana Fabrics</h2>
                                            <h2 className="font-thin text-xs">Clothing</h2>
                                            </div>
                                            <h2 className="text-xs text-slate-400">$110.65</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex pb-4 items-center gap-2 ">
                                        <img className="w-[35px] rounded-full" src="http://localhost:3000/admin.webp" alt="" />
                                        <div className="flex w-full items-center justify-between">
                                            <div>
                                            <h2 className="font-normal text-sm">Narayana Fabrics</h2>
                                            <h2 className="font-thin text-xs">Clothing</h2>
                                            </div>
                                            <h2 className="text-xs text-slate-400">$110.65</h2>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default adminDashboard;
