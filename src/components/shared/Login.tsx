interface Props {
  authenticate: () => void;
}
export const Login = (props: Props) => {
  return (
    <div className="login">
      <form action="" className="login__form" id="add_form">
        <input type="text" name="title" placeholder="Tile" />
        <input type="text" name="price" placeholder="Price" />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
        ></textarea>
        <button type="submit" onClick={props.authenticate}>
          Login
        </button>
      </form>
    </div>
  );
};
