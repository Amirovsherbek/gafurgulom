function Layout({children}) {
  return (
    <div>
      <div>
        <header>navbar</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </div>
  );
}
export default Layout;
