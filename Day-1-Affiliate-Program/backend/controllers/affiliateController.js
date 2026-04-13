/* ========================================
   AffiliateProgram.css
   Colors match FAQ page exactly
======================================== */

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap");

.affiliate-page {
  --purple-dark: #22013a;
  --purple-mid: #2a043b;
  --gold: #8e5203;
  --gold-light: #f9f493;
  --section-grad: linear-gradient(135deg, #2a043b 20%, #868528 100%);
  --card-bg: #ffffff;
  --text-dark: #22013a;
  --text-muted: #666;
  --text-white: #ffffff;
  --text-faint: #f5eefa;
  font-family: "Outfit", sans-serif;
}

/* ========================================
   HERO
======================================== */
.affiliate-hero-section {
  background: var(--section-grad);
  padding: 60px 40px;
  margin: 0 0 60px;
  color: white;
  text-align: center;
}

.affiliate-hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.affiliate-hero-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.affiliate-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border: 1px solid rgba(249, 244, 147, 0.6);
  border-radius: 100px;
  background: rgba(249, 244, 147, 0.15);
  color: var(--gold-light);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.iconhero {
  width: 14px;
  height: 14px;
  color: var(--gold-light);
}

.affiliate-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.2;
  color: white;
  margin: 0;
}

.affiliate-highlight {
  color: var(--gold-light);
}

.affiliate-description {
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--text-faint);
  line-height: 1.6;
}

.affiliate-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.aff-btn-primary {
  padding: 16px 36px;
  border-radius: 40px;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: var(--purple-dark);
  cursor: pointer;
  letter-spacing: 1px;
  transition: 0.3s ease;
  text-transform: uppercase;
}
.aff-btn-primary:hover {
  background: #3a0260;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(34, 1, 58, 0.35);
}

.aff-btn-outline {
  padding: 16px 36px;
  border-radius: 40px;
  border: 2px solid rgba(249, 244, 147, 0.7);
  background: transparent;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s ease;
}
.aff-btn-outline:hover {
  background: rgba(249, 244, 147, 0.15);
}

/* ========================================
   STATS
======================================== */
.affiliate-stats-wrapper {
  background: var(--section-grad);
  padding: 60px 40px 60px;
  margin-bottom: 60px;
}

.affiliate-stats-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 30px 20px;
  border-radius: 15px;
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 20px;
}

.affiliate-stat {
  text-align: center;
  min-width: 140px;
}
.affiliate-stat h2 {
  color: var(--gold-light);
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 8px;
}
.affiliate-stat p {
  color: var(--text-faint);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

/* ========================================
   SHARED
======================================== */
.aff-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.aff-container-faq {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.aff-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--purple-dark);
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(135deg, #22013a 20%, #8e5203 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aff-section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 750px;
  margin: -20px auto 50px;
  text-align: center;
  line-height: 1.6;
}

/* ========================================
   PLANS
======================================== */
.aff-plans-section {
  padding: 80px 20px;
  margin-bottom: 60px;
}

.aff-plans {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.aff-card {
  background: white;
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 32px;
  width: 280px;
  text-align: left;
  color: var(--text-dark);
  position: relative;
  transition: 0.3s;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}
.aff-card:hover {
  transform: translateY(-8px);
  border-color: var(--purple-dark);
  box-shadow: 0 15px 35px rgba(34, 1, 58, 0.15);
}
.aff-card h3 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--purple-dark);
}
.aff-card h2 {
  font-size: 3rem;
  font-weight: 900;
  margin: 8px 0;
  background: linear-gradient(135deg, #22013a 20%, #8e5203 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.aff-card-small {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 24px;
}
.aff-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.aff-card ul li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
}
.aff-iconcheck {
  width: 16px;
  height: 16px;
  color: var(--gold);
  flex-shrink: 0;
}

.aff-featured {
  border-color: var(--purple-dark);
  box-shadow: 0 10px 30px rgba(34, 1, 58, 0.12);
}
.aff-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, var(--purple-dark), var(--gold));
  color: white;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

/* ========================================
   HOW IT WORKS
======================================== */
.aff-how-section {
  background: var(--section-grad);
  padding: 80px 20px;
  margin-bottom: 60px;
}
.aff-how-section .aff-section-title {
  background: none;
  -webkit-text-fill-color: white;
  color: white;
}

