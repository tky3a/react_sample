import {
  css,
} from 'styled-components';

// スマホ版のブレイクポイント
export const sp = (
  first,
  ...interpolations
) => css`
    @media (max-width: 560px) {
        ${css(first, ...interpolations)}
    }
`;

// タブレット版のブレイクポイント
export const tab = (
  first,
  ...interpolations
) => css`
    @media (min-width: 561px) and (max-width: 1024px) {
        ${css(first, ...interpolations)}
    }
`;

// PC版のブレイクポイント
export const pc = (
  first,
  ...interpolations
) => css`
    @media (min-width: 1025px) {
        ${css(first, ...interpolations)}
    }
`;
