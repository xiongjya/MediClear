import CategoryEnum from '@/utils/enums/CategoryEnum';
import CategoryTips from '@/utils/types/CategoryTips';

type CategoryTipsMatching = {
  category: CategoryEnum,
  tips: CategoryTips[]
};

export default CategoryTipsMatching;
