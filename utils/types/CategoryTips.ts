import ResultEnum from '../enums/ResultEnum';

type CategoryTips = {
  result: ResultEnum,
  top: string, // For good only
  tips: String[], // For bullet points
  bottom: String // For bad only
};

export default CategoryTips;
