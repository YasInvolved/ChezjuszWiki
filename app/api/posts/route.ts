import { NextRequest } from "next/server";
import Database, { PostObject } from "@/database/database";

interface PostBody {
    name: string,
    markup: string
}

export async function GET(request: NextRequest) {
    const searchparams = request.nextUrl.searchParams;
    const postId = searchparams.get('id')
    const post = await Database.getPost(postId as string) as unknown as PostObject;
    return new Response(`${post.createdAt}`, {status: 200})
}

export async function POST(request: NextRequest) {
    const body = await request.text()
    const searchparams = new URLSearchParams(body);
    const title: any = searchparams.get('title')
    const markup: any = searchparams.get('markup')
    Database.addPost(title, markup)
    return new Response('Post added successfully!', {status: 200});
}