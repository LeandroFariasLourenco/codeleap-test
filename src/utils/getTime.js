/**
 * @param {Date} currentTime
 * @param {Date} postTime
 * @description
 *  Will return an object containing the post time and type depending on hours/min/mon/year
 * @returns {Object}
 */
export const getTime = ({
  currentTime = new Date(),
  postTime,
}) => {
  const post = {
    hours: postTime.getHours(),
    minutes: postTime.getMinutes(),
    day: postTime.getDate(),
    month: postTime.getMonth() + 1,
    year: postTime.getFullYear(),
  };

  const current = {
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
    day: currentTime.getDate(),
    month: currentTime.getMonth() + 1,
    year: postTime.getFullYear(),
  };

  const pluralize = (string, integer) => (integer > 1 ? `${string}s` : string);
  let diff = Number;

  if (current.year > post.year) {
    diff = current.year - post.year;

    return {
      type: pluralize('year', diff),
      diff,
    };
  }
  if (current.month > post.month) {
    diff = current.month - post.month;

    return {
      type: pluralize('month', diff),
      diff,
    };
  }
  if (current.hours > post.hours) {
    diff = current.hours - post.hours;

    return {
      type: pluralize('hour', diff),
      diff,
    };
  }
  if (current.minutes === post.minutes) {
    return {
      type: 'Just now',
      diff: 0,
    };
  }

  diff = current.minutes - post.minutes;
  return {
    type: pluralize('minute', diff),
    diff,
  };
};

export default getTime;
