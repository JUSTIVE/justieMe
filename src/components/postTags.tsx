import { Link } from "@tanstack/react-router";

export const PostTag = ({ tag }: { tag: string }) => {
  return (
    <Link
      to={"/posts"}
      search={{
        tag,
      }}
    >
      {tag}
    </Link>
  );
};

export const PostTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((x) => (
        <PostTag tag={x} key={x} />
      ))}
    </div>
  );
};
