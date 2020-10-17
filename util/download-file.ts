export function downloadUint8ToPdf(data: Uint8Array, filename: string) {
  const mimeType = "application/pdf";
  const blob = new Blob([data], { type: mimeType });
  const url = window.URL.createObjectURL(blob);

  downloadUrl(url, filename);
  setTimeout(() => window.URL.revokeObjectURL(url), 1000);
}

function downloadUrl(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.style.display = "none";
  a.click();
  a.remove();
}
