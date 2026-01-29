import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="" /> */ }<a href="/"><h1>TOMATO</h1></a>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quidem modi reprehenderit sapiente corporis perferendis minus quae, earum omnis id mollitia. Sequi enim unde dolores distinctio praesentium repellendus recusandae est.</p>
          <div className="footer-social-icons">
           <a href="https://www.facebook.com/"> <img src={assets.facebook_icon} alt="" /></a>
           <a href="https://www.bing.com/ck/a?!&&p=5bc2101034a37d2335e2b6e831d3cd51d722d33d060192d81a8414f5e4250723JmltdHM9MTc2MDMxMzYwMA&ptn=3&ver=2&hsh=4&fclid=33958a68-346a-6bf1-0840-991a35376a59&psq=twiter&u=a1aHR0cHM6Ly90d2l0dGVyLmNvbS8"> <img src={assets.twitter_icon} alt="" /></a>
           <a href="https://www.bing.com/ck/a?!&&p=d081834869c77e6ac3646bcc11a64b99ab2ea7994991a8166bdbf640a3dc6deeJmltdHM9MTc2MDMxMzYwMA&ptn=3&ver=2&hsh=4&fclid=33958a68-346a-6bf1-0840-991a35376a59&psq=linkedin&u=a1aHR0cHM6Ly9pbi5saW5rZWRpbi5jb20v"> <img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@Tomato.com</li>
            <li>Developer : Aman Prajapat</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright ">
        Copyright © 2026 Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
