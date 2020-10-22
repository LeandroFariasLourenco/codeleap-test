import { USERSESSION } from '../../constants';

const validateSession = () => !!sessionStorage.getItem(USERSESSION);

export default validateSession;
