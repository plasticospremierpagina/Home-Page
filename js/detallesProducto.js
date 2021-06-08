function btnDetails(value){
  var titulo = "";
  var srcImg = "";
  var listaProductos = {
    bnegra : ["B NEG 100*160","B NEG 40*60","B NEG 50*70","B NEG 60*90","B NEG 80*120","B NEG 90*120"],
    compostable : ["B NEG 100*160","B NEG 40*60","B NEG 50*70","B NEG 60*90","B NEG 80*120","B NEG 90*120"],
    burbuja : ["Burbuja pz","Burbuja mts"],
    aluminio : ["AL 10 ALUMAR CJ/24","AL 100 ALUMAR CJ/25","AL 400  ALUMAR CJ/6","AL 50 ALUMAR CJ/25","EGA 30  CJ/50","EGA 600 CJ/6","EGA100  CJ/28"],
    vinil: ["VINIL INV 10 KS","VINIL INV 2/3 KGS","VINIL INV 4 KGS","VINIL INV 8 KGS"],
    camiseta :{
      "BOLSA CAMISETA AD POLISEDA COLOR" : ["BTCAD POLI #1","BTCAD POLI #2","BTCAD POLI #3"],
      "BOLSA CAMISETA BD NEGRA" : ["BTCBD NEG #1","BTCBD NEG #2","BTCBD NEG #3","BTCBD NEG #4","BTCBD NEG #5","BTCBD NEG #6"],
      "BOLSA CAMISETA AD ECONOMICA  POLIPAPEL" : ["BTCAD ECO # 0 COLOR","BTCAD ECO  #1 BLANCA","BTCAD ECO  #1 COLOR","BTCAD ECO  #1 NEGRA","BTCAD ECO  #2 BLANCA","BTCAD ECO  #2 COLOR","BTCAD ECO  #2 NEGRA","BTCAD ECO  #3 BLANCA","BTCAD ECO  #3 COLOR","BTCAD ECO  #3 NEGRA","BTCAD ECO  #4 BLANCA","BTCAD ECO  #4 NEGRA","BTCAD ECO  #5 BLANCA","BTCAD ECO  #5 NEGRA","BTCAD ECO  #6 BLANCA","BTCAD ECO  #6 NEGRA"]
    },
    desechable: {
      "CUBIERTOS": ["C. PAST  60/50","C. SOP   40/25","T. PAST  60/50","T. SOP 40/25"],
      "PLATOS Y CHAROLAS":["CH 5   10/50","CH 855  10/50","P 6L 25/20","P 9D  25/20","PH6  20/25","PH8 25/20"],
      "TAPAS":["T DART 10SL  10/100","T DART 32SL  5/100"],
      "VASO DESECHABLE PLASTICO":["V JAG 8   20/50"],
      "VASO DESECHABLE TERMICO":["T DART 16MJ32 LISO 20/25","V DART 10JY10 40/25","V DART 32J32 20/15"],
      "PAPEL, SERVILLETAS" : ["PAPEL CORTADO","SEDITAS  CJ/20","SERV  MARLI  12/450"]
    },
    materia:["ALMENDRA","ARANDANO","CAFE 350 gr","CREMA  CJ/12","GRANOLA ECO","NUEZ ENTERA","PASA","SALSA BOTANERA GALON CJ/6"],
    polvo: ["CP 50*70","CP 60*120","CP 60*90"],
    tubular: ["TUBULAR 2/4 COLOR * KG","TUBULAR 2/4 NATURAL *  KG","TUBULAR 2/4 NEGRO *  KG","TUBULAR 70/140 COL *KG"],
    lazo: {
      "LAZO" : ["LAZO CHICO","LAZO GRANDE"],
      "RAFIA" : ["RAFIA CH COLOR","RAFIA GDE BLANCA"]
    },
    fleje: {
      "CINTA" : ["CINTA NAV CAN  CJ/36","CINTA NAV NAT CJ/36"],
      "FLEJE , GRAPA" : ["FLEJE NEGRO RECICLADO","SELLO METALICO"]
    },
    poly: ["POLYSTRECH GRANDE KGS","POLYSTRECH GRANDE PZA"],
    suelta : {
      "BOLSA NATURAL MINI 6*10 Y 7*10" : ["BNMP 6*10","BNMP 7*10"],
      "BOLSA NATURAL MINI 10*15 A LA 12*24" : ["BNMP 10*15","BNMP 10*20","BNMP 12*18","BNMP 12*20","BNMP 12*22","BNMP 12*24"],
      "BOLSA NATURAL MINI 6*22 A LA 9*13 " : ["BNMP 6*22","BNMP 7*22","BNMP 8*12","BNMP 8*16","BNMP 8*22","BNMP 9*13"],
      "BOLSA NATURAL PREMIR  15*20" : ["BNMP 15*20"],
      "BOLSA NATURAL STANDAR PREMIER 15*25 A LA 90*120" : ["BNSP 15*25","BNSP 15*30","BNSP 18*25","BNSP 20*30","BNSP 25*35","BNSP 30*40","BNSP 35*45","BNSP 40*60","BNSP 50*70","BNSP 60*90","BNSP 60*120","BNSP 70*120","BNSP 80*120","BNSP 90*120"]
    },
    rolloazteca : ["BRAD  AZT 15*25","BRAD  AZT 18*25","BRAD  AZT 20*30","BRAD  AZT 25*35","BRAD  AZT 30*40","BRAD 20*30 MINI PZ ","BRAD 25*35 MINI PZ"],
    rollo : ["BRBD 15*25","BRBD 15*30","BRBD 18*25","BRBD 20*30","BRBD 25*35","BRBD 30*40","BRBD 35*45","BRBD 40*60","BRBD 50*70","BRBD 60*90"],
    guante : ["GUANTE AD","GUANTE BD"],
    hoja : ["HAD 25*35","HAD 30*40","HRAD 25*35"]
  };
  var contenido = "<table class='table table-bordered'><tbody><thead><tr><th>#</th><th>Descripción</th><tr></thead>";
  switch (value) {
    case 'bnegra':
      titulo = 'Bolsa Negra';
      srcImg = "../images/Productos/bolsanegra/bolsanegra.jpg";
      for (var prod in listaProductos.bnegra) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.bnegra[prod]+"</td>";
      }

    break;
    case 'burbuja':
      titulo = "Burbuja";
      srcImg = "../images/Productos/burbuja/burbuja.jpg";
      for (var prod in listaProductos.burbuja) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.burbuja[prod]+"</td>";
      }
      break;
    case "camiseta":
      titulo = 'Camisteta';
      srcImg = "../images/Productos/camiseta/camiseta.png";
      var completeTable = "";
      for (var prodT in listaProductos.camiseta) {
        contenido = "<h5>"+prodT+"</h5><table class='table table-bordered'><tbody><thead><tr><th>#</th><th>Descripción</th><tr></thead>";
        var dep = listaProductos.camiseta[prodT];
        for (var prod in dep) {
          contenido += "<tr>"+
                        "<td>"+(1+ parseInt(prod))+"</td>"+
                        "<td>"+dep[prod]+"</td>";
        }
        completeTable += contenido + "</tbody></table>";
      }
      contenido = completeTable;
      break;
    case "aluminio":
      titulo = "Aluminio y Egapack";
      srcImg = "../images/Productos/aluminio/aluminioegapack.png";
      for (var prod in listaProductos.aluminio) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.aluminio[prod]+"</td>";
      }
      break;
    case "desechable":
        titulo: "Vasos, Tapas, Platos y más";
        srcImg = "../images/Productos/desechables/desechable.png";
        var completeTable = "";
        for (var prodT in listaProductos.desechable) {
          contenido = "<h5>"+prodT+"</h5><table class='table table-bordered'><tbody><thead><tr><th>#</th><th>Descripción</th><tr></thead>";
          var dep = listaProductos.desechable[prodT];
          for (var prod in dep) {
            contenido += "<tr>"+
                          "<td>"+(1+ parseInt(prod))+"</td>"+
                          "<td>"+dep[prod]+"</td>";
          }
          completeTable += contenido + "</tbody></table>";
        }
        contenido = completeTable;
      break;
    case "vinil":
      titulo = "Vinil";
      srcImg = "../images/Productos/vinil/vinil.jpg";
      for (var prod in listaProductos.vinil) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.vinil[prod]+"</td>";
      }
      break;
    case "materia":
      titulo = "Materia Prima";
      srcImg = "../images/Productos/materias/materiasprima.png";
      for (var prod in listaProductos.materia) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.materia[prod]+"</td>";
      }
      break;
    case "polvo":
      titulo = "Cubre Polvo";
      srcImg = "../images/Productos/cubrepolvo/cubrepolvo.jpg";
      for (var prod in listaProductos.polvo) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.polvo[prod]+"</td>";
      }
      break;
    case "tubular":
      titulo = "Rollo tubular";
      srcImg = "../images/Productos/rollotubular/rollotubular.jpg";
      for (var prod in listaProductos.tubular) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.tubular[prod]+"</td>";
      }
      break;
    case "poly":
      titulo = "Polystrech";
      srcImg = "../images/Productos/polystrech/polystrech.jpg";
      for (var prod in listaProductos.poly) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.poly[prod]+"</td>";
      }
      break;
    case "lazo":
      titulo: "Lazo , Rafia";
      srcImg = "../images/Productos/lazos/lazosrafia.png";
      var completeTable = "";
      for (var prodT in listaProductos.lazo) {
        contenido = "<h5>"+prodT+"</h5><table class='table table-bordered'><tbody><thead><tr><th>#</th><th>Descripción</th><tr></thead>";
        var dep = listaProductos.lazo[prodT];
        for (var prod in dep) {
          contenido += "<tr>"+
                        "<td>"+(1+ parseInt(prod))+"</td>"+
                        "<td>"+dep[prod]+"</td>";
        }
        completeTable += contenido + "</tbody></table>";
      }
      contenido = completeTable;
      break;
    case "fleje":
      titulo: "Fleje, Grapa, Cinta";
      srcImg = "../images/Productos/cintasflejes/flejegrapasycintas.png";
      var completeTable = "";
      for (var prodT in listaProductos.fleje) {
        contenido = "<h5>"+prodT+"</h5><table class='table table-bordered'><tbody><thead><tr><th>#</th><th>Descripción</th><tr></thead>";
        var dep = listaProductos.fleje[prodT];
        for (var prod in dep) {
          contenido += "<tr>"+
                        "<td>"+(1+ parseInt(prod))+"</td>"+
                        "<td>"+dep[prod]+"</td>";
        }
        completeTable += contenido + "</tbody></table>";
      }
      contenido = completeTable;
      break;
    case "suelta":
      titulo: "Bolsa Suelta";
      srcImg = "../images/Productos/bolsasuelta/bolsasuelta.png";
      var completeTable = "";
      for (var prodT in listaProductos.suelta) {
        contenido = "<h5>"+prodT+"</h5><table class='table table-bordered'><tbody><thead><tr><th>#</th><th>Descripción</th><tr></thead>";
        var dep = listaProductos.suelta[prodT];
        for (var prod in dep) {
          contenido += "<tr>"+
                        "<td>"+(1+ parseInt(prod))+"</td>"+
                        "<td>"+dep[prod]+"</td>";
        }
        completeTable += contenido + "</tbody></table>";
      }
      contenido = completeTable;
      break;
    case "rolloazteca":
      titulo = "Bolsa en rollo Azteca";
      srcImg = "../images/Productos/rolloazteca/bolsaazteca.jpg";
      for (var prod in listaProductos.rolloazteca) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.rolloazteca[prod]+"</td>";
      }
      break;
    case "rollo":
      titulo = "Bolsa en rollo";
      srcImg = "../images/Productos/bolsarollo/bolsarollo.jpg";
      for (var prod in listaProductos.rollo) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.rollo[prod]+"</td>";
      }
      break;
    case "guante":
      titulo = "Guante de plástico";
      srcImg = "../images/Productos/guantes/guante.png";
      for (var prod in listaProductos.guante) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.guante[prod]+"</td>";
      }
      break;
    case "hoja":
      titulo = "Hoja de plástico";
      srcImg = "../images/Productos/hojasplastico/hojaplastico.jpg";
      for (var prod in listaProductos.hoja) {
        contenido += "<tr>"+
                      "<td>"+(1+ parseInt(prod))+"</td>"+
                      "<td>"+listaProductos.hoja[prod]+"</td>";
      }
      break;
    case "compostable":
    titulo = 'Bolsa Negra biodegradable y compostable';
    srcImg = "../images/Productos/negrabiodegradable/bolsanegrabio.png";
    for (var prod in listaProductos.compostable) {
      contenido += "<tr>"+
                    "<td>"+(1+ parseInt(prod))+"</td>"+
                    "<td>"+listaProductos.compostable[prod]+"</td>";
    }
      break;
    default:

  }
  contenido += "</tbody></table>";
  console.log(contenido);
  $('#detallesProducto').modal();
  $('#modalTitulo').html(titulo);
  $("#modalImg").attr("src", srcImg);
  $('#modalContenido').html(contenido);

}