.aff-how-cards {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.aff-how-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 16px;
  width: 240px;
  color: white;
  transition: 0.3s;
}
.aff-how-card:hover {
  transform: translateY(-8px);
  border-color: var(--gold-light);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}
.aff-how-icon {
  width: 48px;
  height: 48px;
  background: rgba(249, 244, 147, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--gold-light);
}
.aff-how-icon svg {
  width: 26px;
  height: 26px;
}
.aff-how-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;
}
.aff-how-card p {
  color: var(--text-faint);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

/* JOIN button under How It Works */
.aff-how-join-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

/* ========================================
   ASSETS
======================================== */
.aff-assets-section {
  padding: 80px 20px;
  margin-bottom: 60px;
}

.aff-assets-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.aff-assets-left {
  height: 380px;
  border-radius: 24px;
  border: 1px dashed rgba(34, 1, 58, 0.2);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}
.aff-mock-box {
  background: white;
  border: 1px solid rgba(34, 1, 58, 0.12);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}
.aff-mock-small {
  margin-left: 40px;
}
.aff-mock-header {
  height: 36px;
  width: 120px;
  background: linear-gradient(90deg, var(--purple-dark), var(--gold));
  border-radius: 4px;
  margin-bottom: 12px;
}
.aff-mock-icon {
  width: 50px;
  height: 50px;
  background: #2a6f8f;
  border-radius: 6px;
  margin-bottom: 12px;
}
.aff-mock-line {
  height: 10px;
  width: 100%;
  background: rgba(34, 1, 58, 0.08);
  border-radius: 4px;
}
.aff-mock-line-small {
  height: 10px;
  width: 80%;
  background: rgba(34, 1, 58, 0.08);
  border-radius: 4px;
}

.aff-assets-right {
  display: flex;
  flex-direction: column;
  color: var(--text-dark);
}

.aff-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 18px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  background: rgba(142, 82, 3, 0.08);
  border: 1px solid rgba(142, 82, 3, 0.35);
  margin-bottom: 24px;
  width: fit-content;
}

.aff-assets-right h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 16px;
  color: var(--purple-dark);
}
.aff-assets-right > p {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 28px;
}

.aff-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.aff-feature-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 1px solid rgba(34, 1, 58, 0.1);
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}
.aff-feature-card:hover {
  border-color: var(--purple-dark);
  box-shadow: 0 6px 18px rgba(34, 1, 58, 0.1);
}
.aff-icon-box {
  color: var(--gold);
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}
.aff-feature-card h4 {
  font-size: 13px;
  font-weight: 700;
  color: var(--purple-dark);
  margin: 0 0 3px;
}
.aff-feature-card span {
  font-size: 11px;
  color: var(--text-muted);
}

.aff-cta-btn {
  margin-top: 28px;
  width: fit-content;
  padding: 16px 36px;
  border-radius: 50px;
  border: 2px solid var(--purple-dark);
  background: white;
  color: var(--purple-dark);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.aff-cta-btn:hover {
  background: var(--purple-dark);
  color: white;
  box-shadow: 0 10px 25px rgba(34, 1, 58, 0.2);
}

/* ========================================
   WHY PARTNER
======================================== */
.aff-why-section {
  padding: 80px 20px;
  margin-bottom: 60px;
  background: #f8f9ff;
}

.aff-why-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;
}

.aff-why-card {
  background: white;
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  transition: 0.3s;
}
.aff-why-card:hover {
  transform: translateY(-8px);
  border-color: var(--purple-dark);
  box-shadow: 0 15px 30px rgba(34, 1, 58, 0.12);
}
.aff-why-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: var(--gold);
}
.aff-why-icon svg {
  width: 32px;
  height: 32px;
}
.aff-why-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--purple-dark);
  margin-bottom: 10px;
}
.aff-why-card p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* ========================================
   FAQ
======================================== */
.aff-faq-section {
  padding: 80px 20px;
  margin-bottom: 60px;
}

