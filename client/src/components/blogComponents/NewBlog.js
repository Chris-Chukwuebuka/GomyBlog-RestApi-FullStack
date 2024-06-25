const NewBlog = () => {
  return (
    <div className="col-lg-8">
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            placeholder="Enter Title"
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <textarea className="form-control" rows={10}></textarea>
        </div>

        <div className="form-group">
          <button className="btn btn-secondary" type="submit">
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
