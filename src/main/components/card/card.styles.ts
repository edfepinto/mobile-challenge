import styled from "styled-components/native";

interface ContainerProps {
  isLastItem: boolean;
}

export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: ${(props) => (props.isLastItem ? "0px" : "10px")};
  justify-content: flex-start;
  align-items: flex-start;
  width: 160px;
`;

export const CardInfo = styled.View`
  justify-content: space-between;
`;

export const TextWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Title = styled.Text`
  flex: 1;
  color: #0D1321;
  font-weight: bold;
  font-size: 22px;
`;

export const Date = styled.Text`
  font-weight: bold;
  color: #A4031F;
  font-size: 16px;
  padding-top: 5px;
`;

export const Local = styled.Text`
  color: #091017;
  font-size: 16px;
`;

export const Image = styled.Image`
  height: 45%;
  width: 100%;
  border-radius: 16px;
`;

