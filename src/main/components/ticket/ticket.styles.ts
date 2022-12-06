import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const Banner = styled.Image`
  height: 100px;
  width: 130px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
`;

export const Info = styled.View``;

export const Time = styled.Text`
  color: tomato;
  font-size: 18px;
`;

export const Title = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 24px;
`;

export const Local = styled.Text``;

export const TextWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`;
