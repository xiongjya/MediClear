import CategoryEnum from '@/utils/enums/CategoryEnum';
import ResultEnum from '@/utils/enums/ResultEnum';
import CategoryRanges from '@/utils/types/CategoryRanges';

const RangesData: CategoryRanges[] = [
  {
    category: CategoryEnum.TOTAL_CHOLESTEROL,
    ranges: [5.2, 6.1],
    resultRange: {
      1: ResultEnum.NORMAL,
      2: ResultEnum.BORDERLINE_HIGH,
      3: ResultEnum.HIGH
    }
  },
  {
    category: CategoryEnum.TRIGLYCERIDES,
    ranges: [2.2, 4.5],
    resultRange: {
      1: ResultEnum.NORMAL,
      2: ResultEnum.BORDERLINE_HIGH,
      3: ResultEnum.HIGH
    }
  },
  {
    category: CategoryEnum.HDL_CHOLESTEROL,
    ranges: [1.0, 1.6],
    resultRange: {
      1: ResultEnum.LOW,
      2: ResultEnum.NORMAL,
      3: ResultEnum.HIGH
    }
  },
  {
    category: CategoryEnum.LDL_CHOLESTEROL,
    ranges: [3.3, 4.1],
    resultRange: {
      1: ResultEnum.NORMAL,
      2: ResultEnum.BORDERLINE_HIGH,
      3: ResultEnum.HIGH
    }
  },
  {
    category: CategoryEnum.CHOL_HDL_RATIO,
    ranges: [4.5],
    resultRange: {
      1: ResultEnum.NORMAL,
      2: ResultEnum.HIGH,
    }
  }
]

export default RangesData;