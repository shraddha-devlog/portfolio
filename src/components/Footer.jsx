function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p className="mono">© {year} Shraddha Sharma · Built with React &amp; Vite</p>
    </footer>
  )
}

export default Footer
