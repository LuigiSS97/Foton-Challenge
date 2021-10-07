import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  /* height: ${({ height }) => (height ? height : "40px")}; */
  box-shadow: none !important;

  input[value]:not([value=""]) + div,
  input:focus + div {
    transform: scale(0.8) translateY(-20px);
    background: white;
    font-size: 1.2rem;
    padding-left: ${({ icon }) => icon && "15px"};
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 18px;
    padding-right: 5px;
  }
  input:focus {
    color: #284b63;
    border-color: #238fef;
  }
  input:focus + div {
    color: #238fef;
  }
`;

export const Input = styled.input`
  font-weight: 500;
  font-size: 1.6rem;
  color: #495055;
  width: 100%;
  border-radius: 10px;
  border: 0px;
  border-color: white;

  outline: none;
  padding: 8px 12px;
  height: ${({ height }) => (height ? height : "40px")};
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
  }
`;

export const Label = styled.div`
  position: absolute;
  margin: 0;
  color: #46AB7A;
  align-items: center;
  font-size: 1.6rem;
  top: 11px;
  left: 17px;
  transition: all 0.2s;
  transform-origin: 0% 0%;
  max-width: calc(100% - 34px);
  background: none;
  pointer-events: none;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: ${({ icon }) => icon && "20px"};
  & svg {
    position: absolute;
    top: 2px;
    left: 0;
  }
`;
