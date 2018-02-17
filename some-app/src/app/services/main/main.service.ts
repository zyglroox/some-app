import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()
export class MainService {
    posts = [
        {
            id: 'baee8fef-3c43-44af-cf46-77b80ce23e60',
            name: 'Some other funny post',
            text: 'some boyan but maybe ol\' good stuff',
            rating: 0
        },
        {
            id: '3f69e1e3-e8d1-a436-0d57-b01246cf0a27',
            name: 'Funny post',
            text: 'some meme post everyone\'s laughing',
            rating: 92
        },
        {
            id: '00566d93-c29e-4986-d0bf-c4a96432aeb7',
            name: 'Serious post',
            text: 'ples help very interesting situation',
            rating: 204
        }
    ];

    constructor() {
    }

    getPosts() {
        return this.posts;
    }

    getPost(id) {
        return this.posts.find(p => p.id === id);
    }

    upVote(id) {
        this.getPost(id).rating++;
    }

    downVote(id) {
        this.getPost(id).rating--;
    }

    createPost(name, text) {
        this.posts.push({id: UUID.UUID(), name: name, text: text, rating: 0});
    }

    removePost(id) {
        const index = this.posts.indexOf(this.getPost(id));
        if (index !== -1) {
            this.posts.splice(index, 1);
        }
    }
}
