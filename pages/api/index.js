
import {getUsers} from '../../util/api';

export default async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
};