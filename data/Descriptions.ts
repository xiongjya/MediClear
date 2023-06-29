import CategoryEnum from "@/utils/enums/CategoryEnum";
import CategoryDescription from "@/utils/types/CategoryDescription";

const Descriptions: CategoryDescription[] = [
  {
    category: CategoryEnum.TOTAL_CHOLESTEROL,
    description: "Total amount of cholesterol in your blood includes the good (HDL cholesterol) and bad (LDL cholesterol). \n Keeping the total cholesterol within a healthy range is important. If it is too high, it could mean too much bad cholesterol. If it is too low, it could mean too little good cholesterol."
  },
  {
    category: CategoryEnum.TRIGLYCERIDES,
    description: "Triglycerides are a type of fat in our blood, they serve as a source of energy. \n Having some triglycerides is necessary for body to function. But too much of it increases the risk of heart diseases and other health problems."
  },
  {
    category: CategoryEnum.HDL_CHOLESTEROL,
    description: "HDL (high-density lipoprotein) cholesterol is the good cholesterol. \n Generally good to have higher levels of HDL cholesterol in your body as  it helps remove excess cholesterol from your blood vessels and protects your heart, lowering the risk of heart disease. "
  },
  {
    category: CategoryEnum.LDL_CHOLESTEROL,
    description: "LDL (low-density lipoprotein) cholesterol is the bad cholesterol. \n Generally bad to have high levels of LDL cholesterol  in your body as excess LDL cholesterol can build up in your blood vessels, narrowing it and making it hard for blood to flow. , therefore increasing the risk of heart and cardiovascular diseases. "
  },
  {
    category: CategoryEnum.CHOL_HDL_RATIO,
    description: "CHOL:HDL is the ratio between total cholesterol (CHOL) and high-density lipoprotein (HDL) cholesterol levels in the blood. \n A higher ratio suggests that there is a higher proportion of 'bad' cholesterol in relation to the 'good' cholesterol, which can indicate an increased risk of heart disease and other cardiovascular problems"
  }
]

export default Descriptions;