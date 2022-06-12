import styled from 'styled-components';

// デフォルトボタン(画面から受け取るpropsによって色を変える)
const Button = styled.button.attrs(({ color = '#007bff' }) => {
  console.log('propsでcolorを受け取る', color);
  return ({
    background: color,
  });
})`
font-size: 1em;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background: ${(color) => color};
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.2;
  }
`;

export default Button;
