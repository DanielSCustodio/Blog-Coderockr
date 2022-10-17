import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import styles from './styles.module.sass';

Modal.setAppElement('#root');

export default function Header() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <header className={styles.container}>
      <div>
        <Link href="/">
          <a>
            <p>Rockr Blog</p>
            <img src="images/logo.svg" alt="Logo Rockr Blog" />
          </a>
        </Link>
      </div>
      <div>
        <nav>
          <Link href="/">
            <a>Posts</a>
          </Link>
          <button onClick={() => setIsOpen(true)}>Contact</button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={styles.modal}
          >
            <section>
              <div>
                <button onClick={closeModal}>x</button>
              </div>
              <section>
                <h2>Contact</h2>
                <form
                  action="https://formsquash.io/f/tdoUhsw05p5DZQxr9syO"
                  method="POST"
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Fill your full name"
                  />
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Fill a valid  e-mail"
                    required
                  />
                  <label htmlFor="name" placeholder="Fill your phone">
                    Phone
                  </label>
                  <input
                    type="string"
                    name="phone"
                    id="subject"
                    placeholder="Fill your phone"
                    required
                  />
                  <label htmlFor="message">Post</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Hello..."
                  />

                  <button type="submit"> » Submit</button>
                </form>
              </section>
            </section>
          </Modal>
        </nav>
      </div>
    </header>
  );
}
