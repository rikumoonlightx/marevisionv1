"use client";

import { useEffect } from "react";
import Image from "next/image";
import "../styles.css";

export default function Home() {
  useEffect(() => {
    const openModal = (title: string) => {
      const modalTitle = document.getElementById("modalTitle");
      const modal = document.getElementById("modal");
      if (modalTitle && modal) {
        modalTitle.textContent = title;
        modal.style.display = "flex";
      }
    };

    const showSection = (id: string) => {
      document.querySelectorAll("main > section").forEach((sec) => {
        (sec as HTMLElement).style.display = "none";
      });
      const section = document.getElementById(id);
      if (section) section.style.display = "block";
    };

    (window as any).openModal = openModal;
    (window as any).showSection = showSection;
    showSection("explore");
  }, []);

  return (
    <>
      <header>
        <h1>MAREVISION</h1>
        <p>FFXIV Style Sharing Platform</p>
      </header>

      <nav>
        <button onClick={() => (window as any).showSection("explore")}>Explore</button>
        <button onClick={() => (window as any).showSection("upload")}>Upload</button>
        <button onClick={() => (window as any).showSection("admin")}>Admin Panel</button>
        <button onClick={() => (window as any).showSection("login")}>Login</button>
        <button onClick={() => (window as any).showSection("register")}>Register</button>
      </nav>

      <main>
        <section id="explore">
          <h2>Explore Styles</h2>
          <input type="text" placeholder="Search styles..." />
          <div className="filters">
            <label><input type="checkbox" /> NSFW</label>
            <label><input type="checkbox" /> Modded</label>
          </div>
          <div className="style-list">
            <div className="style-card" onClick={() => (window as any).openModal("Sample Style") }>
              <Image src="/preview.png" alt="Preview" width={200} height={120} />
              <p>Sample Style</p>
            </div>
          </div>
        </section>

        <section id="upload">
          <h2>Upload Your Style</h2>
          <form>
            <input type="text" placeholder="Style Title" />
            <input type="text" placeholder="Tags (comma separated)" />
            <input type="text" placeholder="Mare link" />
            <input type="file" accept=".ttmp2" />
            <label><input type="checkbox" /> NSFW</label>
            <label><input type="checkbox" /> Modded</label>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section id="admin">
          <h2>Admin Panel</h2>
          <p>Reported Styles:</p>
          <ul>
            <li>Style A - <button>Delete</button> <button>Ignore</button></li>
          </ul>
          <p>Manage Users:</p>
          <ul>
            <li>UserX - <button>Ban</button></li>
          </ul>
        </section>

        <section id="login">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <button onClick={() => (window as any).showSection("reset")}>Forgot Password?</button>
        </section>

        <section id="register">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
        </section>

        <section id="reset">
          <h2>Reset Password</h2>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Send Reset Link</button>
          </form>
        </section>
      </main>

      <div id="modal" className="modal" onClick={() => {
        const modal = document.getElementById("modal");
        if (modal) modal.style.display = "none";
      }}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={() => {
            const modal = document.getElementById("modal");
            if (modal) modal.style.display = "none";
          }}>
            &times;
          </span>
          <h3 id="modalTitle">Style Title</h3>
          <p>Tags: casual, modded</p>
          <p>Mare Link: <code>mare/some-link</code></p>
          <button className="btn">Download .ttmp2</button>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 MAREVISION | FFXIV Style Platform by Riku & Mavie 💜</p>
      </footer>
    </>
  );
}
