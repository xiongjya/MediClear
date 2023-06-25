import ResultEnum from "../enums/ResultEnum";
import Results from "./Results";

type ResultInfo = {
  category: ResultEnum;
  result: Results

  resultTab: string;
  testTab: string;
  tipsTab: string;
}

export default ResultInfo;