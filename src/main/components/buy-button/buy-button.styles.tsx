import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 90%;
  border-width: 1px;
  border-color: #666;
  border-radius: 10px;
  background-color: #60B564;
  margin-vertical: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const Spinner = styled.ActivityIndicator``;
