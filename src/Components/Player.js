

function Player({ playerId }) {
    /*const handleChange = e => {
      changePlayerId(e.target.value);
    };*/
   /* useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);*/
    return (
      <div>
       
        <label>ChildComponent - {playerId}</label>
      </div>
    );
  }

  
export default Player;