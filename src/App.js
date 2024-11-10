const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "img/p.png",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "img/b.png",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "img/c.png",
    balance: 0,
  },
];
function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      <ul class="">
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3> {friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$.
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even.</p>}
      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input type="text" />
      <label>Image Url</label>
      <input type="text" />
      <Button>Select</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with</h2>

      <label>Bill value</label>
      <input type="text"></input>

      <label>Your expense</label>
      <input type="text"></input>

      <label>X's expence</label>
      <input type="text" disabled></input>

      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="usfriender">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
