import React from "react";
import styled from "styled-components";

const ButtonComp = () => {
	return <Button>Get started</Button>;
};

export default ButtonComp;
const Button = styled.div`

background-color: #03437E;
	height: 40px;
	width: 150px;
	border-radius: 5px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		background-color: transparent;
		border: 1px solid gray;
		color: white;
	}
`;
