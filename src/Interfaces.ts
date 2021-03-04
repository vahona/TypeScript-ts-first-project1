

export interface Person {
    name: string;
    age?: string; //? Optional param
}

export enum Type {
    Video, //0
    BlogPost, //1
    Quiz //2
}


// export default Job


export enum Type2 {
    Video = 'VIDEO',
    BlogPost = 'BLOG_POST',
    Quiz = 'QUIZ'
}
