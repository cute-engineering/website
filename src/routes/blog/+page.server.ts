
import {posts} from "$lib/server/post";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {posts};
}
