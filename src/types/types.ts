export type BtnSize =
  | 'xxl-small'
  | 'xl-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
export type BtnType = 'primary' | 'danger' | 'transparent'
export type CardType = 'medium' | 'large'
export type SortType = 'less' | 'more'

export type Sort = {
  by: SortType
  field: 'brand' | 'model_year' | 'price'
  id: string
}
