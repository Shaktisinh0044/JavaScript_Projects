document.querySelector("#downloadimage").addEventListener("click", function () {
  alert("DownLoad Started");

  let zip = new JSZip();

  let imageUrls = [
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707976076940-ff55dc84e3d9?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710011116728-49df6a68df1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1622230329006-0a816660c2a3?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1635011746192-e8325b0f8666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxibGFjayUyMGJtd3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  function addImageToZip(urls, zip) {
    let promises = urls.map((url, index) => {
      return fetch(url)
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          zip.file("image_" + index + ".png", blob);
        });
    });
    return Promise.all(promises);
  }
  addImageToZip(imageUrls, zip).then(() => {
    zip.generateAsync({ type: "blob" }).then((content) => {
      var zipBlob = new Blob([content]);
      var zipUrl = window.URL.createObjectURL(zipBlob);

      var a = document.createElement("a");
      a.href = zipUrl;
      a.download = "BMW_WallPaper.zip";
      document.body.appendChild(a);

      a.click();

      window.URL.revokeObjectURL(zipUrl);
      document.body.removeChild(a);
    });
  });
});
