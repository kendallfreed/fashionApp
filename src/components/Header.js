import Logo from "../assets/rabbit.png"
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <a href="/">Home</a>
      <img className = "logo" src = {Logo} alt = "" />
    </header>
  )
}