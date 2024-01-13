import { css } from '@emotion/react'

export const ICON = (width: string, heigth: string, iconName: string) => {
  return css`
    display: inline-block;
    width: ${width};
    height: ${heigth};
    position: relative;
    background-image: url(/src/icons/${iconName});
  `
}

export const ICON_LAYOUT = css`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 1;
`

export const FAFORITES_ICON = css``
export const FAVORITES_ICON_LAYOUT = css``
export const FAFORITES_ICON_WRAPPER = (active: boolean) => {
  const iconName = active ? 'Favorite-Active.svg' : 'Favorite-Default.svg'
  return css`
    .css-${FAFORITES_ICON.name} {
      ${ICON('27px', '24px', iconName)};
    }
    .css-${FAVORITES_ICON_LAYOUT.name} {
      ${ICON_LAYOUT};

      &:hover ~ .css-${FAFORITES_ICON.name} {
        background-image: url(/src/icons/Favorite-Hover.svg);
      }
      &:active ~ .css-${FAFORITES_ICON.name} {
        background-image: url(/src/icons/Favorite-Active.svg);
      }
      &:disabled ~ .css-${FAFORITES_ICON.name} {
        background-image: url(/src/icons/Favorite-Disabled.svg);
      }
    }
  `
}

export const SEARCH_ICON = css``
export const SEARCH_ICON_LAYOUT = css``
export const SEARCH_ICON_WRAPPER = () => {
  return css`
    line-height: 0;
    font-size: 0px;
    .css-${SEARCH_ICON.name} {
      ${ICON('12px', '12px', 'Search.svg')};
    }
    .css-${SEARCH_ICON_LAYOUT.name} {
      ${ICON_LAYOUT};
    }
  `
}

export const TRASH_ICON = css``
export const TRASH_ICON_LAYOUT = css``
export const TRASH_ICON_WRAPPER = () => {
  return css`
    .css-${TRASH_ICON.name} {
      ${ICON('18px', '19px', 'Delete-Default.svg')};
    }
    .css-${TRASH_ICON_LAYOUT.name} {
      ${ICON_LAYOUT};

      &:hover ~ .css-${TRASH_ICON.name} {
        background-image: url(/src/icons/Delete-Hover.svg);
      }
    }
  `
}
