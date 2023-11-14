function UserSurname({ name, age }) {
  let surname = "gurbanzada";

  return (
    <div>
      UserSurname
      <h4>
        {surname} {name}
      </h4>
      <h5>{age}</h5>
    </div>
  );
}

export default UserSurname;
