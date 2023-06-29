import TipDescription from "@/utils/constants/TipDescription";
import ResultEnum from "@/utils/enums/ResultEnum";
import CategoryTips from "@/utils/types/CategoryTips";

const Triglycerides: CategoryTips[] = [
  {
    result: ResultEnum.NORMAL,
    tips: [
      "Maintaining a healthy diet low in saturated fats and trans fat",
      "Leading an active lifestyle"
    ],
    top: TipDescription.good,
    bottom: ""
  },
  {
    result: ResultEnum.BORDERLINE_HIGH,
    tips: [
      "Increase your consumption of omega-3 fatty acids found in fish, nuts, and seeds, as they can help reduce triglyceride levels.", 
      "Engage in regular exercise, which can help lower triglycerides and improve overall heart health."
    ],
    top: "",
    bottom: TipDescription.bad
  },
  {
    result: ResultEnum.HIGH,
    tips: [
      "Limit food high in unhealthy fats (eg. sugary foods, cheese, whole milk, and red meat)",
      "Reduce alcohol consumption",
      "150 minutes of exercise per week (eg. brisk walking, cycling, dancing etc.)"
    ],
    top: "",
    bottom: TipDescription.bad
  }
]

export default Triglycerides;
