import TipDescription from "@/utils/constants/TipDescription";
import ResultEnum from "@/utils/enums/ResultEnum";
import CategoryTips from "@/utils/types/CategoryTips";

const LdlCholesterol: CategoryTips[] = [
  {
    result: ResultEnum.NORMAL,
    tips: [
      "Maintaining a healthy diet that is low in unhealthy fats (saturated fats and trans fat) and high in healthy fats (monosaturated and polysaturated fats)",
      "Leading an active lifestyle"
    ],
    top: TipDescription.good,
    bottom: ""
  },
  {
    result: ResultEnum.BORDERLINE_HIGH,
    tips: [
      "Limit foods high in unhealthy fats (eg. fatty meats, fried foods, and processed snacks)",
      "Consume more foods high in healthy fats (eg. Avocados, nuts, seeds, olive oil, tune, sardines)",
      "150 minutes of exercise per week (eg. brisk walking, cycling, dancing etc.)"
    ],
    top: "",
    bottom: TipDescription.bad
  },
  {
    result: ResultEnum.HIGH,
    tips: [
      "Aim for at least 150 minutes of moderate-intensity exercise per week.",
      "Avoid tobacco smoke and limit alcohol intake"
    ],
    top: "",
    bottom: TipDescription.bad
  }
]

export default LdlCholesterol;
