import TipDescription from "@/utils/constants/TipDescription";
import ResultEnum from "@/utils/enums/ResultEnum";
import CategoryTips from "@/utils/types/CategoryTips";

const TotalCholesterol: CategoryTips[] = [
  {
    result: ResultEnum.NORMAL,
    tips: [
      "Maintaining a healthy diet - 2 servings of fresh fruits and vegetables for every meal",
      "Leading an active lifestyle"
    ],
    top: TipDescription.good,
    bottom: ""
  },
  {
    result: ResultEnum.BORDERLINE_HIGH,
    tips: [
      "Consume more high-fibre foods (eg. fruits, vegetables and wholegrains etc.)",
      "Limit food high in cholesterol (animal products like organ meat, egg yolk, prawns)"
    ],
    top: "",
    bottom: TipDescription.bad
  },
  {
    result: ResultEnum.HIGH,
    tips: [
      "Increase your intake of fiber-rich foods like fruits, vegetables, and whole grains, which can help lower cholesterol.",
      "Incorporate healthy fats into your diet, such as avocados, olive oil, and nuts, which can help improve cholesterol profiles."
    ],
    top: "",
    bottom: TipDescription.bad
  }
]

export default TotalCholesterol;
