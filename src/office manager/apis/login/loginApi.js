import { POST } from "../../methods/post";
import { baseUrl } from '../../constant';
export const loginApi = async (data) => {
    const loginUrl = 'login';
    const url = `${baseUrl}/${loginUrl}`;
    const result = await POST(url, data);
    console.log(result, "on post apisss")
    return result.data
}
