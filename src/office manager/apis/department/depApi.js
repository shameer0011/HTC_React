import { GET } from "../../methods/get";
import { POSTwithToken } from '../../methods/post';

export const departmentGetApi = async () => {
    const deptUrl = 'backend/departments';
    console.log(deptUrl, "deptUrl")
    const url = `/${deptUrl}`;
    const result = await GET(url);
    return result.data
}

//https://officemanager.altd.in/api/backend/departments/store

export const departmentCreateApi = async (data) => {
    const deptUrl = 'backend/departments/store';
    const url = `/${deptUrl}`;
    const result = await POSTwithToken(url, data);
    return result.data
}

export const getDepartmentEditeApi = async (id) => {
    if (typeof (id) === 'number') {
          console.log("in api functio")
        // console.log(id, "idssss from edit api calls from department ApI")
        // debugger
        const deptUrl = `backend/departments/edit/${id}`;
        const url = `/${deptUrl}`;
        const result = await GET(url);
        // console.log(result.data, "result.data edit department")

        return result.data
    }
}

