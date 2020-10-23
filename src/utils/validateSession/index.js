import { USERSESSION } from '@Constants';

const validateSession = () => !!sessionStorage.getItem(USERSESSION);

export default validateSession;
