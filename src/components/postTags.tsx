import { Link } from "@tanstack/react-router";

export const PostTag = ({ tag }: { tag: string }) => {
  return (
    <Link
      to={"/posts"}
      search={{
        tag,
      }}
      className="rounded bg-gray-200 px-2 py-1 text-sm"
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
