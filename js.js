// Made By Kaan Demir //
var element = document.getElementById("btn");
var link = document.getElementById("link")
var stylishQrType;
var img;
var arry = [];
var QrColor = document.getElementById("QrColor")
var colorPicker = document.getElementById("colorpicker")

document.getElementById("a").appendChild(document.getElementById("canvas"));

function update() {
	var select = document.getElementById('types');
	var option = select.options[select.selectedIndex];

    if(option.text == "rounded"){
        stylishQrType = "rounded"
    }
    if(option.text == "classy"){
        stylishQrType = "classy"
    }
    if(option.text == "classy-rounded"){
        stylishQrType = "classy-rounded"
    }
    if(option.text == "extra-rounded"){
        stylishQrType = "extra-rounded"
    }
    if(option.text == "square"){
        stylishQrType = "square"
    }
}

update();

    
colorPicker.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
        QrColor = event.target.value;
}

imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      img = URL.createObjectURL(file)
    }
}

element.onclick = function(event) {
    var nodes = document.getElementsByTagName("svg");

    for (var i = 0, len = nodes.length; i != len; ++i) {
    nodes[0].parentNode.removeChild(nodes[0]);
}
    
    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        type: "png",
        image: img,
        data: link.value,
        dotsOptions: {
            color: QrColor,
            type: stylishQrType
        },
        backgroundOptions: {
            color: "white",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 5
            
        }
    });
    qrCode.append(document.getElementById("canvas"));
    qrCode.download({ name: "qr", extension: "png" });
}
// Made By Kaan Demir //