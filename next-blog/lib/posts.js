import { readFile } from 'fs/promises';
import marked from 'marked';


export async function getPost(slug) {
    const source = await readFile(`contents/posts/${slug}.md`, 'utf');
    const html = marked(source)
    return {
        body: html,
    }
  }