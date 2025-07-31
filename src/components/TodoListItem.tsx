import Button from "./html/Button";
import Checkbox from "./html/checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

export default function TodoListItem() {
  return (
    <>
      {/* <!-- 할 일이 완료되면 .todo__item--complete 추가 --> */}
      <li className="todo__item todo__item--complete">
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
        >
          Eat Breakfast
        </Checkbox>

        {/* <!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) --> */}
        {/* <input type="text" className="todo__modify-input" /> */}
        <div className="todo__button-group">
          <Button className="todo__action-button">
            <SvgPencil />
          </Button>
          <Button className="todo__action-button">
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
}
