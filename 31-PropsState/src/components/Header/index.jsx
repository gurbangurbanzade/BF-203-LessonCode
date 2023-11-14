import UserSurname from "../UserSurname";

function index({ name }) {
  let age = 30;
  // func(30);

  return (
    <div>
      This is header
      <h2>{name}</h2>
      <h3>{age}</h3>
      ------------------
      <UserSurname name={name} age={age} />
    </div>
  );
}

export default index;
