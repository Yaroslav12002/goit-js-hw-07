import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".js-gallery");
const galleryImageMarkup = createGalleryImagesMarkup(galleryItems);
let modalImage = null;

gallery.innerHTML = galleryImageMarkup;
gallery.addEventListener("click", onGallerryImageClick);

function createGalleryImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGallerryImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const activeImageURL = event.target.dataset.source;
  modalImage = basicLightbox.create(`<img src="${activeImageURL}">`, {
    onShow: addKeyboardListenerToGallery,
    onClose: removeKeyboardListenerFromGallery,
  });

  modalImage.show();
}

function onModalKeypressed(event) {
  console.log("key is steel logging: ", event.key);
  if (event.key !== "Escape") {
    return;
  }

  // modalImage.close(removeKeyboardListenerFromGallery);
  modalImage.close();
}

function addKeyboardListenerToGallery() {
  gallery.addEventListener("keydown", onModalKeypressed);
}

function removeKeyboardListenerFromGallery() {
  gallery.removeEventListener("keydown", onModalKeypressed);
}
