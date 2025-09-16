import type { PostMetaData } from "@/data/postMetaData";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { type ReactNode, Suspense } from "react";

export const Route = createFileRoute("/posts/_posts/")({
  component: RouteComponent,
});

const posts = await Promise.all(
  Object.values(import.meta.glob("../../posts/*.mdx"))?.map(
    async (x) =>
      (await x()) as unknown as ReactNode & { metaData: PostMetaData },
  ) ?? [],
);

const PostItem = ({ title, date }: PostMetaData) => {
  return (
    <div className="flex flex-col">
      <div>{title}</div>
      <div className="text-sm text-gray-500 flex flex-row items-center gap-1">
        <Clock className="size-3" />
        {date}
      </div>
    </div>
  );
};

const PostLists = () => {
  return (
    <div className="">
      <div className="font-bold">Posts</div>
      <div className="flex flex-col gap-4">
        {posts.map((x) => (
          <Link
            to={"/posts/$postname"}
            key={x.metaData.title}
            params={{
              postname: x.metaData.link,
            }}
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
