import { bundleMDX } from "mdx-bundler";
import fs from "fs";
import path from "path";

interface BlogPost {
  slug: string;
  title: string; // 누락되지 않도록 주의!
  code: string;
  frontmatter: Record<string, any>;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const postsPath = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsPath);

  return Promise.all(
    filenames
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const fullPath = path.join(postsPath, file);
        const source = fs.readFileSync(fullPath, "utf-8");
        const slug = file.replace(/\.mdx$/, "");

        const { code, frontmatter } = await bundleMDX({
          source,
          // 필요한 loader나 remark, rehype 플러그인 설정 가능
        });

        // 여기서 frontmatter.title을 따로 꺼내서 title 필드에 넣어줍니다.
        return {
          slug,
          title: frontmatter.title ?? "Untitled", // frontmatter에 title이 없을 수도 있으니 기본값 설정
          code,
          frontmatter,
        };
      }),
  );
}
