import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";
import SpecialProduct from "./SpecialProduct";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section className=" px-10 my-12">
        <div className=" flex justify-between items-center border-b-2 border-orange-400">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            Special Products
          </h1>
          <div className="  text-3xl flex gap-5 mr-4 my-1">
            <button className="rounded hover:bg-slate-200 py-3 px-5">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="rounded hover:bg-slate-200 py-3 px-5">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className=" px-10 flex flex-wrap gap-10">
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
        </div>
      </section>

      <section className=" px-10 my-12">
        <div className=" flex justify-between items-center py- border-b-2 border-orange-400">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            Our Products
          </h1>
          <div className="  text-3xl flex gap-5 mr-4 my-1">
            <button className="rounded hover:bg-slate-200 py-3 px-5">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="rounded hover:bg-slate-200 py-3 px-5">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className=" px-10 flex flex-wrap gap-10">
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-12">
        <div className=" flex justify-between border-b-2 border-orange-400">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            WHAT OUR CUSTOMERS SAY
          </h1>
          <div className="  text-3xl flex gap-5 mr-4 my-1">
            <button className="rounded hover:bg-slate-200 py-3 px-5">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="rounded hover:bg-slate-200 py-3 px-5">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div>
          <Reviews></Reviews>
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-12">
        <div className=" ">
          <h1 className=" uppercase text-2xl text-left title1 font-semibold ">
            Business Summary
          </h1>
          {/* <div className=" text-4xl flex gap-10 my-3">
            <span>{"<"}</span> <span>{">"}</span>
          </div> */}
        </div>
      </section>

      {/*  */}
      <section className=" px-10 my-12">
        <div className=" ">
          <h1 className="uppercase text-2xl text-left title1 font-semibold ">
            GET IN TOUCH
          </h1>
          {/* <div className=" text-4xl flex gap-10 my-3">
            <span>{"<"}</span> <span>{">"}</span>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
