import CategoryEnum from '@/utils/enums/CategoryEnum';
import CategoryRanges from '@/utils/types/CategoryRanges';

const RangesData: CategoryRanges[] = [
  {
    category: CategoryEnum.TOTAL_CHOLESTEROL,
    ranges: [5.2, 6.1]
  },
  {
    category: CategoryEnum.TRIGLYCERIDES,
    ranges: [2.2, 4.5]
  },
  {
    category: CategoryEnum.HDL_CHOLESTEROL,
    ranges: [1.0, 1.6]
  },
  {
    category: CategoryEnum.LDL_CHOLESTEROL,
    ranges: [3.3, 4.1]
  },
  {
    category: CategoryEnum.CHOL_HDL_RATIO,
    ranges: [4.5]
  }
]

export default RangesData;