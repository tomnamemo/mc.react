import React from "react";
import { MdCheckBoxOutlineBlank, MDCheckBox, MdRemoveCircleOutline, MdCheckBox } from "react-icons/md";
import "./TodoListItem.scss";
import classNames from "classnames";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
	const { id, text, checked } = todo;
	return (
		<div className="TodoListItem">
			<div
				className={classNames("checkbox", { checked })}
				onClick={() => onToggle(id)}
			>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

				<div className="text">{text}</div>
			</div>
			<div
				className="remove"
				onClick={() => onRemove(id)}
			>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
};
export default TodoListItem;
