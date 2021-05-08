/**
 *
 * UpsButton
 *
 */
import React from "react";

import styled from "styled-components/macro";

interface Props {
  type?: string;
  // onClick?: Function;
  onClick?: any;
  children?: any;
  outline?: boolean;
  color?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  className?: string;
}

const Button = (props: Props) => {
  const { width, height, type, className, ...restProps } = props;

  return (
    <ButtonWrapper
      style={{
        ...(width ? { width: width } : {}),
        ...(height ? { height: height } : {}),
      }}
      {...restProps}
      // onClick={()=>{}}
      className={className}
    >
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{
  color?: String;
}>`
  height: 31px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: 600;
  background: ${(props) => props.color || "green"};
`;

export default Button