import CategoryEnum from "@/utils/enums/CategoryEnum";
import CategoryTipsMatching from "@/utils/types/CategoryTipsMatching";
import CholHdlRatio from "./CholHdlRatio";
import HdlCholesterol from "./HdlCholesterol";
import LdlCholesterol from "./LdlCholesterol";
import TotalCholesterol from "./TotalCholesterol";
import Triglycerides from "./Triglycerides";

const AllCategoryTips: CategoryTipsMatching[] = [
  {
    category: CategoryEnum.CHOL_HDL_RATIO,
    tips: CholHdlRatio
  },
  {
    category: CategoryEnum.HDL_CHOLESTEROL,
    tips: HdlCholesterol
  },
  {
    category: CategoryEnum.LDL_CHOLESTEROL,
    tips: LdlCholesterol
  },
  {
    category: CategoryEnum.TOTAL_CHOLESTEROL,
    tips: TotalCholesterol
  },
  {
    category: CategoryEnum.TRIGLYCERIDES,
    tips: Triglycerides
  }
]

export default AllCategoryTips;