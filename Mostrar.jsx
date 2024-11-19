// Selecciona la composición activa
var comp = app.project.activeItem;

if (comp && comp instanceof CompItem) {
    // Selecciona la capa activa
    var layer = comp.selectedLayers[0];

    if (layer) {
        // Abre la propiedad de opacidad
        var opacity = layer.property("ADBE Transform Group").property("ADBE Opacity");

        // Añade un fotograma clave en el tiempo actual con opacidad 100%
        var currentTime = comp.time;
        opacity.setValueAtTime(currentTime, 0);

        // Calcula el tiempo del siguiente fotograma
        var frameDuration = 1 / comp.frameRate;
        var nextFrameTime = currentTime + frameDuration;

        // Añade un fotograma clave en el siguiente fotograma con opacidad 0%
        opacity.setValueAtTime(nextFrameTime, 100);
    } else {
        alert("Por favor, selecciona una capa.");
    }
} else {
    alert("Por favor, selecciona una composición.");
}