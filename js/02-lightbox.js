import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".js-gallery");
const galleryImageMarkup = createGalleryImagesMarkup(galleryItems);

gallery.innerHTML = galleryImageMarkup;

const lightboxGallery = new SimpleLightbox(".js-gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`;
    })
    .join("");
}
