import React, { useState } from "react";
import closeIcon from "../../assets/icons/close.svg";
import { products } from "../../products";
import { Product } from "./Product";
import thumbnail from "../../assets/images/image-1.jpg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, price: number, description: string) => void;
}
const defaultData = {
  title: "",
  price: "",
  description: "",
};
export const AddModal = ({ onAdd, onClose, isOpen }: Props) => {
  const [input, setInput] = useState(defaultData);
  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput((previousState) => {
      const target = event.target as HTMLInputElement;
      return {
        ...previousState,
        [target.name]: target.value,
      };
    });
  };
  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    onAdd(input.title, +input.price, input.description);
    setInput(defaultData);
  };

  return (
    <aside
      className={`add_modal ${isOpen ? "add_modal--shown" : ""}`}
      id="add-modal"
    >
      <div className="add_modal__wrapper">
        <span className="add_modal__close" id="c" onClick={onClose}>
          <img src={closeIcon} alt="" />
        </span>
        <form action="" className="add_modal__form" id="add_form">
          <h5>Add New</h5>

          <input
            type="text"
            name="title"
            placeholder="Tile"
            value={input.title}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={input.price}
            onChange={handleChange}
          />

          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={input.description}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleSubmit} type="submit">
            Add
          </button>
        </form>
      </div>
    </aside>
  );
};
