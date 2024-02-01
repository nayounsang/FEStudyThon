import DrawerTop from "./drawer-top";
import DrawerNav from "./drawer-nav";

const Drawer = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-full overflow-x-hidden bg-almost-white flex flex-col">
      <DrawerTop />
      <DrawerNav/>
    </div>
  );
};

export default Drawer;
