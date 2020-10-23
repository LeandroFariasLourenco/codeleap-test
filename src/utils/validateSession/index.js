import { STORAGE_KEYS } from '@Constants';

const validateSession = () => !!sessionStorage.getItem(STORAGE_KEYS.userSession);

export default validateSession;
