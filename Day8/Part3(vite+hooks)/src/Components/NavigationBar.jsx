const NavigationBar = () => {
  return (
    <nav>
      <ol
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>Home</li>
        <li>Search</li>
        <li>Help</li>
      </ol>
      <ul
      style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <li>
          <a href="https://www.google.com">Google</a>
        </li>
        <li>
          <a href="https://www.facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com">Twitter</a>
        </li>
      </ul>
    </nav>
  );
};

export { NavigationBar };
