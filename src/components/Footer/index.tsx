const Footer = () => {
  return (
    <div className="bg-[#00230D] text-white">
      <div className="container mx-auto px-4 sm:px-[1px] py-8 grid grid-cols-1 md:grid-cols-5 gap-24 ">
        <div>
          <img src="/logo_footer.avif" alt="" />
        </div>
        <div className="text-sm font-extralight flex flex-col gap-2">
          <p className="font-bold">Support</p>
          <p>Where's my order?</p>
          <p>FAQ</p>
          <p>Delivery</p>
          <p>Returns</p>
          <p>Contact</p>
        </div>
        <div className="text-sm font-extralight flex flex-col gap-2">
          <p className="font-bold">YOUR RECORD HUB</p>
          <p>Register</p>
          <p>Login</p>
          <p>My wishlist</p>
          <p>My rewards</p>
          <p>Track My Order</p>
          <p>Blog</p>
        </div>
        <div className="text-sm font-extralight flex flex-col gap-2">
          <p className="font-bold">THE SMALL PRINT</p>
          <p>Privacy Centre</p>
          <p>Terms Of Service</p>
        </div>
        <div className="flex flex-col gap-4">
          <input type="text" name="" className="w-full" />
          <button className="bg-[#63C630] text-white py-2 px-8 hover:bg-[#00230F] transition-all duration-300 ease-out font-extrabold w-full">
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
