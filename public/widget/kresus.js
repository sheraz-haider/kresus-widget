document.addEventListener("DOMContentLoaded", function (e) {
  let button = document.getElementById("btn-get-open-modal");
  if (button) {
    button.addEventListener("click", function (e) {
      const btnOpenModal = document.getElementById("btn-get-open-modal");
      btnOpenModal.addEventListener("click", function () {
        const modalId = this.getAttribute("btn-for-modal");

        if (modalId === "xsjktflfesqerg165") {
          const htmlContent = Modal();
          debugger;
          const appContainer = document.getElementsByTagName("body");
          appContainer[0].innerHTML = htmlContent;
        }
      });
    });
  }
});

function Modal() {
  const assets = {
    close: "/assets/icon/close.svg",
    qrCode: "/assets/icon/qrCode.png",
    appleLogo: "/assets/icon/appleLogo.svg",
    logo: "/assets/icon/logo.webp",
    qr: "/assets/icon/qr.png",
  };

  return `
    <div class="overly-container">
      <div class="modal">
        <div class="modal-inner">
        
        <div class="main-screen">
        <div class="close-icon-container">
          <div class="close-icon">
            <img src="${assets.close}" width="20" height="20" alt="" />
          </div>
        </div>
        <div class="content">
          <div class="logo">
            <img src="${assets.logo}" alt="" />
          </div>
          <div class="title">
            <h1>
              Scan with your kresus wallet
              <br /> to connect
            </h1>
          </div>
          <div class="qr-code">
            <img src="${assets.qrCode}" style="border-radius: 20px;" height="200" alt="" />
          </div>
        </div>
        <div class="footer">
          <div>
            <button class="apple-store-button">
              <img src="${assets.appleLogo}" alt="" />
            </button>
          </div>
          <div class="description">
            <p>
              <b>Don't have Kresus?</b> Get the best-in-class wallet to
              <br /> hold all of your digital collectibles
            </p>
          </div>
          <div>
            <button class="get-wallet-btn" onclick="handleClick()">
              Get my free wallet
            </button>
          </div>
        </div>
      </div>

        </div>
      </div>
    </div>
  `;
}
