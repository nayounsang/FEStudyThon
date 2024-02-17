const NavFallback = () => {
  return (
    <div className=" absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-400 bg-opacity-50">
      <div>
        <p className=" animate-bounce text-xl">이동 중입니다.</p>
      </div>
    </div>
  );
};

export default NavFallback;
