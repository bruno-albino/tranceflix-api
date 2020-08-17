import { v4 } from 'uuid'

export class Video {

    public readonly id?: string;
    
    public path: string;
    public name: string;

    constructor(props: Omit<Video, 'id'>, id?: string) {
        this.path = props.path
        this.name = props.name

        if(!id) {
            this.id = v4()
        }
    }
}