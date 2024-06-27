export function useLastPost(
  type: "Note" | "Production" | "Life",
  posts: any[]
) {
  const lastPost = posts
    .filter((post) => post.categories === type)
    .sort((a, b) => b.date.time - a.date.time)[0];

  return lastPost;
}
