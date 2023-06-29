import CategoryEnum from "@/utils/enums/CategoryEnum"

const CategoryMapping: { [x: string]: CategoryEnum } = {
  "Total Cholesterol": CategoryEnum.TOTAL_CHOLESTEROL,
  "Triglycerides": CategoryEnum.TRIGLYCERIDES,
  "HDL Cholesterol": CategoryEnum.HDL_CHOLESTEROL,
  "LDL Cholesterol": CategoryEnum.LDL_CHOLESTEROL,
  "CHOL:HDL Ratio": CategoryEnum.CHOL_HDL_RATIO
}

export default CategoryMapping;