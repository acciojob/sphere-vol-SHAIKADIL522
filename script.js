function volume_sphere(e) {
    if (e && e.preventDefault) e.preventDefault(); // stop page reload

    const raw = document.getElementById('radius').value.trim();
    const r = raw === '' ? NaN : Number(raw);

    let result;
    if (isNaN(r) || r < 0) {
        result = 'NaN';
    } else {
        result = ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(4);
    }

    document.getElementById('volume').value = result;
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;