$(document).ready(function(){
  var qrObject;
  var qrLot;
  var image;

  $('#qrScan').change(function() {
    qrObject = $('#qrScan').val();
    qrObject = JSON.parse(qrObject);
    qrLot = qrObject.lot

  //   image = JsBarcode("#barcode", qrLot);
  //   console.log(image);
  //   image;
  //   image = '<body><div id="barcode">' + image + '</div></body>';
  // })

  '<body><div id="barcode">' + JsBarcode("#barcode", qrLot, {
      width:1,
      height:40
    }) + '</div></body>';
  })

  $('.qrPrint').click(function () {

    var w = window.open();
    w.document.write(
    `<html><head><body><div>${$("#eanBarcode").html()}</div></body></html>`
    );
    w.print();
    w.close();
  })

})
