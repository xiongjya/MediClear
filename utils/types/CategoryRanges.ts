import CategoryEnum from '@/utils/enums/CategoryEnum';
import ResultEnum from '../enums/ResultEnum';

type CategoryRanges = {
  category: CategoryEnum,
  ranges: number[],
  resultRange: {
    [x: number]: ResultEnum
  }
};

export default CategoryRanges;
