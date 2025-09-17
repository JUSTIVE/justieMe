import { PostTags } from "@/components/postTags";
import type { PostMetaData } from "@/data/postMetaData";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { type ReactNode, Suspense } from "react";
// import { posts } from "@/data/posts";
import { z } from "zod";

const postSearchSchema = z.object({
  tag: z.string().optional(),
  keyword: z.string().optional(),
});

type PostSearch = z.infer<typeof postSearchSchema>;

export const Route = createFileRoute("/posts/_posts/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): PostSearch => {
    return postSearchSchema.parse(search);
  },
});

export const posts = await Promise.all(
  Object.values(import.meta.glob("../../posts/*.mdx"))?.map(
    async (x) =>
      (await x()) as unknown as ReactNode & { metaData: PostMetaData },
  ) ?? [],
);

// const tags = posts.flatMap((x) => x.metaData.tags);

const PostItem = ({ title, date, tags }: PostMetaData) => {
  return (
    <div className="flex flex-col">
      <div style={{ viewTransitionName: title }}>{title}</div>
      <PostTags tags={tags} />
      <div className="text-sm text-gray-500 flex flex-row items-center gap-1">
        <Clock className="size-3" />
        {date}
      </div>
    </div>
  );
};

const PostLists = () => {
  const { tag, keyword } = Route.useSearch();
  const filteredPosts = posts.filter((x) => {
    if (tag) {
      return x.metaData.tags.includes(tag);
    }
    if (keyword) {
      return x.metaData.title.includes(keyword);
    }
    return true;
  });

  return (
    <div className="">
      <div className="font-bold">Posts</div>

      <input />

      <div className="flex flex-col gap-4">
        {filteredPosts.map((x) => (
          <Link
            to={"/posts/$postname"}
            key={x.metaData.title}
            params={{
              postname: x.metaData.link,
            }}
            viewTransition
          >
            <PostItem {...x.metaData} />
          </Link>
        ))}
      </div>
    </div>
  );
};
function RouteComponent() {
  return (
    <Suspense>
      <PostLists />
    </Suspense>
  );
}
