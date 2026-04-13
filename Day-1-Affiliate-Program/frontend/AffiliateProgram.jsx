import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  LifeBuoy,
  Users,
  TrendingUp,
  Wallet,
  CircleCheck,
  LucideCopy,
  LucideExternalLink,
  X,
  User,
  Mail,
  Phone,
  Globe,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import "./AffiliateProgram.css";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function AffiliateProgram() {
  useScrollToTop();

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("register");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    password: "",
    agree: false,
  });

  const openModal = (mode = "register") => {
    setModalMode(mode);
    setSubmitted(false);
    setForm({
      fullName: "",
      email: "",
      phone: "",
      website: "",
      password: "",
      agree: false,
    });
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Decide API based on mode
      const url =
        modalMode === "register"
          ? "http://localhost:5000/api/affiliate/register"
          : "http://localhost:5000/api/affiliate/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        setSubmitted(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  const scrollToHow = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="affiliate-page">
      {/* ========== HERO ========== */}
      <section className="affiliate-hero-section">
        <div className="affiliate-hero-content">
          <div className="affiliate-hero-header">
            <div className="affiliate-badge">
              <Zap className="iconhero" /> iTechSkill Partner Program
            </div>
            <h1 className="affiliate-title">
              UNLOCK RECURRING{" "}
              <span className="affiliate-highlight">EARNINGS</span>
              <br />
              UP TO 30%
            </h1>
          </div>
          <p className="affiliate-description">
            Become a valued partner and monetize your network by promoting
            iTechSkill's premier online learning platform. Earn recurring
            commissions for every referral, with no limits and no registration
            fees.
          </p>
          <div className="affiliate-buttons">
            <button
              className="aff-btn-primary"
              onClick={() => openModal("register")}
            >
              BECOME A PARTNER ➔
            </button>
            <button className="aff-btn-outline" onClick={scrollToHow}>
              LEARN MORE ↓
            </button>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <div className="affiliate-stats-wrapper">
        <div className="affiliate-stats-section">
          <div className="affiliate-stat">
            <h2>10–30%</h2>
            <p>Recurring Commission</p>
          </div>
          <div className="affiliate-stat">
            <h2>15 Days</h2>
            <p>Cookie Duration</p>
          </div>
          <div className="affiliate-stat">
            <h2>Free &amp; Instant</h2>
            <p>Registration Fee</p>
          </div>
          <div className="affiliate-stat">
            <h2>Monthly</h2>
            <p>Payout via PayPal or Bank Transfer</p>
          </div>
        </div>
      </div>

      {/* ========== PLANS ========== */}
      <section className="aff-plans-section">
        <div className="aff-container">
          <h2 className="aff-section-title">
            Maximize Your Earnings with Our Tiered Structure
          </h2>
          <p className="aff-section-subtitle">
            The more you refer, the more you earn. Our tiered structure rewards
            our most active partners.
          </p>
          <div className="aff-plans">
            <div className="aff-card">
              <h3>Starter</h3>
              <h2>10%</h2>
              <p className="aff-card-small">Certificates &amp; Short Courses</p>
              <ul>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Standard Dashboard
                </li>
                <li>
                  <CircleCheck className="aff-iconcheck" /> 15-day Cookie
                </li>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Monthly Payouts
                </li>
              </ul>
            </div>
            <div className="aff-card aff-featured">
              <div className="aff-badge">MOST POPULAR</div>
              <h3>Pro</h3>
              <h2>20%</h2>
              <p className="aff-card-small">Skill-Based Training Programs</p>
              <ul>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Priority Support
                </li>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Early Feature Access
                </li>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Custom Marketing
                  Assets
                </li>
              </ul>
            </div>
            <div className="aff-card">
              <h3>Elite</h3>
              <h2>30%</h2>
              <p className="aff-card-small">1-Year Diploma Programs</p>
              <ul>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Dedicated Account
                  Manager
                </li>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Custom Payout
                  Schedule
                </li>
                <li>
                  <CircleCheck className="aff-iconcheck" /> Maximum Earnings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="aff-how-section" id="how-it-works">
        <div className="aff-container">
          <h2 className="aff-section-title">How it Works</h2>
          <div className="aff-how-cards">
            <div className="aff-how-card">
              <div className="aff-how-icon">
                <Users />
              </div>
              <h3>1. Join Instantly</h3>
              <p>
                Sign up in under 60 seconds. Quick, beginner-friendly approval.
              </p>
            </div>
            <div className="aff-how-card">
              <div className="aff-how-icon">
                <Zap />
              </div>
              <h3>2. Access Marketing Assets</h3>
              <p>
                Get banners, logos, and swipe files to jumpstart your campaigns.
              </p>
            </div>
            <div className="aff-how-card">
              <div className="aff-how-icon">
                <TrendingUp />
              </div>
              <h3>3. Promote &amp; Track</h3>
              <p>
                Share your referral link and monitor performance in real-time.
              </p>
            </div>
            <div className="aff-how-card">
              <div className="aff-how-icon">
                <Wallet />
              </div>
              <h3>4. Earn Recurring Commissions</h3>
              <p>
                Receive monthly payouts, with higher referrals unlocking higher
                tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MARKETING SUPPORT ========== */}
      <section className="aff-assets-section">
        <div className="aff-assets-container">
          <div className="aff-assets-left">
            <div className="aff-mock-box">
              <div className="aff-mock-header"></div>
              <div className="aff-mock-line"></div>
            </div>
            <div className="aff-mock-box aff-mock-small">
              <div className="aff-mock-icon"></div>
              <div className="aff-mock-line-small"></div>
            </div>
          </div>
          <div className="aff-assets-right">
            <span className="aff-tag">MARKETING SUPPORT</span>
            <h2>Comprehensive Marketing Support</h2>
            <p>We provide everything you need to succeed:</p>
            <div className="aff-features">
              <div className="aff-feature-card">
                <div className="aff-icon-box">
                  <LucideCopy />
                </div>
                <div>
                  <h4>Banners &amp; Ads</h4>
                  <span>Professionally designed display ads</span>
                </div>
              </div>
              <div className="aff-feature-card">
                <div className="aff-icon-box">
                  <LucideExternalLink />
                </div>
                <div>
                  <h4>Logos</h4>
                  <span>High-quality SVG &amp; PNG formats</span>
                </div>
              </div>
              <div className="aff-feature-card">
                <div className="aff-icon-box">
                  <TrendingUp />
                </div>
                <div>
                  <h4>Social Media Kits</h4>
                  <span>Optimized for Instagram &amp; X</span>
                </div>
              </div>
              <div className="aff-feature-card">
                <div className="aff-icon-box">
                  <Users />
                </div>
                <div>
                  <h4>User Guides</h4>
                  <span>Step-by-step promotional instructions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY PARTNER ========== */}
      <section className="aff-why-section">
        <div className="aff-container">
          <h2 className="aff-section-title">Why Partner with iTechSkill?</h2>
          <div className="aff-why-cards">
            <div className="aff-why-card">
              <div className="aff-why-icon">
                <ShieldCheck />
              </div>
              <h3>Trusted Brand</h3>
              <p>
                Join a platform relied upon by thousands of professionals
                globally
              </p>
            </div>
            <div className="aff-why-card">
              <div className="aff-why-icon">
                <Zap />
              </div>
              <h3>High Conversion Rates</h3>
              <p>Optimized course pages to maximize referral earnings</p>
            </div>
            <div className="aff-why-card">
              <div className="aff-why-icon">
                <BarChart3 />
              </div>
              <h3>Real-Time Tracking</h3>
              <p>Monitor clicks, sign-ups, and commissions instantly</p>
            </div>
            <div className="aff-why-card">
              <div className="aff-why-icon">
                <LifeBuoy />
              </div>
              <h3>Dedicated Support</h3>
              <p>
                Expert guidance from your personal affiliate account manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="aff-faq-section">
        <div className="aff-container-faq">
          <h2 className="aff-section-title">Frequently Asked Questions</h2>
          <div className="aff-faq-grid">
            <div className="aff-faq-card">
              <h4>Who can join?</h4>
              <p>
                Anyone with a platform to promote iTechSkill—bloggers,
                YouTubers, social media influencers, educators, or agencies.
              </p>
            </div>
            <div className="aff-faq-card">
              <h4>How is commission calculated?</h4>
              <p>
                Tiered recurring commissions start at 10% and can reach 30%
                based on monthly performance.
              </p>
            </div>
            <div className="aff-faq-card">
              <h4>What is the cookie duration?</h4>
              <p>
                15 days. Referrals are credited if enrollment occurs within this
                window.
              </p>
            </div>
            <div className="aff-faq-card">
              <h4>When and how are payouts processed?</h4>
              <p>
                Monthly payouts issued on the 15th. Minimum payout: $50 via
                PayPal or Bank Transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="aff-cta-section">
        <div className="aff-cta-outer">
          <div className="aff-cta-inner">
            <h2>Start Building Your Passive Income</h2>
            <p>
              Partner with iTechSkill today and transform your influence into
              sustainable recurring income.
            </p>
            <button
              className="aff-cta-main-btn"
              onClick={() => openModal("register")}
            >
              JOIN AFFILIATE PROGRAM ➔
            </button>
            <div className="aff-cta-bottom-row">
              <span className="aff-cta-account-text">
                Already have an account?
              </span>
              <button
                className="aff-cta-login-link"
                onClick={() => openModal("login")}
              >
                Login here
              </button>
            </div>
            <span className="aff-cta-link">
              Read Program Terms &amp; Conditions
            </span>
          </div>
        </div>
      </section>

      <Footer />

      {/* ========== MODAL ========== */}
      {showModal && (
        <div
          className="aff-modal-overlay"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="aff-modal">
            <button
              className="aff-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="aff-modal-header">
              <div className="aff-modal-logo">
                <Link to="/" className="navbar-logo">
                  <img
                    src={logo}
                    alt="ITechSkill Logo"
                    className="logo-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/50/ffffff/13032e?text=IT";
                    }}
                  />
                </Link>
              </div>
              <h2>
                {modalMode === "register"
                  ? "Join Affiliate Program"
                  : "Welcome Back"}
              </h2>
              <p>
                {modalMode === "register"
                  ? "Create your partner account — free & instant"
                  : "Login to your affiliate dashboard"}
              </p>
            </div>

            {/* <div className="aff-modal-tabs">
              <button
                className={`aff-tab ${
                  modalMode === "register" ? "active" : ""
                }`}
                onClick={() => {
                  setModalMode("register");
                  setSubmitted(false);
                }}
              >
                Register
              </button>
              <button
                className={`aff-tab ${modalMode === "login" ? "active" : ""}`}
                onClick={() => {
                  setModalMode("login");
                  setSubmitted(false);
                }}
              >
                Login
              </button>
            </div> */}

            {submitted ? (
              <div className="aff-modal-success">
                <CheckCircle2 size={52} className="aff-success-icon" />
                <h3>
                  {modalMode === "register"
                    ? "Registration Successful!"
                    : "Login Successful!"}
                </h3>
                <p>
                  {modalMode === "register"
                    ? "Welcome! Check your email for confirmation details."
                    : "Redirecting you to your dashboard..."}
                </p>
                <button className="aff-modal-submit-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            ) : (
              <form className="aff-modal-form" onSubmit={handleSubmit}>
                {modalMode === "register" && (
                  <>
                    <div className="aff-form-group">
                      <label>Full Name</label>
                      <div className="aff-input-wrap">
                        <User size={15} className="aff-input-icon" />
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={form.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="aff-form-group">
                      <label>Phone Number</label>
                      <div className="aff-input-wrap">
                        <Phone size={15} className="aff-input-icon" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+92 300 0000000"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="aff-form-group">
                      <label>
                        Website / Social Media URL{" "}
                        <span className="aff-optional">(optional)</span>
                      </label>
                      <div className="aff-input-wrap">
                        <Globe size={15} className="aff-input-icon" />
                        <input
                          type="url"
                          name="website"
                          placeholder="https://yourwebsite.com"
                          value={form.website}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="aff-form-group">
                  <label>Email Address</label>
                  <div className="aff-input-wrap">
                    <Mail size={15} className="aff-input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="aff-form-group">
                  <label>Password</label>
                  <div className="aff-input-wrap">
                    <Lock size={15} className="aff-input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder={
                        modalMode === "register"
                          ? "Create a strong password"
                          : "Enter your password"
                      }
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="aff-eye-btn"
                      onClick={() => setShowPassword((p) => !p)}
                    >
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                {modalMode === "register" && (
                  <div className="aff-form-check">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="agree">
                      I agree to the{" "}
                      <span className="aff-terms-link">
                        Terms &amp; Conditions
                      </span>
                    </label>
                  </div>
                )}

                <button type="submit" className="aff-modal-submit-btn">
                  {modalMode === "register" ? "CREATE ACCOUNT ➔" : "LOGIN ➔"}
                </button>

                <p className="aff-modal-switch">
                  {modalMode === "register" ? (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="aff-switch-link"
                        onClick={() => setModalMode("login")}
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      New partner?{" "}
                      <button
                        type="button"
                        className="aff-switch-link"
                        onClick={() => setModalMode("register")}
                      >
                        Register here
                      </button>
                    </>
                  )}
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AffiliateProgram;
