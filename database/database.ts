import { randomUUID } from "crypto";
import Gun, { IGunInstance } from "gun";

export interface PostObject {
    postId: string,
    createdAt: string,
    lastUpdate: string,
    title: string,
    text: string,
};

class GunDatabase {
    gun = Gun({file: 'database/data', localStorage: false, radisk: true});
    posts = this.gun.get('posts')

    async addPost(title: string, markup: string) {
        const object: PostObject = {
            postId: randomUUID().toString(),
            createdAt: new Date().toUTCString(),
            lastUpdate: new Date().toUTCString(),
            title: title,
            text: markup
        }
        var post = this.gun.get(object.postId).put(object)
        this.posts.set(post).once((post) => console.log(`Post ${post.title} has been created and saved!`))
    }

    async getAllPosts(): Promise<Array<any>> {
        const posts: PostObject[] = []
        this.posts.map((post) => posts.push(post as PostObject))
        return posts
    }

    async getPost(postId: string) {
        var post = null;
        this.posts.map(data => {
            if (data.postId === postId) post = data;
        });
        return post
    }
}

const Database = new GunDatabase()

export default Database;