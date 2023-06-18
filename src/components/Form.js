import { useState } from "react";

import styles from "./Form.module.css";

const Form = () => {
  const [isFocusTop, setFocusTop] = useState(false);
  const [isFocusMiddle, setFocusMiddle] = useState(false);
  const [isFocusBottom, setFocusBottom] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.form__heading}>
            <h1>New React Form</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vestibulum ante et blandit lacinia.
            </p>
          </div>
          <div className={styles.form__block}>
            <div className={styles.form__group}>
              <div>
                <input
                  id="name"
                  className={
                    isFocusTop
                      ? `${styles.name_notFocus} ${styles.name}`
                      : styles.name
                  }
                  name="name"
                  type="text"
                  autoFocus
                  placeholder="Name"
                  maxLength={50}
                />
              </div>
              <div>
                <input
                  id="surname"
                  className={styles.surname}
                  name="surname"
                  type="text"
                  maxLength={50}
                  placeholder="Surname"
                  onFocus={() => setFocusTop(true)}
                  onBlur={() => setFocusTop(false)}
                />
              </div>
            </div>
            <div className={styles.form__group}>
              <div>
                <input
                  id="email"
                  type="email"
                  className={
                    isFocusMiddle
                      ? `${styles.email} ${styles.email_notFocus}`
                      : styles.email
                  }
                  name="email"
                />
              </div>
              <div>
                <input
                  id="confirm-email"
                  type="email"
                  className={styles.confirm}
                  name="confirm"
                  onFocus={() => setFocusMiddle(true)}
                  onBlur={() => setFocusMiddle(false)}
                />
              </div>
            </div>
            <div className={styles.form__group}>
              <div>
                <input
                  id="phone"
                  type="text"
                  className={
                    isFocusBottom
                      ? `${styles.phone} ${styles.phone_notFocus}`
                      : styles.phone
                  }
                  name="phone"
                />
              </div>
              <div>
                <input
                  id="country"
                  type="text"
                  className={styles.country}
                  name="country"
                  onFocus={() => setFocusBottom(true)}
                  onBlur={() => setFocusBottom(false)}
                />
              </div>
            </div>
          </div>
          <div className={styles.form__bottom}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nec pharetra purus, eget pharetra ipsum. Cras et tellus est.
              Vestibulum at scelerisque mauris, et auctor augue. Morbi non
              pellentesque dolor, a suscipit mauris. Phasellus vel est ut purus
              viverra eleifend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
