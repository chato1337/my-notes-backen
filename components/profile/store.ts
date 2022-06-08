
import { model } from './model';
import { Profile, UpdateProfile } from '../../models/profile.model';

export async function get(id: string) {
    const filter = { user_id: id }
    const profile: Profile[] = await model.find(filter)

    return profile ? profile[0] : []
}

export async function create(reqProfile: Profile) {
    const isExist = await model.find({ user_id: reqProfile.user_id })
    if (isExist) {
        return(`the user has already profile: ${isExist.user_id}` )
    }
    const newProfile: Profile = {
        user_id: reqProfile.user_id,
        picture_url: reqProfile.picture_url,
        score: reqProfile.score,
        phone: reqProfile.phone,
        email: reqProfile.email
    }

    const createProfile = new model(newProfile)
    createProfile.save()
    return createProfile
}

export async function update(reqData:any) {
    const id = { user_id: reqData._id }

    const newProfile: UpdateProfile = {
        user_id: reqData.user_id,
        picture_url: reqData.picture_url,
        score: reqData.score,
        phone: reqData.phone,
        email: reqData.email
    }

    model.updateOne(id, newProfile)

    return newProfile
}