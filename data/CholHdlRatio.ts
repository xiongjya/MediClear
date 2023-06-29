import TipDescription from "@/utils/constants/TipDescription";
import ResultEnum from "@/utils/enums/ResultEnum";
import CategoryTips from "@/utils/types/CategoryTips";

const CholHdlRatio: CategoryTips[] = [
  {
    result: ResultEnum.NORMAL,
    tips: [
      "Maintaining a healthy diet that is low in saturated fats and trans fat and high in monosaturated fats", 
      "Leading an active lifestyle"
    ],
    top: TipDescription.good,
    bottom: ""
  },
  {
    result: ResultEnum.HIGH,
    tips: [
      "Consume foods high in healthy fats (e.g. avocados, almonds, cashew nuts, olive oil).",
      "Ask your doctor or pharmacist for help to quit smoking or call QuitLine 1800-438-2000"
    ],
    top: "",
    bottom: TipDescription.bad
  }
]

export default CholHdlRatio;
