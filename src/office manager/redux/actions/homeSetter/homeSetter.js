import { DEPARTMENT, DEPARTMENT_HEAD, EMPLOYEE } from '../../actionMethod';

export const settingHomeSection = (setter) => {
    if (setter === 'Department') {
        return {
            type: DEPARTMENT,
            payload: setter
        };
    } else if (setter === 'Department Heads') {
        return {
            type: DEPARTMENT_HEAD,
            payload: setter
        };
    } else if (setter === 'Employees') {
        return {
            type: EMPLOYEE,
            payload: setter
        };
    }
};

