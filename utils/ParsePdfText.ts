import CategoryMapping from "@/data/CategoryMapping";
import Results from "@/utils/types/Results";
import ResultEnum from '@/utils/enums/ResultEnum';
import ResultInfo from '@/utils/types/ResultInfo';
import CategoryEnum from "@/utils/enums/CategoryEnum";
import RangesData from "@/data/Ranges";
import CategoryRanges from "./types/CategoryRanges";
import CategoryDescription from "./types/CategoryDescription";
import Descriptions from "@/data/Descriptions";
import CategoryTips from "./types/CategoryTips";
import CategoryTipsMatching from "./types/CategoryTipsMatching";
import AllCategoryTips from "@/data/AllCategoryTips";
import { Result } from "postcss";


const getRange = (category: CategoryEnum): CategoryRanges => {
  const ranges: CategoryRanges[] = RangesData.filter((x: CategoryRanges) => x.category == category);
  return ranges[0];
}

const getCategoryDescription = (category: CategoryEnum): CategoryDescription => {
  const descriptions: CategoryDescription[] = Descriptions.filter((description: CategoryDescription) => description.category == category);
  return descriptions[0];
}

const getResultEnum = (value: number, ranges: CategoryRanges): ResultEnum => {
  if (value <= ranges.ranges[0]) {
    return ranges.resultRange[1];
  } else if (ranges.ranges.length == 1 || value <= ranges.ranges[1] ) {
    return ranges.resultRange[2];
  } else {
    return ranges.resultRange[3];
  }
}

const getCategoryTips = (category: CategoryEnum, result: ResultEnum) => {
  const allCategoryTips: CategoryTipsMatching[] = AllCategoryTips.filter((tips: CategoryTipsMatching) => tips.category == category);
  const tips: CategoryTips[] = (allCategoryTips[0].tips).filter((x: CategoryTips) => x.result == result);
  return tips[0];
}

const removeExtraWords = (category: String) => {
  category = category.split(",")[0];
  category = category.split("(")[0];
  return category.trim();
}

const parsePdfText = (pdfText: String[]): ResultInfo[] => {
  const parseResults: ResultInfo[] = [];
  
  for (var i = 1; i < pdfText.length - 1; i++) {
    if (pdfText[i].toLowerCase().startsWith("result")) {
      try {
        const title: string = removeExtraWords(pdfText[i - 1]).toString();
        const category: CategoryEnum = CategoryMapping[title] || CategoryEnum.UNKNOWN;
        const ranges: CategoryRanges = getRange(category);

        const value: number = Number(pdfText[i + 1].split(" ")[0]);
        const resultEnum: ResultEnum = getResultEnum(value, ranges);
        
        const result: Results = {
          category: category,
          result: resultEnum,
          value
        }
        const resultTab: CategoryDescription = getCategoryDescription(category);
        const tipsTab: CategoryTips = getCategoryTips(category, resultEnum);

        parseResults.push({ 
          title,
          result,
          ranges,
          resultTab,
          tipsTab
         });
      } catch (error) {
        console.log("Failed to parse", pdfText[i - 1]);
      }
    }
  }

  return parseResults;
}

export default parsePdfText;