import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserName } from '../../actions/changeNameActions';
function UserForm({ onCancelClick }) {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userName = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChangeUsernameSuccess = () => {
    navigate('/profile');
  };
  const handleChangeUsernameInClick = async () => {
    const username = document.getElementById('userName').value;

    dispatch(fetchUserName(username,handleChangeUsernameSuccess))
  }

  
  return (
    <form className="userform">
      <h2 className='userform_title'>Edit user info</h2>
      <div className='userform_placement'>
        <label className='userform_text' htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          placeholder={userName}
          className='userform_placeholder'
          autoComplete="username"
        />
      </div>
      <div className='userform_placement'>
        <label className='userform_text' htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          placeholder={firstName}
          className='userform_placeholder disabled-placeholder'
          disabled
        />
      </div>
      <div className='userform_placement'>
        <label className='userform_text' htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          placeholder={lastName}
          className='userform_placeholder disabled-placeholder'
          disabled
        />
      </div>
      <div className='userform_style'>
        <button className='userform_button' type="button" onClick={handleChangeUsernameInClick}>Save</button>
        <button className='userform_button' type="button" onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default UserForm;