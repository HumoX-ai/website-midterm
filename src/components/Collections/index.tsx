import { data, data_4 } from "../../../data";

const Collections = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative overflow-hidden">
          <img
            src="/Collect_1.jpg"
            alt=""
            className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/Collect_2.jpg"
            alt=""
            className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-4">
        <div className="relative overflow-hidden col-span-2 w-full">
          <img
            src="/Collect_3.jpg"
            alt=""
            className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
          />
        </div>
        <div className="bg-[#00230D] text-center flex items-center justify-center flex-col p-4 text-white">
          <h1 className="text-3xl font-bold ">TURNTABLES</h1>
          <p className="text-sm font-light py-6">
            Great vinyl deserves a great home. Explore our wide-range of
            turntables and hardware at The Record Hub. With Audio Technica,
            Pro-Ject, Lenco & many more brands to choose from.
          </p>
          <button className="bg-[ #00230F] text-white py-2 px-8 hover:bg-[#63C630] transition-all duration-300 ease-out font-extrabold">
            SEE MORE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative overflow-hidden">
          <img
            src="/Collect_4.jpg"
            alt=""
            className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/Collect_5.jpg"
            alt=""
            className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/Collect_6.jpg"
            alt=""
            className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/Collet_7.jpg"
            alt=""
            className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-center font-extrabold text-5xl">SHOP BY GENRE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <div className="relative overflow-hidden">
            <img
              src="/genre_1.webp"
              alt=""
              className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/genre_2.webp"
              alt=""
              className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/genre_1.webp"
              alt=""
              className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/genre_2.webp"
              alt=""
              className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-4">
          <div className="relative overflow-hidden col-span-2 w-full">
            <img
              src="/genre.webp"
              alt=""
              className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
            />
          </div>
          <div className="bg-[#00230D] text-center flex items-center justify-center flex-col p-4 text-white">
            <h1 className="text-3xl font-bold ">TOP SELLERS</h1>
            <p className="text-sm font-light py-6">
              Check out our best selling titles across our entire store
            </p>
            <button className="bg-[ #00230F] text-white py-2 px-8 hover:bg-[#63C630] transition-all duration-300 ease-out font-extrabold">
              SEE MORE
            </button>
          </div>
        </div>
      </div>

      <div className="my-16">
        <h1 className="text-center font-extrabold text-5xl mb-4">
          DISCOUNTED MUSIC
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data_4
            .map((item, index) => (
              <div key={index}>
                <div className="card w-full max-w-96 border-2 border-primary bg-base-100">
                  <figure className="px-4 py-4 ">
                    <img src={item.img} alt="Shoes" className="mx-auto" />
                  </figure>
                </div>
                <div className="card-body items-center">
                  <h2 className="font-bold text-xl mt-4">{item.title}</h2>
                  <p className="text-neutral-700 font-light text-sm">
                    {item.description}
                  </p>
                  <h2 className="text-neutral-400 font-bold">{item.type}</h2>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{item.price}</h2>
                     <button className="bg-[#00230F] text-white py-2 px-6 hover:bg-[#63C630] transition-all duration-300 ease-out font-medium">Buy Ticket</button>
                  </div>
                </div>
              </div>
            ))
            .slice(0, data.length - 1)}
        </div>
      </div>
    </div>
  );
};

export default Collections;
