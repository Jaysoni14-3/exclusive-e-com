import sendIcon from "../assets/icon-send.png";
import qrCode from "../assets/qrcode.png";
import appStore from "../assets/download-appstore.png";
import playStore from "../assets/download-playstore.png";

const Footer = () => {
  return (
    <footer className="footer bg-black pt-20 pb-16">
      <div className="max-container grid gap-8 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-5 desktop:gap-12">
        <div className="subscribe-container">
          <a href="/" className="logo cursor-pointer">
            <h2 className="text-24px font-bold text-white">Exclusive</h2>
          </a>
          <h5 className="text-20px font-medium text-white my-6">Subscribe</h5>
          <p className="text-16px font-regular text-white">
            Get 10% off your first order
          </p>
          <div className="searchBar w-full overflow-hidden border relative rounded mt-4">
            <input
              className="footer-input text-white bg-black border border-white w-full px-4 py-3 rounded"
              type="text"
              name="search"
              id="search"
              placeholder="Enter your email"
            />
            <figure className="absolute cursor-pointer right-4 top-3 w-6 h-6">
              <img src={sendIcon} alt="send icon" />
            </figure>
          </div>
        </div>
        <div className="support-container">
          <div className="section-heading">
            <h4 className="text-20px text-white">Support</h4>
          </div>
          <div className="section-body flex flex-col gap-4 mt-6">
            <p className="address text-textWhite">Mumbai, India</p>
            <p className="email text-textWhite">support@exclusive.com</p>
            <p className="number text-textWhite">+91 11-1111-1111</p>
          </div>
        </div>
        <div className="account-container">
          <div className="section-heading">
            <h4 className="text-20px text-white">Account</h4>
          </div>
          <div className="section-body flex flex-col gap-4 mt-6">
            <p className="text-textWhite">My Account</p>
            <p className="text-textWhite">Login / Register</p>
            <p className="text-textWhite">Cart</p>
            <p className="text-textWhite">Whishlist</p>
            <p className="text-textWhite">Shop</p>
          </div>
        </div>
        <div className="quickLinks-container">
          <div className="section-heading">
            <h4 className="text-20px text-white">Quick Link</h4>
          </div>
          <div className="section-body flex flex-col gap-4 mt-6">
            <p className="text-textWhite">Privacy Policy</p>
            <p className="text-textWhite">Terms Of Use</p>
            <p className="text-textWhite">FAQ</p>
            <p className="text-textWhite">Contact</p>
          </div>
        </div>
        <div className="download-container">
          <div className="section-heading">
            <h4 className="text-20px text-white">Download App</h4>
          </div>
          <div className="section-body flex flex-col gap-4 mt-6">
            <p className="text-12px font-medium text-textWhite">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-2">
              <figure className="w-20 h-20">
                <img className="w-full" src={qrCode} alt="qrcode" />
              </figure>
              <div className="downloadButtons">
                <figure className="w-28 h-10">
                  <img src={playStore} alt="download from playstore" />
                </figure>
                <figure className="w-28 h-10">
                  <img src={appStore} alt="download from app store" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
