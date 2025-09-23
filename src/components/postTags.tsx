import { Link } from "@tanstack/react-router";

export const PostTag = ({ tag, viewTransition }: { tag: string, viewTransition: boolean }) => {
  return (
    <Link
      to={"/posts"}
      search={{
        tag,
      }}
      className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700"
      style={
        viewTransition ? {
          viewTransitionName: tag
        } : {

        }}
      viewTransition
    >
      {tag}
    </Link>
  );
};

export const PostTags = ({ tags, viewTransition }: { tags: string[], viewTransition: boolean }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((x) => (
        <PostTag tag={x} key={x} viewTransition={viewTransition} />
      ))}
    </div>
  );
};
