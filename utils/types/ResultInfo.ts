import CategoryDescription from './CategoryDescription';
import CategoryRanges from './CategoryRanges';
import CategoryTips from './CategoryTips';
import Results from './Results';

type ResultInfo = {
  title: string;
  result: Results;
  ranges: CategoryRanges;

  resultTab: CategoryDescription;
  tipsTab: CategoryTips;
};

export default ResultInfo;
