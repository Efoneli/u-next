import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import marked from 'marked';


export async function getPost(slug) {
    const source = await readFile(`contents/posts/${slug}.md`, 'utf');
    const { data: {date, title}, content } = matter(source);
    const body = marked(content)
    return {date, title, body } ;
    }
  