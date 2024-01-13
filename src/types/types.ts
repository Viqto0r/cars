export type AppStateType = 'pending' | 'error' | 'fullfield'
export type BtnSize =
  | 'xxl-small'
  | 'xl-small'
  | 'x-small'
  | 'small'
  | 's-medium'
  | 'medium'
  | 'large'
export type BtnType = 'primary' | 'danger' | 'transparent'
export type SizesType = 'medium' | 'large'
export type SortType = 'desc' | 'asc'
export type SortFieldsType = 'brand' | 'model_year' | 'price' | 'availability'
export type IconsType = 'favorites' | 'trash' | 'search'
export type ListType = 'grid' | 'column'
export interface ISort {
  by: SortType
  field: SortFieldsType
  id: string
}
