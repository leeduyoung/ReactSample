export interface IVideo
{
    _id: string;
    writer?: IUser;
    title: string;
    description: string;
    privacy: 0 | 1; // 0: private, 1: public
    filePath: string;

    /**
     * 0: Film & Animation
     * 1: Autos & Vehicles
     * 2: Music
     * 3: Pets & Animals
     */
    category: 0 | 1 | 2 | 3; 
    duration: number;
    thumbnail: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser
{
    _id: string;
    email: string;
    password?: string;
    name: string;
    image: string;
}