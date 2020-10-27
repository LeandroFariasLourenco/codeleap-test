import client from '@Actions/requests/client';
import axios from 'axios';

/**
 * @param {String} params
 * @description Returns all careers
 * @example const careers = getCareers();
 * @returns {Object}
 */
export const getCareers = (pathName = '') => (!pathName
  ? client.get('/careers/')
  : axios.get(pathName))
  .then((response) => response)
  .catch((error) => error);

/**
 * @param {Object} post
 * @description Creates the post
 * @example postCareer({
 *  userName: string,
 *  title: string,
 *  content: string
 * })
 * @returns {Response}
 */
export const postCareer = async (post) => (
  client.post('/careers/', post)
    .then((response) => response)
    .catch((error) => error)
);

/**
 * @param {Number} postId must be an integer
 * @param {Object} post
 * @description Specified post update
 * @example patchCareer(1, {
 *  title: string,
 *  content: string
 * })
 * @return {Response}
 */
export const patchCareer = async (postId, post) => (
  client.patch(`/careers/${postId}/`, post)
    .then((response) => response)
    .catch((error) => error)
);

/**
 * @param {Number} postId must be an integer
 * @description Will delete the specified post
 * @example deleteCareer(1)
 * @returns {Response}
 */
export const deleteCareer = async (postId) => (
  client.delete(`/careers/${postId}/`)
    .then((response) => response)
    .catch((error) => error)
);
