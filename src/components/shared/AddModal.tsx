import closeIcon from "../../assets/icons/close.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const AddModal = (props: Props) => {
  return (
    <aside
      className={`add_modal ${props.isOpen ? "add_modal--shown" : ""}`}
      id="add-modal"
    >
      <div className="add_modal__wrapper">
        <span className="add_modal__close" id="c" onClick={props.onClose}>
          <img src={closeIcon} alt="" />
        </span>
        <form action="" className="add_modal__form" id="add_form">
          <h5>Add New</h5>

          <input type="text" name="title" placeholder="Tile" />
          <input type="text" name="price" placeholder="Price" />

          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </aside>
  );
};
