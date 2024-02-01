import { useContext } from "react";
import { DrawerContext } from ".";
import CloseIcon from "@/component/atom/icon/close";

const DrawerTop = () => {
    const { setIsOpen } = useContext(DrawerContext);
    return(
        <div className="py-5 flex items-center justify-around">
          <p className="text-2xl">FE스터디톤</p>
          <button
            name="close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon width={30} height={30} />
          </button>
        </div>
    )
}

export default DrawerTop