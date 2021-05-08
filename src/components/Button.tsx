import React from "react";

// import styled from "styled-components/macro";

interface Props {
  type?: string;
  onClick?: Function;
  children?: any;
  color?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  className?: string;
  background?: string;
}

const Button = (props: Props) => {
  const { width, height, type, className, ...restProps } = props;

  return (
    <button
      style={{
        ...(width ? { width: width } : {}),
        ...(height ? { height: height } : {}),
      }}
      className={className}
      {...restProps}
    >
    </button>
  );
};

// const ButtonWrapper = styled.button<{
//   color?: String;
//   background?: String;
// }>`
//   height: 31px;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   outline: none;
//   font-weight: 600;
//   background: ${(props) => props.color || ""};
// `;

export default Button