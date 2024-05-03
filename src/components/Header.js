/**
 * The Header function returns a header element with an image and a heading for "The React Quiz".
 * @returns The Header component is being returned, which consists of a header element with an image
 * displaying the React logo and a heading "The React Quiz".
 */
function Header() {
  return (
    <header className="app-header">
      <img src="logo512.png" alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
