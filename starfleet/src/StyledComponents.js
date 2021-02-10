import styled from 'styled-components';

const bgColor = 'black';
const textColor = 'white';
const headerSize = 70;

export const Container = styled.div`
  position: absolute;
  background: ${bgColor};
  color: ${textColor};
  height: 100%;
  width: 100%;
  top: ${headerSize}px;
  display: ${props => props.visible ? 'block' : 'none'}
`;

export const MainHeader = styled.div`
  background: #232323;
  height: ${headerSize - 1}px;
  position: absolute;
  top: 0;
  width: 100%;
  text-align: left;
  padding: 0 15px;
  border-bottom: 1px solid rgb(80, 121, 197);
`;

export const Logo = styled.img`
	width: 270px;
  margin-top: 18px;
`;

export const StatsContainer = styled.div`
	display: flex;
  justify-content: center;
`;

export const StatsList = styled.div`
  text-align: left;
  margin-left: 20px;
  padding: 10px;
  background: #222;
  min-width: 140px;
  font-size: 11px;
`;

export const StatsImage = styled.div`
	width: 300px;
`;

export const PageTitle = styled.h1`
	color: ${textColor};
	font-size: 24px;
`