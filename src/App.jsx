/* eslint-disable react/prop-types */
import * as React from "react";
function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-200">States</h1>
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
        {/* <SampleComponentString /> */}
        <SampleComponentObj />
        {/* <FilterWrapper /> */}
      </div>
    </div>
  );
}

function SampleComponentString() {
  const [appliedUser, setAppliedUser] = React.useState("John");

  const handleChangeUser = (newUser) => {
    console.log("Are strings same", appliedUser === newUser);
    setAppliedUser(newUser);
  };

  console.log("string component rerender");

  return (
    <div className="flex flex-col gap-2  border border-green-200 border-dashed p-4">
      <h2 className="text-lg font-bold text-center">String State</h2>
      <UserDisplayString user={appliedUser} />
      <SetUserButtonString handleChangeUser={handleChangeUser} />
    </div>
  );
}

function UserDisplayString({ user }) {
  return <div className="p-2">User: {user}</div>;
}

function SetUserButtonString({ handleChangeUser }) {
  const [user, setUser] = React.useState("");
  return (
    <div className="flex flex-col gap-2 p-2">
      <label htmlFor="userNameString">Update user to: </label>
      <input
        id="userNameString"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="text-black"
      />
      <button
        className="bg-green-400 text-black hover:bg-green-500"
        onClick={() => handleChangeUser(user)}
      >
        Change User
      </button>
    </div>
  );
}

function SampleComponentObj() {
  const [appliedUser, setAppliedUser] = React.useState({ name: "John" });

  const handleChangeUser = (newUser) => {
    console.log("Are objects same", Object.is(appliedUser, newUser));
    setAppliedUser(newUser);
  };

  React.useEffect(() => {
    console.log("object component rerender");
  });

  return (
    <div className="flex flex-col gap-2  border border-green-200 border-dashed p-4">
      <h2 className="text-lg font-bold text-center">Object State</h2>
      <UserDisplay user={appliedUser} />
      <SetUserButton handleChangeUser={handleChangeUser} />
    </div>
  );
}

function UserDisplay({ user }) {
  return <div className="p-2">User: {user.name}</div>;
}

function SetUserButton({ handleChangeUser }) {
  const [user, setUser] = React.useState({ name: "" });
  return (
    <div className="flex flex-col gap-2 p-2">
      <label htmlFor="userNameObj">Update user to: </label>
      <input
        id="userNameObj"
        type="text"
        value={user.name}
        onChange={(e) => setUser({ name: e.target.value })}
        className="text-black"
      />
      <button
        className="bg-green-400 text-black hover:bg-green-500"
        onClick={() => handleChangeUser(user)}
      >
        Change User
      </button>
    </div>
  );
}

function FilterWrapper() {
  const [appliedFilter, setAppliedFilter] = React.useState({});

  return (
    <div className="flex flex-col gap-2 border border-green-200 border-dashed p-4">
      <FilterConsumer appliedFilter={appliedFilter} />
      <Filter setAppliedFilter={setAppliedFilter} />
    </div>
  );
}

function FilterConsumer({ appliedFilter }) {
  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`p-2 text-black border border-yellow-200 border-dashed`}>
      <p className={randomColor}>
        Applied Filter: {appliedFilter.country} - {appliedFilter.state}
      </p>
    </div>
  );
}

function Filter({ setAppliedFilter }) {
  const [filter, setFilter] = React.useState({
    country: "",
    state: "",
  });

  const handleApply = () => {
    setAppliedFilter(filter);
  };

  React.useEffect(() => {
    /**
     * Assume there is a BE call to fetch the initial Filter
     */
    setTimeout(() => {
      const updatedFilter = {
        country: "India",
        state: "Tamil Nadu",
      };
      setFilter(updatedFilter);
      setAppliedFilter(updatedFilter);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-2 p-2 border border-yellow-200 border-dashed">
      <label htmlFor="country">Country: </label>
      <input
        id="country"
        type="text"
        value={filter.country}
        onChange={(e) => setFilter({ ...filter, country: e.target.value })}
        className="text-black"
      />
      <label htmlFor="state">State: </label>
      <input
        id="state"
        type="text"
        value={filter.state}
        onChange={(e) => setFilter({ ...filter, state: e.target.value })}
        className="text-black"
      />
      <button
        className="bg-gray-400 text-black hover:bg-gray-500"
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
}

export default App;
