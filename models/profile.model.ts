
export interface Profile {
    user_id: string,
    picture_url: string,
    score: string,
    phone: string,
    email: string
}

export interface UpdateProfile extends Omit<Profile, '_id'> {}