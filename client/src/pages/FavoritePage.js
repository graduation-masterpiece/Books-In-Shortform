import React from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";


const FavoritePage = () => {
  return (
    <div className="w-screen h-screen bg-[#ECE6CC] overflow-hidden mx-auto my-auto">
      <Sidebar />
      <div className="flex flex-col p-20">
        <p className="text-[50px] font-bold border-b-black border-b-[1px] ml-80 whitespace-nowrap w-fit">
          My Favorite
        </p>
        <div className="grid grid-cols-3 gap-10 mt-20 w-[60%] mx-auto">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default FavoritePage;
