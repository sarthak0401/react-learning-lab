export const LearningProps = ({ prop, isMember, hobbies, hobbyHandler }) => {
  return (
    <>
      <div>
        <h2>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => {
            return (
              <li
                style={{ listStyle: "none" }}
                key={index}
                onClick={() => hobbyHandler(hobby)}
              >
                {hobby}
              </li>
            );
          })}
        </ul>

        {prop[0].Name}
        {isMember ? <h5> True</h5> : <h5> False</h5>}
      </div>
    </>
  );
};