.aff-faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.aff-faq-card {
  background: white;
  border-radius: 15px;
  padding: 28px;
  border: 2px solid transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.aff-faq-card:hover {
  transform: translateY(-6px);
  border-color: var(--purple-dark);
  box-shadow: 0 10px 25px rgba(34, 1, 58, 0.12);
}
.aff-faq-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--purple-dark);
  margin-bottom: 12px;
}
.aff-faq-card p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.aff-faq-btn-wrapper {
  text-align: center;
  margin-top: 48px;
}
.aff-faq-btn {
  background: transparent;
  padding: 16px 40px;
  border-radius: 50px;
  border: 2px solid var(--purple-dark);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  color: var(--purple-dark);
  text-transform: uppercase;
}
.aff-faq-btn:hover {
  background: var(--purple-dark);
  color: white;
  box-shadow: 0 10px 25px rgba(34, 1, 58, 0.2);
}

/* ========================================
   CTA
======================================== */
.aff-cta-section {
  padding: 0 20px 80px;
}
.aff-cta-outer {
  max-width: 1100px;
  margin: 0 auto;
}

.aff-cta-inner {
  background: var(--section-grad);
  border-radius: 20px;
  padding: 80px 40px;
  text-align: center;
}
.aff-cta-inner h2 {
  font-size: 2.8rem;
  font-weight: 900;
  color: white;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}
.aff-cta-inner p {
  font-size: 1.2rem;
  color: var(--text-faint);
  margin: 0 auto 40px;
  max-width: 600px;
  font-weight: 300;
  line-height: 1.6;
}

.aff-cta-main-btn {
  padding: 18px 40px;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  background: white;
  color: var(--purple-dark);
  cursor: pointer;
  transition: 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.aff-cta-main-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.aff-cta-bottom-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}
.aff-cta-account-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
.aff-cta-login-link {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  color: var(--gold-light);
  text-decoration: underline;
  transition: 0.2s;
}
.aff-cta-login-link:hover {
  color: white;
}

.aff-cta-link {
  display: block;
  margin-top: 16px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  transition: 0.2s;
}
.aff-cta-link:hover {
  color: white;
}

/* ========================================
   MODAL OVERLAY
======================================== */
.aff-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 2, 25, 0.75);
  backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: aff-overlay-in 0.25s ease;
}

@keyframes aff-overlay-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.aff-modal {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
  max-height: none;
  overflow-y: auto;
  padding: 40px 36px 32px;
  position: relative;
  animation: aff-modal-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 30px 80px rgba(34, 1, 58, 0.35);
}

@keyframes aff-modal-in {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Close Button */
.aff-modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #f4f4f8;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--purple-dark);
  transition: 0.2s;
}
.aff-modal-close:hover {
  background: var(--purple-dark);
  color: white;
}

/* Header */
.aff-modal-header {
  text-align: center;
  margin-bottom: 24px;
}

.aff-modal-logo {
  width: 180px;
  height: 60px;
  padding: 8px;
  /* background: white;
  border: 1px solid rgba(34, 1, 58, 0.1);
  border-radius: 14px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
}

.logo-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: contain;
  background: white;
  padding: 3px;
  box-shadow: 0 4px 15px rgba(123, 67, 151, 0.4);
}

.aff-modal-header h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--purple-dark);
  margin: 0 0 6px;
}
.aff-modal-header p {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0;
}

/* Tabs */
.aff-modal-tabs {
  display: flex;
  background: #f4f4f8;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 24px;
  gap: 4px;
}

.aff-tab {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: 0.2s;
}

.aff-tab.active {
  background: white;
  color: var(--purple-dark);
  box-shadow: 0 2px 8px rgba(34, 1, 58, 0.12);
}

/* Form */
.aff-modal-form {
  display: flex;
  flex-direction: column;
  gap: 3.8px;
}

.aff-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.aff-form-group label {
  font-size: 13px;
  font-weight: 600;
  color: var(--purple-dark);
}
.aff-optional {
  font-weight: 400;
  color: var(--text-muted);
}

.aff-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.aff-input-icon {
  position: absolute;
  left: 14px;
  color: #aaa;
  pointer-events: none;
  flex-shrink: 0;
}

.aff-input-wrap input {
  width: 100%;
  padding: 12px 14px 12px 40px;
  border: 1.5px solid #e0e0e8;
  border-radius: 10px;
  font-size: 14px;
  font-family: "Outfit", sans-serif;
  color: #222;
  background: #fafafa;
  outline: none;
  transition: 0.2s;
  box-sizing: border-box;
}
.aff-input-wrap input:focus {
  border-color: var(--purple-dark);
  background: white;
  box-shadow: 0 0 0 3px rgba(34, 1, 58, 0.08);
}

.aff-eye-btn {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  display: flex;
  align-items: center;
}
.aff-eye-btn:hover {
  color: var(--purple-dark);
}

/* Checkbox */
.aff-form-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 4px;
}
.aff-form-check input[type="checkbox"] {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  accent-color: var(--purple-dark);
  margin-top: 2px;
  cursor: pointer;
}
.aff-form-check label {
  font-size: 13px;
  color: #555;
  cursor: pointer;
  line-height: 1.4;
}
.aff-terms-link {
  color: var(--gold);
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
}

