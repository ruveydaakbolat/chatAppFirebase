const RoomPage = ({setIsAuth, setRoom}) => {
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const roomName = e.target[0].value;

        setRoom(roomName);
    }
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>
      <input type="text" />
      <button type="submit">Odaya Gir</button>
      <button type="button" onClick={logout}>Çıkış Yap</button>
    </form>
  );
};

export default RoomPage;
