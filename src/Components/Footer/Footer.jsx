import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div class="text">
        <span>
          Mashrab <Link to="/">Yo'ldashov</Link> | &#169; Never Stop Learning
        </span>
      </div>
    </footer>
  );
}
