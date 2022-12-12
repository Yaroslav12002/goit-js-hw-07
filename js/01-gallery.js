import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".js-gallery");
// console.dir(gallery);

gallery.addEventListener("click", onGallerryClick);

const galleryItemMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}.jpg"
      alt="${description}}"
    />
  </a>
</div>`;
  })
  .join("");

// console.log(galleryItemMarkup);
gallery.insertAdjacentHTML("afterbegin", galleryItemMarkup);

function onGallerryClick(event) {
  event.preventDefault();
  console.log(event.target);
}
