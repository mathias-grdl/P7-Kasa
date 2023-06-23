import "./index.css";

function Tag({ tags }) {
  return (
    <div className="tag">
      <span>{tags.tags}</span>
    </div>
  );
}

export default Tag;
