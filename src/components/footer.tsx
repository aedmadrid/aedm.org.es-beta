export const Footer = () => {
  return (
    <footer className="footer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#f2f2f2",
          textAlign: "center",
          width: "100%",
          marginTop: "8rem",
          zIndex: 1,
          overflow: "auto",
          marginBottom: 0,
        }}
      >
        <div>
          <img src="/aedm.svg" alt="Logo" height={130}></img>
          <p>(aso)cicación de estudiantes de diseño de madrid</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="https://www.instagram.com/aso.esd/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Instagram
          </a>
          <a
            href="https://www.whatsapp.com/channel/0029VayuAlmISTkHVLfCc021"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
