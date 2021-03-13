export default function closeModal(e: React.MouseEvent) {
  let modal = document.getElementById(
    `add-member-modal${e.currentTarget.id}`
  ) as HTMLDivElement;
  let overlay = document.getElementById("overlay") as HTMLDivElement;
  modal.style.display = "none";
  overlay.style.display = "none";
}
