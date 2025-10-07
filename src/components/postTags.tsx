import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

export const PostTag = ({
  tag,
  viewTransition,
  closeEnabled,
}: {
  tag: string;
  viewTransition: boolean;
  closeEnabled: boolean;
}) => {
  const search = new URLSearchParams(window.location.search);
  const isEnabled = search.get("tag") === tag;
  return (
    <Link
      to={"/posts"}
      search={{
        tag: closeEnabled && isEnabled ? undefined : tag,
      }}
      className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700 flex items-center gap-2"
      style={
        viewTransition
          ? {
              viewTransitionName: tag,
            }
          : {}
      }
      viewTransition
    >
      {tag}
      {closeEnabled && isEnabled ? <X size={12} /> : null}
    </Link>
  );
};

export const PostTags = ({
  tags,
  viewTransition,
}: {
  tags: string[];
  viewTransition: boolean;
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((x) => (
        <PostTag
          tag={x}
          key={x}
          viewTransition={viewTransition}
          closeEnabled={false}
        />
      ))}
    </div>
  );
};
