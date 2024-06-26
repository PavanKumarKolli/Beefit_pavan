import "./Contact.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiTwitter } from "react-icons/fi";

export const Contact = () => {
  return (
    <div className="footer">
      <div className="left__footer">
        <div className="footer__logo">
          <img src="images/logz.png" alt="logo-img" />
          <span>
            CredEx is an online aggregator of financial products and services.
            We believe that unlike the common perception, every customer need is
            different and every customer has a different priority. So a one size
            fits all approach is seldom good.
          </span>
        </div>
        <div className="right__footer">
          <div>
            <h3>Services</h3>
            <span>Home Loan</span>
            <span>Personal Loan</span>
            <span>Business Loan</span>
            <span>Educational Loan</span>
            <span>Card Loan</span>
          </div>
          <div>
            <h3>Other Services</h3>
            <span>Balance Transfer</span>
            <span>EMI Calculation</span>
            <span>Compare Home Loan</span>
            <span>Compare Business Loan</span>
            <span>Compare Interest Rate</span>
          </div>

          <div>
            <h3>Address</h3>
            <h5>Head Office:</h5>
            <span>
              # 7-1-621/259, 6th Floor,
              <br /> Sahithi Arcade, <br /> Beside S.R.Nagar Traffic Police
              Station, <br /> Hyderabad- 500038
            </span>
          </div>
          {/* <div>
            <h3>Services</h3>
            <span>Home Loan</span>
            <span>Business Loan</span>
            <span>Educational Loan</span>
            <span>Card Loan</span>
          </div> */}
        </div>
      </div>
      <div className="right-side-footer">
        <h2>Touch with Me</h2>
        <div className="footer-form">
          <div>
            <input type="text" placeholder="Your Name" />
            <MdDriveFileRenameOutline size={25} />
          </div>
          <div>
            <input type="text" placeholder="Phone" />
            <AiOutlinePhone size={25} />
          </div>
          {/* <div>
            <input type="text" />
            <MdDriveFileRenameOutline size={25} />
          </div> */}
          <div className="touch__me_btn">
            <button>Touch with Me</button>
          </div>
        </div>
        <div className="social__icons">
          <FiFacebook size={25} />
          <BsInstagram size={25} />
          <FiTwitter size={25} />
        </div>
        <img
          className="coin__footer__img"
          src="images/coin-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};
