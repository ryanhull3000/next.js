import { getUser } from "../../util/api";

export default async (req, res) => {
    const { query } = req;
    const id = query.slug.match(/\d+/)[0];
    try {
        const user = await getUser(id);
        res.json(user);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
};