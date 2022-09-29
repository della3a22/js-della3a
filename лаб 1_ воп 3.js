function findVolume(a) {
    let volume = null;
    volume = (5 / 12) * (3 + Math.sqrt(5)) * a * a * a;
    alert("Volume: "+volume.toFixed(3))
    result = "Volume: "+volume.toFixed(3);
    document.getElementById("tag").innerHTML = result;
}