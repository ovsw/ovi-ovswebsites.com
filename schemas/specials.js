import FoodItemFields from './foodItemFields'
import FoodItemPreview from './foodItemPreview'

import { FaFirstOrder } from 'react-icons/fa'

export default {
  name: 'specials',
  title: 'Specials',
  type: 'document',
  fields: FoodItemFields,
  icon: FaFirstOrder,
  preview: FoodItemPreview
}
