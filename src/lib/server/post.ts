

type GlobEntry = {
    metadata: Post;
    default: unknown;
};

export interface Post {
    title: string;
    description: string;
    date: string;
    cover: string;
    published: boolean;
}

export const posts = Object.entries(
    import.meta.glob<GlobEntry>('/src/routes/blog/post/**/*.mdx', { eager: true })
)
.map(([filepath, globEntry]) => {
    return {
    ...globEntry.metadata,
    slug: filepath.split('/').slice(-2, -1).join("/").replace(/\.mdx$/, ''),
    };
})
.filter((post) => post.published)
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());