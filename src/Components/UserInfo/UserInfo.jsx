import PropTypes from "prop-types";

/**
 * @description Creat card of user informations
 * @param {string} name
 * @param {int} value
 * @param {string} measure
 * @param {string} svg
 * @param {string} extraClass
 * @returns a card with user informations
 */
function UserInfo({ name, value, measure, svg, extraClass }) {
  return (
    <div className='userInfo'>
      <div
        className={
          extraClass ? "userInfo__icon " + extraClass : "userInfo__icon"
        }
      >
        <img alt={name} src={svg} />
      </div>
      <div className='userInfo__data'>
        <p className='userInfo__data--value'>
          {value}
          {measure}
        </p>
        <p className='userInfo__data--name'>{name}</p>
      </div>
    </div>
  );
}
export default UserInfo;

UserInfo.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  measure: PropTypes.string,
  svg: PropTypes.string,
  extraClass: PropTypes.string,
};
