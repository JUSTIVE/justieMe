import { PostTag, PostTags } from "@/components/postTags";
import type { PostMetaData } from "@/data/postMetaData";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { type ReactNode, Suspense } from "react";
import { match, P } from "ts-pattern";
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

const PostItem = ({ title, date, tags, link }: PostMetaData) => {
  return (
    <div className="flex flex-col">
      <div style={{ viewTransitionName: link }} className="level-5">
        {title}
      </div>
      <PostTags tags={tags} viewTransition={false} />
      <div className="text-sm text-gray-500 flex flex-row items-center gap-1">
        <Clock className="size-3" />
        {date}
      </div>
    </div>
  );
};

const Title = () => {
  const { tag, keyword } = Route.useSearch();

  return match([tag, keyword])
    .with([P.string, P.intersection(P.string, P.not(""))], ([tag, keyword]) => (
      <div className="flex flex-row items-center gap-2 h-7">
        <span className="font-semibold accent">{`"${keyword}"`}</span>
        <PostTag tag={tag} viewTransition />
        검색 결과
      </div>
    ))
    .with([P.string, P._], ([tag]) => (
      <div className="flex flex-row items-center gap-2 h-7">
        <PostTag tag={tag} viewTransition />
        검색 결과
      </div>
    ))
    .with([P._, P.intersection(P.string, P.not(""))], ([_, keyword]) => (
      <div className="flex flex-row items-center gap-2 h-7">
        <span className="font-semibold accent">{`"${keyword}"`}</span>검색 결과
      </div>
    ))
    .otherwise(() => <div className="font-bold h-7">Posts</div>);
};

const PostLists = () => {
  const { tag, keyword } = Route.useSearch();
  const router = useRouter();
  const filteredPosts = posts.filter((x) => {
    if (tag) {
      return x.metaData.tags.includes(tag);
    }
    if (keyword) {
      return x.metaData.title.includes(keyword);
    }
    return true;
  }).toSorted((a, b) => Number(new Date(b.metaData.date)) - Number(new Date(a.metaData.date)));

  return (
    <div className="">
      <div className="mb-8 flex flex-col gap-2">
        <Title />

        <input
          type="text"
          className="border rounded border-gray-100 focus:outline-none px-2 py-1 dark:bg-gray-700 dark:border-gray-600"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              router.navigate({
                pathname: "/posts/$postname",
                search: {
                  keyword: e.target.value,
                },
              });
            }
          }}
        />
      </div>

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
