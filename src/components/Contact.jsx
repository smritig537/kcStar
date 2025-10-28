import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Video,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #111111, #1f1f1f, #000000)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "96px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        {/* Title Section */}
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              color: "#facc15",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            Get in Touch with Us
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              background:
                "linear-gradient(to right, #f97316, #eab308, #f59e0b)",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          ></div>
          <p
            style={{
              color: "#d1d5db",
              fontSize: "1.125rem",
              marginTop: "16px",
              maxWidth: "700px",
              marginInline: "auto",
              lineHeight: "1.6",
            }}
          >
            We’re always ready to assist you. Whether you’re looking for tax
            consultation, financial planning, or legal assistance, reach out to
            us using the details below.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Contact Info Card */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Contact Details</h3>
            <div style={infoItem}>
              <div style={iconCircle}>
                <Mail size={20} color="#000" />
              </div>
              <a
                href="mailto:kctaxwealthadvisor@gmail.com"
                style={linkStyle}
              >
                kctaxwealthadvisor@gmail.com
              </a>
            </div>
            <div style={infoItem}>
              <div style={iconCircle}>
                <Phone size={20} color="#000" />
              </div>
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div style={infoItem}>
              <div style={iconCircle}>
                <MapPin size={20} color="#000" />
              </div>
              <span>Delhi, India – 110001</span>
            </div>
          </div>

          {/* Business Profile Card */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Business Profile</h3>
            <div style={infoItem}>
              <div style={iconCircle}>
                <FileDown size={20} color="#000" />
              </div>
              <a
                href="/visiting-card.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Download Visiting Card (PDF)
              </a>
            </div>
            <div style={infoItem}>
              <div style={iconCircle}>
                <Video size={20} color="#000" />
              </div>
              <a
                href="https://www.youtube.com/@kctaxwealth"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Watch Intro Video
              </a>
            </div>
          </div>

          {/* Social Media Card */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Follow Us</h3>
            <div style={socialList}>
              <a
                href="https://facebook.com/kctaxwealth"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLink}
              >
                <Facebook size={18} /> Facebook
              </a>
              <a
                href="https://instagram.com/kctaxwealth"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLink}
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="https://twitter.com/kctaxwealth"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLink}
              >
                <Twitter size={18} /> Twitter
              </a>
              <a
                href="https://wa.me/+91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLink}
              >
                <MessageCircle size={18} /> WhatsApp Business
              </a>
              <a
                href="https://linkedin.com/company/kctaxwealth"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLink}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://youtube.com/@kctaxwealth"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLink}
              >
                <Youtube size={18} /> YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p
          style={{
            color: "#9ca3af",
            fontSize: "0.875rem",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          © {new Date().getFullYear()} KCTAX Wealth Advisor — Designed for
          Professional Excellence
        </p>
      </div>
    </section>
  );
};

// 🎨 Styles
const cardStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(251, 146, 60, 0.2)",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
  backdropFilter: "blur(8px)",
  color: "#e5e7eb",
};

const cardTitle = {
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#f59e0b",
  marginBottom: "24px",
};

const infoItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "18px",
  color: "#d1d5db",
};

const iconCircle = {
  background: "linear-gradient(to right, #facc15, #f97316)",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const linkStyle = {
  color: "#e5e7eb",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const socialList = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const socialLink = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#facc15",
  textDecoration: "none",
  fontWeight: 500,
  transition: "all 0.3s ease",
};

export default Contact;
