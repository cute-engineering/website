/* src/routes/blog/posts.json.js */

import type { RequestHandler } from '@sveltejs/kit'



const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata }: any = await resolver()
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}
import { json } from '@sveltejs/kit'

export const get = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date as string) - new Date(a.meta.date as string)
  })

  return {
    body: json(sortedPosts)
  }
}
