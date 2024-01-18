export default function PageHeader() {
  const handleSaveClick = () => {
    console.log("Save clicked!");
  };

  const handleCloseClick = () => {
    console.log("Close clicked!");
  };

  const handleDeleteClick = () => {
    const comfirmDelete = window.confirm("Are you sure you want to delete?");
    if (comfirmDelete) {
      console.log("Delete clicked!");
    }
  };

  return (
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Document Title"
        aria-label="Recipient's username with two button addons"
      ></input>
      <a
        className="btn btn-success"
        type="button"
        href="/home"
        onClick={handleSaveClick}
      >
        Publish
      </a>
      <a
        className="btn btn-warning"
        type="button"
        href="/home"
        onClick={handleCloseClick}
      >
        Close
      </a>
      <a
        className="btn btn-danger"
        type="button"
        style={{ borderRadius: "0px" }}
        href="/home"
        onClick={handleDeleteClick}
      >
        Delete
      </a>
    </div>
  );
}
