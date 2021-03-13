export default function openModal(e: React.MouseEvent) {
  console.log(e.currentTarget.id);
  let modal = document.getElementById(
    `add-member-modal${e.currentTarget.id}`
  ) as HTMLDivElement;
  let overlay = document.getElementById("overlay") as HTMLDivElement;
  modal.style.display = "block";
  overlay.style.display = "block";
}