/* Submit Button */
.aff-modal-submit-btn {
  margin-top: 4px;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, var(--purple-dark), #4a0e7a);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1px;
  transition: 0.3s;
  text-transform: uppercase;
}
.aff-modal-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(34, 1, 58, 0.3);
}

/* Switch link */
.aff-modal-switch {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
  margin: 4px 0 0;
}
.aff-switch-link {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gold);
  font-weight: 700;
  font-size: 13px;
  text-decoration: underline;
}

/* Success */
.aff-modal-success {
  text-align: center;
  padding: 20px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.aff-success-icon {
  color: #22c55e;
}
.aff-modal-success h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--purple-dark);
  margin: 0;
}
.aff-modal-success p {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}

/* ========================================
   RESPONSIVE
======================================== */
@media (max-width: 992px) {
  .affiliate-title {
    font-size: 2.8rem;
  }
  .aff-section-title {
    font-size: 2rem;
  }
  .aff-assets-container {
    grid-template-columns: 1fr;
  }
  .aff-assets-left {
    height: auto;
  }
}

@media (max-width: 768px) {
  .affiliate-hero-section {
    padding: 30px 15px;
    margin-bottom: 0;
    border-radius: 0;
  }
  .affiliate-hero-header {
    align-items: flex-start;
  }
  .affiliate-title {
    font-size: 2rem;
    text-align: left;
  }
  .affiliate-description {
    font-size: 1rem;
    text-align: left;
  }
  .affiliate-buttons {
    justify-content: flex-start;
  }

  .affiliate-stats-wrapper {
    padding: 40px 15px 40px;
  }
  .affiliate-stats-section {
    flex-direction: column;
    gap: 20px;
  }
  .affiliate-stat h2 {
    font-size: 1.6rem;
  }

  .aff-section-title {
    font-size: 1.8rem;
    text-align: left;
    background: none;
    -webkit-text-fill-color: var(--purple-dark);
  }
  .aff-section-subtitle {
    text-align: left;
  }

  .aff-plans {
    flex-direction: column;
    align-items: center;
  }
  .aff-card {
    width: 100%;
    max-width: 380px;
  }

  .aff-how-cards {
    flex-direction: column;
    align-items: center;
  }
  .aff-how-card {
    width: 100%;
    max-width: 420px;
  }
  .aff-how-section .aff-section-title {
    text-align: left;
    -webkit-text-fill-color: white;
  }

  .aff-assets-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .aff-features {
    grid-template-columns: 1fr;
  }

  .aff-why-cards {
    grid-template-columns: 1fr;
  }
  .aff-faq-grid {
    grid-template-columns: 1fr;
  }

  .aff-cta-inner {
    padding: 50px 20px;
  }
  .aff-cta-inner h2 {
    font-size: 1.8rem;
  }
  .aff-cta-inner p {
    font-size: 1rem;
  }
  .aff-cta-main-btn {
    font-size: 0.85rem;
    padding: 16px 24px;
  }

  .aff-modal {
    padding: 32px 20px 24px;
  }
}

@media (max-width: 480px) {
  .affiliate-title {
    font-size: 1.6rem;
  }
  .aff-btn-primary,
  .aff-btn-outline {
    width: 100%;
    max-width: 280px;
    text-align: center;
    justify-content: center;
  }
  .aff-section-title {
    font-size: 1.5rem;
  }
  .aff-cta-inner h2 {
    font-size: 1.5rem;
  }
  .aff-modal {
    max-height: 95vh;
    padding: 28px 16px 20px;
  }
}
