import React from "react";
function Book(props) {
	return (
		<div>
			<h4>{`이 책의 이름은 ${props.name}입니다.`}</h4>
			<h4>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h4>
		</div>
	);
}
export default Book;
