const clock = document.querySelector(".clock");

function getDateDiff(startDate, targetDate) {
  const start = new Date(startDate);
  const target = new Date(targetDate);
  if (start > target) {
    clock.innerText = "Rea~~~rly Happy day was!";
  } else {
    const diffTime = target.getTime() - start.getTime();

    let remainSeconds = parseInt(diffTime / 1000);
    let remainMinutes = parseInt(remainSeconds / 60);
    remainSeconds = remainSeconds % 60;
    let remainHours = parseInt(remainMinutes / 60);
    remainMinutes = remainMinutes % 60;
    let remainDays = parseInt(remainHours / 24);
    remainHours = remainHours % 60;

    remainSeconds = String(remainSeconds).padStart(2, "0");
    remainMinutes = String(remainMinutes).padStart(2, "0");
    remainHours = String(remainHours).padStart(2, "0");
    remainDays = String(remainDays).padStart(2, "0");

    clock.innerText = `${remainDays}d ${remainHours}h ${remainMinutes}m ${remainSeconds}s`;

    return console.log(`${diffTime}`);
  }
}
setInterval(() => getDateDiff(new Date(), "2022-12-25"), 1000);
