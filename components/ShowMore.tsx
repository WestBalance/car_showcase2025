"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation =() =>{
        const newLimit = (pageNumber+1) * 8;
        const newPathName = updateSearchParams("limit",String(newLimit));
        router.push(newPathName);
     }

  return (
 <div className="flex-center" style={{ gap: "20px", marginTop: "2.5rem" }}>
      <CustomButton
        title="Show More"
        btnType="button"
        containerStyles="custom-btn custom-container"
        handleClick={handleNavigation}
      />
    </div>
  )
}

export default ShowMore